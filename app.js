/**
 * SpendUZ Pro — app.js v5.0
 * 4 ta til: UZ, RU, EN, TJ
 * Barcha funksiyalar ishlaydi
 */

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
uz:{
  today_balance:"Bugungi balans",income:"Daromad",expense:"Xarajat",debt:"Qarz",
  monthly_report:"Oylik hisobot",chart:"Grafik",recent:"So\u02bcnggi tranzaksiyalar",
  see_all:"Barchasi \u2192",no_txn:"Hali tranzaksiya yo\u02bcq",all_txn:"Barcha tranzaksiyalar",
  goals_title:"\uD83C\uDFAF Maqsadlar",no_goal:"Hali maqsad yo\u02bcq",
  add:"Qo\u02bcshish",save:"Saqlash",cancel:"Bekor qilish",delete:"O\u02bcchirish",
  amount:"Miqdor",category:"Kategoriya",date:"Sana",note:"Izoh",tags:"Teglar",
  repeat:"Takroriy",no_repeat:"Yo\u02bcq",daily:"Har kun",weekly:"Haftalik",monthly:"Har oy",
  debt_person:"Kim bilan",receipt:"Chek",share:"Ulashish",
  profile:"Profil",name:"Ism",save_profile:"Profilni saqlash",
  language:"Til",interface:"Interfeys",theme:"Mavzu",theme_sub:"Qorong\u02bci / Yorug\u02bc",
  currency:"Valyuta",notifications:"\uD83D\uDD14 Bildirishnomalar",push_notif:"Push bildirishnoma",
  notif_off:"O\u02bcchirilgan",notif_on:"Yoqilgan \u2705",notif_time:"Eslatma vaqti",
  security:"\uD83D\uDD10 Xavfsizlik",pin:"PIN kod",pin_not_set:"O\u02bcnatilmagan",pin_set:"O\u02bcnatilgan \uD83D\uDD10",
  set_pin:"O\u02bcnatish",change_pin:"O\u02bcgartirish",remove_pin:"PIN ni o\u02bcchirish",
  custom_cats:"Maxsus kategoriyalar",new_cat:"Yangi kategoriya",cat_name:"Kategoriya nomi",
  color:"Rang",type:"Turi",expense_type:"Xarajat",income_type:"Daromad",
  family:"\uD83D\uDC65 Oila byudjeti",add_member:"A\u02bczo qo\u02bcshish",member_name:"Ismi",
  data:"Ma\u02bclumotlar",export:"Eksport (JSON)",import_data:"Import",
  reset:"Barcha ma\u02bclumotlarni o\u02bcchirish",about:"Ilova haqida",
  avatar:"Avatar tanlang",confirm:"Tasdiqlang",delete_q:"O\u02bcchirishni istaysizmi?",
  nav_home:"Bosh",nav_goals:"Maqsad",nav_ai:"AI",nav_settings:"Sozlamalar",
  nav_budget:"Byudjet",
  ai_title:"Moliya Maslahati",ai_welcome:"Salom! Men SpendUZ AI yordamchisiman. Moliyangiz haqida savol bering!",
  ai_q1:"\uD83D\uDCCA Xarajat tahlili",ai_q2:"\uD83D\uDCA1 Tejash maslahati",ai_q3:"\uD83D\uDDD3\uFE0F Byudjet rejasi",ai_q4:"\uD83D\uDD0D Asosiy xarajat",
  pin_enter:"PIN kodni kiriting",pin_wrong:"Noto\u02bcg\u02bcri PIN!",pin_forgot:"PIN ni unutdim",
  pin_setup:"PIN o\u02bcnatish",pin_new:"Yangi PIN kiriting (4 raqam)",pin_confirm:"PIN ni qayta kiriting",
  pin_mismatch:"PIN mos kelmadi!",pin_saved:"PIN o\u02bcnatildi! \uD83D\uDD10",pin_removed:"PIN o\u02bcchirildi",
  add_goal:"Maqsad qo\u02bcshish",goal_name:"Maqsad nomi",goal_target:"Maqsad summa",
  goal_current:"Hozirgi jamg\u02bcarma",goal_deadline:"Muddat",
  goal_add_amount:"Miqdor qo\u02bcshish",goal_done:"\uD83C\uDF89 Maqsadga yetdingiz! Tabriklaymiz!",
  saved:"Saqlandi! \u2705",updated:"Yangilandi! \u2705",deleted:"O\u02bcchirildi",
  login_sub:"Moliyangizni professional boshqaring",login_name:"Ismingiz",login_avatar:"Avatar tanlang",
  login_start:"\u2713 Boshlash",fill_all:"To\u02bcldiring!",enter_name:"Ismingizni kiriting!",
  select_cat:"Kategoriyani tanlang!",enter_amount:"Miqdorni kiriting!",enter_date:"Sanani kiriting!",
  ai_no_data:"Hali tranzaksiya yo\u02bcq.",monthly2:"Oylik",
  no_custom_cats:"Maxsus kategoriyalar yo\u02bcq",no_family:"Hali a\u02bczo yo\u02bcq",
  export_done:"Eksport qilindi! \uD83D\uDCE4",import_done:"Import muvaffaqiyatli! \uD83D\uDCE5",
  wrong_file:"Noto\u02bcg\u02bcri fayl!",reset_confirm:"Bu amalni qaytarib bo\u02bclmaydi!",
  notif_granted:"Bildirishnomalar yoqildi! \uD83D\uDD14",notif_denied:"Ruxsat berilmadi",
  profile_saved:"Profil saqlandi! \u2705",avatar_changed:"Avatar o\u02bcgartirildi!",
  currency_changed:"Valyuta o\u02bcgartirildi!",copied:"Nusxa olindi! \uD83D\uDCCB",
  cat_used:"Bu kategoriya ishlatilmoqda!",cat_default:"Standart kategoriyani o\u02bcchirib bo\u02bclmaydi!",
  cat_added:"Kategoriya qo\u02bcshildi!",member_added:"A\u02bczo qo\u02bcshildi!",
  enter_cat_name:"Kategoriya nomini kiriting!",enter_member_name:"Ismni kiriting!",
  repeat_added:"ta takroriy to\u02bclov qo\u02bcshildi \uD83D\uDD04",budget_plan:"Byudjet Rejasi",
},
ru:{
  today_balance:"Баланс сегодня",income:"Доход",expense:"Расход",debt:"Долг",
  monthly_report:"Месячный отчёт",chart:"График",recent:"Последние транзакции",
  see_all:"Все \u2192",no_txn:"Транзакций пока нет",all_txn:"Все транзакции",
  goals_title:"\uD83C\uDFAF Цели",no_goal:"Целей пока нет",
  add:"Добавить",save:"Сохранить",cancel:"Отмена",delete:"Удалить",
  amount:"Сумма",category:"Категория",date:"Дата",note:"Примечание",tags:"Теги",
  repeat:"Повтор",no_repeat:"Нет",daily:"Ежедневно",weekly:"Еженедельно",monthly:"Ежемесячно",
  debt_person:"С кем",receipt:"Чек",share:"Поделиться",
  profile:"Профиль",name:"Имя",save_profile:"Сохранить профиль",
  language:"Язык",interface:"Интерфейс",theme:"Тема",theme_sub:"Тёмная / Светлая",
  currency:"Валюта",notifications:"\uD83D\uDD14 Уведомления",push_notif:"Push-уведомления",
  notif_off:"Выключено",notif_on:"Включено \u2705",notif_time:"Время напоминания",
  security:"\uD83D\uDD10 Безопасность",pin:"PIN-код",pin_not_set:"Не установлен",pin_set:"Установлен \uD83D\uDD10",
  set_pin:"Установить",change_pin:"Изменить",remove_pin:"Удалить PIN",
  custom_cats:"Пользовательские категории",new_cat:"Новая категория",cat_name:"Название",
  color:"Цвет",type:"Тип",expense_type:"Расход",income_type:"Доход",
  family:"\uD83D\uDC65 Семейный бюджет",add_member:"Добавить участника",member_name:"Имя",
  data:"Данные",export:"Экспорт (JSON)",import_data:"Импорт",
  reset:"Удалить все данные",about:"О приложении",
  avatar:"Выбрать аватар",confirm:"Подтвердите",delete_q:"Вы уверены?",
  nav_home:"Главная",nav_goals:"Цели",nav_ai:"AI",nav_settings:"Настройки",nav_budget:"Бюджет",
  ai_title:"Финансовый советник",ai_welcome:"Привет! Я AI-помощник SpendUZ. Задайте вопрос!",
  ai_q1:"\uD83D\uDCCA Анализ расходов",ai_q2:"\uD83D\uDCA1 Советы по экономии",ai_q3:"\uD83D\uDDD3\uFE0F Бюджетный план",ai_q4:"\uD83D\uDD0D Главный расход",
  pin_enter:"Введите PIN-код",pin_wrong:"Неверный PIN!",pin_forgot:"Забыл PIN",
  pin_setup:"Установить PIN",pin_new:"Введите новый PIN (4 цифры)",pin_confirm:"Повторите PIN",
  pin_mismatch:"PIN не совпадает!",pin_saved:"PIN установлен! \uD83D\uDD10",pin_removed:"PIN удалён",
  add_goal:"Добавить цель",goal_name:"Название цели",goal_target:"Целевая сумма",
  goal_current:"Текущие накопления",goal_deadline:"Срок",
  goal_add_amount:"Добавить сумму",goal_done:"\uD83C\uDF89 Цель достигнута! Поздравляем!",
  saved:"Сохранено! \u2705",updated:"Обновлено! \u2705",deleted:"Удалено",
  login_sub:"Управляйте финансами профессионально",login_name:"Ваше имя",login_avatar:"Выберите аватар",
  login_start:"\u2713 Начать",fill_all:"Заполните все поля!",enter_name:"Введите имя!",
  select_cat:"Выберите категорию!",enter_amount:"Введите сумму!",enter_date:"Введите дату!",
  ai_no_data:"Транзакций пока нет.",monthly2:"Ежемесячно",
  no_custom_cats:"Нет пользовательских категорий",no_family:"Участников пока нет",
  export_done:"Экспортировано! \uD83D\uDCE4",import_done:"Импорт успешен! \uD83D\uDCE5",
  wrong_file:"Неверный файл!",reset_confirm:"Это действие нельзя отменить!",
  notif_granted:"Уведомления включены! \uD83D\uDD14",notif_denied:"Разрешение не дано",
  profile_saved:"Профиль сохранён! \u2705",avatar_changed:"Аватар изменён!",
  currency_changed:"Валюта изменена!",copied:"Скопировано! \uD83D\uDCCB",
  cat_used:"Эта категория используется!",cat_default:"Нельзя удалить стандартную категорию!",
  cat_added:"Категория добавлена!",member_added:"Участник добавлен!",
  enter_cat_name:"Введите название!",enter_member_name:"Введите имя!",
  repeat_added:"повторных платежей добавлено \uD83D\uDD04",budget_plan:"Бюджетный план",
},
en:{
  today_balance:"Today's balance",income:"Income",expense:"Expense",debt:"Debt",
  monthly_report:"Monthly report",chart:"Chart",recent:"Recent transactions",
  see_all:"All \u2192",no_txn:"No transactions yet",all_txn:"All transactions",
  goals_title:"\uD83C\uDFAF Goals",no_goal:"No goals yet",
  add:"Add",save:"Save",cancel:"Cancel",delete:"Delete",
  amount:"Amount",category:"Category",date:"Date",note:"Note",tags:"Tags",
  repeat:"Repeat",no_repeat:"None",daily:"Daily",weekly:"Weekly",monthly:"Monthly",
  debt_person:"With whom",receipt:"Receipt",share:"Share",
  profile:"Profile",name:"Name",save_profile:"Save profile",
  language:"Language",interface:"Interface",theme:"Theme",theme_sub:"Dark / Light",
  currency:"Currency",notifications:"\uD83D\uDD14 Notifications",push_notif:"Push notifications",
  notif_off:"Off",notif_on:"On \u2705",notif_time:"Reminder time",
  security:"\uD83D\uDD10 Security",pin:"PIN code",pin_not_set:"Not set",pin_set:"Set \uD83D\uDD10",
  set_pin:"Set",change_pin:"Change",remove_pin:"Remove PIN",
  custom_cats:"Custom categories",new_cat:"New category",cat_name:"Category name",
  color:"Color",type:"Type",expense_type:"Expense",income_type:"Income",
  family:"\uD83D\uDC65 Family budget",add_member:"Add member",member_name:"Name",
  data:"Data",export:"Export (JSON)",import_data:"Import",
  reset:"Delete all data",about:"About",
  avatar:"Choose avatar",confirm:"Confirm",delete_q:"Are you sure you want to delete?",
  nav_home:"Home",nav_goals:"Goals",nav_ai:"AI",nav_settings:"Settings",nav_budget:"Budget",
  ai_title:"Financial Advisor",ai_welcome:"Hi! I am SpendUZ AI assistant. Ask me about your finances!",
  ai_q1:"\uD83D\uDCCA Expense analysis",ai_q2:"\uD83D\uDCA1 Saving tips",ai_q3:"\uD83D\uDDD3\uFE0F Budget plan",ai_q4:"\uD83D\uDD0D Top expense",
  pin_enter:"Enter PIN code",pin_wrong:"Wrong PIN!",pin_forgot:"Forgot PIN",
  pin_setup:"Set PIN",pin_new:"Enter new PIN (4 digits)",pin_confirm:"Confirm PIN",
  pin_mismatch:"PIN does not match!",pin_saved:"PIN set! \uD83D\uDD10",pin_removed:"PIN removed",
  add_goal:"Add goal",goal_name:"Goal name",goal_target:"Target amount",
  goal_current:"Current savings",goal_deadline:"Deadline",
  goal_add_amount:"Add amount",goal_done:"\uD83C\uDF89 Goal achieved! Congratulations!",
  saved:"Saved! \u2705",updated:"Updated! \u2705",deleted:"Deleted",
  login_sub:"Manage your finances professionally",login_name:"Your name",login_avatar:"Choose avatar",
  login_start:"\u2713 Start",fill_all:"Fill all fields!",enter_name:"Enter your name!",
  select_cat:"Select category!",enter_amount:"Enter amount!",enter_date:"Enter date!",
  ai_no_data:"No transactions yet.",monthly2:"Monthly",
  no_custom_cats:"No custom categories",no_family:"No members yet",
  export_done:"Exported! \uD83D\uDCE4",import_done:"Import successful! \uD83D\uDCE5",
  wrong_file:"Wrong file!",reset_confirm:"This action cannot be undone!",
  notif_granted:"Notifications enabled! \uD83D\uDD14",notif_denied:"Permission denied",
  profile_saved:"Profile saved! \u2705",avatar_changed:"Avatar changed!",
  currency_changed:"Currency changed!",copied:"Copied! \uD83D\uDCCB",
  cat_used:"This category is in use!",cat_default:"Cannot delete default category!",
  cat_added:"Category added!",member_added:"Member added!",
  enter_cat_name:"Enter category name!",enter_member_name:"Enter name!",
  repeat_added:"recurring payments added \uD83D\uDD04",budget_plan:"Budget Plan",
},
tj:{
  today_balance:"\u0411\u0430\u043b\u0430\u043d\u0441\u0438 \u0438\u043c\u0440\u04ef\u0437",income:"\u0414\u0430\u0440\u043e\u043c\u0430\u0434",expense:"\u0425\u0430\u0440\u043e\u04b7\u043e\u0442",debt:"\u049a\u0430\u0440\u0437",
  monthly_report:"\u04b2\u0438\u0441\u043e\u0431\u043e\u0442\u0438 \u043c\u043e\u04b3\u043e\u043d\u0430",chart:"\u0413\u0440\u0430\u0444\u0438\u043a",recent:"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0441\u0438\u044f\u04b3\u043e\u0438 \u043e\u0445\u0438\u0440",
  see_all:"\u04b2\u0430\u043c\u0430 \u2192",no_txn:"\u04b2\u043e\u043b\u043e \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0441\u0438\u044f \u043d\u0435\u0441\u0442",all_txn:"\u04b2\u0430\u043c\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0441\u0438\u044f\u04b3\u043e",
  goals_title:"\uD83C\uDFAF \u041c\u0430\u049b\u0441\u0430\u0434\u04b3\u043e",no_goal:"\u04b2\u043e\u043b\u043e \u043c\u0430\u049b\u0441\u0430\u0434 \u043d\u0435\u0441\u0442",
  add:"\u0418\u043b\u043e\u0432\u0430",save:"\u0421\u0430\u0431\u0442",cancel:"\u0411\u0435\u043a\u043e\u0440",delete:"\u041d\u0435\u0441\u0442",
  amount:"\u041c\u0430\u0431\u043b\u0430\u0493",category:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",date:"\u0421\u0430\u043d\u0430",note:"\u0428\u0430\u0440\u04b3",tags:"\u0422\u0435\u0433\u04b3\u043e",
  repeat:"\u0422\u0430\u043a\u0440\u043e\u0440",no_repeat:"\u041d\u0435",daily:"\u04b2\u0430\u0440 \u0440\u04ef\u0437",weekly:"\u04b2\u0430\u0440 \u04b3\u0430\u0444\u0442\u0430",monthly:"\u04b2\u0430\u0440 \u043c\u043e\u04b3",
  debt_person:"\u0411\u043e \u043a\u04e3",receipt:"\u0427\u0435\u043a",share:"\u041c\u0443\u0431\u043e\u0434\u0438\u043b\u0430",
  profile:"\u041f\u0440\u043e\u0444\u0438\u043b",name:"\u041d\u043e\u043c",save_profile:"\u041f\u0440\u043e\u0444\u0438\u043b\u0440\u043e \u0441\u0430\u0431\u0442 \u043a\u0443\u043d",
  language:"\u0417\u0430\u0431\u043e\u043d",interface:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",theme:"\u041c\u0430\u0432\u0437\u04ef",theme_sub:"\u0422\u043e\u0440\u0438\u043a / \u0420\u0430\u0432\u0448\u0430\u043d",
  currency:"\u0410\u0441\u044a\u043e\u0440",notifications:"\uD83D\uDD14 \u041e\u0433\u043e\u04b3\u0438\u04b3\u043e",push_notif:"Push-\u043e\u0433\u043e\u04b3\u0438\u04b3\u043e",
  notif_off:"\u0425\u043e\u043c\u04ef\u0448",notif_on:"\u0424\u0430\u044a\u043e\u043b \u2705",notif_time:"\u0412\u0430\u049b\u0442\u0438 \u0451\u0434\u043e\u0432\u0430\u0440\u04e3",
  security:"\uD83D\uDD10 \u0410\u043c\u043d\u0438\u0430\u0442",pin:"\u0420\u0430\u043c\u0437\u0438 PIN",pin_not_set:"\u0422\u0430\u043d\u0437\u0438\u043c \u043d\u0430\u0448\u0443\u0434\u0430\u0430\u0441\u0442",pin_set:"\u0422\u0430\u043d\u0437\u0438\u043c \u0448\u0443\u0434\u0430\u0430\u0441\u0442",
  set_pin:"\u0422\u0430\u043d\u0437\u0438\u043c \u043a\u0443\u043d",change_pin:"\u0418\u0432\u0430\u0437 \u043a\u0443\u043d",remove_pin:"PIN \u043d\u0435\u0441\u0442",
  custom_cats:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u04b3\u043e\u0438 \u0448\u0430\u0445\u0441\u04e3",new_cat:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u0438 \u043d\u0430\u0432",cat_name:"\u041d\u043e\u043c",
  color:"\u0420\u0430\u043d\u0433",type:"\u041d\u0430\u043c\u0443\u0434",expense_type:"\u0425\u0430\u0440\u043e\u04b7\u043e\u0442",income_type:"\u0414\u0430\u0440\u043e\u043c\u0430\u0434",
  family:"\uD83D\uDC65 \u0411\u0443\u04b7\u0435\u0442\u0438 \u043e\u0438\u043b\u0430\u0432\u04e3",add_member:"\u0410\u044a\u0437\u043e \u0438\u043b\u043e\u0432\u0430",member_name:"\u041d\u043e\u043c",
  data:"\u041c\u0430\u044a\u043b\u0443\u043c\u043e\u0442",export:"\u0421\u043e\u0434\u0438\u0440\u043e\u0442 (JSON)",import_data:"\u0412\u043e\u0440\u0438\u0434\u043e\u0442",
  reset:"\u04b2\u0430\u043c\u0430 \u043c\u0430\u044a\u043b\u0443\u043c\u043e\u0442\u0440\u043e \u043d\u0435\u0441\u0442",about:"\u0414\u0430\u0440 \u0431\u043e\u0440\u0430\u0438 \u0431\u0430\u0440\u043d\u043e\u043c\u0430",
  avatar:"\u0410\u0432\u0430\u0442\u0430\u0440 \u0438\u043d\u0442\u0438\u0445\u043e\u0431",confirm:"\u0422\u0430\u0441\u0434\u0438\u049b",delete_q:"\u0428\u0443\u043c\u043e \u043c\u0443\u0442\u043c\u0430\u0438\u043d \u04b3\u0430\u0441\u0442\u0435\u0434?",
  nav_home:"\u0410\u0441\u043e\u0441\u04e3",nav_goals:"\u041c\u0430\u049b\u0441\u0430\u0434",nav_ai:"AI",nav_settings:"\u0422\u0430\u043d\u0437\u0438\u043c\u043e\u0442",nav_budget:"\u0411\u0443\u04b7\u0435\u0442",
  ai_title:"\u041c\u0430\u0441\u043b\u0438\u04b3\u0430\u0442\u0433\u0430\u0440",ai_welcome:"\u0421\u0430\u043b\u043e\u043c! \u041c\u0430\u043d AI SpendUZ \u04b3\u0430\u0441\u0442\u0430\u043c.",
  ai_q1:"\uD83D\uDCCA \u0422\u0430\u04b3\u043b\u0438\u043b",ai_q2:"\uD83D\uDCA1 \u041c\u0430\u0441\u043b\u0438\u04b3\u0430\u0442",ai_q3:"\uD83D\uDDD3\uFE0F \u041d\u0430\u049b\u0448\u0430",ai_q4:"\uD83D\uDD0D \u0425\u0430\u0440\u043e\u04b7\u043e\u0442",
  pin_enter:"\u0420\u0430\u043c\u0437\u0438 PIN \u0432\u043e\u0440\u0438\u0434",pin_wrong:"PIN \u043d\u043e\u0434\u0443\u0440\u0443\u0441\u0442!",pin_forgot:"PIN \u0444\u0430\u0440\u043e\u043c\u04ef\u0448",
  pin_setup:"PIN \u0442\u0430\u043d\u0437\u0438\u043c",pin_new:"PIN-\u0438 \u043d\u0430\u0432 \u0432\u043e\u0440\u0438\u0434 (4 \u0440\u0430\u049b\u0430\u043c)",pin_confirm:"PIN-\u0440\u043e \u0442\u0430\u043a\u0440\u043e\u0440",
  pin_mismatch:"PIN \u043c\u0443\u0432\u043e\u0444\u0438\u049b \u043d\u0435\u0441\u0442!",pin_saved:"PIN \u0442\u0430\u043d\u0437\u0438\u043c \u0448\u0443\u0434",pin_removed:"PIN \u043d\u0435\u0441\u0442",
  add_goal:"\u041c\u0430\u049b\u0441\u0430\u0434 \u0438\u043b\u043e\u0432\u0430",goal_name:"\u041d\u043e\u043c\u0438 \u043c\u0430\u049b\u0441\u0430\u0434",goal_target:"\u041c\u0430\u0431\u043b\u0430\u0493\u0438 \u043c\u0430\u049b\u0441\u0430\u0434",
  goal_current:"\u0410\u043d\u0434\u04ef\u0445\u0442\u0430\u0438 \u04b3\u043e\u0437\u0438\u0440\u0430",goal_deadline:"\u041c\u04ef\u04b3\u043b\u0430\u0442",
  goal_add_amount:"\u041c\u0430\u0431\u043b\u0430\u0493 \u0438\u043b\u043e\u0432\u0430",goal_done:"\uD83C\uDF89 \u041c\u0430\u049b\u0441\u0430\u0434 \u0438\u04b7\u0440\u043e \u0448\u0443\u0434!",
  saved:"\u0421\u0430\u0431\u0442 \u0448\u0443\u0434! \u2705",updated:"\u041d\u0430\u0432\u0441\u043e\u0437\u04e3 \u0448\u0443\u0434! \u2705",deleted:"\u041d\u0435\u0441\u0442 \u0448\u0443\u0434",
  login_sub:"\u041c\u043e\u043b\u0438\u044f\u0438 \u0445\u0443\u0434\u0440\u043e \u0438\u0434\u043e\u0440\u0430 \u043a\u0443\u043d\u0435\u0434",login_name:"\u041d\u043e\u043c\u0438 \u0448\u0443\u043c\u043e",login_avatar:"\u0410\u0432\u0430\u0442\u0430\u0440 \u0438\u043d\u0442\u0438\u0445\u043e\u0431",
  login_start:"\u2713 \u041e\u0493\u043e\u0437",fill_all:"\u04b2\u0430\u043c\u0430 \u043c\u0430\u0439\u0434\u043e\u043d\u04b3\u043e\u0440\u043e \u043f\u0443\u0440 \u043a\u0443\u043d\u0435\u0434!",enter_name:"\u041d\u043e\u043c\u0440\u043e \u0432\u043e\u0440\u0438\u0434 \u043a\u0443\u043d\u0435\u0434!",
  select_cat:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0438\u043d\u0442\u0438\u0445\u043e\u0431!",enter_amount:"\u041c\u0430\u0431\u043b\u0430\u0493\u0440\u043e \u0432\u043e\u0440\u0438\u0434!",enter_date:"\u0421\u0430\u043d\u0430\u0440\u043e \u0432\u043e\u0440\u0438\u0434!",
  ai_no_data:"\u04b2\u043e\u043b\u043e \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0441\u0438\u044f \u043d\u0435\u0441\u0442.",monthly2:"\u041c\u043e\u04b3\u043e\u043d\u0430",
  no_custom_cats:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u04b3\u043e\u0438 \u0448\u0430\u0445\u0441\u04e3 \u043d\u0435\u0441\u0442",no_family:"\u04b2\u043e\u043b\u043e \u0430\u044a\u0437\u043e \u043d\u0435\u0441\u0442",
  export_done:"\u0421\u043e\u0434\u0438\u0440 \u0448\u0443\u0434! \uD83D\uDCE4",import_done:"\u0412\u043e\u0440\u0438\u0434\u043e\u0442 \u043c\u0443\u0432\u0430\u0444\u0444\u0430\u049b! \uD83D\uDCE5",
  wrong_file:"\u0424\u0430\u0439\u043b\u0438 \u043d\u043e\u0434\u0443\u0440\u0443\u0441\u0442!",reset_confirm:"\u0418\u043d \u0430\u043c\u0430\u043b\u0440\u043e \u0431\u0430\u0440\u0433\u0430\u0440\u0434\u043e\u043d\u0438\u0434\u0430\u043d \u043c\u0443\u043c\u043a\u0438\u043d \u043d\u0435\u0441\u0442!",
  notif_granted:"\u041e\u0433\u043e\u04b3\u0438\u04b3\u043e \u0444\u0430\u044a\u043e\u043b \u0448\u0443\u0434! \uD83D\uDD14",notif_denied:"\u0418\u04b7\u043e\u0437\u0430\u0442 \u0434\u043e\u0434\u0430 \u043d\u0430\u0448\u0443\u0434",
  profile_saved:"\u041f\u0440\u043e\u0444\u0438\u043b \u0441\u0430\u0431\u0442 \u0448\u0443\u0434! \u2705",avatar_changed:"\u0410\u0432\u0430\u0442\u0430\u0440 \u0438\u0432\u0430\u0437 \u0448\u0443\u0434!",
  currency_changed:"\u0410\u0441\u044a\u043e\u0440 \u0438\u0432\u0430\u0437 \u0448\u0443\u0434!",copied:"\u041d\u0443\u0441\u0445\u0430 \u0433\u0438\u0440\u0438\u0444\u0442\u0430 \u0448\u0443\u0434! \uD83D\uDCCB",
  cat_used:"\u0418\u043d \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0438\u0441\u0442\u0438\u0444\u043e\u0434\u0430 \u043c\u0435\u0448\u0430\u0432\u0430\u0434!",cat_default:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u0440\u043e \u043d\u0435\u0441\u0442 \u043a\u0430\u0440\u0434\u0430\u043d \u043c\u0443\u043c\u043a\u0438\u043d \u043d\u0435\u0441\u0442!",
  cat_added:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0438\u043b\u043e\u0432\u0430 \u0448\u0443\u0434!",member_added:"\u0410\u044a\u0437\u043e \u0438\u043b\u043e\u0432\u0430 \u0448\u0443\u0434!",
  enter_cat_name:"\u041d\u043e\u043c\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u0440\u043e \u0432\u043e\u0440\u0438\u0434!",enter_member_name:"\u041d\u043e\u043c\u0440\u043e \u0432\u043e\u0440\u0438\u0434!",
  repeat_added:"\u043f\u0430\u0440\u0434\u043e\u0445\u0442\u0438 \u0442\u0430\u043a\u0440\u043e\u0440\u04e3 \u0438\u043b\u043e\u0432\u0430 \u0448\u0443\u0434 \uD83D\uDD04",budget_plan:"\u041d\u0430\u049b\u0448\u0430\u0438 \u0431\u0443\u04b7\u0435\u0442",
},
};

