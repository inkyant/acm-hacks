from bs4 import BeautifulSoup
import requests
import re
import sqlite3

catalog_url = "https://catalog.ucsc.edu/en/current/general-catalog/courses"
conn = sqlite3.connect("api/database.db")
cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS courses (
                id INTEGER NOT NULL, 
                category VARCHAR(6) NOT NULL, 
                number VARCHAR NOT NULL, 
                title VARCHAR NOT NULL, 
                description VARCHAR, 
                credits INTEGER, 
                prereq VARCHAR, 
                PRIMARY KEY (id)
            );
''')

# Get all links for each course category
def get_category_links(url):
    category_links = []
    #send request https
    req = requests.get(url)
    #get all the html
    soup = BeautifulSoup(req.text, 'lxml')
    #find all a tags with the attrs
    category = soup.select('ul.sc-child-item-links li a')
    pattern = r'(\w+) ?- ?(.+)'
    #replacing char
    convert_char = str.maketrans({'&': 'and', ':': '', '+': 'and'})

    for i in category:
        text = i.get_text()
        match = re.match(pattern, text)
        # Regex to get abbrev. and course name
        abbreviation = match.group(1)
        category_name = match.group(2).translate(convert_char).lower()
        category_links.append(f"{url}/{abbreviation.lower()}-{category_name.replace(' ', '-')}")
    
    return category_links

def get_all_courses(catagory_url):
    req = requests.get(catagory_url)
    soup = BeautifulSoup(req.text, 'lxml')

    course_list = []

    courses = soup.select('h2.course-name:not(div.cross-listed > h2.course-name)')

    for course in courses:
        course_info = re.match(r'^(\S+)\s(\d+\S*)\s(.+)$', course.get_text().strip())
        course_category = course_info.group(1)
        course_num = course_info.group(2)
        course_title = course_info.group(3)
        course_desc = ''
        course_credits = 0
        course_prereq = None

        next_element = course.find_next_sibling()
        while next_element and next_element.name != 'h2':

            # Get course description
            if 'desc' in next_element.attrs['class'] and (desc := next_element.get_text().strip()) != '':
                course_desc = desc

            # Get number of credits
            if 'sc-credithours' in next_element.attrs['class']:
                course_credits = next_element.find('div', class_='credits').get_text().strip() or 0
                
            # Get prereqs if applicable
            elif 'extraFields' in next_element.attrs['class'] and 'Requirement' in next_element.get_text():
                course_prereq = next_element.find('p').get_text().replace('Prerequisite(s):', '').strip()
            next_element = next_element.find_next_sibling()

        course_list.append((course_category, course_num, course_title, course_desc, int(course_credits), course_prereq))
    return course_list

if __name__ == '__main__':
    cur.execute("DELETE FROM courses")
    for url in get_category_links(catalog_url):
        course_list = get_all_courses(url)
        cur.executemany("INSERT INTO courses (category, number, title, description, credits, prereq) VALUES (?, ?, ?, ?, ?, ?)", course_list)
    conn.commit()

    conn.close()