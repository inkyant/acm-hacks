# SlugPlan

A web application that allows UCSC students to develop a 4 year planner for taking courses. Students can easily search for a class to drag and drop into a quarter they would like to take it in. 

(Project for ACM Hacks x GraceHacks 2023)

# Usage
This project consists of two components: the React application for webpage rendering and the Flask application for fetching API requests to get course information. Both components must be run for the web application to function.

In one terminal, run the following commands to start up the React application:

```
cd client
npm install
npm run start
```

In another terminal, run the following commands to start up the Flask API:

```
cd server
pip install -r requirements.txt
python3 app.py
```

There is a SQLite database in the server/api subdirectory that contains information of every UCSC course. However, the course catalog changes every year as there will be new courses added. You can update all the courses' information in the database based on the UCSC course catalog webpages by running this command below:

```
python3 update.py
```