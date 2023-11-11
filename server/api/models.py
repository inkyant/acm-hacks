from . import db

class Courses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(6), nullable=False)
    number = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    credits = db.Column(db.Integer)
    prereq = db.Column(db.String)