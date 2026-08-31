from flask import Flask, render_template, request
import os
import sqlite3
from datetime import datetime

app = Flask(__name__)

# ================= PATH CONFIG =================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Vercel filesystem is read-only except /tmp
if os.environ.get("VERCEL"):
    DATABASE_PATH = "/tmp/portfolio.db"
else:
    DATABASE_PATH = os.path.join(BASE_DIR, "portfolio.db")


# ================= DATABASE INIT =================

def init_db():
    conn = sqlite3.connect(DATABASE_PATH)

    conn.execute("""
        CREATE TABLE IF NOT EXISTS visitors(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            visit_time TEXT
        )
    """)

    conn.execute("""
        CREATE TABLE IF NOT EXISTS contacts(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            message TEXT
        )
    """)

    conn.commit()
    conn.close()


init_db()


# ================= HOME =================

@app.route("/")
def home():

    # ===== VISITOR COUNT =====

    conn = sqlite3.connect(DATABASE_PATH)

    conn.execute(
        "INSERT INTO visitors (visit_time) VALUES (?)",
        (datetime.now().strftime("%Y-%m-%d %H:%M:%S"),)
    )

    visits = conn.execute(
        "SELECT COUNT(*) FROM visitors"
    ).fetchone()[0]

    conn.commit()
    conn.close()


    # ===== CERTIFICATES AUTO LOAD =====

    cert_folder = os.path.join(
        BASE_DIR,
        "static",
        "certificates"
    )

    certificates = []

    if os.path.exists(cert_folder):
        for file in os.listdir(cert_folder):
            if file.lower().endswith(
                (".png", ".jpg", ".jpeg", ".webp", ".pdf")
            ):
                certificates.append(file)


    # ===== PROJECTS DATA =====

    projects = [
        {
            "title": "Online Job Portal",
            "desc": (
                "A full-stack web application that connects job seekers "
                "with recruiters. Users can create profiles, search and "
                "apply for jobs, while recruiters can post and manage "
                "job openings through an interactive dashboard."
            ),
            "tech": "HTML, CSS, JavaScript, SQL",
            "features": (
                "User Authentication • Job Apply System • "
                "Recruiter Dashboard • Responsive UI"
            ),
            "status": "Completed",
            "github": "https://github.com/haldarbinoy257-prog/online_job_portal"
        }
    ]


    return render_template(
        "index.html",
        certificates=certificates,
        visits=visits,
        projects=projects
    )


# ================= CONTACT =================

@app.route("/contact", methods=["POST"])
def contact():

    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")


    conn = sqlite3.connect(DATABASE_PATH)

    conn.execute(
        """
        INSERT INTO contacts (name, email, message)
        VALUES (?, ?, ?)
        """,
        (name, email, message)
    )

    conn.commit()
    conn.close()

    return "Message Sent Successfully"


# ================= RUN =================

if __name__ == "__main__":

    port = int(os.environ.get("PORT", 10000))

    app.run(
        host="0.0.0.0",
        port=port
    )