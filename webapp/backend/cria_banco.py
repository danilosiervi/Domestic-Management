import sqlite3

conn = sqlite3.connect("domestic.db")
with open("banco_simples.sql", "r", encoding="utf-8") as f:
    conn.executescript(f.read())
conn.close()
print("Banco criado com sucesso!")
