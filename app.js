
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const pages = document.querySelectorAll(".page");
  const navButtons = document.querySelectorAll(".nav-btn");
  const themeToggle = document.getElementById("themeToggle");

  const typeTabs = document.querySelectorAll(".type-tab");
  const categoryCards = document.querySelectorAll(".category-card");

  const txAmount = document.getElementById("txAmount");
  const txCurrency = document.getElementById("txCurrency");
  const txName = document.getElementById("txName");
  const txDate = document.getElementById("txDate");
  const txTime = document.getElementById("txTime");
  const saveBtn = document.getElementById("saveTxBtn");

  const budgetInput = document.getElementById("budgetInput");
  const saveBudgetBtn = document.getElementById("saveBudgetBtn");

  const searchInput = document.getElementById("searchInput");
  const profileName = document.getElementById("profileName");
  const profileAvatar = document.getElementById("profileAvatar");
  const personalInfoBtn = document.getElementById("personalInfoBtn");

const filterToday = document.getElementById("filterToday");
const filter7 = document.getElementById("filter7");
const filter30 = document.getElementById("filter30");
const filterCustom = document.getElementById("filterCustom");

const typeAll = document.getElementById("typeAll");
const typeIncome = document.getElementById("typeIncome");
const typeExpense = document.getElementById("typeExpense");
const typeDebt = document.getElementById("typeDebt");
const homeFilterToday = document.getElementById("homeFilterToday");
const homeFilter7 = document.getElementById("homeFilter7");
const homeFilter30 = document.getElementById("homeFilter30");
const homeFilterAll = document.getElementById("homeFilterAll");

 const API_BASE = "https://spend-app-tih5.onrender.com";
 const tg = window.Telegram?.WebApp;
 if (tg) {
  tg.ready();
  tg.expand();
}
 const telegramUser = tg?.initDataUnsafe?.user;
 const USER_ID = telegramUser?.id || 0;



  let allTransactions = [];
  let activeQuickFilter = "today";
  let activeTypeFilter = "all";
  let activeSearch = "";
  let activeDateFrom = "";
  let activeDateTo = "";

  function formatMoney(value) {
    return Number(value || 0).toLocaleString("ru-RU");
  }

  function formatShortDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(String(dateStr).replace(" ", "T"));
    if (isNaN(d)) return dateStr;

    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();

    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");

    if (sameDay) return `Bugun ${hh}:${mm}`;

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    return `${day}.${month} ${hh}:${mm}`;
  }

  function openPage(pageId, btn) {
    pages.forEach((p) => p.classList.remove("active"));
    navButtons.forEach((b) => b.classList.remove("active"));
    document.getElementById(pageId)?.classList.add("active");
    btn?.classList.add("active");
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => openPage(btn.dataset.page, btn));
  });

  function loadTheme() {
    const savedTheme = localStorage.getItem("salmon-theme");
    body.classList.remove("light-mode", "dark-mode");

    if (savedTheme === "light") {
      body.classList.add("light-mode");
      if (themeToggle) themeToggle.checked = false;
    } else {
      body.classList.add("dark-mode");
      if (themeToggle) themeToggle.checked = true;
    }
  }

  loadTheme();

  themeToggle?.addEventListener("change", () => {
    if (themeToggle.checked) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("salmon-theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("salmon-theme", "light");
    }
  });

  function loadTelegramProfile() {
  const tg = window.Telegram?.WebApp;

  if (tg) {
    tg.ready();
  }

  const user = tg?.initDataUnsafe?.user;

  let fullName = "Foydalanuvchi";

  if (user) {
    const firstName = user.first_name || "";
    const lastName = user.last_name || "";
    const username = user.username || "";

    fullName = `${firstName} ${lastName}`.trim() || username || "Foydalanuvchi";
  }

  if (profileName) {
    profileName.textContent = fullName;
  }

  if (profileAvatar) {
    profileAvatar.textContent = fullName.charAt(0).toUpperCase();
  }

  personalInfoBtn?.addEventListener("click", () => {
    if (!user) {
      alert("Telegram orqali kirilganda shaxsiy ma'lumotlar ko‘rinadi");
      return;
    }

    alert(
      `Ism: ${user.first_name || "-"}\n` +
      `Familiya: ${user.last_name || "-"}\n` +
      `Username: ${user.username ? "@" + user.username : "-"}\n` +
      `ID: ${user.id || "-"}`
    );
  });
}

  function setNowDateTime() {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const mi = String(now.getMinutes()).padStart(2, "0");
    if (txDate) txDate.value = `${yyyy}-${mm}-${dd}`;
    if (txTime) txTime.value = `${hh}:${mi}`;
  }



  function setQuickActive(activeKey) {
    [homeFilterToday, homeFilter7, homeFilter30, homeFilterAll, filterToday, filter7, filter30, filterCustom]
      .forEach((btn) => btn?.classList.remove("active"));

    if (activeKey === "today") {
      homeFilterToday?.classList.add("active");
      filterToday?.classList.add("active");
    } else if (activeKey === "7") {
      homeFilter7?.classList.add("active");
      filter7?.classList.add("active");
    } else if (activeKey === "30") {
      homeFilter30?.classList.add("active");
      filter30?.classList.add("active");
    } else if (activeKey === "all") {
      homeFilterAll?.classList.add("active");
    } else if (activeKey === "custom") {
      filterCustom?.classList.add("active");
    }
  }

