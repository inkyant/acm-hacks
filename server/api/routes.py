from flask import Blueprint, jsonify
from .models import Courses
from . import db

routes = Blueprint("routes", __name__)

@routes.route("/courses/<category>/<course_num>", methods=['GET', 'POST'])
def get_data(category, course_num):
    data = Courses.query.filter(Courses.category==category.upper(), Courses.number.startswith(course_num.upper())).all()
    course_list = []
    if data:
        for course in data:
            formatted_json = {
                "category": course.category,
                "course_num": course.number,
                "title": course.title,
                "description": course.description,
                "credits": course.credits,
                "prereqs": course.prereq
            }
            course_list.append(formatted_json)
    return jsonify(course_list)
