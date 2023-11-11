# SlugPlan

A web application that allows UCSC students to develop a 4-year planner for taking courses. Students can easily search for a class to drag and drop into a quarter they want to take. (Project for ACM Hacks x GraceHacks 2023)

![Screen Shot 2023-11-11 at 4 18 11 AM](https://github.com/inkyant/acm-hacks/assets/86862325/614a33b5-49c5-45fa-9e46-cf5b2b163431)

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

There is an SQLite database located in the server/api subdirectory that contains information on every UCSC course. However, the course catalog changes each year as new courses will be added. You can update all the courses' information in the database based on the UCSC course catalog webpages by running this command below:

```
python3 update.py
```
