"""
SpendUZ Pro — main.py v2.0
Full featured Telegram Bot:
- Voice STT, OCR, CBU rates
- Weekly reports, Smart reminder
- Goals + motivation
- Group budget
- AI advisor
- Inline edit/delete buttons
- 4 transaction types
- 4 languages
"""

import asyncio
import io
import logging
import os
import re
import tempfile
from datetime import datetime, timedelta
from pathlib import Path

from aiogram import Bot, Dispatcher, F
from aiogram.filters import Command, CommandStart
from aiogram.types import (
    Message, CallbackQuery,
    InlineKeyboardMarkup, InlineKeyboardButton,
    ReplyKeyboardMarkup, KeyboardButton,
    WebAppInfo, BufferedInputFile,
)

from database import (
    init_db, add_user, get_lang, set_lang, get_all_users,
    add_transaction, get_transactions, get_transaction_by_id,
    update_transaction, delete_transaction,
    get_month_summary, get_category_breakdown, check_today_has_txn,
    add_goal, get_goals, update_goal_progress, update_goal_notified, delete_goal,
    create_group, join_group, get_group_members, get_user_group,
    set_budget, get_budgets,
)

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger(__name__)

# ── Optional deps ──────────────────────────────────────────────────────────────
try:
    import speech_recognition as sr
    from pydub import AudioSegment
    VOICE_OK = True
    log.info("✅ Voice (SpeechRecognition) ready")
except ImportError:
    VOICE_OK = False
    log.warning("❌ Voice not available. pip install speechrecognition pydub")

try:
    from PIL import Image
    import pytesseract
    OCR_OK = True
    log.info("✅ OCR (pytesseract) ready")
except ImportError:
    OCR_OK = False
    log.warning("❌ OCR not available. pip install pytesseract pillow")

try:
    import aiohttp
    HTTP_OK = True
except ImportError:
    HTTP_OK = False

# ── CONFIG ─────────────────────────────────────────────────────────────────────
BOT_TOKEN   = os.getenv("BOT_TOKEN", "8651989569:AAGCEV35IXrR34FmT8eNoPsMY76keqj4sMM")
WEB_APP_URL = os.getenv("WEB_APP_URL", "https://salmondadomatov07-ux.github.io/spend-app/")

bot = Bot(token=BOT_TOKEN)
dp  = Dispatcher()

# State for multi-step flows
user_states: dict[int, dict] = {}

# ── TRANSLATIONS ───────────────────────────────────────────────────────────────
LANGS = ["uz", "ru", "en", "tj"]