// Current language getter
const t = key => (T[S.settings.language]||T.uz)[key] || T.uz[key] || key;

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const AVATARS = [
  '😊','😎','🤑','👨','👩','🧑','🧑','👱','🦊','🐯',
  '🦁','🐸','🐧','🦄','🐼','🚀','⭐','🔥','💎','👑',
  '🎯','💡','🎮','🏆','❤️','🌟','🦋','🧠','🎪','🌈'
];
const EMOJI_LIST = ['🍔','🚗','🏠','💊','👗','🎮','📚','💅','☕','💻','🎁','⚽','✈️','💡','💰','📈','🏢','🎀','💵','🛒','📦','🎵','🍕','🍜','🚌','⛽','🏋️','🎓','💍','🧴'];
const CAT_COLORS = ['#00E5A0','#FF4F6A','#FFB547','#7C6DFA','#00C2FF','#FF8A00','#A8FF78','#FF6B9D','#4ECDC4','#45B7D1'];

const DEFAULT_CATS = [
  {id:'c_food',   name:{uz:'Oziq-ovqat',  ru:'Еда',         en:'Food',       tj:'Хӯрок'},     emoji:'🍔', color:'#FF8A00', type:'expense'},
  {id:'c_trans',  name:{uz:'Transport',   ru:'Транспорт',   en:'Transport',  tj:'Нақлиёт'},   emoji:'🚗', color:'#7C6DFA', type:'expense'},
  {id:'c_home',   name:{uz:'Uy-joy',      ru:'Жильё',       en:'Housing',    tj:'Манзил'},     emoji:'🏠', color:'#00C2FF', type:'expense'},
  {id:'c_health', name:{uz:'Salomatlik',  ru:'Здоровье',    en:'Health',     tj:'Саломатӣ'},  emoji:'💊', color:'#FF4F6A', type:'expense'},
  {id:'c_cloth',  name:{uz:'Kiyim',       ru:'Одежда',      en:'Clothes',    tj:'Либос'},      emoji:'👗', color:'#FF6B9D', type:'expense'},
  {id:'c_enter',  name:{uz:"Kongil ochish",ru:'Развлечения',en:'Entertainment',tj:'Вақтгузаронӣ'},emoji:'🎮',color:'#A8FF78',type:'expense'},
  {id:'c_edu',    name:{uz:"Talim",      ru:'Образование', en:'Education',  tj:'Маълумот'},   emoji:'📚', color:'#4ECDC4', type:'expense'},
  {id:'c_cafe',   name:{uz:'Kafe',        ru:'Кафе',        en:'Cafe',       tj:'Кафе'},       emoji:'☕', color:'#FFB547', type:'expense'},
  {id:'c_tech',   name:{uz:'Texnologiya', ru:'Технологии',  en:'Technology', tj:'Технология'}, emoji:'💻', color:'#45B7D1', type:'expense'},
  {id:'c_sport',  name:{uz:'Sport',       ru:'Спорт',       en:'Sport',      tj:'Варзиш'},     emoji:'⚽', color:'#00E5A0', type:'expense'},
  {id:'c_travel', name:{uz:'Sayohat',     ru:'Путешествие', en:'Travel',     tj:'Сафар'},      emoji:'✈️', color:'#7C6DFA', type:'expense'},
  {id:'c_bills',  name:{uz:'Kommunal',    ru:'Коммунальные',en:'Bills',      tj:'Коммуналӣ'}, emoji:'💡', color:'#FFB547', type:'expense'},
  {id:'c_other_e',name:{uz:'Boshqa',      ru:'Другое',      en:'Other',      tj:'Дигар'},      emoji:'📦', color:'#9BA3B8', type:'expense'},
  {id:'c_salary', name:{uz:'Maosh',       ru:'Зарплата',    en:'Salary',     tj:'Маош'},       emoji:'💰', color:'#00E5A0', type:'income'},
  {id:'c_free',   name:{uz:'Frilanss',    ru:'Фриланс',     en:'Freelance',  tj:'Фриланс'},    emoji:'💻', color:'#4ECDC4', type:'income'},
  {id:'c_biz',    name:{uz:'Biznes',      ru:'Бизнес',      en:'Business',   tj:'Бизнес'},     emoji:'🏢', color:'#FFB547', type:'income'},
  {id:'c_invest', name:{uz:'Investitsiya',ru:'Инвестиции',  en:'Investment', tj:'Сармоягузорӣ'},emoji:'📈',color:'#7C6DFA',type:'income'},
  {id:'c_other_i',name:{uz:'Boshqa',      ru:'Другое',      en:'Other',      tj:'Дигар'},      emoji:'💵', color:'#9BA3B8', type:'income'},
  {id:'c_debt_g', name:{uz:'Qarz berdim', ru:'Дал в долг',  en:'Lent money', tj:'Қарз додам'}, emoji:'💸', color:'#FFB547', type:'debt_given'},
  {id:'c_debt_t', name:{uz:'Qarz oldim',  ru:'Взял в долг', en:'Borrowed',   tj:'Қарз гирифтам'},emoji:'💰',color:'#7C6DFA',type:'debt_taken'},
];