const CATEGORY_PRESETS = {
  expense: [
    { icon: "🍔", label: "Ovqat" },
    { icon: "🛒", label: "Bozor" },
    { icon: "🚕", label: "Transport" },
    { icon: "🏠", label: "Ijara" },
    { icon: "💡", label: "Kommunal" },
    { icon: "📱", label: "Mobil" },
    { icon: "🩺", label: "Sog‘liq" },
    { icon: "➕", label: "Boshqa", custom: true }
  ],
  income: [
    { icon: "💼", label: "Oylik" },
    { icon: "🎁", label: "Bonus" },
    { icon: "💸", label: "Sovg‘a" },
    { icon: "🛍️", label: "Savdo" },
    { icon: "💳", label: "Keshbek" },
    { icon: "📈", label: "Foiz" },
    { icon: "🧰", label: "Qo‘shimcha ish" },
    { icon: "➕", label: "Boshqa", custom: true }
  ],
  debt_given: [
    { icon: "🧑", label: "Do‘st" },
    { icon: "👨‍👩‍👦", label: "Oila" },
    { icon: "💼", label: "Hamkasb" },
    { icon: "🏠", label: "Qo‘shni" },
    { icon: "👦", label: "Tanish" },
    { icon: "🤝", label: "Sherik" },
    { icon: "📌", label: "Boshqa" },
    { icon: "➕", label: "Ko‘proq", custom: true }
  ],
  debt_taken: [
    { icon: "🧑", label: "Do‘st" },
    { icon: "👨‍👩‍👦", label: "Oila" },
    { icon: "💼", label: "Hamkasb" },
    { icon: "🏠", label: "Qo‘shni" },
    { icon: "👦", label: "Tanish" },
    { icon: "🤝", label: "Sherik" },
    { icon: "📌", label: "Boshqa" },
    { icon: "➕", label: "Ko‘proq", custom: true }
  ]
};

function renderCategoriesForType() {
  const txType = getActiveType();
  const list = CATEGORY_PRESETS[txType] || CATEGORY_PRESETS.expense;

  categoryCards.forEach((card, index) => {
    const item = list[index];
    if (!item) return;

    const iconEl = card.querySelector("span");
    const textEl = card.querySelector("small");

    if (iconEl) iconEl.textContent = item.icon;
    if (textEl) textEl.textContent = item.label;

    card.dataset.category = item.label;
    card.dataset.custom = item.custom ? "1" : "0";
    card.classList.remove("active");
  });

  if (categoryCards[0]) {
    categoryCards[0].classList.add("active");
  }
}

