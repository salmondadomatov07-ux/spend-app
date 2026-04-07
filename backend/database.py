import sqlite3
from datetime import datetime


DB_NAME = "spend_money.db"


def get_connection():
    return sqlite3.connect(DB_NAME)


def now_str():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def init_db():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY,
        language TEXT NOT NULL DEFAULT 'uz',
        currency TEXT NOT NULL DEFAULT 'UZS',
        created_at TEXT NOT NULL
    )
    """)

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        tx_type TEXT NOT NULL,
        amount REAL NOT NULL,
        category TEXT NOT NULL,
        currency TEXT NOT NULL,
        created_at TEXT NOT NULL
    )
    """)

    conn.commit()
    conn.close()


def create_user_if_not_exists(user_id: int):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT user_id FROM users WHERE user_id = ?", (user_id,))
    row = cursor.fetchone()

    if not row:
        cursor.execute("""
        INSERT INTO users (user_id, language, currency, created_at)
        VALUES (?, ?, ?, ?)
        """, (user_id, "uz", "UZS", now_str()))
        conn.commit()

    conn.close()


def get_user_language(user_id: int):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT language FROM users WHERE user_id = ?", (user_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return row[0]
    return "uz"


def set_user_language(user_id: int, language: str):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    UPDATE users
    SET language = ?
    WHERE user_id = ?
    """, (language, user_id))

    conn.commit()
    conn.close()


def get_user_currency(user_id: int):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT currency FROM users WHERE user_id = ?", (user_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return row[0]
    return "UZS"


def add_transaction(user_id: int, tx_type: str, amount: float, category: str, currency: str):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    INSERT INTO transactions (user_id, tx_type, amount, category, currency, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
    """, (user_id, tx_type, amount, category, currency, now_str()))

    conn.commit()
    conn.close()


def get_monthly_report(user_id: int, year_month: str):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    SELECT tx_type, COALESCE(SUM(amount), 0)
    FROM transactions
    WHERE user_id = ?
      AND substr(created_at, 1, 7) = ?
    GROUP BY tx_type
    """, (user_id, year_month))
    rows = cursor.fetchall()

    income = 0
    expense = 0

    for tx_type, total in rows:
        if tx_type == "income":
            income = total
        elif tx_type == "expense":
            expense = total

    cursor.execute("""
    SELECT category, tx_type, SUM(amount)
    FROM transactions
    WHERE user_id = ?
      AND substr(created_at, 1, 7) = ?
    GROUP BY category, tx_type
    ORDER BY SUM(amount) DESC
    """, (user_id, year_month))
    categories = cursor.fetchall()

    conn.close()
    return income, expense, categories
def get_last_transactions(user_id: int, limit: int = 10):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    SELECT id, tx_type, amount, category, currency, created_at
    FROM transactions
    WHERE user_id = ?
    ORDER BY id DESC
    LIMIT ?
    """, (user_id, limit))

    rows = cursor.fetchall()
    conn.close()
    return rows


def delete_transaction(user_id: int, tx_id: int):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    DELETE FROM transactions
    WHERE id = ? AND user_id = ?
    """, (tx_id, user_id))

    deleted_count = cursor.rowcount

    conn.commit()
    conn.close()

    return deleted_count > 0  
def update_transaction_amount(user_id: int, tx_id: int, new_amount: float):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    UPDATE transactions
    SET amount = ?
    WHERE id = ? AND user_id = ?
    """, (new_amount, tx_id, user_id))

    updated_count = cursor.rowcount

    conn.commit()
    conn.close()

    return updated_count > 0
def get_report_by_date_range(user_id: int, start_date: str, end_date: str):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    SELECT tx_type, COALESCE(SUM(amount), 0)
    FROM transactions
    WHERE user_id = ?
      AND substr(created_at, 1, 10) >= ?
      AND substr(created_at, 1, 10) <= ?
    GROUP BY tx_type
    """, (user_id, start_date, end_date))
    rows = cursor.fetchall()

    income = 0
    expense = 0

    for tx_type, total in rows:
        if tx_type == "income":
            income = total
        elif tx_type == "expense":
            expense = total

    cursor.execute("""
    SELECT category, tx_type, SUM(amount)
    FROM transactions
    WHERE user_id = ?
      AND substr(created_at, 1, 10) >= ?
      AND substr(created_at, 1, 10) <= ?
    GROUP BY category, tx_type
    ORDER BY SUM(amount) DESC
    """, (user_id, start_date, end_date))
    categories = cursor.fetchall()

    conn.close()
    return income, expense, categories
def get_dashboard_data(user_id: int):
    conn = get_connection()
    cursor = conn.cursor()

    year_month = datetime.now().strftime("%Y-%m")

    cursor.execute("""
    SELECT tx_type, COALESCE(SUM(amount), 0)
    FROM transactions
    WHERE user_id = ?
      AND substr(created_at, 1, 7) = ?
    GROUP BY tx_type
    """, (user_id, year_month))
    rows = cursor.fetchall()

    income = 0
    expense = 0

    for tx_type, total in rows:
        if tx_type == "income":
            income = total
        elif tx_type == "expense":
            expense = total

    balance = income - expense

    cursor.execute("""
    SELECT id, tx_type, amount, category, currency, created_at
    FROM transactions
    WHERE user_id = ?
    ORDER BY id DESC
    LIMIT 10
    """, (user_id,))
    transactions = cursor.fetchall()

    conn.close()

    return {
        "balance": balance,
        "income": income,
        "expense": expense,
        "transactions": [
            {
                "id": row[0],
                "tx_type": row[1],
                "amount": row[2],
                "category": row[3],
                "currency": row[4],
                "created_at": row[5],
            }
            for row in transactions
        ]
    }