const AI_KW = {
  c_food:[
    'ovqat','taom','osh','non','gosht','sabzavot','meva','tushlik','nonushta',
    'somsa','manti','lagman','shurva','burger','pizza','lavash','doner','sushi',
    'bozor','bazar','supermarket','magazin','dukon','dokon','oziq','mahsulot',
    'restoran','kafe','choyxona','stolovaya','narx','gilamcha',
    'еда','продукты','магазин','рынок','базар','обед','ужин','завтрак',
    'хлеб','мясо','овощи','ресторан','столовая',
    'food','grocery','supermarket','market','lunch','dinner','breakfast',
    'restaurant','bakery','shop','store','meal','хӯрок','бозор','мағоза'
  ],
  c_trans:[
    'taxi','taksi','yandex','uber','avto','mashina','bus','metro','benzin',
    'gaz','yoqilgi','moy','shinа','tolov','yol','marshrutka','tramvay',
    'poyezd','minibus','zapchast','avtobus',
    'такси','машина','бензин','метро','автобус','маршрутка','поезд','заправка',
    'taxi','uber','bus','metro','fuel','gas','car','parking','train','нақлиёт'
  ],
  c_home:[
    'ijara','kvartira','uy','xona','arenda','rent','kommunal','remont',
    'mebel','gaz','suv','elektr','isitish','santexnik','chilangar',
    'аренда','квартира','ремонт','мебель','коммунальные','свет','газ','вода',
    'rent','repair','furniture','electricity','water','gas','apartment'
  ],
  c_health:[
    'dori','dorixona','apteka','shifokor','doktor','klinika','kasalxona',
    'tahlil','analiz','tish','koz','rentgen','massaj','vitamin','ukol',
    'аптека','лекарство','врач','клиника','больница','анализ','зубной',
    'pharmacy','medicine','doctor','hospital','clinic','vitamin','dentist'
  ],
  c_cloth:[
    'kiyim','koylak','shim','kurtka','palto','poyabzal','botinka','krossovka',
    'sviter','galstuk','ichki','paypoq','sumka','belbog','shlyapa','qolqop',
    'одежда','рубашка','штаны','куртка','обувь','кроссовки','сумка','пальто',
    'clothes','shirt','pants','jacket','shoes','sneakers','bag','dress','coat'
  ],
  c_enter:[
    'kino','film','concert','spektakl','teatr','muzey','park','zoo',
    'oyin','game','netflix','youtube','spotify','bilyard','bowling','karaoke',
    'развлечения','кино','концерт','театр','игра','парк','зоопарк',
    'entertainment','cinema','movie','concert','game','park','zoo'
  ],
  c_edu:[
    'kurs','trening','kitob','darslik','seminar','univer','universitet',
    'maktab','kollej','talaba','repetitor','sertifikat','imtihon','talim',
    'образование','курс','книга','университет','школа','учёба','репетитор',
    'education','course','book','university','school','training','tutor'
  ],
  c_cafe:[
    'kofe','coffee','kapuchino','latte','espresso','choy','tea','sharbat',
    'smoothie','juice','cake','tort','konfet','shokolad','pechenye','bulochka',
    'кофе','чай','торт','сок','шоколад','конфеты','выпечка',
    'coffee','tea','cake','juice','smoothie','chocolate','candy','pastry'
  ],
  c_tech:[
    'telefon','smartfon','iphone','samsung','xiaomi','laptop','noutbuk',
    'kompyuter','planshet','ipad','naushnik','kolonka','kamera','printer',
    'zaryadka','kabel','flesh','monitor','klaviatura','sichqon','router',
    'телефон','смартфон','ноутбук','компьютер','наушники','камера',
    'phone','laptop','computer','tablet','earphones','camera','printer','router'
  ],
  c_sport:[
    'sport','gym','fitnes','trenajer','basketball','futbol','tennis',
    'badminton','suzish','velosiped','yugurish','boks','karate','yoga',
    'crossfit','stadium','sport zal','pilates','changgi',
    'спорт','тренажёр','фитнес','бассейн','бокс','футбол','теннис',
    'gym','fitness','swimming','running','basketball','tennis','boxing','yoga'
  ],
  c_travel:[
    'sayohat','avia','aviabilet','samolyot','poyezd','hotel','mehmonxona',
    'hostel','viza','pasport','sugurta','ekskursiya','tur','dam olish',
    'путешествие','билет','самолёт','отель','гостиница','виза','туризм',
    'travel','flight','ticket','hotel','visa','tour','trip','vacation'
  ],
  c_bills:[
    'elektr','yoruglik','suv','gaz','internet','wifi','kommunal',
    'uy haqi','sugurta','obuna','subscription','tolov',
    'электричество','свет','вода','газ','интернет','коммунальные','страховка',
    'electricity','water','gas','internet','bills','subscription','insurance'
  ],
  c_beauty:[
    'sartarosh','soch','soqol','manikyur','pedikyur','kosmetika','parfum',
    'atir','krem','shampun','gel','salon','spa','massaj','solarium',
    'парикмахер','маникюр','косметика','духи','крем','салон','спа',
    'haircut','manicure','cosmetics','perfume','cream','salon','spa'
  ],
  c_gift:[
    'sovga','present','gift','bayram','tugilgan kun','birthday',
    'nikoh','toy','yangi yil','8mart','23fevral','xedya',
    'подарок','праздник','день рождения','свадьба','новый год',
    'gift','present','birthday','wedding','holiday','new year'
  ],
  c_salary:[
    'maosh','oylik','ish haqi','salary','daromad','bonus','mukofot',
    'зарплата','премия','доход','получил','маош','даромад',
    'salary','income','bonus','earned','wage','payment'
  ],
  c_free:[
    'frilanss','freelance','loyiha','project','dizayn','dastur','kod',
    'фриланс','проект','дизайн','программирование','верстка',
    'freelance','project','design','coding','programming','development'
  ],
  c_biz:[
    'biznes','savdo','tovar','foyda','firma','kompaniya','sotish',
    'бизнес','торговля','товар','прибыль','компания','продажа',
    'business','sales','profit','revenue','trade','company'
  ],
  c_invest:[
    'invest','aksiya','fond','crypto','bitcoin','ethereum','dollar',
    'bank','depozit','foiz','dividend','obligatsiya','qimmatli qogoz',
    'инвестиции','акции','крипта','биткоин','депозит','дивиденды',
    'investment','stock','crypto','bitcoin','dividend','deposit','fund'
  ],
};

// ─── STATE ────────────────────────────────────────────────────────────────────
let UID = null;
let S = {
  profile:  {name:'Foydalanuvchi', username:'@spenduz', avatar:'😊', joinedAt:null, telegramId:null},
  transactions: [],
  budgets:  [],
  goals:    [],
  family:   [],
  categories: [],
  rates:    {usd:12800, eur:13900, rub:140, updatedAt:null},
  settings: {theme:'dark', language:'uz', currency:'uzs', pin:null, pinEnabled:false, notifEnabled:false, notifTime:'21:00'},
  aiHistory: []
};

let currentTab      = 'home';
let currentTxType   = 'expense';
let currentCatType  = 'expense';
let currentChart    = 'donut';
let currentBarPeriod= 'week';
let editingTxnId    = null;
let addToGoalId     = null;
let confirmCb       = null;
let selectedAvatar  = '😊';
let selectedCatColor= '#00E5A0';
let pinInput        = '';
let pinSetupMode    = 'set';
let pinSetupFirst   = '';
let pinSetupInput   = '';
let receiptTxnId    = null;
let showingAll      = false;
let aiTyping        = false;

// ─── STORAGE ──────────────────────────────────────────────────────────────────
const KEY = () => 'spenduz_v5_' + UID;

function catName(cat) {
  if (!cat) return '';
  if (typeof cat.name === 'object') return cat.name[S.settings.language] || cat.name.uz || '';
  return cat.name || '';
}

function loadS() {
  try {
    const raw = localStorage.getItem(KEY());
    if (!raw) return false;
    const p = JSON.parse(raw);
    S.profile      = Object.assign(S.profile, p.profile||{});
    S.transactions = p.transactions||[];
    S.budgets      = p.budgets||[];
    S.goals        = p.goals||[];
    S.family       = p.family||[];
    S.categories   = (p.categories&&p.categories.length) ? p.categories : DEFAULT_CATS.map(c=>({...c}));
    S.rates        = Object.assign(S.rates, p.rates||{});
    S.settings     = Object.assign(S.settings, p.settings||{});
    S.aiHistory    = p.aiHistory||[];
    return true;
  } catch(e) { return false; }
}

