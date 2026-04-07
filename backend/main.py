from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
import sqlite3
import uvicorn
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_NAME = "spend.db"


def get_conn():
    return sqlite3.connect(DB_NAME)


def init_db():
    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            tx_type TEXT NOT NULL,
            amount REAL NOT NULL,
            category TEXT NOT NULL,
            currency TEXT DEFAULT 'UZS',
            note TEXT DEFAULT '',
            created_at TEXT NOT NULL
        )
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS budgets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            month TEXT NOT NULL,
            total REAL NOT NULL DEFAULT 0
        )
    """)

    conn.commit()
    conn.close()


class TransactionIn(BaseModel):
    user_id: int
    tx_type: str
    amount: float
    category: str
    currency: str = "UZS"
    note: str = ""
    created_at: Optional[str] = None


class TransactionUpdate(BaseModel):
    amount: float
    note: str
    category: str
    currency: str
    created_at: str


class BudgetIn(BaseModel):
    user_id: int
    total: float
    month: Optional[str] = None


@app.on_event("startup")
def startup():
    init_db()


@app.get("/")
def root():
    return {"ok": True, "message": "SALMON AI backend working"}


@app.post("/api/transaction/add")
def add_transaction(data: TransactionIn):
    try:
        conn = get_conn()
        cur = conn.cursor()

        created_at = data.created_at or datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        cur.execute("""
            INSERT INTO transactions (user_id, tx_type, amount, category, currency, note, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (
            data.user_id,
            data.tx_type,
            data.amount,
            data.category,
            data.currency,
            data.note,
            created_at
        ))

        conn.commit()
        conn.close()
        return {"ok": True}
    except Exception as e:
        return {"ok": False, "error": str(e)}


@app.get("/api/dashboard/{user_id}")
def dashboard(user_id: int):
    try:
        conn = get_conn()
        cur = conn.cursor()

        cur.execute("""
            SELECT id, tx_type, amount, category, currency, note, created_at
            FROM transactions
            WHERE user_id = ?
            ORDER BY datetime(created_at) DESC, id DESC
        """, (user_id,))
        rows = cur.fetchall()

        transactions = []
        income = 0
        expense = 0
        debt_given = 0
        debt_taken = 0

        for row in rows:
            tx = {
                "id": row[0],
                "tx_type": row[1],
                "amount": row[2],
                "category": row[3],
                "currency": row[4],
                "note": row[5],
                "created_at": row[6],
            }
            transactions.append(tx)

            if tx["tx_type"] == "income":
                income += tx["amount"]
            elif tx["tx_type"] == "expense":
                expense += tx["amount"]
            elif tx["tx_type"] == "debt_given":
                debt_given += tx["amount"]
            elif tx["tx_type"] == "debt_taken":
                debt_taken += tx["amount"]

        conn.close()

        balance = income + debt_taken - expense - debt_given

        return {
            "ok": True,
            "balance": balance,
            "income": income,
            "expense": expense,
            "debt_given": debt_given,
            "debt_taken": debt_taken,
            "transactions": transactions
        }
    except Exception as e:
        return {"ok": False, "error": str(e)}


@app.delete("/api/transaction/{tx_id}")
def delete_transaction(tx_id: int):
    try:
        conn = get_conn()
        cur = conn.cursor()
        cur.execute("DELETE FROM transactions WHERE id = ?", (tx_id,))
        conn.commit()
        conn.close()
        return {"ok": True}
    except Exception as e:
        return {"ok": False, "error": str(e)}


@app.put("/api/transaction/{tx_id}")
def update_transaction(tx_id: int, data: TransactionUpdate):
    try:
        conn = get_conn()
        cur = conn.cursor()

        cur.execute("""
            UPDATE transactions
            SET amount = ?, note = ?, category = ?, currency = ?, created_at = ?
            WHERE id = ?
        """, (
            data.amount,
            data.note,
            data.category,
            data.currency,
            data.created_at,
            tx_id
        ))

        conn.commit()
        conn.close()
        return {"ok": True}
    except Exception as e:
        return {"ok": False, "error": str(e)}


@app.post("/api/budget/set")
def set_budget(data: BudgetIn):
    try:
        conn = get_conn()
        cur = conn.cursor()

        month = data.month or datetime.now().strftime("%Y-%m")

        cur.execute(
            "SELECT id FROM budgets WHERE user_id = ? AND month = ?",
            (data.user_id, month)
        )
        row = cur.fetchone()

        if row:
            cur.execute(
                "UPDATE budgets SET total = ? WHERE user_id = ? AND month = ?",
                (data.total, data.user_id, month)
            )
        else:
            cur.execute(
                "INSERT INTO budgets (user_id, month, total) VALUES (?, ?, ?)",
                (data.user_id, month, data.total)
            )

        conn.commit()
        conn.close()
        return {"ok": True, "month": month, "total": data.total}
    except Exception as e:
        return {"ok": False, "error": str(e)}


@app.get("/api/budget/{user_id}")
def get_budget(user_id: int):
    try:
        conn = get_conn()
        cur = conn.cursor()

        month = datetime.now().strftime("%Y-%m")

        cur.execute(
            "SELECT total FROM budgets WHERE user_id = ? AND month = ?",
            (user_id, month)
        )
        row = cur.fetchone()
        total_budget = row[0] if row else 0

        cur.execute("""
            SELECT category, SUM(amount)
            FROM transactions
            WHERE user_id = ?
              AND tx_type = 'expense'
              AND substr(created_at, 1, 7) = ?
            GROUP BY category
            ORDER BY SUM(amount) DESC
        """, (user_id, month))
        rows = cur.fetchall()

        spent = 0
        categories = []

        for category, amount in rows:
            amount = amount or 0
            spent += amount
            categories.append({
                "category": category,
                "spent": amount
            })

        left_amount = total_budget - spent
        percent = round((spent / total_budget) * 100) if total_budget > 0 else 0

        conn.close()

        return {
            "ok": True,
            "month": month,
            "total": total_budget,
            "spent": spent,
            "left": left_amount,
            "percent": percent,
            "categories": categories
        }
    except Exception as e:
        return {"ok": False, "error": str(e)}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)