T = {
"uz": {
    "choose":       "👋 Assalomu alaykum!\n\nTilni tanlang:",
    "done":         "✅ Til saqlandi!\n\nXarajat yoki daromad yozishingiz mumkin.",
    "menu":         "🏠 Asosiy menyu",
    "btn_add":      "➕ Qo'shish",
    "btn_report":   "📊 Hisobot",
    "btn_history":  "📋 Tarix",
    "btn_goals":    "🎯 Maqsadlar",
    "btn_group":    "👥 Guruh",
    "btn_settings": "⚙️ Sozlamalar",
    "btn_app":      "🚀 App ochish",
    "btn_back":     "⬅️ Orqaga",
    "btn_lang":     "🌍 Tilni o'zgartirish",
    "add_help":     ("➕ Tranzaksiya yozish:\n\n"
                     "💸 Xarajat: 20000 ovqat\n"
                     "💰 Daromad: 3mln oylik\n"
                     "👤 Qarz berdim: qarz 50k Jasur\n"
                     "🤝 Qarz oldim: oldim 100k Ali\n\n"
                     "🎤 Yoki ovoz yuboring!"),
    "income_saved":     "✅ Daromad saqlandi!\n\n💰 {amount} {currency}\n📝 {note}\n🏷 {cat}",
    "expense_saved":    "✅ Xarajat saqlandi!\n\n💸 {amount} {currency}\n📝 {note}\n🏷 {cat}",
    "debt_given_saved": "✅ Qarz yozildi!\n\n💸 {amount} {currency}\n👤 Kim: {note}\n🏷 Qarz berdim",
    "debt_taken_saved": "✅ Qarz yozildi!\n\n💰 {amount} {currency}\n👤 Kimdan: {note}\n🏷 Qarz oldim",
    "edit_btn":     "✏️ Tahrirlash",
    "del_btn":      "🗑 O'chirish",
    "deleted":      "🗑 O'chirildi!",
    "edit_ask":     "✏️ Yangi summani yozing (faqat raqam):",
    "edit_done":    "✅ Yangilandi! Yangi summa: {amount} so'm",
    "history":      "📋 So'nggi {n} ta tranzaksiya:\n\n{rows}",
    "history_empty":"📭 Hali tranzaksiya yo'q.",
    "report":       "📊 {month} hisobot:\n\n⬆️ Daromad:    {income}\n⬇️ Xarajat:    {expense}\n💸 Qarz berdim: {debt_given}\n💰 Qarz oldim:  {debt_taken}\n\n📈 Balans: {balance}",
    "weekly":       "📊 Haftalik hisobot:\n\n⬆️ Daromad: {income}\n⬇️ Xarajat: {expense}\n📈 Balans: {balance}\n🔝 Ko'p xarajat: {top}",
    "reminder":     "⏰ Bugungi xarajatlaringizni yozishni unutmang! 💸",
    "voice_wait":   "🎤 Ovoz tahlil qilinmoqda...",
    "voice_ok":     "🎤 Eshitildi: «{text}»",
    "voice_fail":   "😕 Ovozni tushunmadim. Qaytadan yuboring.",
    "voice_off":    "🎤 Voice hozir ishlamayapti.",
    "ocr_wait":     "📸 Chek o'qilmoqda...",
    "ocr_ok":       "📸 Chekdan topildi: {amount} so'm — saqlandi!",
    "ocr_fail":     "😕 Chekdan ma'lumot topa olmadim.",
    "ocr_off":      "📸 OCR hozir ishlamayapti.",
    "rate_title":   "💱 Bugungi kurs (CBU):\n",
    "rate_fail":    "😕 Kursni yuklab bo'lmadi.",
    "ai_warn":      "🤖 AI maslahat:\n\n⚠️ Bu oy {cat} ga {pct}% sarfladingiz!\nKamaytiring.",
    "motivation":   "🏆 Tabriklar!\n\n🎯 «{name}» maqsadingiz {pct}% bajarildi!\n💪 Davom eting!",
    "goal_done":    "🎉 «{name}» maqsadiga yetdingiz!",
    "goals_empty":  "🎯 Hali maqsad yo'q.\n\n/addgoal <nom> <summa> bilan qo'shing",
    "goal_added":   "🎯 Maqsad qo'shildi!\n\n📌 {name}\n💰 {target} so'm",
    "goal_add_fmt": "Format: /addgoal MacBook 10000000",
    "goal_progress":"• {name}: {cur}/{tgt} ({pct}%) {bar}",
    "goals_list":   "🎯 Maqsadlaringiz:\n\n{items}",
    "group_created":"👥 Guruh yaratildi!\nID: {gid}\nQo'shilish: /join {gid}",
    "group_joined": "👥 Guruhga qo'shildingiz!",
    "group_notfound":"❌ Guruh topilmadi.",
    "group_report": "👥 Guruh hisoboti:\n\n{rows}",
    "no_group":     "❌ Hali guruhga a'zo emassiz.\n/group bilan yarating.",
    "budget_set":   "✅ Byudjet belgilandi: {cat} — {limit} so'm/oy",
    "budget_fmt":   "Format: /setbudget ovqat 500000",
    "unknown":      "🤔 Tushunmadim.\n\nMisol: 20000 ovqat\n🎤 Yoki ovoz yuboring",
    "settings_menu":"⚙️ Sozlamalar",
    "open_app_txt": "🚀 SpendUZ Pro ni ochish",
},
"ru": {
    "choose":       "👋 Привет!\n\nВыберите язык:",
    "done":         "✅ Язык сохранён!\n\nМожете записывать расходы.",
    "menu":         "🏠 Главное меню",
    "btn_add":      "➕ Добавить",
    "btn_report":   "📊 Отчёт",
    "btn_history":  "📋 История",
    "btn_goals":    "🎯 Цели",
    "btn_group":    "👥 Группа",
    "btn_settings": "⚙️ Настройки",
    "btn_app":      "🚀 Открыть App",
    "btn_back":     "⬅️ Назад",
    "btn_lang":     "🌍 Изменить язык",
    "add_help":     "➕ Введите:\n\n💸 Расход: 20000 еда\n💰 Доход: 3млн зарплата\n\n🎤 Или отправьте голосовое!",
    "income_saved":     "✅ Доход сохранён!\n\n💰 {amount} {currency}\n📝 {note}\n🏷 {cat}",
    "expense_saved":    "✅ Расход сохранён!\n\n💸 {amount} {currency}\n📝 {note}\n🏷 {cat}",
    "debt_given_saved": "✅ Долг записан!\n\n💸 {amount} {currency}\n👤 Кому: {note}",
    "debt_taken_saved": "✅ Долг записан!\n\n💰 {amount} {currency}\n👤 От кого: {note}",
    "edit_btn":     "✏️ Изменить",
    "del_btn":      "🗑 Удалить",
    "deleted":      "🗑 Удалено!",
    "edit_ask":     "✏️ Введите новую сумму:",
    "edit_done":    "✅ Обновлено! Новая сумма: {amount}",
    "history":      "📋 Последние {n} транзакций:\n\n{rows}",
    "history_empty":"📭 Транзакций пока нет.",
    "report":       "📊 Отчёт {month}:\n\n⬆️ Доход: {income}\n⬇️ Расход: {expense}\n💸 Дал в долг: {debt_given}\n💰 Взял в долг: {debt_taken}\n\n📈 Баланс: {balance}",
    "weekly":       "📊 Недельный отчёт:\n\n⬆️ Доход: {income}\n⬇️ Расход: {expense}\n📈 Баланс: {balance}\n🔝 Главный расход: {top}",
    "reminder":     "⏰ Не забудьте записать расходы сегодня! 💸",
    "voice_wait":   "🎤 Анализирую голос...",
    "voice_ok":     "🎤 Услышал: «{text}»",
    "voice_fail":   "😕 Не понял голос. Попробуйте снова.",
    "voice_off":    "🎤 Голос недоступен.",
    "ocr_wait":     "📸 Читаю чек...",
    "ocr_ok":       "📸 С чека: {amount} — сохранено!",
    "ocr_fail":     "😕 Не смог прочитать чек.",
    "ocr_off":      "📸 OCR недоступен.",
    "rate_title":   "💱 Курс валют (ЦБУ):\n",
    "rate_fail":    "😕 Не удалось загрузить.",
    "ai_warn":      "🤖 AI совет:\n\n⚠️ {pct}% расходов на {cat}!\nСократите.",
    "motivation":   "🏆 Поздравляем!\n\n🎯 Цель «{name}» выполнена на {pct}%!\n💪 Продолжайте!",
    "goal_done":    "🎉 Цель «{name}» достигнута!",
    "goals_empty":  "🎯 Целей нет.\n\n/addgoal <название> <сумма>",
    "goal_added":   "🎯 Цель добавлена!\n\n📌 {name}\n💰 {target}",
    "goal_add_fmt": "Формат: /addgoal MacBook 10000000",
    "goal_progress":"• {name}: {cur}/{tgt} ({pct}%) {bar}",
    "goals_list":   "🎯 Ваши цели:\n\n{items}",
    "group_created":"👥 Группа создана!\nID: {gid}\nПрисоединиться: /join {gid}",
    "group_joined": "👥 Вы присоединились к группе!",
    "group_notfound":"❌ Группа не найдена.",
    "group_report": "👥 Отчёт группы:\n\n{rows}",
    "no_group":     "❌ Вы не в группе.\n/group чтобы создать.",
    "budget_set":   "✅ Бюджет: {cat} — {limit} в месяц",
    "budget_fmt":   "Формат: /setbudget еда 500000",
    "unknown":      "🤔 Не понял.\n\nПример: 20000 еда",
    "settings_menu":"⚙️ Настройки",
    "open_app_txt": "🚀 Открыть SpendUZ Pro",
},
"en": {
    "choose":       "👋 Hello!\n\nChoose language:",
    "done":         "✅ Language saved!\n\nYou can start logging expenses.",
    "menu":         "🏠 Main menu",
    "btn_add":      "➕ Add",
    "btn_report":   "📊 Report",
    "btn_history":  "📋 History",
    "btn_goals":    "🎯 Goals",
    "btn_group":    "👥 Group",
    "btn_settings": "⚙️ Settings",
    "btn_app":      "🚀 Open App",
    "btn_back":     "⬅️ Back",
    "btn_lang":     "🌍 Change language",
    "add_help":     "➕ Write:\n\n💸 Expense: 20000 food\n💰 Income: 3mln salary\n\n🎤 Or send voice!",
    "income_saved":     "✅ Income saved!\n\n💰 {amount} {currency}\n📝 {note}\n🏷 {cat}",
    "expense_saved":    "✅ Expense saved!\n\n💸 {amount} {currency}\n📝 {note}\n🏷 {cat}",
    "debt_given_saved": "✅ Debt recorded!\n\n💸 {amount} {currency}\n👤 To: {note}",
    "debt_taken_saved": "✅ Debt recorded!\n\n💰 {amount} {currency}\n👤 From: {note}",
    "edit_btn":     "✏️ Edit",
    "del_btn":      "🗑 Delete",
    "deleted":      "🗑 Deleted!",
    "edit_ask":     "✏️ Enter new amount:",
    "edit_done":    "✅ Updated! New amount: {amount}",
    "history":      "📋 Last {n} transactions:\n\n{rows}",
    "history_empty":"📭 No transactions yet.",
    "report":       "📊 Report {month}:\n\n⬆️ Income: {income}\n⬇️ Expense: {expense}\n💸 Lent: {debt_given}\n💰 Borrowed: {debt_taken}\n\n📈 Balance: {balance}",
    "weekly":       "📊 Weekly report:\n\n⬆️ Income: {income}\n⬇️ Expense: {expense}\n📈 Balance: {balance}\n🔝 Top expense: {top}",
    "reminder":     "⏰ Don't forget to log today's expenses! 💸",
    "voice_wait":   "🎤 Analyzing voice...",
    "voice_ok":     "🎤 Heard: «{text}»",
    "voice_fail":   "😕 Couldn't understand. Try again.",
    "voice_off":    "🎤 Voice unavailable.",
    "ocr_wait":     "📸 Reading receipt...",
    "ocr_ok":       "📸 From receipt: {amount} — saved!",
    "ocr_fail":     "😕 Couldn't read receipt.",
    "ocr_off":      "📸 OCR unavailable.",
    "rate_title":   "💱 Exchange rates (CBU):\n",
    "rate_fail":    "😕 Could not load rates.",
    "ai_warn":      "🤖 AI advice:\n\n⚠️ {pct}% of expenses on {cat}!\nConsider reducing.",
    "motivation":   "🏆 Congrats!\n\n🎯 Goal «{name}» is {pct}% done!\n💪 Keep going!",
    "goal_done":    "🎉 Goal «{name}» achieved!",
    "goals_empty":  "🎯 No goals yet.\n\n/addgoal <name> <amount>",
    "goal_added":   "🎯 Goal added!\n\n📌 {name}\n💰 {target}",
    "goal_add_fmt": "Format: /addgoal MacBook 10000000",
    "goal_progress":"• {name}: {cur}/{tgt} ({pct}%) {bar}",
    "goals_list":   "🎯 Your goals:\n\n{items}",
    "group_created":"👥 Group created!\nID: {gid}\nJoin: /join {gid}",
    "group_joined": "👥 Joined the group!",
    "group_notfound":"❌ Group not found.",
    "group_report": "👥 Group report:\n\n{rows}",
    "no_group":     "❌ Not in a group.\n/group to create.",
    "budget_set":   "✅ Budget set: {cat} — {limit}",
    "budget_fmt":   "Format: /setbudget food 500000",
    "unknown":      "🤔 Didn't understand.\n\nExample: 20000 food",
    "settings_menu":"⚙️ Settings",
    "open_app_txt": "🚀 Open SpendUZ Pro",
},
"tj": {
    "choose":       "👋 Салом!\n\nЗабонро интихоб кунед:",
    "done":         "✅ Забон сабт шуд!\n\nХароҷотро менависед.",
    "menu":         "🏠 Менюи асосӣ",
    "btn_add":      "➕ Илова",
    "btn_report":   "📊 Ҳисобот",
    "btn_history":  "📋 Таърих",
    "btn_goals":    "🎯 Мақсадҳо",
    "btn_group":    "👥 Гурӯҳ",
    "btn_settings": "⚙️ Танзимот",
    "btn_app":      "🚀 Кушодани App",
    "btn_back":     "⬅️ Бозгашт",
    "btn_lang":     "🌍 Иваз кардани забон",
    "add_help":     "➕ Нависед:\n\n💸 Хароҷот: 20000 хӯрок\n💰 Даромад: 3млн маош\n\n🎤 Ё овоз фиристед!",
    "income_saved":     "✅ Даромад сабт шуд!\n\n💰 {amount} {currency}\n📝 {note}\n🏷 {cat}",
    "expense_saved":    "✅ Хароҷот сабт шуд!\n\n💸 {amount} {currency}\n📝 {note}\n🏷 {cat}",
    "debt_given_saved": "✅ Қарз сабт шуд!\n\n💸 {amount}\n👤 Ба кӣ: {note}",
    "debt_taken_saved": "✅ Қарз сабт шуд!\n\n💰 {amount}\n👤 Аз кӣ: {note}",
    "edit_btn":     "✏️ Таҳрир",
    "del_btn":      "🗑 Нест кун",
    "deleted":      "🗑 Нест шуд!",
    "edit_ask":     "✏️ Маблағи навро ворид кунед:",
    "edit_done":    "✅ Навсозӣ шуд! Маблағи нав: {amount}",
    "history":      "📋 {n} транзаксияи охир:\n\n{rows}",
    "history_empty":"📭 Ҳоло транзаксия нест.",
    "report":       "📊 Ҳисоботи {month}:\n\n⬆️ Даромад: {income}\n⬇️ Хароҷот: {expense}\n📈 Баланс: {balance}",
    "weekly":       "📊 Ҳисоботи ҳафтаӣ:\n\n⬆️ Даромад: {income}\n⬇️ Хароҷот: {expense}\n📈 Баланс: {balance}",
    "reminder":     "⏰ Хароҷоти имрӯзро нависед! 💸",
    "voice_wait":   "🎤 Овоз таҳлил мешавад...",
    "voice_ok":     "🎤 Шунидам: «{text}»",
    "voice_fail":   "😕 Овозро нафаҳмидам.",
    "voice_off":    "🎤 Овоз дастрас нест.",
    "ocr_wait":     "📸 Чек хонда мешавад...",
    "ocr_ok":       "📸 Аз чек: {amount} — сабт шуд!",
    "ocr_fail":     "😕 Чекро хонда натавонистам.",
    "ocr_off":      "📸 OCR дастрас нест.",
    "rate_title":   "💱 Нархи асъор (БМТ):\n",
    "rate_fail":    "😕 Нархро бор карда натавонистам.",
    "ai_warn":      "🤖 Маслиҳати AI:\n\n⚠️ {pct}% барои {cat}!\nКам кунед.",
    "motivation":   "🏆 Муборак!\n\n🎯 «{name}» {pct}% иҷро шуд!\n💪 Давом кунед!",
    "goal_done":    "🎉 Мақсади «{name}» иҷро шуд!",
    "goals_empty":  "🎯 Мақсад нест.\n\n/addgoal <ном> <маблағ>",
    "goal_added":   "🎯 Мақсад илова шуд!\n\n📌 {name}\n💰 {target}",
    "goal_add_fmt": "Формат: /addgoal MacBook 10000000",
    "goal_progress":"• {name}: {cur}/{tgt} ({pct}%) {bar}",
    "goals_list":   "🎯 Мақсадҳои шумо:\n\n{items}",
    "group_created":"👥 Гурӯҳ сохта шуд!\nID: {gid}\nИзофа шудан: /join {gid}",
    "group_joined": "👥 Ба гурӯҳ ҳамроҳ шудед!",
    "group_notfound":"❌ Гурӯҳ ёфт нашуд.",
    "group_report": "👥 Ҳисоботи гурӯҳ:\n\n{rows}",
    "no_group":     "❌ Дар гурӯҳ нестед.\n/group барои сохтан.",
    "budget_set":   "✅ Буҷет: {cat} — {limit}",
    "budget_fmt":   "Формат: /setbudget хӯрок 500000",
    "unknown":      "🤔 Нафаҳмидам.\n\nМисол: 20000 хӯрок",
    "settings_menu":"⚙️ Танзимот",
    "open_app_txt": "🚀 Кушодани SpendUZ Pro",
},
}

