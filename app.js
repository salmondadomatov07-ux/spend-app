"use strict";
// ─── TRANSLATIONS ──────────────────────────────────────────────────────────────
const LANG = {
uz:{
  balance:"Umumiy balans", income:"Daromad", expense:"Xarajat",
  debt_given:"Qarz berdim", debt_taken:"Qarz oldim",
  monthly:"Oylik hisobot", chart:"Grafik", recent:"Songi tranzaksiyalar",
  see_all:"Barchasi", no_txn:"Hali tranzaksiya yoq",
  all_txn:"Barcha tranzaksiyalar", goals:"Maqsadlar", no_goal:"Hali maqsad yoq",
  add:"Qoshish", save:"Saqlash", cancel:"Bekor qilish", delete:"Ochirish",
  amount:"Miqdor", cat:"Kategoriya", date:"Sana", note:"Izoh", tags:"Teglar",
  repeat:"Takroriy", no_repeat:"Yoq", daily:"Har kun", weekly:"Har hafta", monthly_r:"Har oy",
  to_who:"Kimga", from_who:"Kimdan",
  note_exp:"Masalan: oylik oldim", note_inc:"Masalan: oylik oldim",
  note_dg:"Masalan: dostimga", note_dt:"Masalan: dostim",
  person_dg:"Masalan: Ali", person_dt:"Masalan: Doniyor",
  receipt:"Chek", share_txt:"Ulashish",
  profile:"Profil", name:"Ism", save_profile:"Profilni saqlash",
  language:"Til", interface:"Interfeys", theme:"Mavzu",
  currency:"Valyuta", notif:"Bildirishnomalar", push:"Push bildirishnoma",
  notif_off:"Ochirilgan", notif_on:"Yoqilgan",
  notif_time:"Eslatma vaqti",
  security:"Xavfsizlik", pin:"PIN kod",
  pin_not_set:"Ornatilmagan", pin_set:"Ornatilgan",
  set_pin:"Ornatish", change_pin:"Ozgartirish", remove_pin:"PINni ochirish",
  custom_cats:"Maxsus kategoriyalar", new_cat:"Yangi kategoriya",
  family:"Oila byudjeti", add_member:"Azo qoshish",
  data:"Malumotlar", export:"Eksport (JSON)", import_data:"Import",
  reset:"Barcha malumotlarni ochirish", about:"Ilova haqida",
  avatar:"Avatar tanlang", confirm:"Tasdiqlang", delete_q:"Ochirishni istaysizmi?",
  nav_home:"Bosh", nav_budget:"Byudjet", nav_goals:"Maqsad", nav_settings:"Sozlamalar",
  ai_title:"Moliya Maslahati",
  ai_welcome:"Salom! Men SpendUZ AI yordamchisiman. Moliyangiz haqida savol bering!",
  ai_q1:"Xarajat tahlili", ai_q2:"Tejash maslahati", ai_q3:"Byudjet rejasi", ai_q4:"Asosiy xarajat",
  pin_enter:"PIN kodni kiriting", pin_wrong:"Notogri PIN!",
  pin_forgot:"PINni unutdim?", pin_attempts:"ta urinish qoldi", pin_wait:"daqiqa kuting",
  pin_setup:"PIN ornatish", pin_new:"Yangi PIN kiriting", pin_confirm:"PINni qayta kiriting",
  pin_mismatch:"PIN mos kelmadi!", pin_saved:"PIN ornatildi!", pin_removed:"PIN ochirildi",
  pin_reset_label:"Bot orqali yuborilgan kodni kiriting",
  pin_reset_sent:"@Spend_uz_bot ga kod yuborildi. 10 daqiqa ichida kiriting.",
  pin_reset_wrong:"Kod notogri!", pin_reset_ok:"PIN muvaffaqiyatli tiklandi!",
  add_goal:"Maqsad qoshish", goal_done:"Maqsadga yetdingiz! Tabriklaymiz!",
  saved:"Saqlandi!", updated:"Yangilandi!", deleted:"Ochirildi",
  login_sub:"Moliyangizni professional boshqaring",
  login_start:"Boshlash", fill_all:"Toliq toldiring!",
  enter_name:"Ismingizni kiriting!", select_cat:"Kategoriyani tanlang!",
  enter_amount:"Miqdorni kiriting!", enter_date:"Sanani kiriting!",
  ai_no_data:"Hali tranzaksiya yoq.",
  no_custom_cats:"Maxsus kategoriyalar yoq", no_family:"Hali azo yoq",
  export_done:"Eksport qilindi!", import_done:"Import muvaffaqiyatli!",
  wrong_file:"Notogri fayl!", reset_confirm:"Bu amalni qaytarib bolmaydi!",
  notif_granted:"Bildirishnomalar yoqildi!", notif_denied:"Ruxsat berilmadi",
  profile_saved:"Profil saqlandi!", avatar_changed:"Avatar ozgartirildi!",
  currency_changed:"Valyuta ozgartirildi!", copied:"Nusxa olindi!",
  cat_used:"Bu kategoriya ishlatilmoqda!", cat_default:"Standart kategoriyani ochirib bolmaydi!",
  cat_added:"Kategoriya qoshildi!", member_added:"Azo qoshildi!",
  enter_cat_name:"Kategoriya nomini kiriting!", enter_member_name:"Ismni kiriting!",
  budget_title:"Byudjet", no_budget:"Hali byudjet yoq",
  budget_limit:"Limit", budget_spent:"Sarflangan", budget_left:"Qolgan",
  pdf_ready:"PDF tayyorlanmoqda...", pdf_blocked:"Popup bloklangan! Ruxsat bering.",
  voice_fail:"Ovozni tushunmadim!", voice_no_amount:"Summa aniqlanmadi!",
  voice_detected:"AI aniqladi:", mic_no:"Brauzer mikrofonni qollamaydi!",
},
ru:{
  balance:"Общий баланс", income:"Доход", expense:"Расход",
  debt_given:"Дал в долг", debt_taken:"Взял в долг",
  monthly:"Месячный отчёт", chart:"График", recent:"Последние транзакции",
  see_all:"Все", no_txn:"Транзакций пока нет",
  all_txn:"Все транзакции", goals:"Цели", no_goal:"Целей пока нет",
  add:"Добавить", save:"Сохранить", cancel:"Отмена", delete:"Удалить",
  amount:"Сумма", cat:"Категория", date:"Дата", note:"Примечание", tags:"Теги",
  repeat:"Повтор", no_repeat:"Нет", daily:"Ежедневно", weekly:"Еженедельно", monthly_r:"Ежемесячно",
  to_who:"Кому", from_who:"От кого",
  note_exp:"Например: получил зарплату", note_inc:"Например: получил зарплату",
  note_dg:"Например: другу", note_dt:"Например: от друга",
  person_dg:"Например: Али", person_dt:"Например: Дониёр",
  receipt:"Чек", share_txt:"Поделиться",
  profile:"Профиль", name:"Имя", save_profile:"Сохранить профиль",
  language:"Язык", interface:"Интерфейс", theme:"Тема",
  currency:"Валюта", notif:"Уведомления", push:"Push-уведомления",
  notif_off:"Выключено", notif_on:"Включено", notif_time:"Время напоминания",
  security:"Безопасность", pin:"PIN-код",
  pin_not_set:"Не установлен", pin_set:"Установлен",
  set_pin:"Установить", change_pin:"Изменить", remove_pin:"Удалить PIN",
  custom_cats:"Пользовательские категории", new_cat:"Новая категория",
  family:"Семейный бюджет", add_member:"Добавить участника",
  data:"Данные", export:"Экспорт (JSON)", import_data:"Импорт",
  reset:"Удалить все данные", about:"О приложении",
  avatar:"Выбрать аватар", confirm:"Подтвердите", delete_q:"Вы уверены?",
  nav_home:"Главная", nav_budget:"Бюджет", nav_goals:"Цели", nav_settings:"Настройки",
  ai_title:"Финансовый советник",
  ai_welcome:"Привет! Я AI-помощник SpendUZ. Задайте вопрос о финансах!",
  ai_q1:"Анализ расходов", ai_q2:"Советы по экономии", ai_q3:"Бюджетный план", ai_q4:"Главный расход",
  pin_enter:"Введите PIN-код", pin_wrong:"Неверный PIN!",
  pin_forgot:"Забыл PIN", pin_attempts:"попыток осталось", pin_wait:"минут подождите",
  pin_setup:"Установить PIN", pin_new:"Введите новый PIN", pin_confirm:"Повторите PIN",
  pin_mismatch:"PIN не совпадает!", pin_saved:"PIN установлен!", pin_removed:"PIN удалён",
  pin_reset_label:"Введите код из бота",
  pin_reset_sent:"Код отправлен в @Spend_uz_bot. Введите в течение 10 минут.",
  pin_reset_wrong:"Код неверный!", pin_reset_ok:"PIN успешно восстановлен!",
  add_goal:"Добавить цель", goal_done:"Цель достигнута! Поздравляем!",
  saved:"Сохранено!", updated:"Обновлено!", deleted:"Удалено",
  login_sub:"Управляйте финансами профессионально",
  login_start:"Начать", fill_all:"Заполните все поля!",
  enter_name:"Введите имя!", select_cat:"Выберите категорию!",
  enter_amount:"Введите сумму!", enter_date:"Введите дату!",
  ai_no_data:"Транзакций пока нет.",
  no_custom_cats:"Нет пользовательских категорий", no_family:"Участников пока нет",
  export_done:"Экспортировано!", import_done:"Импорт успешен!",
  wrong_file:"Неверный файл!", reset_confirm:"Это действие нельзя отменить!",
  notif_granted:"Уведомления включены!", notif_denied:"Разрешение не дано",
  profile_saved:"Профиль сохранён!", avatar_changed:"Аватар изменён!",
  currency_changed:"Валюта изменена!", copied:"Скопировано!",
  cat_used:"Эта категория используется!", cat_default:"Нельзя удалить стандартную категорию!",
  cat_added:"Категория добавлена!", member_added:"Участник добавлен!",
  enter_cat_name:"Введите название!", enter_member_name:"Введите имя!",
  budget_title:"Бюджет", no_budget:"Бюджетов пока нет",
  budget_limit:"Лимит", budget_spent:"Потрачено", budget_left:"Остаток",
  pdf_ready:"Подготовка PDF...", pdf_blocked:"Заблокировано! Разрешите всплывающие окна.",
  voice_fail:"Не понял голос!", voice_no_amount:"Сумма не найдена!",
  voice_detected:"AI определил:", mic_no:"Браузер не поддерживает микрофон!",
},
en:{
  balance:"Total balance", income:"Income", expense:"Expense",
  debt_given:"Lent money", debt_taken:"Borrowed money",
  monthly:"Monthly report", chart:"Chart", recent:"Recent transactions",
  see_all:"All", no_txn:"No transactions yet",
  all_txn:"All transactions", goals:"Goals", no_goal:"No goals yet",
  add:"Add", save:"Save", cancel:"Cancel", delete:"Delete",
  amount:"Amount", cat:"Category", date:"Date", note:"Note", tags:"Tags",
  repeat:"Repeat", no_repeat:"None", daily:"Daily", weekly:"Weekly", monthly_r:"Monthly",
  to_who:"To whom", from_who:"From whom",
  note_exp:"E.g.: received salary", note_inc:"E.g.: received salary",
  note_dg:"E.g.: to my friend", note_dt:"E.g.: from friend",
  person_dg:"E.g.: Ali", person_dt:"E.g.: Doniyor",
  receipt:"Receipt", share_txt:"Share",
  profile:"Profile", name:"Name", save_profile:"Save profile",
  language:"Language", interface:"Interface", theme:"Theme",
  currency:"Currency", notif:"Notifications", push:"Push notifications",
  notif_off:"Off", notif_on:"On", notif_time:"Reminder time",
  security:"Security", pin:"PIN code",
  pin_not_set:"Not set", pin_set:"Set",
  set_pin:"Set", change_pin:"Change", remove_pin:"Remove PIN",
  custom_cats:"Custom categories", new_cat:"New category",
  family:"Family budget", add_member:"Add member",
  data:"Data", export:"Export (JSON)", import_data:"Import",
  reset:"Delete all data", about:"About",
  avatar:"Choose avatar", confirm:"Confirm", delete_q:"Are you sure?",
  nav_home:"Home", nav_budget:"Budget", nav_goals:"Goals", nav_settings:"Settings",
  ai_title:"Financial Advisor",
  ai_welcome:"Hi! I am SpendUZ AI assistant. Ask me about your finances!",
  ai_q1:"Expense analysis", ai_q2:"Saving tips", ai_q3:"Budget plan", ai_q4:"Top expense",
  pin_enter:"Enter PIN code", pin_wrong:"Wrong PIN!",
  pin_forgot:"Forgot PIN?", pin_attempts:"attempts left", pin_wait:"minutes wait",
  pin_setup:"Set PIN", pin_new:"Enter new PIN", pin_confirm:"Confirm PIN",
  pin_mismatch:"PIN does not match!", pin_saved:"PIN set!", pin_removed:"PIN removed",
  pin_reset_label:"Enter code from bot",
  pin_reset_sent:"Code sent to @Spend_uz_bot. Enter within 10 minutes.",
  pin_reset_wrong:"Wrong code!", pin_reset_ok:"PIN successfully reset!",
  add_goal:"Add goal", goal_done:"Goal achieved! Congratulations!",
  saved:"Saved!", updated:"Updated!", deleted:"Deleted",
  login_sub:"Manage your finances professionally",
  login_start:"Start", fill_all:"Fill all fields!",
  enter_name:"Enter your name!", select_cat:"Select category!",
  enter_amount:"Enter amount!", enter_date:"Enter date!",
  ai_no_data:"No transactions yet.",
  no_custom_cats:"No custom categories", no_family:"No members yet",
  export_done:"Exported!", import_done:"Import successful!",
  wrong_file:"Wrong file!", reset_confirm:"This cannot be undone!",
  notif_granted:"Notifications enabled!", notif_denied:"Permission denied",
  profile_saved:"Profile saved!", avatar_changed:"Avatar changed!",
  currency_changed:"Currency changed!", copied:"Copied!",
  cat_used:"This category is in use!", cat_default:"Cannot delete default category!",
  cat_added:"Category added!", member_added:"Member added!",
  enter_cat_name:"Enter category name!", enter_member_name:"Enter name!",
  budget_title:"Budget", no_budget:"No budgets yet",
  budget_limit:"Limit", budget_spent:"Spent", budget_left:"Left",
  pdf_ready:"Preparing PDF...", pdf_blocked:"Popup blocked! Allow popups.",
  voice_fail:"Could not understand!", voice_no_amount:"Amount not found!",
  voice_detected:"AI detected:", mic_no:"Browser does not support microphone!",
},
tj:{
  balance:"Balansi umumii", income:"Daromad", expense:"Xarojot",
  debt_given:"Qarz dodam", debt_taken:"Qarz giriftam",
  monthly:"Hisoboti mohona", chart:"Grafik", recent:"Tranzaksiyahoi oxir",
  see_all:"Hama", no_txn:"Holo tranzaksiya nest",
  all_txn:"Hama tranzaksiyaho", goals:"Maqsadho", no_goal:"Holo maqsad nest",
  add:"Ilova", save:"Sabt", cancel:"Bekor", delete:"Nest",
  amount:"Mablagh", cat:"Kategoriya", date:"Sana", note:"Sharh", tags:"Tegho",
  repeat:"Takror", no_repeat:"Ne", daily:"Har ruz", weekly:"Har hafta", monthly_r:"Har moh",
  to_who:"Ba ki", from_who:"Az ki",
  note_exp:"Masalan: mosh giriftam", note_inc:"Masalan: mosh giriftam",
  note_dg:"Masalan: ba dustamat", note_dt:"Masalan: az dustamat",
  person_dg:"Masalan: Ali", person_dt:"Masalan: Doniyor",
  receipt:"Chek", share_txt:"Mubodila",
  profile:"Profil", name:"Nom", save_profile:"Profil sabt",
  language:"Zabon", interface:"Interfeys", theme:"Mavzu",
  currency:"Asyor", notif:"Ogohhо", push:"Push-ogohho",
  notif_off:"Xomush", notif_on:"Faol", notif_time:"Vaqti yodovari",
  security:"Amniyat", pin:"Ramzi PIN",
  pin_not_set:"Tanzim nashudaast", pin_set:"Tanzim shudaast",
  set_pin:"Tanzim kun", change_pin:"Ivaz kun", remove_pin:"PIN nest kun",
  custom_cats:"Kategoriyahoi shaxsi", new_cat:"Kategoriyai nav",
  family:"Budjeti oilavii", add_member:"Azo ilova",
  data:"Malumot", export:"Sodirot (JSON)", import_data:"Voribot",
  reset:"Hama malumot nest", about:"Dar borai barnoma",
  avatar:"Avatar intixob", confirm:"Tasdiq", delete_q:"Shumo mutmain hastid?",
  nav_home:"Asosi", nav_budget:"Budjet", nav_goals:"Maqsad", nav_settings:"Tanzimot",
  ai_title:"Maslahatgar",
  ai_welcome:"Salom! Man yordamchi AI SpendUZ hastam. Savol dihed!",
  ai_q1:"Tahlili xarojot", ai_q2:"Maslahat", ai_q3:"Naqsha", ai_q4:"Xarojoti asosi",
  pin_enter:"Ramzi PIN vorid", pin_wrong:"PIN nodurust!",
  pin_forgot:"PIN faromush", pin_attempts:"urinish mondat", pin_wait:"daqiqa sabr",
  pin_setup:"PIN tanzim", pin_new:"PIN-i nav vorid", pin_confirm:"PIN takror",
  pin_mismatch:"PIN muvofiq nest!", pin_saved:"PIN tanzim shud!", pin_removed:"PIN nest shud",
  pin_reset_label:"Kodi az bot vorid kuned",
  pin_reset_sent:"Kod ba @Spend_uz_bot firistad shud.",
  pin_reset_wrong:"Kod nodurust!", pin_reset_ok:"PIN bargardonida shud!",
  add_goal:"Maqsad ilova", goal_done:"Maqsad ijro shud! Muborak!",
  saved:"Sabt shud!", updated:"Navsozi shud!", deleted:"Nest shud",
  login_sub:"Moliyai xudro kasabona idora kuned",
  login_start:"Oghoz", fill_all:"Hama maydonehoро pur kuned!",
  enter_name:"Nomro vorid kuned!", select_cat:"Kategoriya intixob!",
  enter_amount:"Mablagh vorid!", enter_date:"Sana vorid!",
  ai_no_data:"Holo tranzaksiya nest.",
  no_custom_cats:"Kategoriyahoi shaxsi nest", no_family:"Holo azo nest",
  export_done:"Sodir shud!", import_done:"Voribot muvaffaq!",
  wrong_file:"Fayli nodurust!", reset_confirm:"In amalro bargardonidon mumkin nest!",
  notif_granted:"Ogohho faol shud!", notif_denied:"Ijozat doda nashud",
  profile_saved:"Profil sabt shud!", avatar_changed:"Avatar ivaz shud!",
  currency_changed:"Asyor ivaz shud!", copied:"Nusxa girifta shud!",
  cat_used:"In kategoriya istifoda meshavad!", cat_default:"Standartro nest kardan mumkin nest!",
  cat_added:"Kategoriya ilova shud!", member_added:"Azo ilova shud!",
  enter_cat_name:"Nomi kategoriyaro vorid kuned!", enter_member_name:"Nomro vorid kuned!",
  budget_title:"Budjet", no_budget:"Budjet nest",
  budget_limit:"Limit", budget_spent:"Sarfshuda", budget_left:"Mondat",
  pdf_ready:"PDF tayor meshavad...", pdf_blocked:"Bloklashuda! Ruxsat dihed.",
  voice_fail:"Nafahmidam!", voice_no_amount:"Mablagh yofta nashud!",
  voice_detected:"AI muayyan kard:", mic_no:"Brauzar mikrofonro qollamaydi!",
},
};