function saveS() {
  if (!S.categories||!S.categories.length) S.categories = DEFAULT_CATS.map(c=>({...c}));
  localStorage.setItem(KEY(), JSON.stringify(S));
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
const genId    = () => 'i'+Date.now()+Math.random().toString(36).substr(2,4);
const todayISO = () => new Date().toISOString().split('T')[0];
const monthISO = () => { const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`; };

function fmt(amount, cur) {
  const c = cur||S.settings.currency||'uzs';
  const n = Number(amount)||0;
  const f = n.toLocaleString('uz-UZ');
  return f + ({uzs:" so'm", usd:' $', eur:' €', rub:' ₽'}[c]||" so'm");
}

function fmtDate(d) {
  if (!d) return '';
  const dt = new Date(d);
  return isNaN(dt) ? d : dt.toLocaleDateString('uz-UZ',{day:'2-digit',month:'2-digit',year:'numeric'});
}

function toUZS(amount, cur) {
  if (cur==='uzs'||!cur) return amount;
  return amount * (S.rates[cur]||1);
}

function toast(msg, type='success') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `toast toast-${type}`;
  el.classList.remove('hidden');
  clearTimeout(el._t);
  el._t = setTimeout(()=>el.classList.add('hidden'), 2800);
}

function openM(id)  { document.getElementById(id).classList.remove('hidden'); }
function closeM(id) { document.getElementById(id).classList.add('hidden'); }

function confirm2(title, msg, cb) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmMsg').textContent   = msg;
  confirmCb = cb;
  openM('confirmModal');
}

function getCat(id)          { return S.categories.find(c=>c.id===id)||null; }
function getCatsByType(type) { return S.categories.filter(c=>c.type===type); }

// ─── LANGUAGE SYSTEM ──────────────────────────────────────────────────────────
function applyLanguage(lang) {
  S.settings.language = lang;
  saveS();

  // Update all labeled elements
  const map = {
    'lbl_today_balance':'today_balance', 'lbl_income':'income', 'lbl_expense':'expense',
    'lbl_debt':'debt', 'lbl_monthly_report':'monthly_report', 'lbl_chart':'chart',
    'lbl_recent':'recent', 'seeAllBtn':'see_all', 'lbl_no_txn':'no_txn',
    'lbl_all_txn':'all_txn', 'lbl_goals_title':'goals_title', 'lbl_no_goal':'no_goal',
    'lbl_income2':'income', 'lbl_expense2':'expense',
    'nav_home':'nav_home', 'nav_goals':'nav_goals', 'nav_ai':'nav_ai', 'nav_settings':'nav_settings',
    'lbl_profile':'profile', 'lbl_name':'name', 'lbl_language_title':'language',
    'lbl_interface':'interface', 'lbl_theme':'theme', 'lbl_theme_sub':'theme_sub',
    'lbl_currency':'currency', 'lbl_notif_title':'notifications', 'lbl_push_notif':'push_notif',
    'lbl_notif_time':'notif_time', 'lbl_security':'security', 'lbl_pin':'pin',
    'lbl_remove_pin':'remove_pin', 'lbl_custom_cats':'custom_cats', 'lbl_family':'family',
    'lbl_data':'data', 'lbl_about':'about', 'lbl_avatar':'avatar',
    'lbl_ai_title':'ai_title', 'lbl_weekly':'weekly', 'lbl_monthly':'monthly2',
    'addFormTitle': currentTxType==='expense'?'expense':'income',
  };

  Object.entries(map).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  });

  // Tab labels
  const tabE = document.getElementById('tab_expense'); if(tabE) tabE.textContent = '⬇ '+t('expense');
  const tabI = document.getElementById('tab_income');  if(tabI) tabI.textContent = '⬆ '+t('income');
  const tabG = document.getElementById('tab_debt_given'); if(tabG) tabG.textContent = '💸 '+t('debt');
  const tabT = document.getElementById('tab_debt_taken'); if(tabT) tabT.textContent = '💰 '+t('debt');

  // Form labels
  ['lbl_amount','lbl_category','lbl_date','lbl_note','lbl_tags','lbl_repeat','lbl_debt_person'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.textContent = t({
      lbl_amount:'amount',lbl_category:'category',lbl_date:'date',
      lbl_note:'note',lbl_tags:'tags',lbl_repeat:'repeat',lbl_debt_person:'debt_person'
    }[id]);
  });

  // Selects
  const rSel = document.getElementById('repeatSelect');
  if(rSel) {
    const opts = rSel.options;
    if(opts[0]) opts[0].text = t('no_repeat');
    if(opts[1]) opts[1].text = t('daily');
    if(opts[2]) opts[2].text = t('weekly');
    if(opts[3]) opts[3].text = t('monthly');
  }
  const fType = document.getElementById('filterType');
  if(fType) {
    if(fType.options[0]) fType.options[0].text = t('see_all').replace(' →','');
    if(fType.options[1]) fType.options[1].text = t('income');
    if(fType.options[2]) fType.options[2].text = t('expense');
  }

  // Category type buttons
  const ce = document.getElementById('cattype_expense'); if(ce) ce.textContent = t('expense_type');
  const ci = document.getElementById('cattype_income');  if(ci) ci.textContent = t('income_type');

  // Buttons
  const spb = document.getElementById('saveProfileBtn');
  if(spb) spb.innerHTML = '✓ '+t('save_profile');
  const sgb = document.getElementById('settingsAddCatBtn');
  if(sgb) sgb.innerHTML = '+ '+t('new_cat');
  const afb = document.getElementById('addFamilyBtn');
  if(afb) afb.innerHTML = '+ '+t('add_member');
  const eb = document.getElementById('exportBtn');
  if(eb) eb.innerHTML = '📤 '+t('export');
  const ib = document.getElementById('importBtn');
  if(ib) ib.innerHTML = '📥 '+t('import_data');
  const rb = document.getElementById('resetBtn');
  if(rb) rb.innerHTML = '⚠️ '+t('reset');
  const sub = document.getElementById('submitTxn');
  if(sub) sub.textContent = '✓ '+t('save');
  const cnb = document.getElementById('cancelEdit');
  if(cnb) cnb.textContent = '✕ '+t('cancel');
  const lgb = document.getElementById('loginBtn');
  if(lgb) lgb.textContent = t('login_start');
  const lns = document.getElementById('loginSubText');
  if(lns) lns.textContent = t('login_sub');
  const lnl = document.getElementById('loginNameLabel');
  if(lnl) lnl.textContent = t('login_name');
  const lal = document.getElementById('loginAvatarLabel');
  if(lal) lal.textContent = t('login_avatar');

  // PIN screen
  const pt = document.getElementById('pinTitle'); if(pt) pt.textContent = t('pin_enter');
  const pf = document.getElementById('pinForgot'); if(pf) pf.textContent = t('pin_forgot');

  // AI quick btns
  renderAiQuickBtns();

  // Highlight active lang btn
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang===lang));
  document.querySelectorAll('#settingsLangGrid .lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang===lang));
  document.querySelectorAll('#loginLangGrid .lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang===lang));

  // PIN status
  const pinOn = S.settings.pinEnabled && S.settings.pin;
  const pst = document.getElementById('pinStatusText'); if(pst) pst.textContent = pinOn?t('pin_set'):t('pin_not_set');
  const spb2 = document.getElementById('setPinBtn'); if(spb2) spb2.textContent = pinOn?t('change_pin'):t('set_pin');

  // Notif
  const nst = document.getElementById('notifStatusText'); if(nst) nst.textContent = S.settings.notifEnabled?t('notif_on'):t('notif_off');

  // Re-render category grid if on add tab
  if(currentTab==='add') renderCatGrid();
  if(currentTab==='home') renderHome();
  if(currentTab==='goals') renderGoals();
}

// ─── RATES ────────────────────────────────────────────────────────────────────
async function fetchRates() {
  try {
    const res  = await fetch('https://cbu.uz/uz/arkhiv-kursov-valyut/json/');
    const data = await res.json();
    const find = code => { const r=data.find(x=>x.Ccy===code); return r?parseFloat(r.Rate):null; };
    S.rates.usd = find('USD')||S.rates.usd;
    S.rates.eur = find('EUR')||S.rates.eur;
    S.rates.rub = find('RUB')||S.rates.rub;
    S.rates.updatedAt = new Date().toLocaleTimeString();
    saveS(); updateRateBar();
  } catch(e){}
}

function updateRateBar() {
  document.getElementById('rateUSD').textContent = `🇺🇸 ${S.rates.usd.toLocaleString()}`;
  document.getElementById('rateEUR').textContent = `🇪🇺 ${S.rates.eur.toLocaleString()}`;
  document.getElementById('rateRUB').textContent = `🇷🇺 ${S.rates.rub.toFixed(1)}`;
  if(S.rates.updatedAt) document.getElementById('rateUpdated').textContent = S.rates.updatedAt;
}

// ─── NOTIFICATIONS ────────────────────────────────────────────────────────────
async function requestNotif() {
  if (!('Notification' in window)) { toast(t('notif_denied'),'error'); return; }
  const p = await Notification.requestPermission();
  if(p==='granted') {
    S.settings.notifEnabled=true; saveS();
    document.getElementById('notifStatusText').textContent = t('notif_on');
    toast(t('notif_granted'));
    scheduleNotif();
  } else {
    S.settings.notifEnabled=false; saveS();
    document.getElementById('notifToggle').checked=false;
    document.getElementById('notifStatusText').textContent = t('notif_off');
    toast(t('notif_denied'),'error');
  }
}

function scheduleNotif() {
  if(!S.settings.notifEnabled) return;
  const [h,m] = (S.settings.notifTime||'21:00').split(':').map(Number);
  const now=new Date(), next=new Date();
  next.setHours(h,m,0,0);
  if(next<=now) next.setDate(next.getDate()+1);
  setTimeout(()=>{
    new Notification('SpendUZ 💸',{body:t('no_txn')+' — '+t('note')});
    setInterval(()=>new Notification('SpendUZ 💸',{body:'📊'}),86400000);
  },next-now);
}

// ─── PIN ──────────────────────────────────────────────────────────────────────
function updDots(val, prefix) {
  for(let i=1;i<=4;i++) { const e=document.getElementById(prefix+i); if(e) e.classList.toggle('filled',i<=val.length); }
}

function initPinScreen() {
  document.getElementById('pinAvatar').textContent = S.profile.avatar||'😊';
  document.getElementById('pinName').textContent   = S.profile.name;
  document.getElementById('pinTitle').textContent  = t('pin_enter');
  document.getElementById('pinForgot').textContent = t('pin_forgot');
  pinInput=''; updDots('','pd');
  document.getElementById('pinError').classList.add('hidden');
}

function pinEnter(n) { if(pinInput.length>=4) return; pinInput+=n; updDots(pinInput,'pd'); }
function pinBack()   { pinInput=pinInput.slice(0,-1); updDots(pinInput,'pd'); }

function pinSubmit() {
  if(pinInput.length<4) return;
  if(pinInput===S.settings.pin) {
    document.getElementById('pinScreen').classList.add('hidden');
    startApp();
  } else {
    const e=document.getElementById('pinError');
    e.textContent=t('pin_wrong'); e.classList.remove('hidden');
    pinInput=''; updDots('','pd');
    setTimeout(()=>e.classList.add('hidden'),2000);
  }
}

function openPinSetup() {
  pinSetupMode='set'; pinSetupFirst=''; pinSetupInput='';
  document.getElementById('pinSetupTitle').textContent=t('pin_setup');
  document.getElementById('pinSetupHint').textContent =t('pin_new');
  updDots('','psd'); openM('pinSetupModal');
}

function pinSetupEnter(n) { if(pinSetupInput.length>=4) return; pinSetupInput+=n; updDots(pinSetupInput,'psd'); }
function pinSetupBack()   { pinSetupInput=pinSetupInput.slice(0,-1); updDots(pinSetupInput,'psd'); }

function pinSetupOk() {
  if(pinSetupInput.length<4) return;
  if(pinSetupMode==='set') {
    pinSetupFirst=pinSetupInput; pinSetupInput=''; pinSetupMode='confirm';
    document.getElementById('pinSetupHint').textContent=t('pin_confirm');
    updDots('','psd');
  } else {
    if(pinSetupInput===pinSetupFirst) {
      S.settings.pin=pinSetupInput; S.settings.pinEnabled=true; saveS();
      closeM('pinSetupModal'); renderSettingsPage(); toast(t('pin_saved'));
    } else {
      toast(t('pin_mismatch'),'error');
      pinSetupInput=''; pinSetupMode='set'; pinSetupFirst='';
      document.getElementById('pinSetupHint').textContent=t('pin_new');
      updDots('','psd');
    }
  }
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function switchTab(tab) {
  currentTab=tab;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const pg=document.getElementById('page-'+tab); if(pg) pg.classList.add('active');
  const nb=document.querySelector(`.nav-btn[data-tab="${tab}"]`); if(nb) nb.classList.add('active');
  if(tab==='home')     renderHome();
  if(tab==='budget')   renderBudget();
  if(tab==='goals')    renderGoals();
  if(tab==='ai')       initAiChat();
  if(tab==='settings') renderSettingsPage();
  if(tab==='add')      { if(!editingTxnId) resetAddForm(); renderCatGrid(); }
}

// ─── LOGIN ────────────────────────────────────────────────────────────────────
function renderAvatarGrid(elId, isLogin) {
  const el=document.getElementById(elId); if(!el) return;
  el.innerHTML=AVATARS.map(a=>`<button class="avatar-option ${a===selectedAvatar?'selected':''}" onclick="pickAvatar('${a}','${elId}',${isLogin?1:0})">${a}</button>`).join('');
}

function pickAvatar(emoji, elId, isLogin) {
  selectedAvatar=emoji;
  if(isLogin) renderAvatarGrid(elId,true);
  else { S.profile.avatar=emoji; saveS(); updateTopBar(); renderSettingsPage(); closeM('avatarModal'); toast(t('avatar_changed')); }
}

function doLogin() {
  const name=document.getElementById('loginName').value.trim();
  if(!name){ toast(t('enter_name'),'error'); return; }
  S.profile.name=name; S.profile.avatar=selectedAvatar;
  S.profile.username='@'+name.toLowerCase().replace(/\s+/g,'');
  S.profile.joinedAt=new Date().toISOString();
  S.categories=DEFAULT_CATS.map(c=>({...c}));
  saveS(); startApp();
}

function startApp() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('pinScreen').classList.add('hidden');
  const app=document.getElementById('app');
  app.classList.remove('hidden'); app.classList.add('app-enter');
  applyTheme(S.settings.theme); updateTopBar(); applyLanguage(S.settings.language);
  fetchRates(); scheduleRepeating();
  renderHome(); renderCatGrid();
  if(S.settings.notifEnabled&&typeof Notification!=='undefined'&&Notification.permission==='granted') scheduleNotif();
  generateAiInsight();
}

function updateTopBar() {
  document.getElementById('topAvatar').textContent  =S.profile.avatar||'😊';
  document.getElementById('topUserName').textContent=S.profile.name;
  document.getElementById('topUserSub').textContent =S.profile.username||'@spenduz';
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function renderHome() {
  const today=todayISO();
  const tTxns=S.transactions.filter(t=>t.date===today);
  const tInc =tTxns.filter(t=>t.type==='income').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const tExp =tTxns.filter(t=>t.type==='expense').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const tBal =tInc-tExp;

  const balEl=document.getElementById('todayBalance');
  balEl.textContent=fmt(tBal); balEl.className='balance-amount '+(tBal>=0?'pos':'neg');

  const allInc=S.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const allExp=S.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const dOut  =S.transactions.filter(t=>t.type==='debt_given').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const dIn   =S.transactions.filter(t=>t.type==='debt_taken').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);

  document.getElementById('totalIncome').textContent   =fmt(allInc);
  document.getElementById('totalExpense').textContent  =fmt(allExp);
  document.getElementById('totalDebtGiven').textContent=fmt(dOut);
  document.getElementById('totalDebtTaken').textContent=fmt(dIn);

  const now=new Date();
  document.getElementById('todayDate').textContent=now.toLocaleDateString('uz-UZ',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

  const ym=monthISO();
  const mTxns=S.transactions.filter(t=>t.date&&t.date.startsWith(ym));
  const mInc =mTxns.filter(t=>t.type==='income').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mExp =mTxns.filter(t=>t.type==='expense').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mNet =mInc-mExp;
  const months=['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr'];

  document.getElementById('reportMonth').textContent=months[now.getMonth()]+' '+now.getFullYear();
  const netEl=document.getElementById('reportNet');
  netEl.textContent=fmt(mNet); netEl.className='report-net '+(mNet>=0?'pos':'neg');
  document.getElementById('reportIncome').textContent =fmt(mInc);
  document.getElementById('reportExpense').textContent=fmt(mExp);

  const total=mInc+mExp;
  document.getElementById('reportBarFill').style.width=(total>0?Math.min(100,Math.round((mExp/total)*100)):0)+'%';

  // Charts — all types
  if(currentChart==='donut') renderDonutChart(mTxns);
  else renderBarChart(currentBarPeriod);

  // Recent 5
  const recent=[...S.transactions].sort((a,b)=>new Date(b.date+'T'+(b.time||'00:00'))-new Date(a.date+'T'+(a.time||'00:00'))).slice(0,5);
  renderTxnList('recentList',recent,true);

  // See all
  document.getElementById('seeAllBtn').textContent = t('see_all');

  // All history
  if(showingAll) applyHistoryFilters();

  generateAiInsight();
}

// ─── DONUT CHART ──────────────────────────────────────────────────────────────
function renderDonutChart(expTxns) {
  const svg=document.getElementById('donutSvg');
  const legend=document.getElementById('chartLegend');
  const center=document.getElementById('donutCenter');

  if(!expTxns||!expTxns.length) {
    svg.innerHTML='<circle cx="60" cy="60" r="45" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="18"/>';
    legend.innerHTML=`<div class="chart-empty">${t('no_txn')}</div>`;
    center.textContent='—'; return;
  }

  const grouped={};
  // Group by type first for non-expense, then by category for expense
  expTxns.forEach(tx=>{
    if(tx.type==='income'){
      const k='__income__'; grouped[k]=(grouped[k]||0)+toUZS(tx.amount,tx.currency);
    } else if(tx.type==='debt_given'){
      const k='__debt_given__'; grouped[k]=(grouped[k]||0)+toUZS(tx.amount,tx.currency);
    } else if(tx.type==='debt_taken'){
      const k='__debt_taken__'; grouped[k]=(grouped[k]||0)+toUZS(tx.amount,tx.currency);
    } else {
      const k=tx.category||'c_other_e'; grouped[k]=(grouped[k]||0)+toUZS(tx.amount,tx.currency);
    }
  });
  const total=Object.values(grouped).reduce((s,v)=>s+v,0);
  const entries=Object.entries(grouped).sort((a,b)=>b[1]-a[1]).slice(0,7);
  const r=45,circ=2*Math.PI*r;
  let offset=0,html='';

  entries.forEach(([id,val],i)=>{
    let color;
    if(id==='__income__')      color='#00E5A0';
    else if(id==='__debt_given__') color='#FFB547';
    else if(id==='__debt_taken__') color='#7C6DFA';
    else { const cat=getCat(id); color=cat&&cat.color?cat.color:CAT_COLORS[i%CAT_COLORS.length]; }
    const dash=(val/total)*circ;
    html+=`<circle cx="60" cy="60" r="${r}" fill="none" stroke="${color}" stroke-width="18"
      stroke-dasharray="${dash.toFixed(2)} ${(circ-dash).toFixed(2)}"
      stroke-dashoffset="${(-offset).toFixed(2)}"/>`;
    offset+=dash;
  });
  html+=`<circle cx="60" cy="60" r="35" fill="var(--card)"/>`;
  svg.innerHTML=html;
  center.textContent=fmt(total);

  legend.innerHTML=entries.map(([id,val],i)=>{
    let emoji,name,color;
    if(id==='__income__')     { emoji='💰'; name=t('income');     color='#00E5A0'; }
    else if(id==='__debt_given__') { emoji='💸'; name=t('debt')+' (-)'; color='#FFB547'; }
    else if(id==='__debt_taken__') { emoji='💵'; name=t('debt')+' (+)'; color='#7C6DFA'; }
    else { const cat=getCat(id); emoji=cat?cat.emoji:'📦'; name=cat?catName(cat):t('expense'); color=cat&&cat.color?cat.color:CAT_COLORS[i%CAT_COLORS.length]; }
    return `<div class="legend-item">
      <span class="legend-dot" style="background:${color}"></span>
      <span>${emoji}</span>
      <span class="legend-name">${name}</span>
      <span class="legend-pct">${Math.round((val/total)*100)}%</span>
    </div>`;
  }).join('');
}

// ─── BAR CHART ────────────────────────────────────────────────────────────────
function renderBarChart(period) {
  currentBarPeriod=period;
  const wrap=document.getElementById('barChartWrap');
  const now=new Date();
  let labels=[],incData=[],expData=[];

  if(period==='week') {
    const days=['Yak','Du','Se','Ch','Pa','Sh','Sha'];
    for(let i=6;i>=0;i--) {
      const d=new Date(now); d.setDate(d.getDate()-i);
      const iso=d.toISOString().split('T')[0];
      const dayT=S.transactions.filter(t=>t.date===iso);
      labels.push(days[d.getDay()]);
      incData.push(dayT.filter(t=>t.type==='income').reduce((s,t)=>s+toUZS(t.amount,t.currency),0));
      expData.push(dayT.filter(t=>t.type==='expense').reduce((s,t)=>s+toUZS(t.amount,t.currency),0));
    }
  } else {
    const mn=['Yan','Fev','Mar','Apr','May','Iyu','Iyu','Avg','Sen','Okt','Noy','Dek'];
    for(let i=5;i>=0;i--) {
      const d=new Date(now.getFullYear(),now.getMonth()-i,1);
      const ym=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
      const mT=S.transactions.filter(t=>t.date&&t.date.startsWith(ym));
      labels.push(mn[d.getMonth()]);
      incData.push(mT.filter(t=>t.type==='income').reduce((s,t)=>s+toUZS(t.amount,t.currency),0));
      expData.push(mT.filter(t=>t.type==='expense').reduce((s,t)=>s+toUZS(t.amount,t.currency),0));
    }
  }

  const maxV=Math.max(...incData,...expData,1);
  wrap.innerHTML=`
    <div class="bar-chart">
      ${labels.map((lbl,i)=>`<div class="bar-group">
        <div class="bar-pair">
          <div class="bar bar-inc" style="height:${Math.round((incData[i]/maxV)*110)}px"></div>
          <div class="bar bar-exp" style="height:${Math.round((expData[i]/maxV)*110)}px"></div>
        </div>
        <div class="bar-label">${lbl}</div>
      </div>`).join('')}
    </div>
    <div class="bar-legend">
      <span class="bar-legend-item"><span class="bar-dot inc"></span>${t('income')}</span>
      <span class="bar-legend-item"><span class="bar-dot exp"></span>${t('expense')}</span>
    </div>`;
}

// ─── AI INSIGHT ───────────────────────────────────────────────────────────────
function generateAiInsight() {
  const ym=monthISO();
  const mExp=S.transactions.filter(t=>t.type==='expense'&&t.date&&t.date.startsWith(ym));
  const total=mExp.reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const el=document.getElementById('aiInsightText');

  if(!total) { el.textContent=t('ai_no_data'); return; }

  const grouped={};
  mExp.forEach(tx=>{ const k=tx.category||'c_other_e'; grouped[k]=(grouped[k]||0)+toUZS(tx.amount,tx.currency); });
  const [topId,topVal]=Object.entries(grouped).sort((a,b)=>b[1]-a[1])[0];
  const topCat=getCat(topId);
  const pct=Math.round((topVal/total)*100);

  el.textContent = pct>40
    ? `${topCat?topCat.emoji+' '+catName(topCat):t('expense')} — ${pct}%`
    : `${fmt(total)} ${t('expense').toLowerCase()}`;
}

// ─── OFFLINE AI ANALYSIS ──────────────────────────────────────────────────────
function buildOfflineReply(question) {
  const ym=monthISO();
  const mTxns=S.transactions.filter(t=>t.date&&t.date.startsWith(ym));
  const mInc =mTxns.filter(t=>t.type==='income').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mExp =mTxns.filter(t=>t.type==='expense').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mNet =mInc-mExp;
  const allTxns=S.transactions.length;

  if(!allTxns) return t('ai_no_data');

  // Category breakdown
  const cats={};
  mTxns.filter(t=>t.type==='expense').forEach(tx=>{
    const c=getCat(tx.category); const k=c?catName(c):t('expense');
    cats[k]=(cats[k]||0)+toUZS(tx.amount,tx.currency);
  });
  const sorted=Object.entries(cats).sort((a,b)=>b[1]-a[1]);
  const top=sorted[0];
  const topPct=top&&mExp>0?Math.round((top[1]/mExp)*100):0;

  const q=question.toLowerCase();

  // Xarajat tahlili
  if(q.includes('tahlil')||q.includes('анализ')||q.includes('analysis')||q.includes('таҳлил')) {
    if(!mExp) return S.settings.language==='ru'?'В этом месяце расходов пока нет.':S.settings.language==='en'?'No expenses this month yet.':S.settings.language==='tj'?'Ин моҳ ҳоло хароҷот нест.':'Bu oy hali xarajat yoq.';
    const lines=sorted.slice(0,5).map(([k,v])=>`• ${k}: ${fmt(v)} (${Math.round((v/mExp)*100)}%)`).join('\n');
    return {uz:`📊 Bu oylik xarajat tahlili:\n\n${lines}\n\nJami: ${fmt(mExp)}\nEng ko'p: ${top?top[0]:''} (${topPct}%)`,ru:`📊 Анализ расходов за месяц:\n\n${lines}\n\nИтого: ${fmt(mExp)}\nБольше всего: ${top?top[0]:''} (${topPct}%)`,en:`📊 Monthly expense analysis:\n\n${lines}\n\nTotal: ${fmt(mExp)}\nTop category: ${top?top[0]:''} (${topPct}%)`,tj:`📊 Таҳлили хароҷоти моҳона:\n\n${lines}\n\nҶамъ: ${fmt(mExp)}\nБештар: ${top?top[0]:''} (${topPct}%)`}[S.settings.language]||'';
  }

  // Tejash maslahati
  if(q.includes('tejash')||q.includes('экономи')||q.includes('sav')||q.includes('сарфакорӣ')) {
    const savePct=mInc>0?Math.round(((mInc-mExp)/mInc)*100):0;
    const tips={
      uz:`💡 Tejash maslahatlari:\n\n• Daromadingizning 20% ni tejang\n• ${top?top[0]+' xarajatini kamaytiring':'Katta xarajatlarni kuzating'}\n• Oylik balans: ${fmt(mNet)}\n• Hozirgi tejash darajasi: ${savePct}%`,
      ru:`💡 Советы по экономии:\n\n• Откладывайте 20% дохода\n• ${top?'Сократите расходы на '+top[0]:'Следите за крупными тратами'}\n• Баланс за месяц: ${fmt(mNet)}\n• Уровень сбережений: ${savePct}%`,
      en:`💡 Saving tips:\n\n• Save 20% of your income\n• ${top?'Reduce '+top[0]+' expenses':'Track large expenses'}\n• Monthly balance: ${fmt(mNet)}\n• Current saving rate: ${savePct}%`,
      tj:`💡 Маслиҳати сарфакорӣ:\n\n• 20% даромадатонро гузоред\n• ${top?'Хароҷоти '+top[0]+'-ро кам кунед':'Хароҷотҳои калонро назорат кунед'}\n• Баланси моҳона: ${fmt(mNet)}\n• Сатҳи андӯхт: ${savePct}%`
    };
    return tips[S.settings.language]||tips.uz;
  }

  // Byudjet rejasi
  if(q.includes('byudjet')||q.includes('бюджет')||q.includes('budget')||q.includes('буҷет')||q.includes('reja')||q.includes('план')||q.includes('plan')||q.includes('нақша')) {
    const suggested=mInc>0?{
      tejash: Math.round(mInc*0.2),
      oziq:   Math.round(mInc*0.25),
      trans:  Math.round(mInc*0.1),
      boshqa: Math.round(mInc*0.45),
    }:null;
    if(!suggested) return {uz:'Byudjet rejasi uchun daromad kiriting.',ru:'Введите доход для планирования.',en:'Add income to plan budget.',tj:'Барои нақша даромад ворид кунед.'}[S.settings.language]||'';
    return {
      uz:`🗓️ Tavsiya etilgan oylik byudjet:\n\n• Tejash: ${fmt(suggested.tejash)} (20%)\n• Oziq-ovqat: ${fmt(suggested.oziq)} (25%)\n• Transport: ${fmt(suggested.trans)} (10%)\n• Boshqa: ${fmt(suggested.boshqa)} (45%)\n\nDaromad: ${fmt(mInc)}`,
      ru:`🗓️ Рекомендуемый бюджет:\n\n• Сбережения: ${fmt(suggested.tejash)} (20%)\n• Еда: ${fmt(suggested.oziq)} (25%)\n• Транспорт: ${fmt(suggested.trans)} (10%)\n• Другое: ${fmt(suggested.boshqa)} (45%)\n\nДоход: ${fmt(mInc)}`,
      en:`🗓️ Recommended monthly budget:\n\n• Savings: ${fmt(suggested.tejash)} (20%)\n• Food: ${fmt(suggested.oziq)} (25%)\n• Transport: ${fmt(suggested.trans)} (10%)\n• Other: ${fmt(suggested.boshqa)} (45%)\n\nIncome: ${fmt(mInc)}`,
      tj:`🗓️ Нақшаи буҷети тавсияшуда:\n\n• Андӯхт: ${fmt(suggested.tejash)} (20%)\n• Хӯрок: ${fmt(suggested.oziq)} (25%)\n• Нақлиёт: ${fmt(suggested.trans)} (10%)\n• Дигар: ${fmt(suggested.boshqa)} (45%)\n\nДаромад: ${fmt(mInc)}`
    }[S.settings.language]||'';
  }

  // Asosiy xarajat
  if(q.includes('asosiy')||q.includes('главн')||q.includes('main')||q.includes('асосӣ')||q.includes('kop')||q.includes('много')||q.includes('most')) {
    if(!top) return {uz:'Xarajat topilmadi.',ru:'Расходов нет.',en:'No expenses found.',tj:'Хароҷот нест.'}[S.settings.language]||'';
    return {
      uz:`🔍 Eng ko'p xarajat:\n\n${sorted.slice(0,3).map(([k,v],i)=>`${i+1}. ${k}: ${fmt(v)}`).join('\n')}\n\n${top[0]} — jami xarajatning ${topPct}% ini tashkil etadi.`,
      ru:`🔍 Главные расходы:\n\n${sorted.slice(0,3).map(([k,v],i)=>`${i+1}. ${k}: ${fmt(v)}`).join('\n')}\n\n${top[0]} — ${topPct}% от общих расходов.`,
      en:`🔍 Top expenses:\n\n${sorted.slice(0,3).map(([k,v],i)=>`${i+1}. ${k}: ${fmt(v)}`).join('\n')}\n\n${top[0]} is ${topPct}% of total expenses.`,
      tj:`🔍 Хароҷотҳои асосӣ:\n\n${sorted.slice(0,3).map(([k,v],i)=>`${i+1}. ${k}: ${fmt(v)}`).join('\n')}\n\n${top[0]} — ${topPct}% аз ҷамъи хароҷот.`
    }[S.settings.language]||'';
  }

  // Default - umumiy holat
  const status=mNet>=0?{uz:'✅ Yaxshi! Xarajatlar daromaddan past.',ru:'✅ Хорошо! Расходы ниже доходов.',en:'✅ Great! Expenses below income.',tj:'✅ Хуб! Хароҷот аз даромад кам.'}:{uz:'⚠️ Diqqat! Xarajatlar daromaddan oshib ketdi.',ru:'⚠️ Внимание! Расходы превысили доходы.',en:'⚠️ Warning! Expenses exceed income.',tj:'⚠️ Диққат! Хароҷот аз даромад зиёд шуд.'}[S.settings.language]||'';
  return `${status}\n\n${t('income')}: ${fmt(mInc)}\n${t('expense')}: ${fmt(mExp)}\nBalans: ${fmt(mNet)}`;
}