def txt(uid: int, key: str, **kw) -> str:
    lang = get_lang(uid)
    s = T.get(lang, T["uz"]).get(key, T["uz"].get(key, key))
    for k, v in kw.items():
        s = s.replace("{" + k + "}", str(v))
    return s

# ── CATEGORY DETECTION ────────────────────────────────────────────────────────
CAT_KW = {
    "food":      ["ovqat","osh","burger","pizza","lavash","tushlik","nonushta","kafe",
                  "еда","ресторан","food","хӯрок","самса","shaurma","doner"],
    "transport": ["taxi","taksi","yandex","bus","metro","benzin","avto","fuel",
                  "такси","transport","нақлиёт","yo'l"],
    "home":      ["ijara","uy","kvartira","rent","kommunal","аренда","иҷора","mahal"],
    "health":    ["dori","apteka","shifokor","kasalxona","tahlil",
                  "аптека","лекарство","pharmacy","дорӯ"],
    "clothes":   ["kiyim","poyabzal","ko'ylak","shim","одежда","clothes","либос"],
    "cafe":      ["cafe","coffee","kofe","choy","capuchino","latte","кофе","кафе"],
    "tech":      ["telefon","phone","laptop","kompyuter","gadget",
                  "компьютер","technology","iphone","samsung"],
    "edu":       ["kurs","kitob","univer","maktab","образование","education","маълумот"],
    "sport":     ["sport","gym","fitnes","спорт","варзиш","exercise"],
    "travel":    ["sayohat","avia","hotel","mehmonxona","путешествие","travel","сафар"],
    "bills":     ["elektr","suv","internet","wifi","gaz","коммунальные","коммуналӣ"],
    "income":    ["oylik","daromad","maosh","bonus","foyda","salary","income",
                  "зарплата","даромад","freelance","frilanss"],
}