const t = k => (LANG[S.settings.lang]||LANG.uz)[k] || LANG.uz[k] || k;

// ─── CONSTANTS ──────────────────────────────────────────────────────────────────
const AVATARS = [
  "😊","😎","🤑","👨","👩","🧑","👱","🦊","🐯","🦁",
  "🐸","🐧","🦄","🐼","🚀","⭐","🔥","💎","👑","🎯",
  "💡","🎮","🏆","❤️","🌟","🦋","🧠","🎪","🌈","🏄"
];
const EMOJI_LIST = [
  "🍔","🚗","🏠","💊","👗","🎮","📚","💅","☕","💻",
  "🎁","⚽","✈️","💡","💰","📈","🏢","🎀","💵","🛒",
  "📦","🎵","🍕","🍜","🚌","⛽","🏋️","🎓","💍","🧴"
];
const CAT_COLORS = [
  "#00E5A0","#FF4F6A","#FFB547","#7C6DFA","#00C2FF",
  "#FF8A00","#A8FF78","#FF6B9D","#4ECDC4","#45B7D1"
];
const DEFAULT_CATS = [
  {id:"c_food",   name:{uz:"Oziq-ovqat",ru:"Еда",          en:"Food",         tj:"Xuroq"},       emoji:"🍔",color:"#FF8A00",type:"expense"},
  {id:"c_trans",  name:{uz:"Transport", ru:"Транспорт",    en:"Transport",    tj:"Naqliyot"},    emoji:"🚗",color:"#7C6DFA",type:"expense"},
  {id:"c_home",   name:{uz:"Uy-joy",    ru:"Жильё",        en:"Housing",      tj:"Manzil"},      emoji:"🏠",color:"#00C2FF",type:"expense"},
  {id:"c_health", name:{uz:"Salomatlik",ru:"Здоровье",     en:"Health",       tj:"Salomatii"},   emoji:"💊",color:"#FF4F6A",type:"expense"},
  {id:"c_cloth",  name:{uz:"Kiyim",     ru:"Одежда",       en:"Clothes",      tj:"Libos"},       emoji:"👗",color:"#FF6B9D",type:"expense"},
  {id:"c_enter",  name:{uz:"Konil ochish",ru:"Развлечения",en:"Entertainment",tj:"Vaqtguzaroni"},emoji:"🎮",color:"#A8FF78",type:"expense"},
  {id:"c_edu",    name:{uz:"Talim",     ru:"Образование",  en:"Education",    tj:"Malumot"},     emoji:"📚",color:"#4ECDC4",type:"expense"},
  {id:"c_cafe",   name:{uz:"Kafe",      ru:"Кафе",         en:"Cafe",         tj:"Kafe"},        emoji:"☕",color:"#FFB547",type:"expense"},
  {id:"c_tech",   name:{uz:"Texnologiya",ru:"Технологии", en:"Technology",   tj:"Texnologiya"}, emoji:"💻",color:"#45B7D1",type:"expense"},
  {id:"c_sport",  name:{uz:"Sport",     ru:"Спорт",        en:"Sport",        tj:"Varzish"},     emoji:"⚽",color:"#00E5A0",type:"expense"},
  {id:"c_travel", name:{uz:"Sayohat",   ru:"Путешествие",  en:"Travel",       tj:"Safar"},       emoji:"✈️",color:"#7C6DFA",type:"expense"},
  {id:"c_bills",  name:{uz:"Kommunal",  ru:"Коммунальные", en:"Bills",        tj:"Kommunalii"},  emoji:"💡",color:"#FFB547",type:"expense"},
  {id:"c_beauty", name:{uz:"Gozallik",  ru:"Красота",      en:"Beauty",       tj:"Zeboi"},       emoji:"💅",color:"#FF6B9D",type:"expense"},
  {id:"c_gift",   name:{uz:"Sovga",     ru:"Подарки",      en:"Gifts",        tj:"Tuhfa"},       emoji:"🎁",color:"#FF8A00",type:"expense"},
  {id:"c_other_e",name:{uz:"Boshqa",    ru:"Другое",       en:"Other",        tj:"Digar"},       emoji:"📦",color:"#9BA3B8",type:"expense"},
  {id:"c_salary", name:{uz:"Maosh",     ru:"Зарплата",     en:"Salary",       tj:"Maosh"},       emoji:"💰",color:"#00E5A0",type:"income"},
  {id:"c_free",   name:{uz:"Frilanss",  ru:"Фриланс",      en:"Freelance",    tj:"Frilanss"},    emoji:"💻",color:"#4ECDC4",type:"income"},
  {id:"c_biz",    name:{uz:"Biznes",    ru:"Бизнес",       en:"Business",     tj:"Biznes"},      emoji:"🏢",color:"#FFB547",type:"income"},
  {id:"c_invest", name:{uz:"Investitsiya",ru:"Инвестиции", en:"Investment",   tj:"Sarmoyaguzori"},emoji:"📈",color:"#7C6DFA",type:"income"},
  {id:"c_other_i",name:{uz:"Boshqa",    ru:"Другое",       en:"Other",        tj:"Digar"},       emoji:"💵",color:"#9BA3B8",type:"income"},
];

const AI_KW = {
  c_food:["ovqat","taom","osh","non","gosht","sabzavot","meva","tushlik","nonushta","somsa","manti","lagman","burger","pizza","lavash","doner","bozor","bazar","supermarket","magazin","dukon","dokon","oziq","mahsulot","restoran","kafe","choyxona","еда","продукты","магазин","рынок","базар","обед","ужин","завтрак","ресторан","food","grocery","market","lunch","dinner","breakfast","restaurant"],
  c_trans:["taxi","taksi","yandex","uber","avto","mashina","bus","avtobus","metro","benzin","gaz","moy","marshrutka","poyezd","такси","машина","бензин","метро","автобус","маршрутка","поезд","fuel","car","parking","train"],
  c_home:["ijara","kvartira","uy","arenda","rent","kommunal","remont","mebel","аренда","квартира","ремонт","мебель","коммунальные","repair","furniture"],
  c_health:["dori","dorixona","apteka","shifokor","doktor","klinika","kasalxona","tahlil","vitamin","аптека","лекарство","врач","клиника","больница","pharmacy","medicine","doctor","hospital"],
  c_cloth:["kiyim","koylak","shim","kurtka","palto","poyabzal","botinka","krossovka","sumka","одежда","рубашка","штаны","куртка","обувь","кроссовки","clothes","shirt","pants","jacket","shoes"],
  c_enter:["kino","film","concert","teatr","muzey","park","zoo","game","netflix","youtube","spotify","bilyard","bowling","karaoke","кино","концерт","театр","игра","парк","cinema","movie","entertainment"],
  c_edu:["kurs","trening","kitob","darslik","seminar","univer","maktab","kollej","repetitor","талим","образование","курс","книга","университет","школа","course","book","university","school","training"],
  c_cafe:["kofe","coffee","kapuchino","latte","espresso","choy","tea","sharbat","tort","konfet","shokolad","pechenye","juice","smoothie","кофе","чай","торт","сок","шоколад","cake","candy"],
  c_tech:["telefon","smartfon","iphone","samsung","xiaomi","laptop","noutbuk","kompyuter","planshet","naushnik","kamera","printer","zaryadka","router","телефон","смартфон","ноутбук","компьютер","наушники","phone","computer","tablet","camera"],
  c_sport:["sport","gym","fitnes","trenajer","basketball","futbol","tennis","suzish","velosiped","yugurish","boks","karate","yoga","crossfit","спорт","тренажёр","фитнес","бассейн","бокс","футбол","fitness","swimming","running","boxing"],
  c_travel:["sayohat","avia","aviabilet","samolyot","hotel","mehmonxona","hostel","viza","tur","путешествие","билет","самолёт","отель","гостиница","виза","flight","ticket","visa","tour","trip","vacation"],
  c_bills:["elektr","yoruglik","internet","wifi","kommunal","obuna","электричество","интернет","коммунальные","electricity","bills","subscription","insurance"],
  c_beauty:["sartarosh","soch","soqol","manikyur","pedikyur","kosmetika","parfum","salon","spa","парикмахер","маникюр","косметика","духи","крем","салон","haircut","manicure","cosmetics","perfume"],
  c_gift:["sovga","present","gift","bayram","tugilgan","birthday","toy","nikoh","подарок","праздник","день рождения","свадьба","wedding","holiday"],
  c_salary:["maosh","oylik","ish haqi","salary","daromad","bonus","mukofot","зарплата","премия","доход","income","earned"],
  c_free:["frilanss","freelance","loyiha","project","dizayn","фриланс","проект","дизайн","design"],
  c_biz:["biznes","savdo","tovar","foyda","firma","sotish","бизнес","торговля","товар","прибыль","business","sales","profit"],
  c_invest:["invest","aksiya","fond","crypto","bitcoin","depozit","foiz","dividend","инвестиции","акции","крипта","депозит","investment","stock","crypto"],
};

