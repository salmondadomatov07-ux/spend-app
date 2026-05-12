"""
SpendUZ Pro — database.py
SQLite database for Telegram Bot
"""

import sqlite3
from pathlib import Path
from datetime import datetime

BASE_DIR = Path(__file__).resolve().parent
DB_PATH  = BASE_DIR / "spenduz.db"


def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_conn()
    cur  = conn.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS users (
        user_id   INTEGER PRIMARY KEY,
        lang      TEXT    DEFAULT 'uz',
        joined_at TEXT    NOT NULL
    )""")

    cur.execute("""
    CREATE TABLE IF NOT EXISTS transactions (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id     INTEGER NOT NULL,
        tx_type     TEXT    NOT NULL,
        amount      REAL    NOT NULL,
        note        TEXT    DEFAULT '',
        category    TEXT    DEFAULT 'other',
        currency    TEXT    DEFAULT 'UZS',
        date        TEXT    NOT NULL,
        created_at  TEXT    NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    )""")

    cur.execute("""
    CREATE TABLE IF NOT EXISTS goals (
        id                INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id           INTEGER NOT NULL,
        name              TEXT    NOT NULL,
        target            REAL    NOT NULL,
        current           REAL    DEFAULT 0,
        deadline          TEXT    DEFAULT '',
        last_notified_pct INTEGER DEFAULT 0,
        created_at        TEXT    NOT NULL
    )""")

    cur.execute("""
    CREATE TABLE IF NOT EXISTS groups_table (
        group_id  TEXT    PRIMARY KEY,
        owner_id  INTEGER NOT NULL,
        name      TEXT    DEFAULT 'Guruh',
        created_at TEXT   NOT NULL
    )""")

    cur.execute("""
    CREATE TABLE IF NOT EXISTS group_members (
        group_id  TEXT    NOT NULL,
        user_id   INTEGER NOT NULL,
        PRIMARY KEY (group_id, user_id)
    )""")

    cur.execute("""
    CREATE TABLE IF NOT EXISTS budgets (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id     INTEGER NOT NULL,
        category    TEXT    NOT NULL,
        limit_amount REAL   NOT NULL,
        month       TEXT    NOT NULL
    )""")

    conn.commit()
    conn.close()


# ── USERS ─────────────────────────────────────────────────────────────────────
def add_user(user_id: int, lang: str = "uz"):
    conn = get_conn()
    conn.execute("""
        INSERT OR IGNORE INTO users (user_id, lang, joined_at)
        VALUES (?, ?, ?)
    """, (user_id, lang, datetime.now().isoformat()))
    conn.commit()
    conn.close()


def get_lang(user_id: int) -> str:
    conn = get_conn()
    row  = conn.execute("SELECT lang FROM users WHERE user_id=?", (user_id,)).fetchone()
    conn.close()
    return row["lang"] if row else "uz"


def set_lang(user_id: int, lang: str):
    conn = get_conn()
    conn.execute("UPDATE users SET lang=? WHERE user_id=?", (lang, user_id))
    conn.commit()
    conn.close()


def get_all_users() -> list[int]:
    conn  = get_conn()
    rows  = conn.execute("SELECT user_id FROM users").fetchall()
    conn.close()
    return [r["user_id"] for r in rows]


# ── TRANSACTIONS ──────────────────────────────────────────────────────────────
def add_transaction(user_id: int, tx_type: str, amount: float,
                    note: str, currency: str, category: str) -> int:
    conn = get_conn()
    cur  = conn.cursor()
    now  = datetime.now()
    cur.execute("""
        INSERT INTO transactions
        (user_id, tx_type, amount, note, category, currency, date, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (user_id, tx_type, amount, note, currency, category,
          now.strftime("%Y-%m-%d"), now.isoformat()))
    conn.commit()
    tx_id = cur.lastrowid
    conn.close()
    return tx_id