CAT_EMOJI = {
    "food":"🍔","transport":"🚗","home":"🏠","health":"💊","clothes":"👗",
    "cafe":"☕","tech":"💻","edu":"📚","sport":"⚽","travel":"✈️",
    "bills":"💡","income":"💰","other":"📦",
}

CAT_LABEL = {
    "uz":{"food":"Oziq-ovqat","transport":"Transport","home":"Uy-joy","health":"Salomatlik",
          "clothes":"Kiyim","cafe":"Kafe","tech":"Texnologiya","edu":"Ta'lim",
          "sport":"Sport","travel":"Sayohat","bills":"Kommunal","income":"Daromad","other":"Boshqa"},
    "ru":{"food":"Еда","transport":"Транспорт","home":"Жильё","health":"Здоровье",
          "clothes":"Одежда","cafe":"Кафе","tech":"Технологии","edu":"Образование",
          "sport":"Спорт","travel":"Путешествие","bills":"Коммунальные","income":"Доход","other":"Другое"},
    "en":{"food":"Food","transport":"Transport","home":"Housing","health":"Health",
          "clothes":"Clothes","cafe":"Cafe","tech":"Technology","edu":"Education",
          "sport":"Sport","travel":"Travel","bills":"Bills","income":"Income","other":"Other"},
    "tj":{"food":"Хӯрок","transport":"Нақлиёт","home":"Манзил","health":"Саломатӣ",
          "clothes":"Либос","cafe":"Кафе","tech":"Технология","edu":"Маълумот",
          "sport":"Варзиш","travel":"Сафар","bills":"Коммуналӣ","income":"Даромад","other":"Дигар"},
}