function bindCategoryClicks() {
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const isCustom = card.dataset.custom === "1";

      if (isCustom) {
        const customName = prompt("Yangi kategoriya nomini kiriting:");
        if (!customName || !customName.trim()) return;

        const iconEl = card.querySelector("span");
        const textEl = card.querySelector("small");
        const cleanName = customName.trim();

        if (iconEl) iconEl.textContent = "📝";
        if (textEl) textEl.textContent = cleanName;

        card.dataset.category = cleanName;
        card.dataset.custom = "0";
      }

      categoryCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });
  });
}

function updateTxNamePlaceholder() {
  const txType = getActiveType();

  if (!txName) return;

  if (txType === "expense") {
    txName.placeholder = "Masalan: Tushlik";
  } else if (txType === "income") {
    txName.placeholder = "Masalan: Oylik";
  } else if (txType === "debt_given") {
    txName.placeholder = "Masalan: Doniyorga qarz berdim";
  } else if (txType === "debt_taken") {
    txName.placeholder = "Masalan: Alidan qarz oldim";
  }
}

setNowDateTime();
updateTxNamePlaceholder();
renderCategoriesForType();
bindCategoryClicks();

  function setTypeActive(activeBtn) {
    [typeAll, typeIncome, typeExpense, typeDebt].forEach((btn) => {
      btn?.classList.remove("active");
    });
    activeBtn?.classList.add("active");
  }

  function getActiveType() {
    return document.querySelector(".type-tab.active")?.dataset.type || "expense";
  }

function getActiveCategory() {
  const activeCard = document.querySelector(".category-card.active");
  return activeCard?.dataset.category || "Boshqa";
}

  function buildCreatedAt() {
    if (txDate?.value && txTime?.value) {
      return `${txDate.value} ${txTime.value}:00`;
    }
    return new Date().toISOString().slice(0, 19).replace("T", " ");
  }

typeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    typeTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateTxNamePlaceholder();
    renderCategoriesForType();
  });
});





  function getFilteredTransactions(rows) {
    let result = [...rows];

    if (activeSearch) {
      const q = activeSearch.toLowerCase();
      result = result.filter((tx) =>
        (tx.category || "").toLowerCase().includes(q) ||
        (tx.note || "").toLowerCase().includes(q) ||
        (tx.tx_type || "").toLowerCase().includes(q)
      );
    }

    if (activeTypeFilter === "income") {
      result = result.filter((tx) => tx.tx_type === "income");
    } else if (activeTypeFilter === "expense") {
      result = result.filter((tx) => tx.tx_type === "expense");
    } else if (activeTypeFilter === "debt") {
      result = result.filter((tx) => tx.tx_type === "debt_given" || tx.tx_type === "debt_taken");
    }

    if (activeDateFrom && activeDateTo) {
      const from = new Date(activeDateFrom + "T00:00:00");
      const to = new Date(activeDateTo + "T23:59:59");

      result = result.filter((tx) => {
        const d = new Date(String(tx.created_at || "").replace(" ", "T"));
        if (isNaN(d)) return false;
        return d >= from && d <= to;
      });
    } else if (activeQuickFilter !== "all") {
      const now = new Date();

      result = result.filter((tx) => {
        const d = new Date(String(tx.created_at || "").replace(" ", "T"));
        if (isNaN(d)) return false;

        const diffMs = now - d;
        const diffDays = diffMs / (1000 * 60 * 60 * 24);

        if (activeQuickFilter === "today") return d.toDateString() === now.toDateString();
        if (activeQuickFilter === "7") return diffDays <= 7;
        if (activeQuickFilter === "30") return diffDays <= 30;
        return true;
      });
    }

    return result;
  }