async function sendAiMsg() {
  if(aiTyping) return;
  const input=document.getElementById('aiInput');
  const text=input.value.trim(); if(!text) return;
  input.value='';

  S.aiHistory.push({role:'user',text});
  addAiMsg('user',text);
  aiTyping=true;

  // Show typing
  const typing=addAiTyping();
  await new Promise(r=>setTimeout(r,800));
  typing.remove();

  // Offline AI
  const reply=buildOfflineReply(text);
  addAiMsg('bot',reply);
  S.aiHistory.push({role:'bot',text:reply});
  if(S.aiHistory.length>20) S.aiHistory=S.aiHistory.slice(-20);
  saveS();
  aiTyping=false;
}

function renderAiQuickBtns() {
  const el=document.getElementById('aiQuickBtns'); if(!el) return;
  el.innerHTML=[t('ai_q1'),t('ai_q2'),t('ai_q3'),t('ai_q4')].map(q=>
    `<button class="ai-quick-btn" onclick="aiQuick('${q}')">${q}</button>`).join('');
}

function initAiChat() {
  const msgs=document.getElementById('aiChatMessages');
  const welcome=document.getElementById('aiWelcomeMsg');
  if(welcome) welcome.textContent=t('ai_welcome');
  renderAiQuickBtns();
  if(S.aiHistory.length>0) {
    msgs.innerHTML=S.aiHistory.map(m=>`
      <div class="ai-msg ${m.role}">
        ${m.role==='bot'?'<div class="ai-msg-avatar">🤖</div>':''}
        <div class="ai-msg-bubble">${m.text}</div>
        ${m.role==='user'?`<div class="ai-msg-avatar user">${S.profile.avatar||'😊'}</div>`:''}
      </div>`).join('');
    msgs.scrollTop=msgs.scrollHeight;
  }
}

function aiQuick(q) { document.getElementById('aiInput').value=q; sendAiMsg(); }

function buildCtx() {
  const ym=monthISO();
  const mT=S.transactions.filter(t=>t.date&&t.date.startsWith(ym));
  const mInc=mT.filter(t=>t.type==='income').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mExp=mT.filter(t=>t.type==='expense').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const cats={};
  mT.filter(t=>t.type==='expense').forEach(t=>{ const c=getCat(t.category); const k=c?catName(c):t('expense'); cats[k]=(cats[k]||0)+toUZS(t.amount,t.currency); });
  const catStr=Object.entries(cats).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([k,v])=>`${k}: ${fmt(v)}`).join(', ');
  const lang = S.settings.language;
  const langName = {uz:"Ozbek",ru:'Русский',en:'English',tj:'Тоҷикӣ'}[lang]||'Ozbek';
  return `User: ${S.profile.name}. Lang: ${langName}. Month: income ${fmt(mInc)}, expense ${fmt(mExp)}, balance ${fmt(mInc-mExp)}. Categories: ${catStr||'none'}. Total txns: ${S.transactions.length}. Answer only in ${langName}.`;
}



function addAiMsg(role, text) {
  const msgs=document.getElementById('aiChatMessages');
  const div=document.createElement('div'); div.className=`ai-msg ${role}`;
  div.innerHTML=role==='bot'
    ?`<div class="ai-msg-avatar">🤖</div><div class="ai-msg-bubble">${text}</div>`
    :`<div class="ai-msg-bubble">${text}</div><div class="ai-msg-avatar user">${S.profile.avatar||'😊'}</div>`;
  msgs.appendChild(div); msgs.scrollTop=msgs.scrollHeight; return div;
}

function addAiTyping() {
  const msgs=document.getElementById('aiChatMessages');
  const div=document.createElement('div'); div.className='ai-msg bot';
  div.innerHTML='<div class="ai-msg-avatar">🤖</div><div class="ai-msg-bubble ai-typing"><span></span><span></span><span></span></div>';
  msgs.appendChild(div); msgs.scrollTop=msgs.scrollHeight; return div;
}

// ─── TXN LIST ─────────────────────────────────────────────────────────────────
function renderTxnList(containerId, txns, showActions) {
  const el=document.getElementById(containerId);
  if(!txns||!txns.length) {
    el.innerHTML=`<div class="empty-state"><div class="empty-icon">📭</div><div>${t('no_txn')}</div></div>`;
    return;
  }

  const grouped={};
  txns.forEach(tx=>{ const d=tx.date||'—'; if(!grouped[d])grouped[d]=[]; grouped[d].push(tx); });
  const sortedD=Object.keys(grouped).sort((a,b)=>b.localeCompare(a));

  let html='';
  sortedD.forEach(date=>{
    const list=grouped[date];
    const dNet=list.reduce((s,tx)=>{
      const v=toUZS(tx.amount,tx.currency);
      return s+(tx.type==='income'||tx.type==='debt_taken'?v:-v);
    },0);
    html+=`<div class="txn-date-header"><span>${fmtDate(date)}</span><span class="${dNet>=0?'pos':'neg'}">${fmt(dNet)}</span></div>`;
    list.forEach(tx=>{
      const cat=getCat(tx.category);
      const emoji=cat?cat.emoji:(tx.type==='debt_given'?'💸':'📦');
      const color=cat&&cat.color?cat.color:'#9BA3B8';
      const name=cat?catName(cat):t(tx.type==='income'?'income':tx.type==='debt_given'||tx.type==='debt_taken'?'debt':'expense');
      const sign=(tx.type==='income'||tx.type==='debt_taken')?'+':'-';
      const cls=tx.type==='income'?'pos':tx.type==='debt_given'||tx.type==='debt_taken'?'warn':'neg';
      const tags=tx.tags&&tx.tags.length?tx.tags.map(g=>`<span class="tag-badge">#${g}</span>`).join(''):'';
      const repeat=tx.repeat&&tx.repeat!=='none'?'<span class="repeat-badge">🔄</span>':'';
      html+=`<div class="txn-item">
        <div class="txn-emoji" style="background:${color}22;border:1.5px solid ${color}55">${emoji}</div>
        <div class="txn-info">
          <div class="txn-name">${name}${repeat}</div>
          <div class="txn-meta">${tx.debtPerson?'👤 '+tx.debtPerson+' · ':''}${tx.note?tx.note+' · ':''}${fmtDate(tx.date)}</div>
          ${tags?`<div class="txn-tags">${tags}</div>`:''}
        </div>
        <div class="txn-right">
          <div class="txn-amount ${cls}">${sign}${fmt(tx.amount,tx.currency)}</div>
          ${showActions?`<div class="txn-actions">
            <button class="txn-action-btn receipt" onclick="showReceipt('${tx.id}')" title="${t('receipt')}">🧾</button>
            <button class="txn-action-btn edit" onclick="startEditTxn('${tx.id}')">✏️</button>
            <button class="txn-action-btn del"  onclick="delTxnConfirm('${tx.id}')">🗑</button>
          </div>`:''}
        </div>
      </div>`;
    });
  });
  el.innerHTML=html;
}