INCOME_KW = ["oylik","daromad","maosh","bonus","foyda","зарплата","доход","бонус",
             "salary","income","earned","received","маош","даромад","бонус","фоида",
             "frilanss","freelance","biznes","profit"]

DEBT_GIVEN_KW = ["qarz","берди","лент","gave","дал","қарз","loan out","berib"]
DEBT_TAKEN_KW = ["oldim","взял","borrowed","занял","гирифтам","oldi","qarz oldi"]

def detect_cat(text: str) -> str:
    low = text.lower()
    for cat, kws in CAT_KW.items():
        for kw in kws:
            if kw in low:
                return cat
    return "other"

def detect_type(text: str) -> str:
    low = text.lower()
    for kw in DEBT_GIVEN_KW:
        if kw in low:
            return "debt_given"
    for kw in DEBT_TAKEN_KW:
        if kw in low:
            return "debt_taken"
    for kw in INCOME_KW:
        if kw in low:
            return "income"
    return "expense"

def cat_label(uid: int, cat: str) -> str:
    lang = get_lang(uid)
    return CAT_LABEL.get(lang, CAT_LABEL["uz"]).get(cat, cat)

def fmt(val) -> str:
    try:
        return f"{int(val):,}".replace(",", " ")
    except Exception:
        return str(val)

def parse_amount(text: str):
    text = text.lower().strip()
    num = ""; cur = "UZS"
    for ch in text:
        if ch.isdigit() or ch == ".":
            num += ch
        elif num:
            break
    if not num:
        return None, "UZS"
    try:
        val = float(num)
    except ValueError:
        return None, "UZS"
    if "$" in text or "usd" in text:  cur = "USD"
    elif "€" in text or "eur" in text: cur = "EUR"
    elif "₽" in text or "rub" in text: cur = "RUB"
    if   "mld" in text:          val *= 1_000_000_000
    elif "mln" in text or "млн" in text or "million" in text: val *= 1_000_000
    elif "k" in text or "ming" in text or "тыс" in text:      val *= 1_000
    return int(val), cur

# ── KEYBOARDS ─────────────────────────────────────────────────────────────────
def lang_kb():
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="🇺🇿 O'zbek",  callback_data="lang_uz"),
         InlineKeyboardButton(text="🇷🇺 Русский", callback_data="lang_ru")],
        [InlineKeyboardButton(text="🇬🇧 English", callback_data="lang_en"),
         InlineKeyboardButton(text="🇹🇯 Тоҷикӣ",callback_data="lang_tj")],
    ])

def main_kb(uid: int):
    l = get_lang(uid)
    return ReplyKeyboardMarkup(keyboard=[
        [KeyboardButton(text=T[l]["btn_add"]),     KeyboardButton(text=T[l]["btn_report"])],
        [KeyboardButton(text=T[l]["btn_history"]), KeyboardButton(text=T[l]["btn_goals"])],
        [KeyboardButton(text=T[l]["btn_group"]),   KeyboardButton(text=T[l]["btn_settings"])],
    ], resize_keyboard=True)

def settings_kb(uid: int):
    l = get_lang(uid)
    return ReplyKeyboardMarkup(keyboard=[
        [KeyboardButton(text=T[l]["btn_lang"])],
        [KeyboardButton(text=T[l]["btn_back"])],
    ], resize_keyboard=True)

def app_kb(uid: int):
    return InlineKeyboardMarkup(inline_keyboard=[[
        InlineKeyboardButton(text=txt(uid,"open_app_txt"), web_app=WebAppInfo(url=WEB_APP_URL))
    ]])

def txn_action_kb(uid: int, tx_id: int):
    return InlineKeyboardMarkup(inline_keyboard=[[
        InlineKeyboardButton(text=txt(uid,"edit_btn"), callback_data=f"edit_{tx_id}"),
        InlineKeyboardButton(text=txt(uid,"del_btn"),  callback_data=f"del_{tx_id}"),
    ]])

def progress_bar(pct: int) -> str:
    filled = pct // 10
    return "█" * filled + "░" * (10 - filled)

# ── VOICE ─────────────────────────────────────────────────────────────────────
async def voice_to_text(ogg_path: str) -> str | None:
    if not VOICE_OK:
        return None
    loop = asyncio.get_event_loop()
    def _run():
        try:
            audio = AudioSegment.from_ogg(ogg_path)
            wav   = ogg_path.replace(".ogg", ".wav")
            audio.export(wav, format="wav")
            r = sr.Recognizer()
            with sr.AudioFile(wav) as src:
                data = r.record(src)
            for lc in ["uz-UZ","ru-RU","en-US","tg-TG"]:
                try:
                    return r.recognize_google(data, language=lc)
                except Exception:
                    continue
        except Exception as e:
            log.error(f"voice_to_text: {e}")
        return None
    return await loop.run_in_executor(None, _run)