function getTxVisual(tx) {
  const isPlus = tx.tx_type === "income" || tx.tx_type === "debt_taken";
  const sign = isPlus ? "+" : "-";
  const amountClass = isPlus ? "plus" : "minus";

  let icon = "🧾";
  let badgeClass = "expense";
  let badgeText = "Xarajat";
  let iconClass = "other";

  if (tx.tx_type === "income") {
    icon = "💼";
    badgeClass = "income";
    badgeText = "Daromad";
    iconClass = "income";
  } else if (tx.tx_type === "debt_given") {
    icon = "↗️";
    badgeClass = "debt";
    badgeText = "Berilgan qarz";
    iconClass = "debt-given";
  } else if (tx.tx_type === "debt_taken") {
    icon = "↘️";
    badgeClass = "debt";
    badgeText = "Olingan qarz";
    iconClass = "debt-taken";
  } else {
    const map = {
      "Ovqat": ["🍔", "food"],
      "Bozor": ["🛒", "market"],
      "Transport": ["🚕", "transport"],
      "Ijara": ["🏠", "rent"],
      "Kommunal": ["💡", "utility"],
      "Mobil": ["📱", "mobile"],
      "Sog‘liq": ["🩺", "health"],
      "Boshqa": ["🧾", "other"]
    };

    const found = map[tx.category] || ["🧾", "other"];
    icon = found[0];
    iconClass = found[1];
  }

  return { sign, amountClass, icon, badgeClass, badgeText, iconClass };
}

