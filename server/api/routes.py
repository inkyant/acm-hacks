from flask import Blueprint, jsonify
from .models import Courses
from . import db

routes = Blueprint("routes", __name__)

@routes.route("/courses/<category>/<course_num>", methods=['GET', 'POST'])
def get_data(category, course_num):
    data = Courses.query.filter(Courses.category==category.upper(), Courses.number==course_num.upper()).first()
    if data:
        formatted_json = {
            "category": data.category,
            "course_num": data.number,
            "title": data.title,
            "description": data.description,
            "credits": data.credits,
            "prereqs": data.prereq
        }
    else:
        formatted_json = dict()
    return jsonify(formatted_json)