# ── OCR ───────────────────────────────────────────────────────────────────────
async def ocr_receipt(img_path: str) -> int | None:
    if not OCR_OK:
        return None
    loop = asyncio.get_event_loop()
    def _run():
        try:
            img  = Image.open(img_path)
            text = pytesseract.image_to_string(img, lang="uzb+rus+eng")
            nums = re.findall(r'\b(\d[\d ]{2,})\b', text)
            vals = []
            for n in nums:
                try: vals.append(int(n.replace(" ","")))
                except: pass
            return max(vals) if vals else None
        except Exception as e:
            log.error(f"ocr: {e}")
            return None
    return await loop.run_in_executor(None, _run)

# ── CBU RATES ─────────────────────────────────────────────────────────────────
async def cbu_rates() -> dict | None:
    if not HTTP_OK:
        return None
    try:
        import aiohttp
        async with aiohttp.ClientSession() as s:
            async with s.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/",
                             timeout=aiohttp.ClientTimeout(total=10)) as r:
                data = await r.json(content_type=None)
                return {x["Ccy"]: float(x["Rate"]) for x in data}
    except Exception as e:
        log.error(f"cbu: {e}")
        return None

# ── AI ADVISOR ────────────────────────────────────────────────────────────────
async def ai_check(uid: int):
    breakdown = get_category_breakdown(uid)
    total = sum(breakdown.values())
    if total <= 0:
        return
    for cat, val in sorted(breakdown.items(), key=lambda x: -x[1]):
        pct = round((val / total) * 100)
        if pct >= 40:
            await bot.send_message(uid, txt(uid,"ai_warn", cat=cat_label(uid,cat), pct=pct))
            break

# ── MOTIVATION CHECK ──────────────────────────────────────────────────────────
async def motivation_check(uid: int):
    goals = get_goals(uid)
    for g in goals:
        tgt = g["target"]
        cur = g["current"]
        if tgt <= 0:
            continue
        pct = round((cur / tgt) * 100)
        last = g["last_notified_pct"]
        for milestone in [50, 80, 100]:
            if pct >= milestone > last:
                update_goal_notified(g["id"], milestone)
                if pct >= 100:
                    await bot.send_message(uid, txt(uid,"goal_done", name=g["name"]))
                else:
                    await bot.send_message(uid, txt(uid,"motivation", name=g["name"], pct=pct))
                break

# ── SAVE TXN HELPER ───────────────────────────────────────────────────────────
async def save_and_reply(message: Message, uid: int, tx_type: str,
                         amount: int, currency: str, note: str):
    cat   = detect_cat(note) if tx_type not in ("debt_given","debt_taken") else "other"
    tx_id = add_transaction(uid, tx_type, amount, note, currency, cat)
    cl    = cat_label(uid, cat)

    key_map = {
        "income":     "income_saved",
        "expense":    "expense_saved",
        "debt_given": "debt_given_saved",
        "debt_taken": "debt_taken_saved",
    }
    reply_text = txt(uid, key_map.get(tx_type, "expense_saved"),
                     amount=fmt(amount), currency=currency,
                     note=note or "-", cat=cl)

    await message.answer(reply_text, reply_markup=txn_action_kb(uid, tx_id))
    await ai_check(uid)
    await motivation_check(uid)

# ── HANDLERS ──────────────────────────────────────────────────────────────────
@dp.message(CommandStart())
async def cmd_start(msg: Message):
    add_user(msg.from_user.id)
    await msg.answer(T["uz"]["choose"], reply_markup=lang_kb())

@dp.callback_query(F.data.startswith("lang_"))
async def cb_lang(cb: CallbackQuery):
    uid  = cb.from_user.id
    lang = cb.data.split("_")[1]
    add_user(uid, lang)
    set_lang(uid, lang)
    await cb.message.edit_text(txt(uid, "done"))
    await cb.message.answer(txt(uid,"menu"), reply_markup=main_kb(uid))
    await cb.message.answer("📱", reply_markup=app_kb(uid))
    await cb.answer()

# Edit callback
@dp.callback_query(F.data.startswith("edit_"))
async def cb_edit(cb: CallbackQuery):
    uid   = cb.from_user.id
    tx_id = int(cb.data.split("_")[1])
    user_states[uid] = {"action": "edit", "tx_id": tx_id}
    await cb.message.answer(txt(uid,"edit_ask"))
    await cb.answer()

# Delete callback
@dp.callback_query(F.data.startswith("del_"))
async def cb_del(cb: CallbackQuery):
    uid   = cb.from_user.id
    tx_id = int(cb.data.split("_")[1])
    ok    = delete_transaction(tx_id, uid)
    if ok:
        await cb.message.edit_text(txt(uid,"deleted"))
    await cb.answer()

@dp.message(Command("report"))
async def cmd_report(msg: Message):
    uid = msg.from_user.id
    s   = get_month_summary(uid)
    month = datetime.now().strftime("%Y-%m")
    await msg.answer(txt(uid,"report",
        month=month,
        income=fmt(s["income"])+" so'm",
        expense=fmt(s["expense"])+" so'm",
        debt_given=fmt(s["debt_given"])+" so'm",
        debt_taken=fmt(s["debt_taken"])+" so'm",
        balance=fmt(s["balance"])+" so'm"))

@dp.message(Command("history"))
async def cmd_history(msg: Message):
    uid  = msg.from_user.id
    txns = get_transactions(uid, limit=10)
    if not txns:
        await msg.answer(txt(uid,"history_empty"))
        return
    rows = []
    for t in txns:
        em   = CAT_EMOJI.get(t["category"],"📦")
        sign = "+" if t["tx_type"] in ("income","debt_taken") else "-"
        rows.append(f"{em} {sign}{fmt(t['amount'])} {t['currency']} — {t.get('note','-')} ({t['date']})")
    await msg.answer(txt(uid,"history", n=len(rows), rows="\n".join(rows)))