// ─── STATE ──────────────────────────────────────────────────────────────────────
let UID = null;
let S = {
  profile:{name:"Foydalanuvchi",username:"@spenduz",avatar:"😊",joinedAt:null,tgId:null},
  transactions:[],goals:[],budgets:[],family:[],categories:[],
  rates:{usd:12800,eur:13900,rub:140,updatedAt:null},
  settings:{lang:"uz",theme:"dark",currency:"uzs",pin:null,pinEnabled:false,notifEnabled:false,notifTime:"21:00"},
  aiHistory:[],pinAttempts:0,pinLockedUntil:null,
  pinResetCode:null,pinResetExpiry:null,
};

let currentTab="home",currentTxType="expense",currentCatType="expense";
let currentChart="donut",currentBarPeriod="week";
let editTxnId=null,editGoalId=null,addToGoalId=null,confirmCb=null;
let selAvatar="😊",selCatColor="#00E5A0";
let pinInput="",pinSetupMode="set",pinSetupFirst="",pinSetupInput="";
let receiptTxnId=null,showingAll=false,aiTyping=false;
let micRecog=null,micActive=false;

// ─── STORAGE ────────────────────────────────────────────────────────────────────
const KEY = () => "spenduz_v5_" + UID;

function loadS() {
  try {
    const raw = localStorage.getItem(KEY());
    if (!raw) return false;
    const p = JSON.parse(raw);
    S.profile      = Object.assign({},S.profile,p.profile||{});
    S.transactions = p.transactions||[];
    S.goals        = p.goals||[];
    S.budgets      = p.budgets||[];
    S.family       = p.family||[];
    S.categories   = (p.categories&&p.categories.length)?p.categories:DEFAULT_CATS.map(c=>({...c}));
    S.rates        = Object.assign({},S.rates,p.rates||{});
    S.settings     = Object.assign({},S.settings,p.settings||{});
    S.aiHistory    = p.aiHistory||[];
    S.pinAttempts  = p.pinAttempts||0;
    S.pinLockedUntil = p.pinLockedUntil||null;
    return true;
  } catch(e){return false;}
}

function saveS() {
  if (!S.categories||!S.categories.length) S.categories=DEFAULT_CATS.map(c=>({...c}));
  localStorage.setItem(KEY(),JSON.stringify(S));
}

// ─── UTILS ──────────────────────────────────────────────────────────────────────
const genId    = () => "i"+Date.now()+Math.random().toString(36).substr(2,4);
const todayISO = () => new Date().toISOString().split("T")[0];
const monthISO = () => {const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;};

function fmt(amount,cur) {
  const c=cur||S.settings.currency||"uzs";
  const n=Number(amount)||0;
  return n.toLocaleString("uz-UZ")+({uzs:" so'm",usd:" $",eur:" €",rub:" ₽"}[c]||" so'm");
}
function fmtDate(d) {
  if(!d) return "";
  const dt=new Date(d);
  return isNaN(dt)?d:dt.toLocaleDateString("uz-UZ",{day:"2-digit",month:"2-digit",year:"numeric"});
}
function toUZS(amount,cur) {
  if(cur==="uzs"||!cur) return amount;
  return amount*(S.rates[cur]||1);
}
function catName(cat) {
  if(!cat) return "";
  if(typeof cat.name==="object") return cat.name[S.settings.lang]||cat.name.uz||"";
  return cat.name||"";
}
function getCat(id) { return S.categories.find(c=>c.id===id)||null; }
function getCatsByType(type) { return S.categories.filter(c=>c.type===type); }
function detectCat(text) {
  const low=text.toLowerCase();
  for(const [id,words] of Object.entries(AI_KW)){
    if(words.some(w=>low.includes(w))&&getCat(id)) return id;
  }
  return null;
}

// ─── VOICE PARSER ────────────────────────────────────────────────────────────────
function parseVoiceAmount(text) {
  const low=text.toLowerCase().trim();
  const nums=low.match(/\d+/g);
  let cur="uzs";
  if(low.includes("dollar")||low.includes("usd")||low.includes("$")) cur="usd";
  else if(low.includes("euro")||low.includes("eur")) cur="eur";
  else if(low.includes("rubl")||low.includes("rub")) cur="rub";
  if(!nums) return [null,cur];
  const base=parseInt(nums[0]);
  const second=nums.length>1?parseInt(nums[1]):0;
  const words=low.split(/[\s,.\-]+/);
  const hasMln=words.some(w=>["million","mln","mlrd","milliard"].includes(w));
  const hasMing=words.some(w=>["ming","тысяч","тыс","thousand"].includes(w));
  const hasK=words.some(w=>w==="k")&&!["ok","ak","ek"].some(x=>low.includes(x));
  if(hasMln){let r=base*1_000_000;if(second>0&&second<1000)r+=second*1000;return[r,cur];}
  if(hasMing||hasK){let r=base*1000;if(second>0&&second<1000)r+=second;return[r,cur];}
  if(nums.length>1&&(nums[1]==="000"||/^0+$/.test(nums[1]))) return[parseInt(nums.join("")),cur];
  return[base,cur];
}

// ─── TOAST & MODAL ───────────────────────────────────────────────────────────────
function toast(msg,type="success") {
  const el=document.getElementById("toast");
  el.textContent=msg; el.className=`toast toast-${type}`; el.classList.remove("hidden");
  clearTimeout(el._t); el._t=setTimeout(()=>el.classList.add("hidden"),2800);
}
function openM(id)  {document.getElementById(id).classList.remove("hidden");}
function closeM(id) {document.getElementById(id).classList.add("hidden");}
function confirm2(title,msg,cb) {
  document.getElementById("confirmTitle").textContent=title;
  document.getElementById("confirmMsg").textContent=msg;
  confirmCb=cb; openM("confirmModal");
}

// ─── LANGUAGE ────────────────────────────────────────────────────────────────────
function applyLang(lang) {
  S.settings.lang=lang; saveS();
  // Text updates
  const ids={
    lbl_balance:"balance",lbl_income:"income",lbl_expense:"expense",
    lbl_debt_given:"debt_given",lbl_debt_taken:"debt_taken",
    lbl_monthly:"monthly",lbl_chart:"chart",lbl_recent:"recent",
    seeAllBtn:"see_all",lbl_all:"all_txn",lbl_goals:"goals",lbl_ai_title:"ai_title",
    nav_home:"nav_home",nav_budget:"nav_budget",nav_goals:"nav_goals",nav_settings:"nav_settings",
    lbl_profile:"profile",lbl_name:"name",lbl_language:"language",lbl_interface:"interface",
    lbl_theme:"theme",lbl_currency:"currency",lbl_notif:"notif",lbl_push:"push",
    lbl_security:"security",lbl_pin:"pin",lbl_custom_cats:"custom_cats",lbl_new_cat:"new_cat",
    lbl_family:"family",lbl_data:"data",lbl_about:"about",
    lbl_amount:"amount",lbl_cat:"cat",lbl_date:"date",lbl_note:"note",lbl_tags:"tags",
    lbl_repeat:"repeat",lbl_budget_title:"budget_title",
    lbl_notif_time:"notif_time",lbl_remove_pin:"remove_pin",
    lbl_inc2:"income",lbl_exp2:"expense",lbl_week:"weekly",lbl_month:"monthly",
  };
  Object.entries(ids).forEach(([id,key])=>{const el=document.getElementById(id);if(el)el.textContent=t(key);});

  // Buttons
  const btnMap={
    saveProfileBtn:"save_profile",addCatSettingsBtn:"new_cat",addFamilyBtn:"add_member",
    exportBtn:"export",importBtn:"import_data",resetBtn:"reset",
    submitBtn:"save",loginBtn:"login_start",
  };
  Object.entries(btnMap).forEach(([id,key])=>{
    const el=document.getElementById(id);
    if(el){
      const span=el.querySelector("span");
      if(span) span.textContent=t(key);
      else el.textContent=(id==="submitBtn"?"✓ ":id==="loginBtn"?"✓ ":"")+t(key);
    }
  });

  // Special
  const lbl_add_cat=document.getElementById("lbl_add_cat"); if(lbl_add_cat) lbl_add_cat.textContent=t("new_cat");
  const lbl_add_member=document.getElementById("lbl_add_member"); if(lbl_add_member) lbl_add_member.textContent=t("add_member");
  const lbl_export=document.getElementById("lbl_export"); if(lbl_export) lbl_export.textContent=t("export");
  const lbl_import=document.getElementById("lbl_import"); if(lbl_import) lbl_import.textContent=t("import_data");
  const lbl_reset=document.getElementById("lbl_reset"); if(lbl_reset) lbl_reset.textContent=t("reset");
  const lbl_save_profile=document.getElementById("lbl_save_profile"); if(lbl_save_profile) lbl_save_profile.textContent=t("save_profile");
  const cancelEdit=document.getElementById("cancelEdit"); if(cancelEdit) cancelEdit.textContent="✕ "+t("cancel");

  // PIN screen
  const pl=document.getElementById("pinLabel"); if(pl) pl.textContent=t("pin_enter");
  const pf=document.getElementById("pinForgot"); if(pf) pf.textContent=t("pin_forgot");
  const prl=document.getElementById("pinResetLabel"); if(prl) prl.textContent=t("pin_reset_label");

  // Login
  const ls=document.getElementById("loginSub"); if(ls) ls.textContent=t("login_sub");
  const lnl=document.getElementById("loginNameLbl"); if(lnl) lnl.textContent=t("name");
  const lal=document.getElementById("loginAvatarLbl"); if(lal) lal.textContent=t("avatar");

  // Type tabs
  const tabIcons={expense:"⬇",income:"⬆",debt_given:"💸",debt_taken:"💰"};
  const tabIds={tab_exp:"expense",tab_inc:"income",tab_dg:"debt_given",tab_dt:"debt_taken"};
  Object.entries(tabIds).forEach(([id,type])=>{
    const el=document.getElementById(id);
    if(el) el.textContent=tabIcons[type]+" "+t(type);
  });

  updateDebtLabels(); updateNotePlaceholder();
  updatePinStatus(); updateNotifStatus();
  document.querySelectorAll(".lang-btn[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  renderAiQuickBtns();
  if(currentTab==="home") renderHome();
  else if(currentTab==="goals") renderGoals();
  else if(currentTab==="budget") renderBudget();
  else if(currentTab==="settings") renderSettings();
  if(currentTab==="add") renderCatGrid();
}

function updateDebtLabels() {
  const tl=document.getElementById("lbl_to");
  if(tl) tl.textContent=currentTxType==="debt_taken"?t("from_who"):t("to_who");
}
function updateNotePlaceholder() {
  const n=document.getElementById("noteInput"); if(!n) return;
  const map={expense:"note_exp",income:"note_inc",debt_given:"note_dg",debt_taken:"note_dt"};
  n.placeholder=t(map[currentTxType]||"note_exp");
  const dp=document.getElementById("debtPerson");
  if(dp) dp.placeholder=t(currentTxType==="debt_taken"?"person_dt":"person_dg");
}
function updatePinStatus() {
  const pinOn=S.settings.pinEnabled&&S.settings.pin;
  const pst=document.getElementById("pinStatus"); if(pst) pst.textContent=pinOn?t("pin_set"):t("pin_not_set");
  const spb=document.getElementById("setPinBtn"); if(spb) spb.textContent=pinOn?t("change_pin"):t("set_pin");
  const rmr=document.getElementById("removePinRow"); if(rmr) rmr.classList.toggle("hidden",!pinOn);
}
function updateNotifStatus() {
  const ns=document.getElementById("notifStatus");
  if(ns) ns.textContent=S.settings.notifEnabled?t("notif_on"):t("notif_off");
}

// ─── RATES ──────────────────────────────────────────────────────────────────────
async function fetchRates() {
  try {
    const res=await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/");
    const data=await res.json();
    const find=code=>{const r=data.find(x=>x.Ccy===code);return r?parseFloat(r.Rate):null;};
    S.rates.usd=find("USD")||S.rates.usd;
    S.rates.eur=find("EUR")||S.rates.eur;
    S.rates.rub=find("RUB")||S.rates.rub;
    S.rates.updatedAt=new Date().toLocaleTimeString();
    saveS();
    document.getElementById("rUSD").textContent="🇺🇸 "+S.rates.usd.toLocaleString();
    document.getElementById("rEUR").textContent="🇪🇺 "+S.rates.eur.toLocaleString();
    document.getElementById("rRUB").textContent="🇷🇺 "+S.rates.rub.toFixed(1);
    const rt=document.getElementById("rTime"); if(rt) rt.textContent=S.rates.updatedAt;
  }catch(e){}
}

// ─── NOTIFICATIONS ───────────────────────────────────────────────────────────────
async function requestNotif() {
  if(!("Notification" in window)){toast(t("notif_denied"),"error");return;}
  const p=await Notification.requestPermission();
  if(p==="granted"){
    S.settings.notifEnabled=true;saveS();updateNotifStatus();toast(t("notif_granted"));
  }else{
    S.settings.notifEnabled=false;saveS();
    const nt=document.getElementById("notifToggle"); if(nt) nt.checked=false;
    updateNotifStatus();toast(t("notif_denied"),"error");
  }
}

// ─── PIN ────────────────────────────────────────────────────────────────────────
function pinDots(val,prefix) {
  for(let i=1;i<=4;i++){const el=document.getElementById(prefix+i);if(el)el.classList.toggle("filled",i<=val.length);}
}
function initPinScreen() {
  document.getElementById("pinAvatar").textContent=S.profile.avatar||"😊";
  document.getElementById("pinName").textContent=S.profile.name;
  document.getElementById("pinLabel").textContent=t("pin_enter");
  document.getElementById("pinForgot").textContent=t("pin_forgot");
  document.getElementById("pinError").classList.add("hidden");
  document.getElementById("pinTimer").classList.add("hidden");
  pinInput=""; pinDots("","pd"); checkPinLock();
}
function checkPinLock() {
  if(S.pinLockedUntil&&Date.now()<S.pinLockedUntil){
    const timer=document.getElementById("pinTimer");
    const update=()=>{
      if(Date.now()>=S.pinLockedUntil){
        clearInterval(iv); timer.classList.add("hidden");
        S.pinAttempts=0; S.pinLockedUntil=null; saveS();
      } else {
        const left=Math.ceil((S.pinLockedUntil-Date.now())/60000);
        timer.textContent=left+" "+t("pin_wait"); timer.classList.remove("hidden");
      }
    };
    update();
    const iv=setInterval(update,10000);
  }
}
function pinEnter(n) {
  if(S.pinLockedUntil&&Date.now()<S.pinLockedUntil) return;
  if(pinInput.length>=4) return;
  pinInput+=n; pinDots(pinInput,"pd");
}
function pinBack() {pinInput=pinInput.slice(0,-1);pinDots(pinInput,"pd");}
function pinSubmit() {
  if(S.pinLockedUntil&&Date.now()<S.pinLockedUntil) return;
  if(pinInput.length<4) return;
  const errEl=document.getElementById("pinError");
  if(pinInput===S.settings.pin){
    S.pinAttempts=0;S.pinLockedUntil=null;saveS();
    document.getElementById("pinScreen").classList.add("hidden"); startApp();
  }else{
    S.pinAttempts=(S.pinAttempts||0)+1;
    const left=5-S.pinAttempts;
    errEl.classList.remove("hidden");
    if(S.pinAttempts>=5){
      S.pinLockedUntil=Date.now()+5*60*1000; S.pinAttempts=0;
      errEl.textContent=t("pin_wrong")+" 5 "+t("pin_wait");
      checkPinLock();
    }else{
      errEl.textContent=t("pin_wrong")+" "+left+" "+t("pin_attempts");
    }
    saveS(); pinInput=""; pinDots("","pd");
    setTimeout(()=>errEl.classList.add("hidden"),3000);
  }
}
function openPinReset() {
  const code=Math.floor(100000+Math.random()*900000).toString();
  S.pinResetCode=code; S.pinResetExpiry=Date.now()+10*60*1000; saveS();
  document.getElementById("pinScreen").classList.add("hidden");
  document.getElementById("pinResetScreen").classList.remove("hidden");
  document.getElementById("pinResetCode").value="";
  document.getElementById("pinResetError").classList.add("hidden");
  document.getElementById("pinResetInfo").textContent=t("pin_reset_sent");
  // Show code in toast for testing
  toast("Test kodi: "+code,"warn");
}
function submitPinReset() {
  const entered=document.getElementById("pinResetCode").value.trim();
  const errEl=document.getElementById("pinResetError");
  if(!S.pinResetCode||!S.pinResetExpiry||Date.now()>S.pinResetExpiry){
    errEl.textContent=t("pin_reset_wrong")+" (vaqt tugadi)"; errEl.classList.remove("hidden"); return;
  }
  if(entered!==S.pinResetCode){
    errEl.textContent=t("pin_reset_wrong"); errEl.classList.remove("hidden"); return;
  }
  S.settings.pin=null; S.settings.pinEnabled=false;
  S.pinResetCode=null; S.pinResetExpiry=null;
  S.pinAttempts=0; S.pinLockedUntil=null; saveS();
  document.getElementById("pinResetScreen").classList.add("hidden");
  toast(t("pin_reset_ok")); startApp();
}
function openPinSetup() {
  pinSetupMode="set"; pinSetupFirst=""; pinSetupInput="";
  document.getElementById("pinSetupTitle").textContent=t("pin_setup");
  document.getElementById("pinSetupHint").textContent=t("pin_new");
  pinDots("","psd"); openM("pinSetupModal");
}
function pinSetupEnter(n) {if(pinSetupInput.length>=4)return;pinSetupInput+=n;pinDots(pinSetupInput,"psd");}
function pinSetupBack() {pinSetupInput=pinSetupInput.slice(0,-1);pinDots(pinSetupInput,"psd");}
function pinSetupOk() {
  if(pinSetupInput.length<4) return;
  if(pinSetupMode==="set"){
    pinSetupFirst=pinSetupInput; pinSetupInput="";
    pinSetupMode="confirm";
    document.getElementById("pinSetupHint").textContent=t("pin_confirm");
    pinDots("","psd");
  }else{
    if(pinSetupInput===pinSetupFirst){
      S.settings.pin=pinSetupInput; S.settings.pinEnabled=true; saveS();
      closeM("pinSetupModal"); renderSettings(); toast(t("pin_saved"));
    }else{
      toast(t("pin_mismatch"),"error");
      pinSetupInput=""; pinSetupMode="set"; pinSetupFirst="";
      document.getElementById("pinSetupHint").textContent=t("pin_new");
      pinDots("","psd");
    }
  }
}

// ─── NAV ────────────────────────────────────────────────────────────────────────
function switchTab(tab) {
  currentTab=tab;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
  const pg=document.getElementById("page-"+tab); if(pg) pg.classList.add("active");
  const nb=document.querySelector(`.nav-btn[data-tab="${tab}"]`); if(nb) nb.classList.add("active");
  if(tab==="home")     renderHome();
  if(tab==="budget")   renderBudget();
  if(tab==="goals")    renderGoals();
  if(tab==="ai")       initAiChat();
  if(tab==="settings") renderSettings();
  if(tab==="add")      {if(!editTxnId)resetAddForm();renderCatGrid();}
}

// ─── LOGIN ───────────────────────────────────────────────────────────────────────
function renderAvatarGrid(elId,isLogin) {
  const el=document.getElementById(elId); if(!el) return;
  el.innerHTML=AVATARS.map(a=>`<button class="avatar-opt ${a===selAvatar?"sel":""}" onclick="pickAvatar('${a}','${elId}',${isLogin?1:0})">${a}</button>`).join("");
}
function pickAvatar(emoji,elId,isLogin) {
  selAvatar=emoji;
  if(isLogin){renderAvatarGrid(elId,true);}
  else{S.profile.avatar=emoji;saveS();updateTopBar();renderSettings();closeM("avatarModal");toast(t("avatar_changed"));}
}
function doLogin() {
  const name=document.getElementById("loginName").value.trim();
  if(!name){toast(t("enter_name"),"error");return;}
  S.profile.name=name; S.profile.avatar=selAvatar;
  S.profile.username="@"+name.toLowerCase().replace(/\s+/g,"");
  S.profile.joinedAt=new Date().toISOString();
  S.categories=DEFAULT_CATS.map(c=>({...c}));
  saveS();
  document.getElementById("loginScreen").classList.add("hidden");
  startApp();
}
function startApp() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("pinScreen").classList.add("hidden");
  document.getElementById("pinResetScreen").classList.add("hidden");
  const app=document.getElementById("app");
  app.classList.remove("hidden"); app.classList.add("app-enter");
  applyTheme(S.settings.theme); updateTopBar(); applyLang(S.settings.lang);
  fetchRates(); scheduleRepeating(); renderHome(); generateAiInsight();
}
function updateTopBar() {
  document.getElementById("topAvatar").textContent=S.profile.avatar||"😊";
  document.getElementById("topName").textContent=S.profile.name;
  document.getElementById("topUser").textContent=S.profile.username||"@spenduz";
}
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme",theme);
  S.settings.theme=theme;
  const btn=document.getElementById("themeBtn"); if(btn) btn.textContent=theme==="dark"?"🌙":"☀️";
  const tog=document.getElementById("themeToggle"); if(tog) tog.checked=theme==="dark";
  saveS();
}

