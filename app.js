const API = "http://127.0.0.1:8000";

let allTransactions = [];

// USER ID (Telegram yoki default)
function getUserId() {
  return window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 5522708870;
}

// Pul format
function formatMoney(val) {
  return Number(val || 0).toLocaleString("ru-RU");
}

// ================= LOAD DASHBOARD =================
async function loadDashboard() {
  try {
    const USER_ID = getUserId();

    const res = await fetch(`${API}/data/${USER_ID}`);
    const data = await res.json();

    allTransactions = data || [];

    let income = 0;
    let expense = 0;

    allTransactions.forEach(item => {
      const amount = Number(item.amount || 0);

      if (item.tx_type === "income") {
        income += amount;
      } else {
        expense += amount;
      }
    });

    const balance = income - expense;

    document.getElementById("balanceValue").textContent = formatMoney(balance);
    document.getElementById("incomeValue").textContent = formatMoney(income);
    document.getElementById("expenseValue").textContent = formatMoney(expense);

    renderTransactions();

  } catch (err) {
    console.log("Dashboard error:", err);
  }
}

// ================= ADD =================
async function addTransaction() {
  try {
    const USER_ID = getUserId();

    const amountEl = document.getElementById("txAmount");
    const noteEl = document.getElementById("txName");

    const amount = Number(amountEl.value);
    const note = noteEl.value.trim();

    if (!amount || amount <= 0) {
      alert("Summani kiriting");
      return;
    }

    await fetch(`${API}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: USER_ID,
        tx_type: "expense",
        amount: amount,
        note: note || "-",
        currency: "UZS",
        category: "Boshqa"
      })
    });

    amountEl.value = "";
    noteEl.value = "";

    await loadDashboard();

    alert("Saqlandi ✅");

  } catch (err) {
    console.log("ADD ERROR:", err);
    alert("Xato bo‘ldi");
  }
}

// ================= RENDER =================
function renderTransactions() {
  const list = document.getElementById("homeTransactionsList");

  if (!list) return;

  list.innerHTML = "";

  if (!allTransactions.length) {
    list.innerHTML = <p style="opacity:0.6">Hozircha yo‘q</p>;
    return;
  }

  allTransactions.slice().reverse().forEach(tx => {
    list.innerHTML += 
      <div style="padding:10px;border-bottom:1px solid #333;">
        <b>${tx.note}</b><br>
        ${formatMoney(tx.amount)} UZS
      </div>
    ;
  });
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveTxBtn");

  if (saveBtn) {
    saveBtn.addEventListener("click", addTransaction);
  }

  loadDashboard();
});