@dp.message(Command("rate"))
async def cmd_rate(msg: Message):
    uid   = msg.from_user.id
    rates = await cbu_rates()
    if not rates:
        await msg.answer(txt(uid,"rate_fail"))
        return
    lines = [txt(uid,"rate_title")]
    for code in ["USD","EUR","RUB","GBP","CNY","KZT","TRY"]:
        if code in rates:
            lines.append(f"• {code}: {rates[code]:,.2f} so'm")
    await msg.answer("\n".join(lines))

@dp.message(Command("goals"))
async def cmd_goals(msg: Message):
    uid   = msg.from_user.id
    goals = get_goals(uid)
    if not goals:
        await msg.answer(txt(uid,"goals_empty"))
        return
    items = []
    for g in goals:
        pct = round((g["current"]/g["target"])*100) if g["target"] > 0 else 0
        bar = progress_bar(pct)
        items.append(txt(uid,"goal_progress",
            name=g["name"], cur=fmt(g["current"]),
            tgt=fmt(g["target"]), pct=pct, bar=bar))
    await msg.answer(txt(uid,"goals_list", items="\n".join(items)))

@dp.message(Command("addgoal"))
async def cmd_addgoal(msg: Message):
    uid  = msg.from_user.id
    args = msg.text.split(maxsplit=2)
    if len(args) < 3:
        await msg.answer(txt(uid,"goal_add_fmt"))
        return
    name   = args[1]
    amount, _ = parse_amount(args[2])
    if not amount:
        await msg.answer(txt(uid,"goal_add_fmt"))
        return
    add_goal(uid, name, amount)
    await msg.answer(txt(uid,"goal_added", name=name, target=fmt(amount)+" so'm"))

@dp.message(Command("group"))
async def cmd_group(msg: Message):
    uid = msg.from_user.id
    gid = create_group(uid)
    await msg.answer(txt(uid,"group_created", gid=gid))

@dp.message(Command("join"))
async def cmd_join(msg: Message):
    uid  = msg.from_user.id
    args = msg.text.split()
    if len(args) < 2:
        await msg.answer("Format: /join <group_id>")
        return
    ok = join_group(args[1], uid)
    await msg.answer(txt(uid, "group_joined" if ok else "group_notfound"))

@dp.message(Command("groupreport"))
async def cmd_groupreport(msg: Message):
    uid = msg.from_user.id
    gid = get_user_group(uid)
    if not gid:
        await msg.answer(txt(uid,"no_group"))
        return
    members = get_group_members(gid)
    rows = []
    for mid in members:
        s = get_month_summary(mid)
        rows.append(f"👤 {mid}:\n  💸 {fmt(s['expense'])} / 💰 {fmt(s['income'])}")
    await msg.answer(txt(uid,"group_report", rows="\n\n".join(rows)))

@dp.message(Command("setbudget"))
async def cmd_setbudget(msg: Message):
    uid  = msg.from_user.id
    args = msg.text.split(maxsplit=2)
    if len(args) < 3:
        await msg.answer(txt(uid,"budget_fmt"))
        return
    cat    = args[1]
    amount, _ = parse_amount(args[2])
    if not amount:
        await msg.answer(txt(uid,"budget_fmt"))
        return
    set_budget(uid, cat, amount)
    await msg.answer(txt(uid,"budget_set", cat=cat, limit=fmt(amount)+" so'm"))

# ── VOICE HANDLER ─────────────────────────────────────────────────────────────
@dp.message(F.voice)
async def voice_handler(msg: Message):
    uid = msg.from_user.id
    add_user(uid)
    if not VOICE_OK:
        await msg.answer(txt(uid,"voice_off"))
        return
    wait = await msg.answer(txt(uid,"voice_wait"))
    try:
        f = await bot.get_file(msg.voice.file_id)
        ogg = str(Path(tempfile.gettempdir()) / f"v_{uid}.ogg")
        await bot.download_file(f.file_path, destination=ogg)
        text = await voice_to_text(ogg)
        for p in [ogg, ogg.replace(".ogg",".wav")]:
            try: Path(p).unlink(missing_ok=True)
            except: pass
        if not text:
            await wait.delete()
            await msg.answer(txt(uid,"voice_fail"))
            return
        await wait.edit_text(txt(uid,"voice_ok", text=text))
        # Parse
        parts  = text.strip().split(maxsplit=1)
        amount, currency = parse_amount(parts[0])
        if not amount:
            nums = re.findall(r'\d+', text)
            if nums:
                amount = int(nums[0])
                if any(x in text.lower() for x in ["ming","k","тыс"]):
                    amount *= 1000
                elif any(x in text.lower() for x in ["mln","млн"]):
                    amount *= 1_000_000
        if not amount:
            await msg.answer(txt(uid,"voice_fail"))
            return
        note    = parts[1] if len(parts) > 1 else text
        tx_type = detect_type(text)
        await save_and_reply(msg, uid, tx_type, amount, currency, note)
    except Exception as e:
        log.error(f"voice handler: {e}")
        await wait.delete()
        await msg.answer(txt(uid,"voice_fail"))

