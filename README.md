# Visualization-Dashboard

# Data Visualization Dashboard

# Project Overview

This is a ReactJS and Django-based Data Visualization Dashboard

# Tech Stack

Frontend: ReactJS, React Router (react-router-dom), TailwindCSS, Chart.js

Backend: Django, Django REST Framework (DRF)

Database: SQLite (default)

API Communication: Axios

# Installation & Setup

Backend Setup (Django)

Navigate to the backend folder: cd backend

Install dependencies: pip install -r requirements.txt

Run migrations: python manage.py migrate

Load JSON data into SQLite: python manage.py shell

> > > from api.load_data import load_json_data
> > > load_json_data()

Start the backend server: python manage.py runserver

Frontend Setup (ReactJS)

Navigate to the frontend folder: cd frontend

⃣Install dependencies: npm install

Install React Router: npm install react-router-dom

Start the frontend: npm start

# API Endpoints

Endpoint, Method, Description

/api/insights/, GET, Fetch all insights

/api/insights/{id}/, GET, Fetch a specific insight

/api/insights/, POST, Add a new insight