def get_transactions(user_id: int, limit: int = 0) -> list[dict]:
    conn = get_conn()
    if limit:
        rows = conn.execute("""
            SELECT * FROM transactions
            WHERE user_id=? ORDER BY id DESC LIMIT ?
        """, (user_id, limit)).fetchall()
    else:
        rows = conn.execute("""
            SELECT * FROM transactions
            WHERE user_id=? ORDER BY id DESC
        """, (user_id,)).fetchall()
    conn.close()
    return [dict(r) for r in rows]


def get_transaction_by_id(tx_id: int, user_id: int) -> dict | None:
    conn = get_conn()
    row  = conn.execute(
        "SELECT * FROM transactions WHERE id=? AND user_id=?", (tx_id, user_id)
    ).fetchone()
    conn.close()
    return dict(row) if row else None


def update_transaction(tx_id: int, user_id: int, amount: float,
                       note: str, category: str, tx_type: str) -> bool:
    conn = get_conn()
    cur  = conn.cursor()
    cur.execute("""
        UPDATE transactions
        SET amount=?, note=?, category=?, tx_type=?
        WHERE id=? AND user_id=?
    """, (amount, note, category, tx_type, tx_id, user_id))
    conn.commit()
    ok = cur.rowcount > 0
    conn.close()
    return ok


def delete_transaction(tx_id: int, user_id: int) -> bool:
    conn = get_conn()
    cur  = conn.cursor()
    cur.execute("DELETE FROM transactions WHERE id=? AND user_id=?", (tx_id, user_id))
    conn.commit()
    ok = cur.rowcount > 0
    conn.close()
    return ok


def get_month_summary(user_id: int, month: str = None) -> dict:
    if not month:
        month = datetime.now().strftime("%Y-%m")
    conn  = get_conn()
    rows  = conn.execute("""
        SELECT tx_type, SUM(amount) as total
        FROM transactions
        WHERE user_id=? AND date LIKE ?
        GROUP BY tx_type
    """, (user_id, f"{month}%")).fetchall()
    conn.close()
    result = {"income": 0, "expense": 0, "debt_given": 0, "debt_taken": 0}
    for r in rows:
        if r["tx_type"] in result:
            result[r["tx_type"]] = r["total"]
    result["balance"] = result["income"] + result["debt_taken"] - result["expense"] - result["debt_given"]
    return result


def get_category_breakdown(user_id: int, month: str = None) -> dict:
    if not month:
        month = datetime.now().strftime("%Y-%m")
    conn  = get_conn()
    rows  = conn.execute("""
        SELECT category, SUM(amount) as total
        FROM transactions
        WHERE user_id=? AND date LIKE ? AND tx_type='expense'
        GROUP BY category ORDER BY total DESC
    """, (user_id, f"{month}%")).fetchall()
    conn.close()
    return {r["category"]: r["total"] for r in rows}


def check_today_has_txn(user_id: int) -> bool:
    today = datetime.now().strftime("%Y-%m-%d")
    conn  = get_conn()
    row   = conn.execute(
        "SELECT id FROM transactions WHERE user_id=? AND date=? LIMIT 1",
        (user_id, today)
    ).fetchone()
    conn.close()
    return row is not None


# ── GOALS ─────────────────────────────────────────────────────────────────────
def add_goal(user_id: int, name: str, target: float, deadline: str = "") -> int:
    conn = get_conn()
    cur  = conn.cursor()
    cur.execute("""
        INSERT INTO goals (user_id, name, target, current, deadline, created_at)
        VALUES (?, ?, ?, 0, ?, ?)
    """, (user_id, name, target, deadline, datetime.now().isoformat()))
    conn.commit()
    goal_id = cur.lastrowid
    conn.close()
    return goal_id


def get_goals(user_id: int) -> list[dict]:
    conn = get_conn()
    rows = conn.execute(
        "SELECT * FROM goals WHERE user_id=? ORDER BY id DESC", (user_id,)
    ).fetchall()
    conn.close()
    return [dict(r) for r in rows]