function renderList(el, rows, limit = null, showActions = false) {
  if (!el) return;

  const list = limit ? rows.slice(0, limit) : rows;
  el.innerHTML = "";

if (!list.length) {
  el.innerHTML = ` 
    <div class="tx-item">
      <div class="tx-left">
        <div class="tx-icon">📭</div>
        <div class="tx-text">
          <p>Hozircha yozuv yo‘q</p>
          <div class="tx-meta">
            <span>Tranzaksiya qo‘shing</span>
          </div>
        </div>
      </div>
    </div>
  `;
  return;
}

  list.forEach((tx) => {
    const { sign, amountClass, icon, badgeClass, badgeText, iconClass } = getTxVisual(tx);
    const txData = encodeURIComponent(JSON.stringify(tx));

    el.innerHTML += `
      <div class="tx-item">
        <div class="tx-left">
          <div class="tx-icon ${iconClass}">${icon}</div>
          <div class="tx-text">
            <p>${tx.category}</p>
            <div class="tx-meta">
              <span>${tx.note || "-"}</span>
              <span class="tx-badge ${badgeClass}">${badgeText}</span>
            </div>
          </div>
        </div>

        <div class="tx-right">
          <strong class="${amountClass}">${sign}${formatMoney(tx.amount)} ${tx.currency}</strong>
          <small>${formatShortDate(tx.created_at)}</small>
          ${showActions ? `
          <div class="tx-actions">
              <button class="tx-edit-btn" type="button" onclick='window.editTx("${txData}")'>Edit</button>
              <button class="tx-delete-btn" type="button" onclick="window.deleteTx(${tx.id})">O‘chirish</button>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  });
}

  function renderTransactions() {
    const filtered = getFilteredTransactions(allTransactions);
    renderList(document.getElementById("homeTransactionsList"), filtered, 5, false);
    renderList(document.getElementById("transactionsFullList"), filtered, null, true);
  }

  async function loadDashboard() {
    try {
      const res = await fetch(`${API_BASE}/api/dashboard/${USER_ID}`);
      const data = await res.json();

      if (!data.ok && data.ok !== undefined) return;

      allTransactions = data.transactions || [];

      document.getElementById("balanceValue").textContent = formatMoney(data.balance);
      document.getElementById("incomeValue").textContent = formatMoney(data.income);
      document.getElementById("expenseValue").textContent = formatMoney(data.expense);
      document.getElementById("givenLoanValue").textContent = formatMoney(data.debt_given);
      document.getElementById("takenLoanValue").textContent = formatMoney(data.debt_taken);

      renderTransactions();
    } catch (err) {
      console.log("Dashboard load error:", err);
    }
  }

  function getBudgetIcon(category) {
    const map = {
      "Ovqat": "🍔",
      "Bozor": "🛒",
      "Transport": "🚕",
      "Ijara": "🏠",
      "Kommunal": "💡",
      "Mobil": "📱",
      "Sog‘liq": "🩺"
    };
    return map[category] || "🧾";
  }

  async function loadBudget() {
    try {
      const res = await fetch(`${API_BASE}/api/budget/${USER_ID}`);
      const data = await res.json();
      if (!data.ok) return;
      document.getElementById("budgetTotalValue").textContent = formatMoney(data.total);
      document.getElementById("budgetSpentValue").textContent = `${formatMoney(data.spent)} UZS`;
      document.getElementById("budgetLeftValue").textContent = `Qoldi: ${formatMoney(data.left)} UZS`;
      document.getElementById("budgetPercentValue").textContent = `${data.percent}%`;
      document.getElementById("budgetProgressFill").style.width = `${Math.min(data.percent, 100)}%`;

      if (budgetInput) budgetInput.value = data.total || "";

      const listEl = document.getElementById("budgetCategoryList");
      listEl.innerHTML = "";

      if (!data.categories.length) {
        listEl.innerHTML = `
          <div class="budget-row">
            <div class="budget-row-left">
              <div class="tx-icon">📭</div>
              <div>
                <p>Hozircha xarajat yo‘q</p>
                <span>Tranzaksiya qo‘shing</span>
              </div>
            </div>
          </div>
       ` ;
      } else {
        data.categories.forEach((item) => {
          const percent = data.total > 0 ? Math.round((item.spent / data.total) * 100) : 0;
          listEl.innerHTML += `
            <div class="budget-row">
              <div class="budget-row-left">
                <div class="tx-icon">${getBudgetIcon(item.category)}</div>
                <div>
                  <p>${item.category}</p>
                  <span>${formatMoney(item.spent)} UZS</span>
                </div>
              </div>
              <div class="budget-row-right">
                <small>${percent}%</small>
                <div class="mini-progress">
                  <div style="width:${Math.min(percent, 100)}%"></div>
                </div>
              </div>
            </div>
         ` ;
        });
      }
    } catch (err) {
      console.log("Budget load error:", err);
    }
  }

  async function saveBudget() {
    const total = Number(budgetInput?.value || 0);

    if (!total) {
      alert("Budjet summasini kiriting");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/budget/set`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: USER_ID, total })
      });

      const result = await res.json();

      if (result.ok) {
        alert("Budjet saqlandi ✅");
        await loadBudget();
      } else {
        alert(result.error || "Budjet saqlanmadi");
      }
    } catch (err) {
      console.log("Budget save error:", err);
      alert("Budjet saqlanmadi");
    }
  }

  async function saveTransaction() {
    const txType = getActiveType();
    const amount = Number(txAmount?.value || 0);
    const name = txName?.value?.trim() || "";
    const currency = txCurrency?.value || "UZS";
    let category = getActiveCategory();

    if (txType === "income") category = "Daromad";
    if (txType === "debt_given") category = "Berilgan qarz";
    if (txType === "debt_taken") category = "Olingan qarz";

    if (!amount) {
      alert("Summani kiriting");
      return;
    }

    if (!name) {
      alert("Tranzaksiya nomini kiriting");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/transaction/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: USER_ID,
          tx_type: txType,
          amount,
          category,
          currency,
          note: name,
          created_at: buildCreatedAt()
        })
      });

      const result = await res.json();

      if (result.ok) {
        alert("Saqlandi ✅");
        txAmount.value = "";
        txName.value = "";
        setNowDateTime();
        await loadDashboard();
        await loadBudget();
        const homeBtn = document.querySelector('.nav-btn[data-page="homePage"]');
        openPage("homePage", homeBtn);
      } else {
        alert(result.error || "Saqlashda xato");
      }
    } catch (err) {
      console.log("Save error:", err);
      alert("Saqlashda xato");
    }
  }
  async function deleteTransaction(txId) {
    if (!confirm("Shu tranzaksiyani o‘chirasizmi?")) return;

    try {
      const res = await fetch(`${API_BASE}/api/transaction/${txId}`, {
        method: "DELETE"
      });
      const result = await res.json();

      if (result.ok) {
        await loadDashboard();
        await loadBudget();
      } else {
        alert(result.error || "O‘chirishda xato");
      }
    } catch (err) {
      console.log("Delete error:", err);
      alert("O‘chirishda xato");
    }
  }

  async function editTransaction(tx) {
    const newAmount = prompt("Yangi summa kiriting:", tx.amount);
    if (newAmount === null) return;

    const amountNum = Number(newAmount);
    if (!amountNum) {
      alert("Summani to‘g‘ri kiriting");
      return;
    }

    const newNote = prompt("Yangi nom kiriting:", tx.note || "");
    if (newNote === null) return;

    try {
      const res = await fetch(`${API_BASE}/api/transaction/${tx.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountNum,
          note: newNote.trim() || "-",
          category: tx.category,
          currency: tx.currency,
          created_at: tx.created_at
        })
      });

      const result = await res.json();

      if (result.ok) {
        await loadDashboard();
        await loadBudget();
      } else {
        alert(result.error || "Tahrirlashda xato");
      }
    } catch (err) {
      console.log("Edit error:", err);
      alert("Tahrirlashda xato");
    }
  }

  searchInput?.addEventListener("input", (e) => {
    activeSearch = e.target.value.trim();
    renderTransactions();
  });

  function applyQuickFilter(key) {
    activeDateFrom = "";
    activeDateTo = "";
    activeQuickFilter = key;
    setQuickActive(key);
    renderTransactions();
  }

  homeFilterToday?.addEventListener("click", () => applyQuickFilter("today"));
  homeFilter7?.addEventListener("click", () => applyQuickFilter("7"));
  homeFilter30?.addEventListener("click", () => applyQuickFilter("30"));
  homeFilterAll?.addEventListener("click", () => applyQuickFilter("all"));

  filterToday?.addEventListener("click", () => applyQuickFilter("today"));
  filter7?.addEventListener("click", () => applyQuickFilter("7"));
  filter30?.addEventListener("click", () => applyQuickFilter("30"));

  filterCustom?.addEventListener("click", () => {
    const from = prompt("Boshlanish sanasi: YYYY-MM-DD", activeDateFrom || "");
    if (from === null) return;

    const to = prompt("Tugash sanasi: YYYY-MM-DD", activeDateTo || "");
    if (to === null) return;

    if (!from || !to) {
      alert("Ikkala sanani ham kiriting");
      return;
    }

    const fromDate = new Date(from + "T00:00:00");
    const toDate = new Date(to + "T23:59:59");

    if (isNaN(fromDate) || isNaN(toDate)) {
      alert("Sana formati noto‘g‘ri");
      return;
    }

    if (fromDate > toDate) {
      alert("Boshlanish sanasi tugash sanasidan katta bo‘lmasin");
      return;
    }

    activeDateFrom = from;
    activeDateTo = to;
    activeQuickFilter = "all";
    setQuickActive("custom");
    renderTransactions();
  });

  typeAll?.addEventListener("click", () => {
    activeTypeFilter = "all";
    setTypeActive(typeAll);
    renderTransactions();
  });

  typeIncome?.addEventListener("click", () => {
    activeTypeFilter = "income";
    setTypeActive(typeIncome);
    renderTransactions();
  });

  typeExpense?.addEventListener("click", () => {
    activeTypeFilter = "expense";
    setTypeActive(typeExpense);
    renderTransactions();
  });

  typeDebt?.addEventListener("click", () => {
    activeTypeFilter = "debt";
    setTypeActive(typeDebt);
    renderTransactions();
  });

  saveBtn?.addEventListener("click", saveTransaction);
  saveBudgetBtn?.addEventListener("click", saveBudget);

  window.deleteTx = deleteTransaction;
  window.editTx = (encodedTx) => {
    const tx = JSON.parse(decodeURIComponent(encodedTx));
    editTransaction(tx);
  };
 loadTelegramProfile();
  loadDashboard();
  loadBudget();
});