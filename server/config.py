import random
from string import ascii_letters
import sys
import os

DB_NAME = "database.db"
db_folder = os.path.join(os.path.dirname(__file__), 'api')
os.makedirs(db_folder, exist_ok=True)

def generate_key(length):
    string = ""
    for _ in range(length):
        string += random.choice(ascii_letters)
    return string

class Config:
    SECRET_KEY = generate_key(16)
    # SQLALCHEMY_DATABASE_URI = f"sqlite:///api/{DB_NAME}"
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(db_folder, DB_NAME)}"
    # SESSION_TYPE = "filesystem"
    # SESSION_PERMANENT = False