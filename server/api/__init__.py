from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config, DB_NAME
from os import path

db = SQLAlchemy()

def start_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    CORS(app)

    from .routes import routes
    app.register_blueprint(routes, url_prefix="/")

    from .models import Courses
    create_db(app)

    return app

def create_db(app):
    if not path.exists("api/" + DB_NAME):
        with app.app_context():
            db.create_all()
            print("Created database")