def update_goal_progress(goal_id: int, user_id: int, amount: float) -> dict | None:
    conn = get_conn()
    cur  = conn.cursor()
    cur.execute("""
        UPDATE goals SET current = MIN(target, current + ?)
        WHERE id=? AND user_id=?
    """, (amount, goal_id, user_id))
    conn.commit()
    row = conn.execute(
        "SELECT * FROM goals WHERE id=?", (goal_id,)
    ).fetchone()
    conn.close()
    return dict(row) if row else None


def update_goal_notified(goal_id: int, pct: int):
    conn = get_conn()
    conn.execute("UPDATE goals SET last_notified_pct=? WHERE id=?", (pct, goal_id))
    conn.commit()
    conn.close()


def delete_goal(goal_id: int, user_id: int) -> bool:
    conn = get_conn()
    cur  = conn.cursor()
    cur.execute("DELETE FROM goals WHERE id=? AND user_id=?", (goal_id, user_id))
    conn.commit()
    ok = cur.rowcount > 0
    conn.close()
    return ok


# ── GROUPS ────────────────────────────────────────────────────────────────────
def create_group(owner_id: int, name: str = "Guruh") -> str:
    group_id = f"g{owner_id}"
    conn = get_conn()
    conn.execute("""
        INSERT OR IGNORE INTO groups_table (group_id, owner_id, name, created_at)
        VALUES (?, ?, ?, ?)
    """, (group_id, owner_id, name, datetime.now().isoformat()))
    conn.execute("""
        INSERT OR IGNORE INTO group_members (group_id, user_id) VALUES (?, ?)
    """, (group_id, owner_id))
    conn.commit()
    conn.close()
    return group_id


def join_group(group_id: str, user_id: int) -> bool:
    conn = get_conn()
    row  = conn.execute(
        "SELECT group_id FROM groups_table WHERE group_id=?", (group_id,)
    ).fetchone()
    if not row:
        conn.close()
        return False
    conn.execute("""
        INSERT OR IGNORE INTO group_members (group_id, user_id) VALUES (?, ?)
    """, (group_id, user_id))
    conn.commit()
    conn.close()
    return True


def get_group_members(group_id: str) -> list[int]:
    conn = get_conn()
    rows = conn.execute(
        "SELECT user_id FROM group_members WHERE group_id=?", (group_id,)
    ).fetchall()
    conn.close()
    return [r["user_id"] for r in rows]


def get_user_group(user_id: int) -> str | None:
    conn = get_conn()
    row  = conn.execute(
        "SELECT group_id FROM group_members WHERE user_id=? LIMIT 1", (user_id,)
    ).fetchone()
    conn.close()
    return row["group_id"] if row else None


# ── BUDGETS ───────────────────────────────────────────────────────────────────
def set_budget(user_id: int, category: str, limit_amount: float, month: str = None):
    if not month:
        month = datetime.now().strftime("%Y-%m")
    conn = get_conn()
    existing = conn.execute("""
        SELECT id FROM budgets WHERE user_id=? AND category=? AND month=?
    """, (user_id, category, month)).fetchone()
    if existing:
        conn.execute("UPDATE budgets SET limit_amount=? WHERE id=?",
                     (limit_amount, existing["id"]))
    else:
        conn.execute("""
            INSERT INTO budgets (user_id, category, limit_amount, month)
            VALUES (?, ?, ?, ?)
        """, (user_id, category, limit_amount, month))
    conn.commit()
    conn.close()


def get_budgets(user_id: int, month: str = None) -> list[dict]:
    if not month:
        month = datetime.now().strftime("%Y-%m")
    conn = get_conn()
    rows = conn.execute("""
        SELECT * FROM budgets WHERE user_id=? AND month=?
    """, (user_id, month)).fetchall()
    conn.close()
    return [dict(r) for r in rows]