// ─── HISTORY (inline in home) ─────────────────────────────────────────────────
function toggleAllHistory() {
  showingAll=!showingAll;
  document.getElementById('allHistoryWrap').classList.toggle('hidden',!showingAll);
  document.getElementById('seeAllBtn').textContent = showingAll?'↑ Yopish':t('see_all');
  if(showingAll) { updateHistoryFilters(); applyHistoryFilters(); }
}

function updateHistoryFilters() {
  const months=[...new Set(S.transactions.map(t=>t.date?t.date.substr(0,7):null).filter(Boolean))].sort((a,b)=>b.localeCompare(a));
  const mNames=['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr'];
  const mSel=document.getElementById('filterMonth'); const cur=mSel.value;
  mSel.innerHTML=`<option value="all">${t('see_all').replace(' →','')}</option>`+months.map(m=>{const[y,mo]=m.split('-');return`<option value="${m}">${mNames[parseInt(mo)-1]} ${y}</option>`;}).join('');
  if(cur) mSel.value=cur;
}

function applyHistoryFilters() {
  const search=(document.getElementById('historySearch').value||'').toLowerCase();
  const type  =document.getElementById('filterType').value;
  const month =document.getElementById('filterMonth').value;

  let txns=[...S.transactions];
  if(type!=='all')  txns=txns.filter(t=>t.type===type);
  if(month!=='all') txns=txns.filter(t=>t.date&&t.date.startsWith(month));
  if(search) txns=txns.filter(t=>{
    const c=getCat(t.category);
    return (c&&catName(c).toLowerCase().includes(search))||(t.note&&t.note.toLowerCase().includes(search))||(t.tags&&t.tags.some(g=>g.toLowerCase().includes(search)));
  });
  txns.sort((a,b)=>new Date(b.date+'T'+(b.time||'00:00'))-new Date(a.date+'T'+(a.time||'00:00')));
  renderTxnList('historyList',txns,true);
}

// ─── RECEIPT ──────────────────────────────────────────────────────────────────
function showReceipt(id) {
  const tx=S.transactions.find(x=>x.id===id); if(!tx) return;
  receiptTxnId=id;
  const cat=getCat(tx.category);
  const typeLabel=tx.type==='income'?t('income'):tx.type==='debt_given'||tx.type==='debt_taken'?t('debt'):t('expense');
  document.getElementById('receiptContent').innerHTML=`
    <div class="receipt-header"><div class="receipt-logo">💸 SpendUZ Pro</div><div class="receipt-date">${fmtDate(tx.date)} ${tx.time||''}</div></div>
    <div class="receipt-divider">- - - - - - - - - - - -</div>
    <div class="receipt-row"><span>${t('type')||'Tur'}:</span><span>${typeLabel}</span></div>
    <div class="receipt-row"><span>${t('category')}:</span><span>${cat?cat.emoji+' '+catName(cat):t('expense')}</span></div>
    <div class="receipt-row"><span>${t('amount')}:</span><span class="receipt-amount">${fmt(tx.amount,tx.currency)}</span></div>
    ${tx.debtPerson?`<div class="receipt-row"><span>${t('debt_person')}:</span><span>${tx.debtPerson}</span></div>`:''}
    ${tx.note?`<div class="receipt-row"><span>${t('note')}:</span><span>${tx.note}</span></div>`:''}
    ${tx.tags&&tx.tags.length?`<div class="receipt-row"><span>${t('tags')}:</span><span>${tx.tags.map(g=>'#'+g).join(' ')}</span></div>`:''}
    <div class="receipt-divider">- - - - - - - - - - - -</div>
    <div class="receipt-footer">SpendUZ Pro · @Spend_uz_bot</div>`;
  openM('receiptModal');
}

function shareReceipt() {
  const tx=S.transactions.find(x=>x.id===receiptTxnId); if(!tx) return;
  const cat=getCat(tx.category);
  const text=`💸 SpendUZ\n${tx.type==='income'?t('income'):t('expense')}: ${fmt(tx.amount,tx.currency)}\n${t('category')}: ${cat?cat.emoji+' '+catName(cat):''}\n${tx.note?t('note')+': '+tx.note+'\n':''}${fmtDate(tx.date)}`;
  if(navigator.share) navigator.share({title:'SpendUZ',text}).catch(()=>{});
  else navigator.clipboard.writeText(text).then(()=>toast(t('copied')));
}