// ─── HOME ────────────────────────────────────────────────────────────────────────
function renderHome() {
  const txns=S.transactions;
  const allInc=txns.filter(t=>t.type==="income").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const allExp=txns.filter(t=>t.type==="expense").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const allDG =txns.filter(t=>t.type==="debt_given").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const allDT =txns.filter(t=>t.type==="debt_taken").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const bal=allInc+allDT-allExp-allDG;

  const balEl=document.getElementById("totalBalance");
  balEl.textContent=fmt(bal); balEl.className="bal-amount "+(bal>=0?"pos":"neg");
  document.getElementById("chipIncome").textContent=fmt(allInc);
  document.getElementById("chipExpense").textContent=fmt(allExp);
  document.getElementById("chipDG").textContent=fmt(allDG);
  document.getElementById("chipDT").textContent=fmt(allDT);

  const now=new Date();
  document.getElementById("todayDate").textContent=now.toLocaleDateString("uz-UZ",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

  const ym=monthISO();
  const mTxns=txns.filter(t=>t.date&&t.date.startsWith(ym));
  const mInc=mTxns.filter(t=>t.type==="income").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mExp=mTxns.filter(t=>t.type==="expense").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mNet=mInc-mExp;
  const months=["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"];

  document.getElementById("monthName").textContent=months[now.getMonth()]+" "+now.getFullYear();
  const netEl=document.getElementById("monthNet");
  netEl.textContent=fmt(mNet); netEl.className="month-net "+(mNet>=0?"pos":"neg");
  document.getElementById("mInc").textContent=fmt(mInc);
  document.getElementById("mExp").textContent=fmt(mExp);
  const total=mInc+mExp;
  document.getElementById("monthBar").style.width=(total>0?Math.min(100,Math.round((mExp/total)*100)):0)+"%";

  if(currentChart==="donut") renderDonut(mTxns);
  else renderBarChart(currentBarPeriod);

  const recent=[...txns].sort((a,b)=>new Date(b.date+"T"+(b.time||"00:00"))-new Date(a.date+"T"+(a.time||"00:00"))).slice(0,5);
  renderTxnList("recentList",recent,true);

  const sb=document.getElementById("seeAllBtn"); if(sb) sb.textContent=t("see_all")+" →";
  if(showingAll) applyHistoryFilters();
  generateAiInsight();
}

// ─── DONUT ───────────────────────────────────────────────────────────────────────
function renderDonut(mTxns) {
  const svg=document.getElementById("donutSvg");
  const legend=document.getElementById("chartLegend");
  const center=document.getElementById("donutCenter");
  if(!mTxns||!mTxns.length){
    svg.innerHTML=`<circle cx="60" cy="60" r="45" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="18"/>`;
    legend.innerHTML=`<div class="chart-empty">${t("no_txn")}</div>`;
    center.textContent="—"; return;
  }
  const grouped={};
  mTxns.forEach(tx=>{
    let k;
    if(tx.type==="income") k="__income__";
    else if(tx.type==="debt_given") k="__dg__";
    else if(tx.type==="debt_taken") k="__dt__";
    else k=tx.category||"c_other_e";
    grouped[k]=(grouped[k]||0)+toUZS(tx.amount,tx.currency);
  });
  const total=Object.values(grouped).reduce((s,v)=>s+v,0);
  const entries=Object.entries(grouped).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const r=45,circ=2*Math.PI*r;
  let offset=0,html="";
  entries.forEach(([id,val],i)=>{
    let color;
    if(id==="__income__") color="#00E5A0";
    else if(id==="__dg__") color="#FFB547";
    else if(id==="__dt__") color="#7C6DFA";
    else{const cat=getCat(id);color=cat&&cat.color?cat.color:CAT_COLORS[i%CAT_COLORS.length];}
    const dash=(val/total)*circ;
    html+=`<circle cx="60" cy="60" r="${r}" fill="none" stroke="${color}" stroke-width="18" stroke-dasharray="${dash.toFixed(2)} ${(circ-dash).toFixed(2)}" stroke-dashoffset="${(-offset).toFixed(2)}" transform="rotate(-90 60 60)"/>`;
    offset+=dash;
  });
  html+=`<circle cx="60" cy="60" r="36" fill="var(--card)"/>`;
  svg.innerHTML=html;
  center.textContent=fmt(total);
  legend.innerHTML=entries.map(([id,val],i)=>{
    let emoji,name,color;
    if(id==="__income__"){emoji="💰";name=t("income");color="#00E5A0";}
    else if(id==="__dg__"){emoji="💸";name=t("debt_given");color="#FFB547";}
    else if(id==="__dt__"){emoji="💵";name=t("debt_taken");color="#7C6DFA";}
    else{const cat=getCat(id);emoji=cat?cat.emoji:"📦";name=cat?catName(cat):t("expense");color=cat&&cat.color?cat.color:CAT_COLORS[i%CAT_COLORS.length];}
    return `<div class="legend-item"><span class="legend-dot" style="background:${color}"></span><span>${emoji}</span><span class="legend-name">${name}</span><span class="legend-pct">${Math.round((val/total)*100)}%</span></div>`;
  }).join("");
}

// ─── BAR CHART ───────────────────────────────────────────────────────────────────
function renderBarChart(period) {
  currentBarPeriod=period;
  const wrap=document.getElementById("barWrap"); if(!wrap) return;
  const now=new Date();
  let labels=[],incData=[],expData=[];
  if(period==="week"){
    const days=["Yak","Du","Se","Ch","Pa","Sh","Sha"];
    for(let i=6;i>=0;i--){
      const d=new Date(now);d.setDate(d.getDate()-i);
      const iso=d.toISOString().split("T")[0];
      const dayT=S.transactions.filter(t=>t.date===iso);
      labels.push(days[d.getDay()]);
      incData.push(dayT.filter(t=>t.type==="income").reduce((s,t)=>s+toUZS(t.amount,t.currency),0));
      expData.push(dayT.filter(t=>t.type==="expense").reduce((s,t)=>s+toUZS(t.amount,t.currency),0));
    }
  }else{
    const mn=["Yan","Fev","Mar","Apr","May","Iyu","Iyu","Avg","Sen","Okt","Noy","Dek"];
    for(let i=5;i>=0;i--){
      const d=new Date(now.getFullYear(),now.getMonth()-i,1);
      const ym=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
      const mT=S.transactions.filter(t=>t.date&&t.date.startsWith(ym));
      labels.push(mn[d.getMonth()]);
      incData.push(mT.filter(t=>t.type==="income").reduce((s,t)=>s+toUZS(t.amount,t.currency),0));
      expData.push(mT.filter(t=>t.type==="expense").reduce((s,t)=>s+toUZS(t.amount,t.currency),0));
    }
  }
  const maxV=Math.max(...incData,...expData,1);
  wrap.innerHTML=`<div class="bar-chart">${labels.map((lbl,i)=>`<div class="bar-group"><div class="bar-pair"><div class="bar bar-inc" style="height:${Math.round((incData[i]/maxV)*110)}px"></div><div class="bar bar-exp" style="height:${Math.round((expData[i]/maxV)*110)}px"></div></div><div class="bar-lbl">${lbl}</div></div>`).join("")}</div><div class="bar-legend"><span class="bar-legend-item"><span class="bar-dot inc"></span>${t("income")}</span><span class="bar-legend-item"><span class="bar-dot exp"></span>${t("expense")}</span></div>`;
}

// ─── AI INSIGHT ──────────────────────────────────────────────────────────────────
function generateAiInsight() {
  const el=document.getElementById("aiInsightText"); if(!el) return;
  const ym=monthISO();
  const mExp=S.transactions.filter(t=>t.type==="expense"&&t.date&&t.date.startsWith(ym));
  const total=mExp.reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  if(!total){el.textContent=t("ai_no_data");return;}
  const cats={};
  mExp.forEach(tx=>{const k=tx.category||"c_other_e";cats[k]=(cats[k]||0)+toUZS(tx.amount,tx.currency);});
  const [topId,topVal]=Object.entries(cats).sort((a,b)=>b[1]-a[1])[0];
  const topCat=getCat(topId);
  const pct=Math.round((topVal/total)*100);
  el.textContent=pct>40?`${topCat?topCat.emoji+" "+catName(topCat):t("expense")} — ${pct}%`:`${fmt(total)} ${t("expense").toLowerCase()}`;
}

// ─── TXN LIST ────────────────────────────────────────────────────────────────────
function renderTxnList(containerId,txns,showActions) {
  const el=document.getElementById(containerId);
  if(!txns||!txns.length){el.innerHTML=`<div class="empty-state"><div class="empty-ico">📭</div><div>${t("no_txn")}</div></div>`;return;}
  const grouped={};
  txns.forEach(tx=>{const d=tx.date||"—";if(!grouped[d])grouped[d]=[];grouped[d].push(tx);});
  let html="";
  Object.keys(grouped).sort((a,b)=>b.localeCompare(a)).forEach(date=>{
    const list=grouped[date];
    const dNet=list.reduce((s,tx)=>{const v=toUZS(tx.amount,tx.currency);return s+(tx.type==="income"||tx.type==="debt_taken"?v:-v);},0);
    html+=`<div class="txn-date-head"><span>${fmtDate(date)}</span><span class="${dNet>=0?"pos":"neg"}">${fmt(dNet)}</span></div>`;
    list.forEach(tx=>{
      const cat=getCat(tx.category);
      const emoji=cat?cat.emoji:(tx.type==="debt_given"?"💸":tx.type==="debt_taken"?"💰":"📦");
      const color=cat&&cat.color?cat.color:"#9BA3B8";
      const name=cat?catName(cat):t(tx.type==="income"?"income":tx.type.startsWith("debt")?tx.type:"expense");
      const sign=(tx.type==="income"||tx.type==="debt_taken")?"+":"-";
      const cls=tx.type==="income"?"pos":tx.type==="debt_given"?"warn":tx.type==="debt_taken"?"info":"neg";
      const tags=tx.tags&&tx.tags.length?tx.tags.map(g=>`<span class="tag-badge">#${g}</span>`).join(""):"";
      html+=`<div class="txn-item"><div class="txn-emoji" style="background:${color}22;border:1.5px solid ${color}44">${emoji}</div><div class="txn-info"><div class="txn-name">${name}</div><div class="txn-meta">${tx.debtPerson?"👤 "+tx.debtPerson+" · ":""}${tx.note?tx.note+" · ":""}${fmtDate(tx.date)}</div>${tags?`<div class="txn-tags">${tags}</div>`:""}</div><div class="txn-right"><div class="txn-amount ${cls}">${sign}${fmt(tx.amount,tx.currency)}</div>${showActions?`<div class="txn-actions"><button class="txn-act-btn receipt" onclick="showReceipt('${tx.id}')">🧾</button><button class="txn-act-btn edit" onclick="startEditTxn('${tx.id}')">✏️</button><button class="txn-act-btn del" onclick="delTxnConfirm('${tx.id}')">🗑</button></div>`:""}</div></div>`;
    });
  });
  el.innerHTML=html;
}

// ─── HISTORY ─────────────────────────────────────────────────────────────────────
function toggleAllHistory() {
  showingAll=!showingAll;
  document.getElementById("allHistory").classList.toggle("hidden",!showingAll);
  const sb=document.getElementById("seeAllBtn"); if(sb) sb.textContent=showingAll?"↑ Yopish":t("see_all")+" →";
  if(showingAll){updateHistoryMonths();applyHistoryFilters();}
}
function updateHistoryMonths() {
  const months=[...new Set(S.transactions.map(t=>t.date?t.date.substr(0,7):null).filter(Boolean))].sort((a,b)=>b.localeCompare(a));
  const mNames=["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"];
  const sel=document.getElementById("filterMonth"); const cur=sel.value;
  sel.innerHTML=`<option value="all">${t("see_all")}</option>`+months.map(m=>{const[y,mo]=m.split("-");return`<option value="${m}">${mNames[parseInt(mo)-1]} ${y}</option>`;}).join("");
  if(cur) sel.value=cur;
}
function applyHistoryFilters() {
  const search=(document.getElementById("histSearch").value||"").toLowerCase();
  const type=document.getElementById("filterType").value;
  const month=document.getElementById("filterMonth").value;
  let txns=[...S.transactions];
  if(type!=="all") txns=txns.filter(t=>t.type===type);
  if(month!=="all") txns=txns.filter(t=>t.date&&t.date.startsWith(month));
  if(search) txns=txns.filter(t=>{
    const c=getCat(t.category);
    return(c&&catName(c).toLowerCase().includes(search))||(t.note&&t.note.toLowerCase().includes(search))||(t.tags&&t.tags.some(g=>g.toLowerCase().includes(search)));
  });
  txns.sort((a,b)=>new Date(b.date+"T"+(b.time||"00:00"))-new Date(a.date+"T"+(a.time||"00:00")));
  renderTxnList("histList",txns,true);
}

// ─── RECEIPT ─────────────────────────────────────────────────────────────────────
function showReceipt(id) {
  const tx=S.transactions.find(x=>x.id===id); if(!tx) return;
  receiptTxnId=id;
  const cat=getCat(tx.category);
  const typeName={income:t("income"),expense:t("expense"),debt_given:t("debt_given"),debt_taken:t("debt_taken")}[tx.type]||tx.type;
  document.getElementById("receiptContent").innerHTML=`<div class="receipt-head"><div class="receipt-logo">💸 SpendUZ Pro</div><div class="receipt-date">${fmtDate(tx.date)} ${tx.time||""}</div></div><div class="receipt-div">- - - - - - - - - -</div><div class="receipt-row"><span>Tur:</span><span>${typeName}</span></div><div class="receipt-row"><span>${t("cat")}:</span><span>${cat?cat.emoji+" "+catName(cat):t("expense")}</span></div><div class="receipt-row"><span>${t("amount")}:</span><span class="receipt-amount">${fmt(tx.amount,tx.currency)}</span></div>${tx.debtPerson?`<div class="receipt-row"><span>👤:</span><span>${tx.debtPerson}</span></div>`:""}${tx.note?`<div class="receipt-row"><span>${t("note")}:</span><span>${tx.note}</span></div>`:""}<div class="receipt-div">- - - - - - - - - -</div><div class="receipt-foot">SpendUZ Pro · @Spend_uz_bot</div>`;
  openM("receiptModal");
}
function shareReceipt() {
  const tx=S.transactions.find(x=>x.id===receiptTxnId); if(!tx) return;
  const cat=getCat(tx.category);
  const text=`💸 SpendUZ\n${t(tx.type)}: ${fmt(tx.amount,tx.currency)}\n${cat?cat.emoji+" "+catName(cat):""}\n${tx.note?t("note")+": "+tx.note+"\n":""}${fmtDate(tx.date)}`;
  if(navigator.share) navigator.share({title:"SpendUZ",text}).catch(()=>{});
  else if(navigator.clipboard) navigator.clipboard.writeText(text).then(()=>toast(t("copied")));
}

// ─── ADD/EDIT TXN ────────────────────────────────────────────────────────────────
function resetAddForm() {
  editTxnId=null;
  ["editId","amountInput","noteInput","tagsInput","debtPerson"].forEach(id=>{const el=document.getElementById(id);if(el)el.value="";});
  document.getElementById("dateInput").value=todayISO();
  document.getElementById("repeatSel").value="none";
  document.getElementById("currSel").value=S.settings.currency||"uzs";
  document.getElementById("selCat").value="";
  document.getElementById("catSearch").value="";
  document.getElementById("addTitle").textContent=t("add");
  document.getElementById("submitBtn").textContent="✓ "+t("save");
  document.getElementById("cancelEdit").classList.add("hidden");
  currentTxType="expense"; setTxType("expense");
}
function setTxType(type) {
  currentTxType=type;
  document.querySelectorAll(".type-tab[data-type]").forEach(b=>b.classList.toggle("active",b.dataset.type===type));
  document.getElementById("selCat").value="";
  document.getElementById("catSearch").value="";
  const dw=document.getElementById("debtWrap");
  if(dw) dw.classList.toggle("hidden",type!=="debt_given"&&type!=="debt_taken");
  updateDebtLabels(); updateNotePlaceholder(); renderCatGrid();
}
function renderCatGrid(filter="") {
  const grid=document.getElementById("catGrid"); if(!grid) return;
  let cats=getCatsByType(currentTxType);
  if(!cats.length&&(currentTxType==="debt_given"||currentTxType==="debt_taken")) cats=getCatsByType("expense");
  if(filter){const f=filter.toLowerCase();cats=cats.filter(c=>catName(c).toLowerCase().includes(f)||c.emoji.includes(f));}
  const selId=document.getElementById("selCat").value;
  if(!cats.length){grid.innerHTML=`<div class="cat-empty">${t("no_txn")}</div>`;return;}
  grid.innerHTML=cats.map(c=>{
    const sel=selId===c.id;
    const style=sel&&c.color?`border-color:${c.color};color:${c.color};background:${c.color}22`:"";
    return `<button class="cat-chip ${sel?"sel":""}" style="${style}" onclick="selectCat('${c.id}')"><span>${c.emoji}</span><span>${catName(c)}</span></button>`;
  }).join("");
}
function selectCat(id) {document.getElementById("selCat").value=id;renderCatGrid(document.getElementById("catSearch").value);}
function onNoteAI(val) {
  if(!val||document.getElementById("selCat").value) return;
  const catId=detectCat(val); if(!catId) return;
  const cat=getCat(catId);
  if(cat&&(cat.type===currentTxType||currentTxType==="debt_given"||currentTxType==="debt_taken")){
    document.getElementById("selCat").value=catId; renderCatGrid();
    toast("🤖 "+t("voice_detected")+" "+catName(cat));
  }
}
function submitTxn() {
  const amount=parseFloat(document.getElementById("amountInput").value);
  const catId=document.getElementById("selCat").value;
  const date=document.getElementById("dateInput").value;
  const note=document.getElementById("noteInput").value.trim();
  const tagsRaw=document.getElementById("tagsInput").value.trim();
  const repeat=document.getElementById("repeatSel").value;
  const currency=document.getElementById("currSel").value;
  const person=document.getElementById("debtPerson").value.trim();
  const tags=tagsRaw?tagsRaw.split(",").map(g=>g.trim().replace(/^#/,"")).filter(Boolean):[];
  if(!amount||amount<=0){toast(t("enter_amount"),"error");return;}
  if(!catId){toast(t("select_cat"),"error");return;}
  if(!date){toast(t("enter_date"),"error");return;}
  if(editTxnId){
    const idx=S.transactions.findIndex(t=>t.id===editTxnId);
    if(idx!==-1) S.transactions[idx]={...S.transactions[idx],amount,category:catId,date,note,type:currentTxType,repeat,currency,debtPerson:person,tags};
    toast(t("updated"));
  }else{
    S.transactions.push({id:genId(),type:currentTxType,amount,category:catId,date,note,repeat,currency,debtPerson:person,tags,time:new Date().toTimeString().substr(0,5),createdAt:Date.now()});
    toast(t("saved"));
  }
  saveS(); resetAddForm(); switchTab("home");
}
function startEditTxn(id) {
  const tx=S.transactions.find(x=>x.id===id); if(!tx) return;
  editTxnId=id; switchTab("add");
  document.getElementById("addTitle").textContent=t("add");
  document.getElementById("submitBtn").textContent="✓ "+t("save");
  document.getElementById("cancelEdit").classList.remove("hidden");
  currentTxType=tx.type; setTxType(tx.type);
  document.getElementById("amountInput").value=tx.amount;
  document.getElementById("dateInput").value=tx.date;
  document.getElementById("noteInput").value=tx.note||"";
  document.getElementById("tagsInput").value=tx.tags?tx.tags.join(", "):"";
  document.getElementById("repeatSel").value=tx.repeat||"none";
  document.getElementById("currSel").value=tx.currency||"uzs";
  document.getElementById("debtPerson").value=tx.debtPerson||"";
  document.getElementById("selCat").value=tx.category;
  renderCatGrid();
}
function delTxnConfirm(id) {
  confirm2(t("confirm"),t("delete_q"),()=>{
    S.transactions=S.transactions.filter(t=>t.id!==id);
    saveS(); if(showingAll) applyHistoryFilters(); renderHome(); toast(t("deleted"));
  });
}

// ─── REPEATING ───────────────────────────────────────────────────────────────────
function scheduleRepeating() {
  const today=todayISO(); const toAdd=[];
  S.transactions.filter(tx=>tx.repeat&&tx.repeat!=="none").forEach(tx=>{
    if(tx.lastRepeat===today) return;
    const last=new Date(tx.lastRepeat||tx.date),now2=new Date(today);
    let due=false;
    if(tx.repeat==="daily") due=true;
    if(tx.repeat==="weekly") due=(now2-last)>=7*86400000;
    if(tx.repeat==="monthly") due=now2.getMonth()!==last.getMonth()||now2.getFullYear()!==last.getFullYear();
    if(due){toAdd.push({...tx,id:genId(),date:today,lastRepeat:today,repeat:"none",createdAt:Date.now()});tx.lastRepeat=today;}
  });
  if(toAdd.length){S.transactions.push(...toAdd);saveS();}
}

// ─── PDF ─────────────────────────────────────────────────────────────────────────
function exportPDF() {
  toast(t("pdf_ready"),"warn");
  const ym=monthISO();
  const mTxns=S.transactions.filter(t=>t.date&&t.date.startsWith(ym));
  const mInc=mTxns.filter(t=>t.type==="income").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mExp=mTxns.filter(t=>t.type==="expense").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mNet=mInc-mExp;
  const now=new Date();
  const months=["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"];
  const cats={};
  mTxns.filter(t=>t.type==="expense").forEach(t=>{const c=getCat(t.category);const k=c?catName(c):"Boshqa";cats[k]=(cats[k]||0)+toUZS(t.amount,t.currency);});
  const catRows=Object.entries(cats).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<tr><td>${k}</td><td style="text-align:right;font-weight:700">${v.toLocaleString()} som</td></tr>`).join("");
  const txRows=[...S.transactions].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,30).map(tx=>{
    const cat=getCat(tx.category);
    const sign=(tx.type==="income"||tx.type==="debt_taken")?"+":"-";
    const col=sign==="+"?"#00b87d":"#c73650";
    return `<tr><td>${tx.date}</td><td>${cat?cat.emoji+" "+catName(cat):"Boshqa"}</td><td>${tx.note||"-"}</td><td style="text-align:right;color:${col};font-weight:700">${sign}${tx.amount.toLocaleString()} ${(tx.currency||"uzs").toUpperCase()}</td></tr>`;
  }).join("");
  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>SpendUZ Hisobot</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,sans-serif;padding:24px;color:#1a1e2e;font-size:13px}.hdr{text-align:center;margin-bottom:20px;border-bottom:2px solid #00E5A0;padding-bottom:14px}.hdr h1{font-size:22px;color:#00b87d}.hdr p{color:#5A6278;margin-top:3px}.sum{display:flex;gap:12px;margin-bottom:20px}.sc{flex:1;padding:12px;border:1px solid #E8EBF2;border-radius:8px;text-align:center}.sl{font-size:10px;color:#9BA3B8;text-transform:uppercase;margin-bottom:3px}.sv{font-size:15px;font-weight:700}.pos{color:#00b87d}.neg{color:#c73650}h3{margin:16px 0 8px;font-size:12px;color:#5A6278;text-transform:uppercase;letter-spacing:1px}table{width:100%;border-collapse:collapse;margin-bottom:16px}th{background:#F2F4F8;padding:8px;text-align:left;font-size:11px;color:#5A6278}td{padding:7px 8px;border-bottom:1px solid #F2F4F8;font-size:11px}.ft{text-align:center;color:#9BA3B8;font-size:10px;margin-top:20px;border-top:1px solid #E8EBF2;padding-top:12px}</style></head><body><div class="hdr"><h1>💸 SpendUZ Pro</h1><p>${months[now.getMonth()]} ${now.getFullYear()} hisoboti</p><p>${S.profile.avatar} ${S.profile.name}</p></div><div class="sum"><div class="sc"><div class="sl">Daromad</div><div class="sv pos">${mInc.toLocaleString()} som</div></div><div class="sc"><div class="sl">Xarajat</div><div class="sv neg">${mExp.toLocaleString()} som</div></div><div class="sc"><div class="sl">Balans</div><div class="sv ${mNet>=0?"pos":"neg"}">${mNet.toLocaleString()} som</div></div></div><h3>Kategoriyalar</h3><table><tr><th>Kategoriya</th><th style="text-align:right">Summa</th></tr>${catRows||"<tr><td colspan=2>Malumot yoq</td></tr>"}</table><h3>Tranzaksiyalar (30 ta)</h3><table><tr><th>Sana</th><th>Kategoriya</th><th>Izoh</th><th style="text-align:right">Summa</th></tr>${txRows||"<tr><td colspan=4>Malumot yoq</td></tr>"}</table><div class="ft">SpendUZ Pro · @Spend_uz_bot · ${now.toISOString().split("T")[0]}</div></body></html>`;
  try{const win=window.open("","_blank");if(!win){toast(t("pdf_blocked"),"error");return;}win.document.write(html);win.document.close();win.focus();setTimeout(()=>win.print(),600);}
  catch(e){toast(t("pdf_blocked"),"error");}
}

// ─── VOICE ───────────────────────────────────────────────────────────────────────
function toggleMic() {
  if(micActive){stopMic();return;}
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){toast(t("mic_no"),"error");return;}
  micRecog=new SR();
  micRecog.continuous=false; micRecog.interimResults=false;
  micRecog.lang={uz:"uz-UZ",ru:"ru-RU",en:"en-US",tj:"tg-TG"}[S.settings.lang]||"uz-UZ";
  micActive=true; updateMicUI(true);
  micRecog.onresult=e=>{processVoice(e.results[0][0].transcript);stopMic();};
  micRecog.onerror=()=>{toast(t("voice_fail"),"error");stopMic();};
  micRecog.onend=()=>stopMic();
  micRecog.start();
}
function stopMic() {
  micActive=false;
  if(micRecog){try{micRecog.stop();}catch(e){}micRecog=null;}
  updateMicUI(false);
}
function updateMicUI(active) {
  const btn=document.getElementById("micBtn");
  const st=document.getElementById("micStatus");
  const qBtn=document.getElementById("quickMicBtn");
  if(btn){btn.textContent=active?"🔴 Gapiring...":"🎙️ Ovoz bilan toldirishg";btn.classList.toggle("active",active);}
  if(st) st.classList.toggle("hidden",!active);
  if(qBtn){qBtn.textContent=active?"🔴 Tinglayapti...":"🎙️ Ovoz";qBtn.classList.toggle("mic-q",!active);}
}
function processVoice(text) {
  toast("🎤 "+text);
  const [amount,currency]=parseVoiceAmount(text);
  if(!amount){toast(t("voice_no_amount"),"error");return;}
  const low=text.toLowerCase();
  let txType="expense";
  if(["oylik","daromad","maosh","salary","bonus","зарплата","доход","маош"].some(w=>low.includes(w))) txType="income";
  else if(["qarz berdim","берди","lent"].some(w=>low.includes(w))) txType="debt_given";
  else if(["qarz oldim","взял","borrowed"].some(w=>low.includes(w))) txType="debt_taken";
  const aiCat=detectCat(text);
  switchTab("add");
  setTimeout(()=>{
    setTxType(txType);
    document.getElementById("amountInput").value=amount;
    document.getElementById("currSel").value=currency;
    document.getElementById("noteInput").value=text;
    if(aiCat){
      const cat=getCat(aiCat);
      if(cat){document.getElementById("selCat").value=aiCat;renderCatGrid();toast("🤖 "+t("voice_detected")+" "+catName(cat));}
    }
  },300);
}

// ─── BUDGET ──────────────────────────────────────────────────────────────────────
function renderBudget() {
  const ym=monthISO();
  const mTxns=S.transactions.filter(t=>t.type==="expense"&&t.date&&t.date.startsWith(ym));
  let tLimit=0,tSpent=0;
  S.budgets.forEach(b=>{b._spent=mTxns.filter(t=>t.category===b.categoryId).reduce((s,t)=>s+toUZS(t.amount,t.currency),0);tLimit+=b.limit;tSpent+=b._spent;});
  const sumEl=document.getElementById("budgetSummary");
  if(sumEl) sumEl.innerHTML=`<div class="bsum-item"><div class="bsum-lbl">${t("budget_limit")}</div><div class="bsum-val">${fmt(tLimit)}</div></div><div class="bsum-item"><div class="bsum-lbl">${t("budget_spent")}</div><div class="bsum-val warn">${fmt(tSpent)}</div></div><div class="bsum-item"><div class="bsum-lbl">${t("budget_left")}</div><div class="bsum-val good">${fmt(tLimit-tSpent)}</div></div>`;
  const list=document.getElementById("budgetList"); if(!list) return;
  if(!S.budgets.length){list.innerHTML=`<div class="empty-state"><div class="empty-ico">📊</div><div>${t("no_budget")}</div></div>`;return;}
  list.innerHTML=S.budgets.map(b=>{
    const cat=getCat(b.categoryId);
    const color=cat&&cat.color?cat.color:"#00E5A0";
    const spent=b._spent||0;
    const pct=b.limit>0?Math.min(100,Math.round((spent/b.limit)*100)):0;
    const over=spent>b.limit;
    return `<div class="budget-item"><div class="budget-top"><div class="budget-cat"><span class="budget-em" style="background:${color}22">${cat?cat.emoji:"📦"}</span><span class="budget-cat-name">${cat?catName(cat):b.categoryId}</span></div><button class="txn-act-btn del" onclick="delBudget('${b.id}')">🗑</button></div><div class="budget-bar-bg"><div class="budget-bar-fill" style="width:${pct}%;background:${over?"var(--danger)":color}"></div></div><div class="budget-nums"><span class="${over?"neg":""}">${fmt(spent)} / ${fmt(b.limit)}</span><span class="${over?"neg":"warn"}">${pct}%</span></div></div>`;
  }).join("");
}
function openAddBudget() {
  const sel=document.getElementById("budgetCatSel");
  sel.innerHTML=getCatsByType("expense").map(c=>`<option value="${c.id}">${c.emoji} ${catName(c)}</option>`).join("");
  document.getElementById("budgetLimit").value="";
  document.getElementById("budgetMonth").value=monthISO();
  openM("budgetModal");
}
function saveBudget() {
  const catId=document.getElementById("budgetCatSel").value;
  const limit=parseFloat(document.getElementById("budgetLimit").value);
  const month=document.getElementById("budgetMonth").value;
  if(!catId||!limit||limit<=0||!month){toast(t("fill_all"),"error");return;}
  const ex=S.budgets.find(b=>b.categoryId===catId&&b.month===month);
  if(ex) ex.limit=limit;
  else S.budgets.push({id:genId(),categoryId:catId,limit,month,createdAt:Date.now()});
  saveS();closeM("budgetModal");renderBudget();toast(t("saved"));
}
function delBudget(id) {
  confirm2(t("confirm"),t("delete_q"),()=>{S.budgets=S.budgets.filter(b=>b.id!==id);saveS();renderBudget();toast(t("deleted"));});
}

// ─── GOALS ───────────────────────────────────────────────────────────────────────
function renderGoals() {
  const statsEl=document.getElementById("goalsStats");
  if(S.goals.length>0&&statsEl){
    const done=S.goals.filter(g=>g.current>=g.target).length;
    const totalSaved=S.goals.reduce((s,g)=>s+g.current,0);
    statsEl.innerHTML=`<div class="gstat"><div class="gstat-val">${S.goals.length}</div><div class="gstat-lbl">${t("goals")}</div></div><div class="gstat"><div class="gstat-val pos">${done}</div><div class="gstat-lbl">Bajarildi</div></div><div class="gstat"><div class="gstat-val">${fmt(totalSaved)}</div><div class="gstat-lbl">Jamgarma</div></div>`;
  }else if(statsEl) statsEl.innerHTML="";
  const list=document.getElementById("goalsList"); if(!list) return;
  if(!S.goals.length){list.innerHTML=`<div class="empty-state"><div class="empty-ico">🎯</div><div>${t("no_goal")}</div></div>`;return;}
  list.innerHTML=S.goals.map(g=>{
    const pct=g.target>0?Math.min(100,Math.round((g.current/g.target)*100)):0;
    const done=pct>=100;
    const left=g.target-g.current;
    const daysLeft=g.deadline?Math.ceil((new Date(g.deadline)-new Date())/86400000):null;
    const dlText=daysLeft!==null?(daysLeft>0?daysLeft+"k":daysLeft===0?"Bugun":"❗"):"";
    return `<div class="goal-card ${done?"done":""}"><div class="goal-top"><div class="goal-info"><span class="goal-emoji">${g.emoji||"🎯"}</span><div><div class="goal-name">${g.name} ${done?"✅":""}</div>${g.deadline?`<div class="goal-deadline">📅 ${fmtDate(g.deadline)} ${dlText?"· "+dlText:""}</div>`:""}</div></div><div class="goal-actions">${!done?`<button class="goal-add-btn" onclick="addToGoal('${g.id}')">➕ Qoshish</button>`:""}<button class="txn-act-btn edit" onclick="editGoalOpen('${g.id}')">✏️</button><button class="txn-act-btn del" onclick="delGoal('${g.id}')">🗑</button></div></div><div class="goal-bar-bg"><div class="goal-bar ${done?"done":""}" style="width:${pct}%"></div></div><div class="goal-nums"><span>${fmt(g.current)} / ${fmt(g.target)}</span><span class="${done?"pos":"warn"}">${pct}%${done?" 🎉":" · "+fmt(left)}</span></div></div>`;
  }).join("");
}
function openAddGoal() {
  editGoalId=null;
  ["goalName","goalDeadline"].forEach(id=>{const el=document.getElementById(id);if(el)el.value="";});
  document.getElementById("goalEmoji").value="🎯";
  document.getElementById("goalTarget").value="";
  document.getElementById("goalCurrent").value="0";
  document.getElementById("goalModalTitle").textContent=t("add_goal");
  openM("goalModal");
}
function editGoalOpen(id) {
  const g=S.goals.find(x=>x.id===id); if(!g) return;
  editGoalId=id;
  document.getElementById("goalName").value=g.name;
  document.getElementById("goalEmoji").value=g.emoji||"🎯";
  document.getElementById("goalTarget").value=g.target;
  document.getElementById("goalCurrent").value=g.current;
  document.getElementById("goalDeadline").value=g.deadline||"";
  document.getElementById("goalModalTitle").textContent="✏️ Maqsadni tahrirlash";
  openM("goalModal");
}
function saveGoal() {
  const name=document.getElementById("goalName").value.trim();
  const emoji=document.getElementById("goalEmoji").value.trim()||"🎯";
  const target=parseFloat(document.getElementById("goalTarget").value);
  const current=parseFloat(document.getElementById("goalCurrent").value)||0;
  const deadline=document.getElementById("goalDeadline").value;
  if(!name||!target||target<=0){toast(t("fill_all"),"error");return;}
  if(editGoalId){
    const idx=S.goals.findIndex(g=>g.id===editGoalId);
    if(idx!==-1) S.goals[idx]={...S.goals[idx],name,emoji,target,current,deadline};
    toast(t("updated")); editGoalId=null;
  }else{
    S.goals.push({id:genId(),name,emoji,target,current,deadline,createdAt:Date.now()});
    toast(t("saved"));
  }
  saveS();closeM("goalModal");renderGoals();
}
function addToGoal(id) {
  addToGoalId=id;
  const g=S.goals.find(x=>x.id===id); if(!g) return;
  document.getElementById("goalAddTitle").textContent=g.emoji+" "+g.name;
  document.getElementById("goalAddAmount").value="";
  openM("goalAddModal");
}
function saveGoalAdd() {
  const amount=parseFloat(document.getElementById("goalAddAmount").value);
  if(!amount||amount<=0){toast(t("enter_amount"),"error");return;}
  const g=S.goals.find(x=>x.id===addToGoalId); if(!g) return;
  g.current=Math.min(g.target,g.current+amount);
  saveS();closeM("goalAddModal");renderGoals();
  if(g.current>=g.target) toast("🎉 "+t("goal_done"));
  else toast(fmt(amount)+" "+t("saved"));
}
function delGoal(id) {
  confirm2(t("confirm"),t("delete_q"),()=>{S.goals=S.goals.filter(g=>g.id!==id);saveS();renderGoals();toast(t("deleted"));});
}

// ─── CATEGORIES ──────────────────────────────────────────────────────────────────
function renderColorPicker() {
  document.getElementById("colorPicker").innerHTML=CAT_COLORS.map(c=>`<button class="color-swatch ${selCatColor===c?"sel":""}" style="background:${c}" onclick="pickColor('${c}')"></button>`).join("");
}
function pickColor(c) {selCatColor=c;document.getElementById("newCatColor").value=c;renderColorPicker();}
function openAddCat(preType) {
  if(preType) currentCatType=preType;
  document.getElementById("newCatName").value="";
  document.getElementById("newCatEmoji").value="";
  selCatColor="#00E5A0"; document.getElementById("newCatColor").value="#00E5A0";
  document.querySelectorAll(".tgl-btn[data-cattype]").forEach(b=>b.classList.toggle("active",b.dataset.cattype===currentCatType));
  document.getElementById("emojiPicker").innerHTML=EMOJI_LIST.map(e=>`<button class="emoji-btn" onclick="document.getElementById('newCatEmoji').value='${e}'">${e}</button>`).join("");
  renderColorPicker(); openM("catModal");
}
function saveCat() {
  const name=document.getElementById("newCatName").value.trim();
  const emoji=document.getElementById("newCatEmoji").value.trim()||"📦";
  const color=document.getElementById("newCatColor").value||"#00E5A0";
  if(!name){toast(t("enter_cat_name"),"error");return;}
  S.categories.push({id:"cc_"+genId(),name,emoji,color,type:currentCatType});
  saveS();closeM("catModal");renderCatGrid();renderSettings();toast(t("cat_added"));
}
function delCat(id) {
  if(S.transactions.some(t=>t.category===id)){toast(t("cat_used"),"error");return;}
  if(DEFAULT_CATS.some(c=>c.id===id)){toast(t("cat_default"),"error");return;}
  confirm2(t("confirm"),t("delete_q"),()=>{S.categories=S.categories.filter(c=>c.id!==id);saveS();renderSettings();toast(t("deleted"));});
}

// ─── SETTINGS ────────────────────────────────────────────────────────────────────
function renderSettings() {
  document.getElementById("profileAv").textContent=S.profile.avatar||"😊";
  document.getElementById("profileName").textContent=S.profile.name;
  document.getElementById("profileUser").textContent=S.profile.username||"@spenduz";
  if(S.profile.joinedAt){const d=new Date(S.profile.joinedAt);document.getElementById("profileSince").textContent=d.toLocaleDateString("uz-UZ",{day:"2-digit",month:"long",year:"numeric"});}
  const allInc=S.transactions.filter(t=>t.type==="income").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const allExp=S.transactions.filter(t=>t.type==="expense").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  document.getElementById("pstatTxn").textContent=S.transactions.length;
  document.getElementById("pstatInc").textContent=fmt(allInc);
  document.getElementById("pstatExp").textContent=fmt(allExp);
  document.getElementById("editName").value=S.profile.name;
  document.getElementById("editUser").value=S.profile.username||"";
  document.getElementById("themeToggle").checked=S.settings.theme==="dark";
  document.getElementById("curSelect").value=S.settings.currency||"uzs";
  document.getElementById("notifToggle").checked=S.settings.notifEnabled;
  document.getElementById("notifTime").value=S.settings.notifTime||"21:00";
  updatePinStatus(); updateNotifStatus();
  document.querySelectorAll("#settingsLangGrid .lang-btn").forEach(b=>b.classList.toggle("active",b.dataset.lang===S.settings.lang));
  const custom=S.categories.filter(c=>!DEFAULT_CATS.some(d=>d.id===c.id));
  document.getElementById("catManageList").innerHTML=custom.length?custom.map(c=>`<div class="cat-manage-item"><span>${c.emoji}</span><span class="cat-m-name">${catName(c)}</span><span class="cat-color-dot" style="background:${c.color||"#9BA3B8"}"></span><span class="cat-type-badge ${c.type}">${c.type==="expense"?t("expense"):t("income")}</span><button class="txn-act-btn del" onclick="delCat('${c.id}')">🗑</button></div>`).join(""):
  `<div style="padding:10px 13px;font-size:12px;color:var(--text3)">${t("no_custom_cats")}</div>`;
  document.getElementById("familyList").innerHTML=S.family.length?S.family.map(f=>`<div class="family-item"><span>${f.emoji||"👤"}</span><span class="family-name">${f.name}</span><button class="txn-act-btn del" onclick="delFamily('${f.id}')">🗑</button></div>`).join(""):
  `<div style="padding:10px 13px;font-size:12px;color:var(--text3)">${t("no_family")}</div>`;
}
function saveProfile() {
  const name=document.getElementById("editName").value.trim();
  const user=document.getElementById("editUser").value.trim();
  if(!name){toast(t("enter_name"),"error");return;}
  S.profile.name=name; S.profile.username=user||("@"+name.toLowerCase().replace(/\s+/g,""));
  saveS();updateTopBar();renderSettings();toast(t("profile_saved"));
}
function saveFamilyMember() {
  const name=document.getElementById("familyName").value.trim();
  const emoji=document.getElementById("familyEmoji").value.trim()||"👤";
  if(!name){toast(t("enter_member_name"),"error");return;}
  S.family.push({id:genId(),name,emoji});
  saveS();closeM("familyModal");renderSettings();toast(t("member_added"));
}
function delFamily(id) {
  confirm2(t("confirm"),t("delete_q"),()=>{S.family=S.family.filter(f=>f.id!==id);saveS();renderSettings();toast(t("deleted"));});
}
function exportData() {
  const blob=new Blob([JSON.stringify(S,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a"); a.href=url; a.download="spenduz_"+todayISO()+".json"; a.click();
  URL.revokeObjectURL(url); toast(t("export_done"));
}
function importData(file) {
  if(!file) return;
  const r=new FileReader();
  r.onload=e=>{
    try{
      const p=JSON.parse(e.target.result);
      if(p.transactions!==undefined){
        S.transactions=p.transactions||[]; S.goals=p.goals||[]; S.budgets=p.budgets||[];
        S.family=p.family||[]; S.categories=(p.categories&&p.categories.length)?p.categories:DEFAULT_CATS.map(c=>({...c}));
        S.settings=Object.assign({},S.settings,p.settings||{});
        if(p.profile) S.profile=Object.assign({},S.profile,p.profile);
        saveS();applyTheme(S.settings.theme);applyLang(S.settings.lang);updateTopBar();renderHome();renderSettings();toast(t("import_done"));
      }else toast(t("wrong_file"),"error");
    }catch{toast(t("wrong_file"),"error");}
  };
  r.readAsText(file);
}
function resetAll() {
  confirm2(t("confirm"),t("reset_confirm"),()=>{
    S.transactions=[];S.goals=[];S.budgets=[];S.family=[];S.aiHistory=[];
    S.categories=DEFAULT_CATS.map(c=>({...c}));
    S.settings={lang:S.settings.lang,theme:"dark",currency:"uzs",pin:null,pinEnabled:false,notifEnabled:false,notifTime:"21:00"};
    saveS();applyTheme("dark");renderHome();renderSettings();toast(t("deleted"));
  });
}

// ─── AI CHAT ─────────────────────────────────────────────────────────────────────
function renderAiQuickBtns() {
  const el=document.getElementById("aiQuick"); if(!el) return;
  el.innerHTML=[t("ai_q1"),t("ai_q2"),t("ai_q3"),t("ai_q4")].map(q=>`<button class="ai-q-btn" onclick="aiQuick('${q}')">${q}</button>`).join("");
}
function initAiChat() {
  const msgs=document.getElementById("aiMessages"); if(!msgs) return;
  renderAiQuickBtns();
  if(!S.aiHistory.length){
    msgs.innerHTML=`<div class="ai-msg bot"><div class="ai-av">🤖</div><div class="ai-bubble">${t("ai_welcome")}</div></div>`;
  }else{
    msgs.innerHTML=S.aiHistory.map(m=>`<div class="ai-msg ${m.role}">${m.role==="bot"?`<div class="ai-av">🤖</div>`:""}<div class="ai-bubble">${m.text}</div>${m.role==="user"?`<div class="ai-av user">${S.profile.avatar||"😊"}</div>`:""}</div>`).join("");
    msgs.scrollTop=msgs.scrollHeight;
  }
}
function aiQuick(q) {document.getElementById("aiInput").value=q;sendAiMsg();}
function buildAiReply(question) {
  const ym=monthISO();
  const mTxns=S.transactions.filter(t=>t.date&&t.date.startsWith(ym));
  const mInc=mTxns.filter(t=>t.type==="income").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mExp=mTxns.filter(t=>t.type==="expense").reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mNet=mInc-mExp;
  const q=question.toLowerCase();
  const lang=S.settings.lang;
  if(!S.transactions.length) return t("ai_no_data");
  const cats={};
  mTxns.filter(t=>t.type==="expense").forEach(tx=>{const c=getCat(tx.category);const k=c?catName(c):t("expense");cats[k]=(cats[k]||0)+toUZS(tx.amount,tx.currency);});
  const sorted=Object.entries(cats).sort((a,b)=>b[1]-a[1]);
  const total=sorted.reduce((s,[,v])=>s+v,0);
  const top=sorted[0];
  const topPct=top&&total>0?Math.round((top[1]/total)*100):0;
  if(["tahlil","анализ","analysis","таҳлил"].some(w=>q.includes(w))){
    if(!total) return {uz:"Bu oy xarajat yoq.",ru:"Расходов нет.",en:"No expenses.",tj:"Xarojot nest."}[lang]||"";
    const lines=sorted.slice(0,5).map(([k,v])=>`• ${k}: ${fmt(v)} (${Math.round((v/total)*100)}%)`).join("\n");
    return `📊 ${lang==="ru"?"Анализ расходов":lang==="en"?"Expense analysis":lang==="tj"?"Tahlili xarojot":"Oylik xarajat tahlili"}:\n\n${lines}\n\n${lang==="ru"?"Итого":lang==="en"?"Total":lang==="tj"?"Jamъ":"Jami"}: ${fmt(total)}`;
  }
  if(["tejash","экономи","sav","sarfakori"].some(w=>q.includes(w))){
    const savePct=mInc>0?Math.round(((mInc-mExp)/mInc)*100):0;
    return {
      uz:`💡 Tejash maslahatlari:\n\n• Daromadning 20% ni tejang\n• ${top?top[0]+" xarajatini kamaytiring":"Katta xarajatlarni kuzating"}\n• Oylik balans: ${fmt(mNet)}\n• Tejash darajasi: ${savePct}%`,
      ru:`💡 Советы:\n\n• Откладывайте 20% дохода\n• Баланс: ${fmt(mNet)}\n• Уровень сбережений: ${savePct}%`,
      en:`💡 Saving tips:\n\n• Save 20% of income\n• Balance: ${fmt(mNet)}\n• Saving rate: ${savePct}%`,
      tj:`💡 Maslahati sarfakori:\n\n• 20% andoxt kuned\n• Balansi mohona: ${fmt(mNet)}`,
    }[lang]||"";
  }
  if(["byudjet","бюджет","budget","naqsha"].some(w=>q.includes(w))){
    if(!mInc) return {uz:"Daromad kiriting.",ru:"Введите доход.",en:"Add income.",tj:"Daromad vorid kuned."}[lang]||"";
    const s={t:Math.round(mInc*0.2),f:Math.round(mInc*0.25),tr:Math.round(mInc*0.1),o:Math.round(mInc*0.45)};
    return {
      uz:`🗓️ Oylik byudjet:\n\n• Tejash: ${fmt(s.t)} (20%)\n• Oziq-ovqat: ${fmt(s.f)} (25%)\n• Transport: ${fmt(s.tr)} (10%)\n• Boshqa: ${fmt(s.o)} (45%)\n\nDaromad: ${fmt(mInc)}`,
      ru:`🗓️ Бюджетный план:\n\n• Сбережения: ${fmt(s.t)} (20%)\n• Еда: ${fmt(s.f)} (25%)\n• Транспорт: ${fmt(s.tr)} (10%)\n• Другое: ${fmt(s.o)} (45%)`,
      en:`🗓️ Budget plan:\n\n• Savings: ${fmt(s.t)} (20%)\n• Food: ${fmt(s.f)} (25%)\n• Transport: ${fmt(s.tr)} (10%)\n• Other: ${fmt(s.o)} (45%)`,
      tj:`🗓️ Naqsha:\n\n• Andoxt: ${fmt(s.t)} (20%)\n• Xuroq: ${fmt(s.f)} (25%)`,
    }[lang]||"";
  }
  if(!top) return t("ai_no_data");
  return {
    uz:`🔍 Asosiy xarajat:\n\n${sorted.slice(0,3).map(([k,v],i)=>`${i+1}. ${k}: ${fmt(v)}`).join("\n")}\n\n${top[0]} — jami xarajatning ${topPct}%.`,
    ru:`🔍 Главные расходы:\n\n${sorted.slice(0,3).map(([k,v],i)=>`${i+1}. ${k}: ${fmt(v)}`).join("\n")}\n\n${top[0]} — ${topPct}%.`,
    en:`🔍 Top expenses:\n\n${sorted.slice(0,3).map(([k,v],i)=>`${i+1}. ${k}: ${fmt(v)}`).join("\n")}\n\n${top[0]} is ${topPct}%.`,
    tj:`🔍 Xarojotхои asosi:\n\n${sorted.slice(0,3).map(([k,v],i)=>`${i+1}. ${k}: ${fmt(v)}`).join("\n")}`,
  }[lang]||"";
}
async function sendAiMsg() {
  if(aiTyping) return;
  const input=document.getElementById("aiInput");
  const text=input.value.trim(); if(!text) return;
  input.value="";
  S.aiHistory.push({role:"user",text});
  addAiMsg("user",text);
  aiTyping=true;
  const typing=addAiTyping();
  await new Promise(r=>setTimeout(r,700));
  typing.remove();
  const reply=buildAiReply(text);
  addAiMsg("bot",reply);
  S.aiHistory.push({role:"bot",text:reply});
  if(S.aiHistory.length>20) S.aiHistory=S.aiHistory.slice(-20);
  saveS(); aiTyping=false;
}
function addAiMsg(role,text) {
  const msgs=document.getElementById("aiMessages");
  const div=document.createElement("div"); div.className=`ai-msg ${role}`;
  div.innerHTML=role==="bot"?`<div class="ai-av">🤖</div><div class="ai-bubble">${text}</div>`:`<div class="ai-bubble">${text}</div><div class="ai-av user">${S.profile.avatar||"😊"}</div>`;
  msgs.appendChild(div); msgs.scrollTop=msgs.scrollHeight; return div;
}
function addAiTyping() {
  const msgs=document.getElementById("aiMessages");
  const div=document.createElement("div"); div.className="ai-msg bot";
  div.innerHTML=`<div class="ai-av">🤖</div><div class="ai-bubble ai-typing"><span></span><span></span><span></span></div>`;
  msgs.appendChild(div); msgs.scrollTop=msgs.scrollHeight; return div;
}

// ─── BIND EVENTS ─────────────────────────────────────────────────────────────────
function bindEvents() {
  // Nav
  document.querySelectorAll(".nav-btn[data-tab]").forEach(b=>b.addEventListener("click",()=>switchTab(b.dataset.tab)));
  // TX type
  document.querySelectorAll(".type-tab[data-type]").forEach(b=>b.addEventListener("click",()=>setTxType(b.dataset.type)));
  // Cat type
  document.querySelectorAll(".tgl-btn[data-cattype]").forEach(b=>b.addEventListener("click",()=>{
    currentCatType=b.dataset.cattype;
    document.querySelectorAll(".tgl-btn[data-cattype]").forEach(x=>x.classList.toggle("active",x.dataset.cattype===currentCatType));
  }));
  // Chart
  document.querySelectorAll(".chart-tab[data-chart]").forEach(b=>b.addEventListener("click",()=>{
    currentChart=b.dataset.chart;
    document.querySelectorAll(".chart-tab").forEach(x=>x.classList.toggle("active",x.dataset.chart===currentChart));
    document.getElementById("donutCard").classList.toggle("hidden",currentChart!=="donut");
    document.getElementById("barCard").classList.toggle("hidden",currentChart!=="bar");
    if(currentChart==="bar") renderBarChart(currentBarPeriod);
  }));
  // Bar period
  document.querySelectorAll(".bar-tab").forEach(b=>b.addEventListener("click",()=>{
    currentBarPeriod=b.dataset.period;
    document.querySelectorAll(".bar-tab").forEach(x=>x.classList.toggle("active",x.dataset.period===currentBarPeriod));
    renderBarChart(currentBarPeriod);
  }));
  // Lang
  document.querySelectorAll(".lang-btn[data-lang]").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));
  // History
  const seeBtn=document.getElementById("seeAllBtn"); if(seeBtn) seeBtn.addEventListener("click",toggleAllHistory);
  const hideBtn=document.getElementById("hideAllBtn"); if(hideBtn) hideBtn.addEventListener("click",toggleAllHistory);
  const hs=document.getElementById("histSearch"); if(hs) hs.addEventListener("input",applyHistoryFilters);
  const ft=document.getElementById("filterType"); if(ft) ft.addEventListener("change",applyHistoryFilters);
  const fm=document.getElementById("filterMonth"); if(fm) fm.addEventListener("change",applyHistoryFilters);
  // Cat search
  const cs=document.getElementById("catSearch"); if(cs) cs.addEventListener("input",e=>renderCatGrid(e.target.value));
  const ni=document.getElementById("noteInput"); if(ni) ni.addEventListener("input",e=>onNoteAI(e.target.value));
  const acb=document.getElementById("addCatBtn"); if(acb) acb.addEventListener("click",()=>openAddCat(currentTxType));
  // Submit
  const sb=document.getElementById("submitBtn"); if(sb) sb.addEventListener("click",submitTxn);
  const ce=document.getElementById("cancelEdit"); if(ce) ce.addEventListener("click",()=>{editTxnId=null;resetAddForm();switchTab("home");});
  // Goals
  document.getElementById("addGoalBtn").addEventListener("click",openAddGoal);
  document.getElementById("saveGoalBtn").addEventListener("click",saveGoal);
  document.getElementById("closeGoalModal").addEventListener("click",()=>closeM("goalModal"));
  document.getElementById("saveGoalAddBtn").addEventListener("click",saveGoalAdd);
  document.getElementById("closeGoalAddModal").addEventListener("click",()=>closeM("goalAddModal"));
  // Budget
  const abb=document.getElementById("addBudgetBtn"); if(abb) abb.addEventListener("click",openAddBudget);
  const svb=document.getElementById("saveBudgetBtn"); if(svb) svb.addEventListener("click",saveBudget);
  const clb=document.getElementById("closeBudgetModal"); if(clb) clb.addEventListener("click",()=>closeM("budgetModal"));
  // Receipt
  document.getElementById("closeReceiptModal").addEventListener("click",()=>closeM("receiptModal"));
  document.getElementById("receiptShareBtn").addEventListener("click",shareReceipt);
  // Cat modal
  document.getElementById("saveCatBtn").addEventListener("click",saveCat);
  document.getElementById("closeCatModal").addEventListener("click",()=>closeM("catModal"));
  const acs=document.getElementById("addCatSettingsBtn"); if(acs) acs.addEventListener("click",()=>openAddCat("expense"));
  // Avatar
  document.getElementById("changeAvBtn").addEventListener("click",()=>{
    document.getElementById("avatarGridBig").innerHTML=AVATARS.map(a=>`<button class="avatar-opt big ${a===S.profile.avatar?"sel":""}" onclick="pickAvatar('${a}','avatarGridBig',0)">${a}</button>`).join("");
    openM("avatarModal");
  });
  document.getElementById("closeAvatarModal").addEventListener("click",()=>closeM("avatarModal"));
  // PIN screen
  document.querySelectorAll(".pin-btn[data-n]").forEach(b=>b.addEventListener("click",()=>pinEnter(b.dataset.n)));
  document.getElementById("pinClear").addEventListener("click",pinBack);
  document.getElementById("pinOk").addEventListener("click",pinSubmit);
  document.getElementById("pinForgot").addEventListener("click",openPinReset);
  // PIN Reset
  document.getElementById("pinResetBtn").addEventListener("click",submitPinReset);
  document.getElementById("pinResetBack").addEventListener("click",()=>{document.getElementById("pinResetScreen").classList.add("hidden");document.getElementById("pinScreen").classList.remove("hidden");});
  // PIN Setup
  document.querySelectorAll(".pin-btn[data-sn]").forEach(b=>b.addEventListener("click",()=>pinSetupEnter(b.dataset.sn)));
  document.getElementById("pinSetupClear").addEventListener("click",pinSetupBack);
  document.getElementById("pinSetupOk").addEventListener("click",pinSetupOk);
  document.getElementById("closePinSetupModal").addEventListener("click",()=>closeM("pinSetupModal"));
  document.getElementById("setPinBtn").addEventListener("click",openPinSetup);
  document.getElementById("removePinBtn").addEventListener("click",()=>{confirm2(t("confirm"),t("delete_q"),()=>{S.settings.pin=null;S.settings.pinEnabled=false;saveS();renderSettings();toast(t("pin_removed"));});});
  // Notif
  document.getElementById("notifToggle").addEventListener("change",async e=>{if(e.target.checked) await requestNotif();else{S.settings.notifEnabled=false;saveS();updateNotifStatus();}});
  document.getElementById("notifTime").addEventListener("change",e=>{S.settings.notifTime=e.target.value;saveS();});
  // Profile
  document.getElementById("saveProfileBtn").addEventListener("click",saveProfile);
  // Theme
  document.getElementById("themeToggle").addEventListener("change",e=>applyTheme(e.target.checked?"dark":"light"));
  document.getElementById("themeBtn").addEventListener("click",()=>{applyTheme(S.settings.theme==="dark"?"light":"dark");});
  // Currency
  document.getElementById("curSelect").addEventListener("change",e=>{S.settings.currency=e.target.value;saveS();renderHome();toast(t("currency_changed"));});
  // Rate bar
  document.getElementById("rateBtn").addEventListener("click",()=>{const rb=document.getElementById("rateBar");rb.classList.toggle("hidden");if(!rb.classList.contains("hidden"))fetchRates();});
  // Notif top btn
  const nb=document.getElementById("notifBtn"); if(nb) nb.addEventListener("click",async()=>{if(S.settings.notifEnabled)toast(t("notif_on"));else await requestNotif();});
  // Family
  const afb=document.getElementById("addFamilyBtn"); if(afb) afb.addEventListener("click",()=>{document.getElementById("familyName").value="";document.getElementById("familyEmoji").value="👤";openM("familyModal");});
  document.getElementById("saveFamilyBtn").addEventListener("click",saveFamilyMember);
  document.getElementById("closeFamilyModal").addEventListener("click",()=>closeM("familyModal"));
  // Data
  document.getElementById("exportBtn").addEventListener("click",exportData);
  document.getElementById("importBtn").addEventListener("click",()=>document.getElementById("importFile").click());
  document.getElementById("importFile").addEventListener("change",e=>{importData(e.target.files[0]);e.target.value="";});
  document.getElementById("resetBtn").addEventListener("click",resetAll);
  // Mic
  const micBtn=document.getElementById("micBtn"); if(micBtn) micBtn.addEventListener("click",toggleMic);
  const qMicBtn=document.getElementById("quickMicBtn"); if(qMicBtn) qMicBtn.addEventListener("click",()=>{switchTab("add");setTimeout(toggleMic,400);});
  // PDF
  const pdfBtn=document.getElementById("pdfBtn"); if(pdfBtn) pdfBtn.addEventListener("click",exportPDF);
  // Login
  document.getElementById("loginBtn").addEventListener("click",doLogin);
  document.getElementById("loginName").addEventListener("keydown",e=>{if(e.key==="Enter")doLogin();});
  // AI
  document.getElementById("aiSend").addEventListener("click",sendAiMsg);
  document.getElementById("aiInput").addEventListener("keydown",e=>{if(e.key==="Enter")sendAiMsg();});
  // Confirm
  document.getElementById("closeConfirmModal").addEventListener("click",()=>closeM("confirmModal"));
  document.getElementById("confirmNo").addEventListener("click",()=>closeM("confirmModal"));
  document.getElementById("confirmYes").addEventListener("click",()=>{closeM("confirmModal");if(confirmCb){confirmCb();confirmCb=null;}});
  // Modal overlay
  document.querySelectorAll(".modal-overlay").forEach(o=>o.addEventListener("click",e=>{if(e.target===o)o.classList.add("hidden");}));
}

// ─── INIT ─────────────────────────────────────────────────────────────────────────
function init() {
  try{
    if(window.Telegram&&window.Telegram.WebApp){
      window.Telegram.WebApp.expand();
      const u=window.Telegram.WebApp.initDataUnsafe&&window.Telegram.WebApp.initDataUnsafe.user;
      if(u&&u.id) UID="tg_"+u.id;
    }
  }catch(e){}
  if(!UID){UID=localStorage.getItem("spenduz_uid")||"u_"+Date.now();localStorage.setItem("spenduz_uid",UID);}

  const hasData=loadS();
  document.getElementById("dateInput").value=todayISO();
  bindEvents();
  applyLang(S.settings.lang);

  setTimeout(()=>{
    const sp=document.getElementById("splash"); sp.style.opacity="0";
    setTimeout(()=>{
      sp.classList.add("hidden");
      let tgUser=null;
      try{tgUser=window.Telegram&&window.Telegram.WebApp&&window.Telegram.WebApp.initDataUnsafe&&window.Telegram.WebApp.initDataUnsafe.user;}catch(e){}
      const hasSaved=hasData&&S.profile&&S.profile.name&&S.profile.name!=="Foydalanuvchi";
      if(tgUser&&tgUser.id){
        if(!S.profile.tgId){S.profile.tgId=tgUser.id;S.profile.name=tgUser.first_name||"Foydalanuvchi";S.profile.username=tgUser.username?"@"+tgUser.username:"@spenduz";if(!S.profile.joinedAt)S.profile.joinedAt=new Date().toISOString();if(!S.categories||!S.categories.length)S.categories=DEFAULT_CATS.map(c=>({...c}));saveS();}
        if(S.settings.pinEnabled&&S.settings.pin){initPinScreen();document.getElementById("pinScreen").classList.remove("hidden");}
        else startApp();
      }else if(hasSaved){
        if(S.settings.pinEnabled&&S.settings.pin){initPinScreen();document.getElementById("pinScreen").classList.remove("hidden");}
        else startApp();
      }else{
        selAvatar=S.profile.avatar||"😊";
        renderAvatarGrid("loginAvatarGrid",true);
        document.getElementById("loginScreen").classList.remove("hidden");
      }
    },200);
  },1400);
}

document.addEventListener("DOMContentLoaded",init);