# ── PHOTO/RECEIPT HANDLER ─────────────────────────────────────────────────────
@dp.message(F.photo)
async def photo_handler(msg: Message):
    uid = msg.from_user.id
    add_user(uid)
    if not OCR_OK:
        await msg.answer(txt(uid,"ocr_off"))
        return
    wait = await msg.answer(txt(uid,"ocr_wait"))
    try:
        photo = msg.photo[-1]
        f     = await bot.get_file(photo.file_id)
        img   = str(Path(tempfile.gettempdir()) / f"r_{uid}.jpg")
        await bot.download_file(f.file_path, destination=img)
        amount = await ocr_receipt(img)
        try: Path(img).unlink(missing_ok=True)
        except: pass
        if not amount:
            await wait.delete()
            await msg.answer(txt(uid,"ocr_fail"))
            return
        await wait.delete()
        await msg.answer(txt(uid,"ocr_ok", amount=fmt(amount)))
        tx_id = add_transaction(uid, "expense", amount, "Chek/receipt", "UZS", "other")
        await msg.answer("✅", reply_markup=txn_action_kb(uid, tx_id))
        await ai_check(uid)
    except Exception as e:
        log.error(f"photo handler: {e}")
        await wait.delete()
        await msg.answer(txt(uid,"ocr_fail"))

# ── TEXT HANDLER ──────────────────────────────────────────────────────────────
@dp.message(F.text)
async def text_handler(msg: Message):
    uid  = msg.from_user.id
    lang = get_lang(uid)
    text = msg.text.strip()
    add_user(uid)

    # Handle edit state
    if uid in user_states and user_states[uid].get("action") == "edit":
        tx_id  = user_states[uid]["tx_id"]
        amount, _ = parse_amount(text)
        if amount:
            tx = get_transaction_by_id(tx_id, uid)
            if tx:
                update_transaction(tx_id, uid, amount, tx["note"], tx["category"], tx["tx_type"])
                await msg.answer(txt(uid,"edit_done", amount=fmt(amount)+" so'm"))
            del user_states[uid]
            return

    # All button texts for all langs
    all_texts = {k: [T[l][k] for l in LANGS] for k in
                 ["btn_add","btn_report","btn_history","btn_goals",
                  "btn_group","btn_settings","btn_back","btn_lang"]}

    if text in all_texts["btn_add"]:
        await msg.answer(txt(uid,"add_help"))
        return
    if text in all_texts["btn_report"]:
        await cmd_report(msg)
        return
    if text in all_texts["btn_history"]:
        await cmd_history(msg)
        return
    if text in all_texts["btn_goals"]:
        await cmd_goals(msg)
        return
    if text in all_texts["btn_group"]:
        await cmd_group(msg)
        return
    if text in all_texts["btn_settings"]:
        await msg.answer(txt(uid,"settings_menu"), reply_markup=settings_kb(uid))
        return
    if text in all_texts["btn_back"]:
        await msg.answer(txt(uid,"menu"), reply_markup=main_kb(uid))
        return
    if text in all_texts["btn_lang"]:
        await msg.answer(T["uz"]["choose"], reply_markup=lang_kb())
        return

    # App button
    app_btns = [T[l]["btn_app"] for l in LANGS]
    if text in app_btns:
        await msg.answer("📱", reply_markup=app_kb(uid))
        return

    if text.startswith("/"):
        return

    # Parse transaction
    parts  = text.split(maxsplit=1)
    amount, currency = parse_amount(parts[0])
    if not amount:
        await msg.answer(txt(uid,"unknown"))
        return

    note    = parts[1].strip() if len(parts) > 1 else ""
    tx_type = detect_type(text)
    await save_and_reply(msg, uid, tx_type, amount, currency, note)

# ── SCHEDULED TASKS ───────────────────────────────────────────────────────────
async def smart_reminder():
    """Har kuni 21:00 — faqat yozmagan userlarga"""
    while True:
        now = datetime.now()
        if now.hour == 21 and now.minute == 0:
            for uid in get_all_users():
                if not check_today_has_txn(uid):
                    try:
                        await bot.send_message(uid, txt(uid,"reminder"))
                    except Exception:
                        pass
            await asyncio.sleep(61)
        await asyncio.sleep(20)

async def weekly_report():
    """Har dushanba 09:00"""
    while True:
        now = datetime.now()
        if now.weekday() == 0 and now.hour == 9 and now.minute == 0:
            since = (now - timedelta(days=7)).strftime("%Y-%m-%d")
            for uid in get_all_users():
                s = get_month_summary(uid)
                if s["income"] == 0 and s["expense"] == 0:
                    continue
                bd   = get_category_breakdown(uid)
                top  = max(bd, key=bd.get) if bd else "-"
                try:
                    await bot.send_message(uid, txt(uid,"weekly",
                        income=fmt(s["income"])+" so'm",
                        expense=fmt(s["expense"])+" so'm",
                        balance=fmt(s["balance"])+" so'm",
                        top=cat_label(uid,top)))
                except Exception:
                    pass
            await asyncio.sleep(61)
        await asyncio.sleep(20)

async def daily_rates():
    """Har kuni 09:00 — CBU kursi"""
    while True:
        now = datetime.now()
        if now.hour == 9 and now.minute == 0:
            rates = await cbu_rates()
            if rates:
                lines = ["💱 Bugungi kurs (CBU):"]
                for code in ["USD","EUR","RUB"]:
                    if code in rates:
                        lines.append(f"• {code}: {rates[code]:,.2f} so'm")
                msg_text = "\n".join(lines)
                for uid in get_all_users():
                    try:
                        await bot.send_message(uid, msg_text)
                    except Exception:
                        pass
            await asyncio.sleep(61)
        await asyncio.sleep(20)

# ── MAIN ──────────────────────────────────────────────────────────────────────
async def main():
    init_db()
    log.info("✅ Database initialized")
    log.info(f"🎤 Voice: {'ON' if VOICE_OK else 'OFF'}")
    log.info(f"📸 OCR:   {'ON' if OCR_OK else 'OFF'}")
    log.info(f"🌐 HTTP:  {'ON' if HTTP_OK else 'OFF'}")
    log.info("🚀 Bot started!")

    asyncio.create_task(smart_reminder())
    asyncio.create_task(weekly_report())
    asyncio.create_task(daily_rates())

    await dp.start_polling(bot, skip_updates=True)

if __name__ == "__main__":
    asyncio.run(main())