// ─── ADD / EDIT TXN ───────────────────────────────────────────────────────────
function resetAddForm() {
  editingTxnId=null;
  ['editId','amountInput','noteInput','tagsInput','debtPerson'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('dateInput').value=todayISO();
  document.getElementById('repeatSelect').value='none';
  document.getElementById('currencyInput').value=S.settings.currency||'uzs';
  document.getElementById('selectedCategory').value='';
  document.getElementById('categorySearch').value='';
  document.getElementById('addFormTitle').textContent=t('add');
  document.getElementById('submitTxn').textContent='✓ '+t('save');
  document.getElementById('cancelEdit').classList.add('hidden');
  currentTxType='expense'; setTxType('expense');
}

function setTxType(type) {
  currentTxType=type;
  document.querySelectorAll('.tx-tab[data-type]').forEach(b=>b.classList.toggle('active',b.dataset.type===type));
  document.getElementById('selectedCategory').value='';
  document.getElementById('categorySearch').value='';
  document.getElementById('debtPersonWrap').style.display=(type==='debt_given'||type==='debt_taken')?'':'none';
  renderCatGrid();
}

function renderCatGrid(filter='') {
  const grid=document.getElementById('categoryGrid');
  let type=currentTxType;
  let cats=getCatsByType(type);
  if(!cats.length&&(type==='debt_given'||type==='debt_taken')) cats=getCatsByType('expense');

  if(filter){ const f=filter.toLowerCase(); cats=cats.filter(c=>catName(c).toLowerCase().includes(f)||c.emoji.includes(f)); }
  const selId=document.getElementById('selectedCategory').value;
  if(!cats.length){ grid.innerHTML=`<div class="cat-empty">${t('no_txn')}</div>`; return; }

  grid.innerHTML=cats.map(c=>{
    const sel=selId===c.id;
    const style=sel&&c.color?`border-color:${c.color};color:${c.color};background:${c.color}22`:'';
    return `<button class="cat-chip ${sel?'selected':''}" style="${style}" onclick="selectCat('${c.id}')">
      <span>${c.emoji}</span><span>${catName(c)}</span>
    </button>`;
  }).join('');
}

function selectCat(id) {
  document.getElementById('selectedCategory').value=id;
  renderCatGrid(document.getElementById('categorySearch').value);
}

function onNoteAI(val) {
  if(!val||document.getElementById('selectedCategory').value) return;
  const low=val.toLowerCase();
  for(const [id,words] of Object.entries(AI_KW)) {
    for(const w of words) {
      if(low.includes(w)) {
        const cat=getCat(id);
        if(cat&&(cat.type===currentTxType||(currentTxType==='debt_given'&&cat.type==='expense')||(currentTxType==='debt_taken'&&cat.type==='expense'))) {
          document.getElementById('selectedCategory').value=id;
          renderCatGrid(); toast('🤖 AI: '+catName(cat)); return;
        }
      }
    }
  }
}

function submitTxn() {
  const amount  =parseFloat(document.getElementById('amountInput').value);
  const catId   =document.getElementById('selectedCategory').value;
  const date    =document.getElementById('dateInput').value;
  const note    =document.getElementById('noteInput').value.trim();
  const tagsRaw =document.getElementById('tagsInput').value.trim();
  const repeat  =document.getElementById('repeatSelect').value;
  const currency=document.getElementById('currencyInput').value;
  const person  =document.getElementById('debtPerson').value.trim();
  const tags    =tagsRaw?tagsRaw.split(',').map(g=>g.trim().replace(/^#/,'')).filter(Boolean):[];

  if(!amount||amount<=0){ toast(t('enter_amount'),'error'); return; }
  if(!catId)            { toast(t('select_cat'),'error'); return; }
  if(!date)             { toast(t('enter_date'),'error'); return; }

  if(editingTxnId) {
    const idx=S.transactions.findIndex(t=>t.id===editingTxnId);
    if(idx!==-1) S.transactions[idx]={...S.transactions[idx],amount,category:catId,date,note,type:currentTxType,repeat,currency,debtPerson:person,tags};
    toast(t('updated'));
  } else {
    S.transactions.push({id:genId(),type:currentTxType,amount,category:catId,date,note,repeat,currency,debtPerson:person,tags,time:new Date().toTimeString().substr(0,5),createdAt:Date.now()});
    toast(t('saved'));
  }
  saveS(); resetAddForm(); switchTab('home');
}

function startEditTxn(id) {
  const tx=S.transactions.find(x=>x.id===id); if(!tx) return;
  editingTxnId=id; switchTab('add');
  document.getElementById('addFormTitle').textContent=t('add');
  document.getElementById('submitTxn').textContent='✓ '+t('save');
  document.getElementById('cancelEdit').classList.remove('hidden');
  currentTxType=tx.type; setTxType(tx.type);
  document.getElementById('amountInput').value=tx.amount;
  document.getElementById('dateInput').value=tx.date;
  document.getElementById('noteInput').value=tx.note||'';
  document.getElementById('tagsInput').value=tx.tags?tx.tags.join(', '):'';
  document.getElementById('repeatSelect').value=tx.repeat||'none';
  document.getElementById('currencyInput').value=tx.currency||'uzs';
  document.getElementById('debtPerson').value=tx.debtPerson||'';
  document.getElementById('selectedCategory').value=tx.category;
  renderCatGrid();
}

function delTxnConfirm(id) {
  confirm2(t('confirm'),t('delete_q'),()=>{
    S.transactions=S.transactions.filter(t=>t.id!==id);
    saveS();
    if(showingAll) applyHistoryFilters();
    renderHome();
    toast(t('deleted'));
  });
}

// ─── REPEATING ────────────────────────────────────────────────────────────────
function scheduleRepeating() {
  const today=todayISO(); const toAdd=[];
  S.transactions.filter(tx=>tx.repeat&&tx.repeat!=='none').forEach(tx=>{
    if(tx.lastRepeat===today) return;
    const last=new Date(tx.lastRepeat||tx.date), now2=new Date(today);
    let due=false;
    if(tx.repeat==='daily') due=true;
    if(tx.repeat==='weekly') due=(now2-last)>=(7*86400000);
    if(tx.repeat==='monthly') due=now2.getMonth()!==last.getMonth()||now2.getFullYear()!==last.getFullYear();
    if(due){ toAdd.push({...tx,id:genId(),date:today,lastRepeat:today,repeat:'none',createdAt:Date.now()}); tx.lastRepeat=today; }
  });
  if(toAdd.length){ S.transactions.push(...toAdd); saveS(); toast(`${toAdd.length} ${t('repeat_added')}`); }
}

// ─── BUDGET ───────────────────────────────────────────────────────────────────
function renderBudget() {
  const ym=monthISO();
  const mTxns=S.transactions.filter(t=>t.type==='expense'&&t.date&&t.date.startsWith(ym));
  let tLimit=0, tSpent=0;

  S.budgets.forEach(b=>{
    b._spent=mTxns.filter(t=>t.category===b.categoryId).reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
    tLimit+=b.limit; tSpent+=b._spent;
  });

  const el1=document.getElementById('budgetTotalLimit'); if(el1) el1.textContent=fmt(tLimit);
  const el2=document.getElementById('budgetTotalSpent'); if(el2) el2.textContent=fmt(tSpent);
  const el3=document.getElementById('budgetTotalLeft');  if(el3) el3.textContent=fmt(tLimit-tSpent);

  const list=document.getElementById('budgetList'); if(!list) return;
  if(!S.budgets.length) {
    list.innerHTML=`<div class="empty-state"><div class="empty-icon">📊</div><div>${t('no_txn').replace('tranzaksiya','byudjet')}</div></div>`;
    return;
  }

  list.innerHTML=S.budgets.map(b=>{
    const cat=getCat(b.categoryId);
    const color=cat&&cat.color?cat.color:'#00E5A0';
    const spent=b._spent||0;
    const pct=b.limit>0?Math.min(100,Math.round((spent/b.limit)*100)):0;
    const over=spent>b.limit;
    return `<div class="budget-item">
      <div class="budget-item-top">
        <div class="budget-cat">
          <span class="budget-emoji" style="background:${color}22">${cat?cat.emoji:'📦'}</span>
          <span class="budget-cat-name">${cat?catName(cat):b.categoryId}</span>
        </div>
        <button class="txn-action-btn del" onclick="delBudget('${b.id}')">🗑</button>
      </div>
      <div class="budget-bar-bg">
        <div class="budget-bar-fill" style="width:${pct}%;background:${over?'var(--danger)':color}"></div>
      </div>
      <div class="budget-nums">
        <span class="${over?'neg':''}">${fmt(spent)} / ${fmt(b.limit)}</span>
        <span class="${over?'neg':'warn'}">${pct}%</span>
      </div>
    </div>`;
  }).join('');
}

function openAddBudget() {
  const sel=document.getElementById('budgetCatSelect');
  sel.innerHTML=getCatsByType('expense').map(c=>`<option value="${c.id}">${c.emoji} ${catName(c)}</option>`).join('');
  document.getElementById('budgetLimitInput').value='';
  document.getElementById('budgetMonthInput').value=monthISO();
  openM('budgetModal');
}

function saveBudget() {
  const catId=document.getElementById('budgetCatSelect').value;
  const limit=parseFloat(document.getElementById('budgetLimitInput').value);
  const month=document.getElementById('budgetMonthInput').value;
  if(!catId||!limit||limit<=0||!month){ toast(t('fill_all'),'error'); return; }
  const ex=S.budgets.find(b=>b.categoryId===catId&&b.month===month);
  if(ex){ ex.limit=limit; }
  else  { S.budgets.push({id:genId(),categoryId:catId,limit,month,createdAt:Date.now()}); }
  saveS(); closeM('budgetModal'); renderBudget(); toast(t('saved'));
}

function delBudget(id) {
  confirm2(t('confirm'),t('delete_q'),()=>{
    S.budgets=S.budgets.filter(b=>b.id!==id); saveS(); renderBudget(); toast(t('deleted'));
  });
}

// ─── GOALS ────────────────────────────────────────────────────────────────────
function renderGoals() {
  const list=document.getElementById('goalsList');

  // Stats
  const statsEl=document.getElementById('goalsStats');
  if(S.goals.length>0) {
    const done=S.goals.filter(g=>g.current>=g.target).length;
    const totalSaved=S.goals.reduce((s,g)=>s+g.current,0);
    const totalTarget=S.goals.reduce((s,g)=>s+g.target,0);
    statsEl.innerHTML=`
      <div class="goals-stat"><div class="gs-val">${S.goals.length}</div><div class="gs-label">${t('goals_title').replace('🎯 ','')}</div></div>
      <div class="goals-stat"><div class="gs-val pos">${done}</div><div class="gs-label">${t('goal_done').replace('🎉 ','').split('!')[0]}</div></div>
      <div class="goals-stat"><div class="gs-val">${fmt(totalSaved)}</div><div class="gs-label">${t('goal_current')}</div></div>`;
    statsEl.className='goals-stats';
  } else { statsEl.innerHTML=''; }

  if(!S.goals.length) { list.innerHTML=`<div class="empty-state"><div class="empty-icon">🎯</div><div>${t('no_goal')}</div></div>`; return; }
  list.innerHTML=S.goals.map(g=>goalCard(g)).join('');
}

function goalCard(g) {
  const pct=g.target>0?Math.min(100,Math.round((g.current/g.target)*100)):0;
  const done=pct>=100;
  const left=g.target-g.current;
  const daysLeft=g.deadline?Math.ceil((new Date(g.deadline)-new Date())/86400000):null;
  const dlText=daysLeft!==null?(daysLeft>0?`${daysLeft}k`:daysLeft===0?'Bugun':'❗'):'';

  return `<div class="goal-card ${done?'done':''}">
    <div class="goal-top">
      <div class="goal-info">
        <span class="goal-emoji">${g.emoji||'🎯'}</span>
        <div>
          <div class="goal-name">${g.name} ${done?'✅':''}</div>
          ${g.deadline?`<div class="goal-deadline">📅 ${fmtDate(g.deadline)} ${dlText?'· '+dlText:''}</div>`:''}
        </div>
      </div>
      <div class="goal-actions">
        ${!done?`<button class="goal-add-big-btn" onclick="addToGoal('${g.id}')">➕ Qoshish</button>`:''}
        <button class="txn-action-btn edit" onclick="editGoalOpen('${g.id}')">✏️</button>
        <button class="txn-action-btn del" onclick="delGoal('${g.id}')">🗑</button>
      </div>
    </div>
    <div class="goal-bar-bg">
      <div class="goal-bar-fill ${done?'done-bar':''}" style="width:${pct}%"></div>
    </div>
    <div class="goal-nums">
      <span>${fmt(g.current)} / ${fmt(g.target)}</span>
      <span class="${done?'pos':'warn'}">${pct}%${done?' 🎉':' · '+fmt(left)}</span>
    </div>
  </div>`;
}

function openAddGoal() {
  editingGoalId=null;
  ['goalName','goalTarget','goalDeadline'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('goalEmoji').value='🎯';
  document.getElementById('goalCurrent').value='0';
  document.getElementById('lbl_add_goal').textContent=t('add_goal');
  openM('goalModal');
}

function editGoalOpen(id) {
  const g=S.goals.find(x=>x.id===id); if(!g) return;
  editingGoalId=id;
  document.getElementById('goalName').value=g.name;
  document.getElementById('goalEmoji').value=g.emoji||'🎯';
  document.getElementById('goalTarget').value=g.target;
  document.getElementById('goalCurrent').value=g.current;
  document.getElementById('goalDeadline').value=g.deadline||'';
  document.getElementById('lbl_add_goal').textContent='✏️ Maqsadni tahrirlash';
  openM('goalModal');
}

function saveGoal() {
  const name=document.getElementById('goalName').value.trim();
  const emoji=document.getElementById('goalEmoji').value.trim()||'🎯';
  const target=parseFloat(document.getElementById('goalTarget').value);
  const current=parseFloat(document.getElementById('goalCurrent').value)||0;
  const deadline=document.getElementById('goalDeadline').value;
  if(!name||!target||target<=0){ toast(t('fill_all'),'error'); return; }
  if(editingGoalId) {
    const idx=S.goals.findIndex(g=>g.id===editingGoalId);
    if(idx!==-1) S.goals[idx]={...S.goals[idx],name,emoji,target,current,deadline};
    toast(t('updated')); editingGoalId=null;
  } else {
    S.goals.push({id:genId(),name,emoji,target,current,deadline,createdAt:Date.now()});
    toast(t('saved'));
  }
  saveS(); closeM('goalModal'); renderGoals();
}

function addToGoal(id) {
  addToGoalId=id;
  const g=S.goals.find(x=>x.id===id); if(!g) return;
  document.getElementById('goalAddTitle').textContent=g.emoji+' '+g.name;
  document.getElementById('goalAddAmount').value='';
  openM('goalAddModal');
}

function saveGoalAdd() {
  const amount=parseFloat(document.getElementById('goalAddAmount').value);
  if(!amount||amount<=0){ toast(t('enter_amount'),'error'); return; }
  const g=S.goals.find(x=>x.id===addToGoalId); if(!g) return;
  g.current=Math.min(g.target,g.current+amount);
  saveS(); closeM('goalAddModal'); renderGoals();
  if(g.current>=g.target) toast(t('goal_done'));
  else toast(fmt(amount)+' '+t('saved'));
}

function delGoal(id) {
  confirm2(t('confirm'),t('delete_q'),()=>{
    S.goals=S.goals.filter(g=>g.id!==id); saveS(); renderGoals(); toast(t('deleted'));
  });
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
function renderColorPicker() {
  document.getElementById('colorPicker').innerHTML=CAT_COLORS.map(c=>`
    <button class="color-swatch ${selectedCatColor===c?'selected':''}" style="background:${c}" onclick="pickColor('${c}')"></button>`).join('');
}

function pickColor(c) { selectedCatColor=c; document.getElementById('newCatColor').value=c; renderColorPicker(); }

function openAddCat(preType) {
  if(preType) currentCatType=preType;
  document.getElementById('newCatName').value='';
  document.getElementById('newCatEmoji').value='';
  selectedCatColor='#00E5A0'; document.getElementById('newCatColor').value='#00E5A0';
  document.querySelectorAll('.type-btn[data-cattype]').forEach(b=>b.classList.toggle('active',b.dataset.cattype===currentCatType));
  document.getElementById('emojiPicker').innerHTML=EMOJI_LIST.map(e=>`<button class="emoji-btn" onclick="document.getElementById('newCatEmoji').value='${e}'">${e}</button>`).join('');
  renderColorPicker(); openM('catModal');
}

function saveCat() {
  const name=document.getElementById('newCatName').value.trim();
  const emoji=document.getElementById('newCatEmoji').value.trim()||'📦';
  const color=document.getElementById('newCatColor').value||'#00E5A0';
  if(!name){ toast(t('enter_cat_name'),'error'); return; }
  // Custom cats store name as string (current lang)
  S.categories.push({id:'cc_'+genId(),name,emoji,color,type:currentCatType});
  saveS(); closeM('catModal'); renderCatGrid(); renderSettingsPage(); toast(t('cat_added'));
}

function delCat(id) {
  if(S.transactions.some(t=>t.category===id)){ toast(t('cat_used'),'error'); return; }
  if(DEFAULT_CATS.some(c=>c.id===id)){ toast(t('cat_default'),'error'); return; }
  confirm2(t('confirm'),t('delete_q'),()=>{
    S.categories=S.categories.filter(c=>c.id!==id); saveS(); renderSettingsPage(); toast(t('deleted'));
  });
}

// ─── SETTINGS ─────────────────────────────────────────────────────────────────
function renderSettingsPage() {
  document.getElementById('profileAvatar').textContent  =S.profile.avatar||'😊';
  document.getElementById('profileName').textContent    =S.profile.name;
  document.getElementById('profileUsername').textContent=S.profile.username||'@spenduz';

  if(S.profile.joinedAt) {
    const d=new Date(S.profile.joinedAt);
    document.getElementById('profileSince').textContent=d.toLocaleDateString('uz-UZ',{day:'2-digit',month:'long',year:'numeric'});
  }

  const allInc=S.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const allExp=S.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  document.getElementById('pstatTxn').textContent    =S.transactions.length;
  document.getElementById('pstatIncome').textContent =fmt(allInc);
  document.getElementById('pstatExpense').textContent=fmt(allExp);

  document.getElementById('editName').value     =S.profile.name;
  document.getElementById('editUsername').value =S.profile.username||'';
  document.getElementById('themeToggle').checked=S.settings.theme==='dark';
  document.getElementById('currencySelect').value=S.settings.currency||'uzs';
  document.getElementById('notifToggle').checked =S.settings.notifEnabled;
  document.getElementById('notifTime').value     =S.settings.notifTime||'21:00';
  document.getElementById('notifStatusText').textContent=S.settings.notifEnabled?t('notif_on'):t('notif_off');

  const pinOn=S.settings.pinEnabled&&S.settings.pin;
  document.getElementById('pinStatusText').textContent=pinOn?t('pin_set'):t('pin_not_set');
  document.getElementById('setPinBtn').textContent    =pinOn?t('change_pin'):t('set_pin');
  document.getElementById('removePinRow').style.display=pinOn?'':'none';

  // Highlight lang buttons
  document.querySelectorAll('#settingsLangGrid .lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===S.settings.language));

  // Custom cats
  const custom=S.categories.filter(c=>!DEFAULT_CATS.some(d=>d.id===c.id));
  document.getElementById('catManageList').innerHTML=custom.length
    ?custom.map(c=>`<div class="cat-manage-item">
        <span>${c.emoji}</span>
        <span class="cat-manage-name">${catName(c)}</span>
        <span class="cat-color-dot" style="background:${c.color||'#9BA3B8'}"></span>
        <span class="cat-manage-type ${c.type}">${c.type==='expense'?t('expense_type'):t('income_type')}</span>
        <button class="txn-action-btn del" onclick="delCat('${c.id}')">🗑</button>
      </div>`).join('')
    :`<div class="cat-empty-msg">${t('no_custom_cats')}</div>`;

  // Family
  document.getElementById('familyMembersList').innerHTML=S.family.length
    ?S.family.map(f=>`<div class="family-member">
        <span>${f.emoji||'👤'}</span>
        <span class="family-name">${f.name}</span>
        <button class="txn-action-btn del" onclick="delFamily('${f.id}')">🗑</button>
      </div>`).join('')
    :`<div class="cat-empty-msg">${t('no_family')}</div>`;
}

function saveProfile() {
  const name=document.getElementById('editName').value.trim();
  const user=document.getElementById('editUsername').value.trim();
  if(!name){ toast(t('enter_name'),'error'); return; }
  S.profile.name=name; S.profile.username=user||('@'+name.toLowerCase().replace(/\s+/g,''));
  saveS(); updateTopBar(); renderSettingsPage(); toast(t('profile_saved'));
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme',theme);
  S.settings.theme=theme;
  document.getElementById('themeToggleBtn').textContent=theme==='dark'?'🌙':'☀️';
  saveS();
}

function saveFamilyMember() {
  const name=document.getElementById('familyName').value.trim();
  const emoji=document.getElementById('familyEmoji').value.trim()||'👤';
  if(!name){ toast(t('enter_member_name'),'error'); return; }
  S.family.push({id:genId(),name,emoji}); saveS(); closeM('familyModal'); renderSettingsPage(); toast(t('member_added'));
}

function delFamily(id) {
  confirm2(t('confirm'),t('delete_q'),()=>{ S.family=S.family.filter(f=>f.id!==id); saveS(); renderSettingsPage(); toast(t('deleted')); });
}

function exportData() {
  const blob=new Blob([JSON.stringify(S,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download='spenduz_v5_'+todayISO()+'.json'; a.click();
  URL.revokeObjectURL(url); toast(t('export_done'));
}

function importData(file) {
  if(!file) return;
  const r=new FileReader();
  r.onload=e=>{
    try {
      const p=JSON.parse(e.target.result);
      if(p.transactions!==undefined) {
        S.transactions=p.transactions||[];
        S.budgets=p.budgets||[];
        S.goals=p.goals||[];
        S.family=p.family||[];
        S.categories=(p.categories&&p.categories.length)?p.categories:DEFAULT_CATS.map(c=>({...c}));
        S.settings=Object.assign(S.settings,p.settings||{});
        if(p.profile) S.profile=Object.assign(S.profile,p.profile);
        saveS(); applyTheme(S.settings.theme); applyLanguage(S.settings.language); updateTopBar(); renderHome(); renderSettingsPage();
        toast(t('import_done'));
      } else toast(t('wrong_file'),'error');
    } catch{ toast(t('wrong_file'),'error'); }
  };
  r.readAsText(file);
}

function resetAll() {
  confirm2(t('confirm'),t('reset_confirm'),()=>{
    S.transactions=[]; S.budgets=[]; S.goals=[]; S.family=[]; S.aiHistory=[];
    S.categories=DEFAULT_CATS.map(c=>({...c}));
    S.settings={theme:'dark',language:S.settings.language,currency:'uzs',pin:null,pinEnabled:false,notifEnabled:false,notifTime:'21:00'};
    saveS(); applyTheme('dark'); renderHome(); renderSettingsPage(); toast(t('deleted'));
  });
}


// ─── MIKROFON ────────────────────────────────────────────────────────────────
let micRecog  = null;
let micActive = false;

function toggleMic() {
  if(micActive) { stopMic(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR) { toast('Brauzer mikrofonni qollab-quvvatlamaydi!', 'error'); return; }

  micRecog = new SR();
  micRecog.continuous    = false;
  micRecog.interimResults= false;
  micRecog.lang = {uz:'uz-UZ',ru:'ru-RU',en:'en-US',tj:'tg-TG'}[S.settings.language]||'uz-UZ';

  micActive = true;
  updateMicUI(true);

  micRecog.onresult = e => {
    const text = e.results[0][0].transcript;
    processVoice(text);
    stopMic();
  };
  micRecog.onerror = e => { toast('Mikrofon xatosi!', 'error'); stopMic(); };
  micRecog.onend   = () => stopMic();
  micRecog.start();
}

function stopMic() {
  micActive = false;
  if(micRecog) { try{micRecog.stop();}catch(e){} micRecog = null; }
  updateMicUI(false);
}

function updateMicUI(active) {
  const btn = document.getElementById('micBtn');
  const st  = document.getElementById('micStatus');
  const qb  = document.getElementById('quickMicBtn');
  if(btn) { btn.textContent = active ? '🔴' : '🎙️'; btn.classList.toggle('mic-active', active); }
  if(st)  { st.classList.toggle('hidden', !active); }
  if(qb)  { qb.textContent = active ? '🔴 Tinglayapti...' : '🎙️ Ovoz bilan qoshish'; qb.classList.toggle('mic-active', active); }
}


// ─── VOICE AMOUNT PARSER ─────────────────────────────────────────────────────
function parseVoiceAmount(text) {
  const low = text.toLowerCase().trim();

  // Avval raqamlarni topamiz
  const nums = low.match(/\d+/g);

  if(!nums) {
    // Faqat so'z bilan aytilgan bo'lsa (ming, million)
    if(low.includes('million') || low.includes('mln')) return 1000000;
    if(low.includes('ming'))                           return 1000;
    return 0;
  }

  // MUHIM: bir nechta raqam bo'lsa, ularni birlashtirish kerakmi?
  // Masalan "264 ming 500" → 264500, yoki "1050" → 1050
  // Speech API ko'pincha: "ikki yuz oltmish to'rt ming" → "264 ming"
  // Yoki raqamni to'g'ridan: "264000" → "264000"

  let base = parseInt(nums[0]);

  // Agar ikki raqam bo'lsa va ikkinchisi kichik → qo'shish
  // Masalan: "264" "500" → 264500 emas! Faqat birinchini olish
  // LEKIN: "1" "050" "000" → 1050000

  // Multiplier so'zlarini qidirish
  const hasMillion = /\b(million|mln|milliard|млн|миллион)\b/.test(low);
  const hasMing    = /\b(ming|мин|тысяч|тыс)\b/.test(low);
  const hasK       = /\bk\b/.test(low);

  if(hasMillion) {
    // "2 million", "2.5 million"
    return base * 1000000;
  }

  if(hasMing || hasK) {
    // "264 ming" → 264000
    // "264 ming 500" → 264500
    let result = base * 1000;
    if(nums.length > 1) {
      const second = parseInt(nums[1]);
      if(second < 1000) result += second; // 264ming + 500 = 264500
    }
    return result;
  }

  // So'z yo'q — raqamning o'zi
  // Agar bir nechta raqam bo'lsa, faqat birinchisini olish
  // (Speech API ba'zan raqamni bo'lib yuboradi: "1050000" → "1050" "000")
  if(nums.length > 1) {
    // Ularni birlashtirish: "1050" + "000" → 1050000
    const combined = nums.join('');
    const single   = parseInt(nums[0]);
    const joined   = parseInt(combined);

    // Qaysi biri mantiqan to'g'ri? Agar birlashtirilgan soni katta va yaxlit bo'lsa
    if(nums[1].match(/^0+$/) || nums[1] === '000') {
      return joined; // "1050" + "000" → 1050000
    }

    // Aks holda faqat birinchisini olish
    return single;
  }

  return base;
}

function processVoice(text) {
  toast('Eshitildi: ' + text);
  const low = text.toLowerCase();

  // Summani to'g'ri parse qilish
  const amount = parseVoiceAmount(text);
  if(!amount || amount <= 0) { toast('Summa aniqlanmadi!', 'error'); return; }

  // Tur aniqlash
  let txType = 'expense';
  const incWords = ['oylik','daromad','maosh','salary','bonus','зарплата','доход','маош','даромад'];
  const dGiven   = ['qarz berdim','берди','lent','дал'];
  const dTaken   = ['qarz oldim','взял','borrowed','гирифтам'];
  if(dGiven.some(w=>low.includes(w)))       txType = 'debt_given';
  else if(dTaken.some(w=>low.includes(w)))  txType = 'debt_taken';
  else if(incWords.some(w=>low.includes(w))) txType = 'income';

  // AI kategoriya
  let aiCat = null;
  for(const [catId, words] of Object.entries(AI_KW)) {
    if(words.some(w=>low.includes(w))) {
      const c = getCat(catId);
      if(c && (c.type===txType || txType==='expense')) { aiCat = catId; break; }
    }
  }

  // Formani to'ldirish
  setTxType(txType);
  document.getElementById('amountInput').value = amount;
  document.getElementById('noteInput').value   = text;
  if(aiCat) {
    document.getElementById('selectedCategory').value = aiCat;
    renderCatGrid();
    const c = getCat(aiCat);
    if(c) toast('AI: ' + catName(c) + ' tanlandi');
  }
}

// ─── PDF EXPORT ───────────────────────────────────────────────────────────────
function exportPDF() {
  const ym     = monthISO();
  const mTxns  = S.transactions.filter(t=>t.date&&t.date.startsWith(ym));
  const mInc   = mTxns.filter(t=>t.type==='income').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mExp   = mTxns.filter(t=>t.type==='expense').reduce((s,t)=>s+toUZS(t.amount,t.currency),0);
  const mNet   = mInc-mExp;
  const now    = new Date();
  const months = ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr'];

  const cats = {};
  mTxns.filter(t=>t.type==='expense').forEach(t=>{
    const c = getCat(t.category);
    const k = c ? catName(c) : 'Boshqa';
    cats[k] = (cats[k]||0) + toUZS(t.amount,t.currency);
  });

  const catRows = Object.entries(cats).sort((a,b)=>b[1]-a[1])
    .map(([k,v])=>'<tr><td>'+k+'</td><td style="text-align:right">'+fmt(v)+' som</td></tr>').join('');

  const txRows = [...S.transactions]
    .sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,30)
    .map(t=>{
      const c=getCat(t.category);
      const sign=(t.type==='income'||t.type==='debt_taken')?'+':'-';
      const color=sign==='+'?'#00b87d':'#c73650';
      return '<tr><td>'+t.date+'</td><td>'+(c?c.emoji+' '+catName(c):'Boshqa')+'</td><td>'+(t.note||'-')+'</td><td style="text-align:right;color:'+color+'">'+sign+fmt(t.amount)+' '+(t.currency||'UZS')+'</td></tr>';
    }).join('');

  const html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>SpendUZ Hisobot</title>'
    +'<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,sans-serif;padding:24px;color:#1a1e2e;font-size:13px}'
    +'.hdr{text-align:center;margin-bottom:20px;border-bottom:2px solid #00E5A0;padding-bottom:14px}'
    +'.hdr h1{font-size:22px;color:#00b87d}.hdr p{color:#5A6278;margin-top:3px}'
    +'.sum{display:flex;gap:12px;margin-bottom:20px}.sc{flex:1;padding:12px;border:1px solid #E8EBF2;border-radius:8px;text-align:center}'
    +'.sl{font-size:10px;color:#9BA3B8;text-transform:uppercase;margin-bottom:3px}.sv{font-size:15px;font-weight:700}'
    +'.pos{color:#00b87d}.neg{color:#c73650}'
    +'h3{margin:14px 0 7px;font-size:12px;color:#5A6278;text-transform:uppercase;letter-spacing:1px}'
    +'table{width:100%;border-collapse:collapse;margin-bottom:16px}'
    +'th{background:#F2F4F8;padding:7px;text-align:left;font-size:11px;color:#5A6278}'
    +'td{padding:6px 7px;border-bottom:1px solid #F2F4F8;font-size:11px}'
    +'.ft{text-align:center;color:#9BA3B8;font-size:10px;margin-top:20px;border-top:1px solid #E8EBF2;padding-top:10px}'
    +'</style></head><body>'
    +'<div class="hdr"><h1>SpendUZ Pro</h1><p>'+months[now.getMonth()]+' '+now.getFullYear()+'</p><p>'+S.profile.avatar+' '+S.profile.name+'</p></div>'
    +'<div class="sum">'
    +'<div class="sc"><div class="sl">Daromad</div><div class="sv pos">'+fmt(mInc)+' som</div></div>'
    +'<div class="sc"><div class="sl">Xarajat</div><div class="sv neg">'+fmt(mExp)+' som</div></div>'
    +'<div class="sc"><div class="sl">Balans</div><div class="sv '+(mNet>=0?'pos':'neg')+'">'+fmt(mNet)+' som</div></div>'
    +'</div>'
    +'<h3>Kategoriyalar</h3>'
    +'<table><tr><th>Kategoriya</th><th style="text-align:right">Summa</th></tr>'+(catRows||'<tr><td colspan="2">Malumot yoq</td></tr>')+'</table>'
    +'<h3>Oxirgi tranzaksiyalar (30 ta)</h3>'
    +'<table><tr><th>Sana</th><th>Kategoriya</th><th>Izoh</th><th style="text-align:right">Summa</th></tr>'+(txRows||'<tr><td colspan="4">Malumot yoq</td></tr>')+'</table>'
    +'<div class="ft">SpendUZ Pro &middot; @Spend_uz_bot &middot; '+now.toISOString().split('T')[0]+'</div>'
    +'</body></html>';

  const win = window.open('','_blank');
  if(!win){ toast('Pop-up bloklanган! Ruxsat bering.','error'); return; }
  win.document.write(html);
  win.document.close();
  setTimeout(()=>win.print(), 600);
  toast('PDF tayerlanmoqda...');
}


// ─── INIT ─────────────────────────────────────────────────────────────────────
function init() {
  try {
    if(window.Telegram&&window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
      const u=window.Telegram.WebApp.initDataUnsafe&&window.Telegram.WebApp.initDataUnsafe.user;
      if(u&&u.id) UID='tg_'+u.id;
    }
  } catch(e){}
  if(!UID){ UID=localStorage.getItem('spenduz_uid')||'u_'+Date.now(); localStorage.setItem('spenduz_uid',UID); }

  const hasData=loadS();
  document.getElementById('dateInput').value=todayISO();
  bindEvents();
  applyLanguage(S.settings.language);

  setTimeout(()=>{
    const sp=document.getElementById('splash');
    sp.style.opacity='0';
    setTimeout(()=>{
      sp.classList.add('hidden');
      let tgUser=null;
      try{ tgUser=window.Telegram&&window.Telegram.WebApp&&window.Telegram.WebApp.initDataUnsafe&&window.Telegram.WebApp.initDataUnsafe.user; }catch(e){}
      const hasSaved = hasData && S.profile && S.profile.name && S.profile.name !== 'Foydalanuvchi';
      if(tgUser&&tgUser.id) {
        if(!S.profile.telegramId) {
          S.profile.telegramId=tgUser.id;
          S.profile.name=tgUser.first_name||'Foydalanuvchi';
          S.profile.username=tgUser.username?'@'+tgUser.username:'@spenduz';
          if(!S.profile.joinedAt) S.profile.joinedAt=new Date().toISOString();
          if(!S.categories||!S.categories.length) S.categories=DEFAULT_CATS.map(c=>({...c}));
          saveS();
        }
        if(S.settings.pinEnabled&&S.settings.pin){ initPinScreen(); document.getElementById('pinScreen').classList.remove('hidden'); }
        else startApp();
      } else if(hasSaved) {
        if(S.settings.pinEnabled&&S.settings.pin){ initPinScreen(); document.getElementById('pinScreen').classList.remove('hidden'); }
        else startApp();
      } else {
        selectedAvatar=S.profile.avatar||'😊';
        renderAvatarGrid('avatarGrid',true);
        document.getElementById('loginScreen').classList.remove('hidden');
      }
    },200);
  },1400);
}


// ─── EVENTS ──────────────────────────────────────────────────────────────────
function bindEvents() {
  // Nav
  document.querySelectorAll('.nav-btn[data-tab]').forEach(b=>b.addEventListener('click',()=>switchTab(b.dataset.tab)));

  // TX tabs
  document.querySelectorAll('.tx-tab[data-type]').forEach(b=>b.addEventListener('click',()=>setTxType(b.dataset.type)));

  // Cat type toggle
  document.querySelectorAll('.type-btn[data-cattype]').forEach(b=>b.addEventListener('click',()=>{
    currentCatType=b.dataset.cattype;
    document.querySelectorAll('.type-btn[data-cattype]').forEach(x=>x.classList.toggle('active',x.dataset.cattype===currentCatType));
  }));

  // Chart tabs
  document.querySelectorAll('.chart-tab[data-chart]').forEach(b=>b.addEventListener('click',()=>{
    currentChart=b.dataset.chart;
    document.querySelectorAll('.chart-tab').forEach(x=>x.classList.toggle('active',x.dataset.chart===currentChart));
    document.getElementById('donutChartCard').classList.toggle('hidden',currentChart!=='donut');
    document.getElementById('barChartCard').classList.toggle('hidden',currentChart!=='bar');
    if(currentChart==='bar') renderBarChart(currentBarPeriod);
  }));

  // Bar period tabs
  document.querySelectorAll('.bar-tab').forEach(b=>b.addEventListener('click',()=>{
    currentBarPeriod=b.dataset.period;
    document.querySelectorAll('.bar-tab').forEach(x=>x.classList.toggle('active',x.dataset.period===currentBarPeriod));
    renderBarChart(currentBarPeriod);
  }));

  // Lang buttons
  document.querySelectorAll('.lang-btn[data-lang]').forEach(b=>b.addEventListener('click',()=>applyLanguage(b.dataset.lang)));

  // History
  document.getElementById('seeAllBtn').addEventListener('click',toggleAllHistory);
  const hideBtn=document.getElementById('hideAllBtn'); if(hideBtn) hideBtn.addEventListener('click',toggleAllHistory);
  document.getElementById('historySearch').addEventListener('input',applyHistoryFilters);
  document.getElementById('filterType').addEventListener('change',applyHistoryFilters);
  document.getElementById('filterMonth').addEventListener('change',applyHistoryFilters);

  // Category search + AI note
  document.getElementById('categorySearch').addEventListener('input',e=>renderCatGrid(e.target.value));
  document.getElementById('noteInput').addEventListener('input',e=>onNoteAI(e.target.value));
  document.getElementById('addCatBtn').addEventListener('click',()=>openAddCat(currentTxType));

  // Submit txn
  document.getElementById('submitTxn').addEventListener('click',submitTxn);
  document.getElementById('cancelEdit').addEventListener('click',()=>{ editingTxnId=null; resetAddForm(); switchTab('home'); });

  // Goals
  document.getElementById('addGoalBtn').addEventListener('click',openAddGoal);
  document.getElementById('saveGoalBtn').addEventListener('click',saveGoal);
  document.getElementById('closeGoalModal').addEventListener('click',()=>closeM('goalModal'));
  document.getElementById('saveGoalAddBtn').addEventListener('click',saveGoalAdd);
  document.getElementById('closeGoalAddModal').addEventListener('click',()=>closeM('goalAddModal'));

  // Budget
  const addBudgetBtn=document.getElementById('addBudgetBtn');
  if(addBudgetBtn) addBudgetBtn.addEventListener('click',openAddBudget);
  const saveBudgetBtn=document.getElementById('saveBudgetBtn');
  if(saveBudgetBtn) saveBudgetBtn.addEventListener('click',saveBudget);
  const closeBudgetModal=document.getElementById('closeBudgetModal');
  if(closeBudgetModal) closeBudgetModal.addEventListener('click',()=>closeM('budgetModal'));

  // Receipt
  document.getElementById('closeReceiptModal').addEventListener('click',()=>closeM('receiptModal'));
  document.getElementById('receiptShareBtn').addEventListener('click',shareReceipt);

  // Category modal
  document.getElementById('saveCatBtn').addEventListener('click',saveCat);
  document.getElementById('closeCatModal').addEventListener('click',()=>closeM('catModal'));
  document.getElementById('settingsAddCatBtn').addEventListener('click',()=>openAddCat('expense'));

  // Avatar modal
  document.getElementById('changeAvatarBtn').addEventListener('click',()=>{
    document.getElementById('avatarGridBig').innerHTML=AVATARS.map(a=>`<button class="avatar-option big ${a===S.profile.avatar?'selected':''}" onclick="pickAvatar('${a}','avatarGridBig',0)">${a}</button>`).join('');
    openM('avatarModal');
  });
  document.getElementById('closeAvatarModal').addEventListener('click',()=>closeM('avatarModal'));

  // PIN screen
  document.querySelectorAll('.pin-btn[data-n]').forEach(b=>b.addEventListener('click',()=>pinEnter(b.dataset.n)));
  document.getElementById('pinClear').addEventListener('click',pinBack);
  document.getElementById('pinOk').addEventListener('click',pinSubmit);
  document.getElementById('pinForgot').addEventListener('click',()=>{
    confirm2(t('confirm'),t('reset_confirm'),()=>{ S.settings.pin=null; S.settings.pinEnabled=false; saveS(); document.getElementById('pinScreen').classList.add('hidden'); startApp(); });
  });

  // PIN setup
  document.querySelectorAll('.pin-btn[data-sn]').forEach(b=>b.addEventListener('click',()=>pinSetupEnter(b.dataset.sn)));
  document.getElementById('pinSetupClear').addEventListener('click',pinSetupBack);
  document.getElementById('pinSetupOk').addEventListener('click',pinSetupOk);
  document.getElementById('closePinSetupModal').addEventListener('click',()=>closeM('pinSetupModal'));
  document.getElementById('setPinBtn').addEventListener('click',openPinSetup);
  document.getElementById('removePinBtn').addEventListener('click',()=>{
    confirm2(t('confirm'),t('delete_q'),()=>{ S.settings.pin=null; S.settings.pinEnabled=false; saveS(); renderSettingsPage(); toast(t('pin_removed')); });
  });

  // Notifications
  document.getElementById('notifToggle').addEventListener('change',async e=>{
    if(e.target.checked) await requestNotif();
    else { S.settings.notifEnabled=false; saveS(); document.getElementById('notifStatusText').textContent=t('notif_off'); }
  });
  document.getElementById('notifTime').addEventListener('change',e=>{ S.settings.notifTime=e.target.value; saveS(); });

  // Profile
  document.getElementById('saveProfileBtn').addEventListener('click',saveProfile);

  // Theme
  document.getElementById('themeToggle').addEventListener('change',e=>applyTheme(e.target.checked?'dark':'light'));
  document.getElementById('themeToggleBtn').addEventListener('click',()=>{
    const th=S.settings.theme==='dark'?'light':'dark'; applyTheme(th);
    document.getElementById('themeToggle').checked=th==='dark';
  });

  // Currency
  document.getElementById('currencySelect').addEventListener('change',e=>{ S.settings.currency=e.target.value; saveS(); renderHome(); toast(t('currency_changed')); });

  // Rate bar
  document.getElementById('rateBtn').addEventListener('click',()=>{
    const rb=document.getElementById('rateBar'); rb.classList.toggle('hidden');
    if(!rb.classList.contains('hidden')) fetchRates();
  });

  // Notif top btn
  const notifTopBtn=document.getElementById('notifTopBtn');
  if(notifTopBtn) notifTopBtn.addEventListener('click',async()=>{
    if(S.settings.notifEnabled) toast(t('notif_on'));
    else await requestNotif();
  });

  // Family
  document.getElementById('addFamilyBtn').addEventListener('click',()=>{ document.getElementById('familyName').value=''; document.getElementById('familyEmoji').value='👤'; openM('familyModal'); });
  document.getElementById('saveFamilyBtn').addEventListener('click',saveFamilyMember);
  document.getElementById('closeFamilyModal').addEventListener('click',()=>closeM('familyModal'));

  // Export/Import/Reset
  document.getElementById('exportBtn').addEventListener('click',exportData);
  document.getElementById('importBtn').addEventListener('click',()=>document.getElementById('importFile').click());
  document.getElementById('importFile').addEventListener('change',e=>{ importData(e.target.files[0]); e.target.value=''; });
  document.getElementById('resetBtn').addEventListener('click',resetAll);

  // Mikrofon
  document.getElementById('micBtn') && document.getElementById('micBtn').addEventListener('click',toggleMic);
  document.getElementById('quickMicBtn') && document.getElementById('quickMicBtn').addEventListener('click',()=>{ switchTab('add'); setTimeout(toggleMic,400); });

  // PDF
  document.getElementById('pdfBtn') && document.getElementById('pdfBtn').addEventListener('click',exportPDF);

  // Login
  document.getElementById('loginBtn').addEventListener('click',doLogin);
  document.getElementById('loginName').addEventListener('keydown',e=>{ if(e.key==='Enter') doLogin(); });

  // AI
  document.getElementById('aiSendBtn').addEventListener('click',sendAiMsg);
  document.getElementById('aiInput').addEventListener('keydown',e=>{ if(e.key==='Enter') sendAiMsg(); });

  // Confirm
  document.getElementById('closeConfirmModal').addEventListener('click',()=>closeM('confirmModal'));
  document.getElementById('confirmNo').addEventListener('click',()=>closeM('confirmModal'));
  document.getElementById('confirmYes').addEventListener('click',()=>{ closeM('confirmModal'); if(confirmCb){confirmCb();confirmCb=null;} });

  // Modal overlay
  document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',e=>{ if(e.target===o) o.classList.add('hidden'); }));
}

document.addEventListener('DOMContentLoaded',init);