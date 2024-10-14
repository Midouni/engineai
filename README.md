# Securities Dashboard

## Project Overview

This project is a securities dashboard application built with a Node.js backend (Express and PostgreSQL), a React.js frontend, and PostgreSQL as the database. The frontend is styled using Material UI and utilizes Highcharts for data visualization.

### Features

- **Securities List**: Displays all securities in a table format with pagination.
- **Securities Details**: Detailed information about a specific security, including a price and volume chart.

## Prerequisites

Before starting, ensure you have the following tools installed on your machine:

1. **Node.js** (version 22 or later)
2. **npm** (Node package manager)
3. **PostgreSQL** (for the database)
4. **Git** (for cloning the repository)
5. **Docker** (optional, if using Docker for deployment)

---

## Table of Contents

1. [Database Setup](#database-setup)
2. [Backend Setup](#backend-setup)
3. [Frontend Setup](#frontend-setup)
4. [Running the Application](#running-the-application)
5. [Docker Setup](#docker-setup)

---

## Database Setup

1. **Install PostgreSQL**:
   If you don't have PostgreSQL installed, follow the instructions on the official PostgreSQL site: [Install PostgreSQL](https://www.postgresql.org/download/).

2. **Create a PostgreSQL Database**:
   Start the PostgreSQL service and create a database using the following commands:

   ```bash
    psql postgres
    CREATE DATABASE securities_db;

   ```

3. **Create a User:**:
   Create a new user for the database.

   ```bash
    CREATE USER securities_user WITH ENCRYPTED PASSWORD 'password';

   ```

4. **Grant Privileges:**:
   Grant all privileges to the newly created user for the database.

   ```bash
    GRANT ALL PRIVILEGES ON DATABASE securities_db TO securities_user;

   ```

5. **Grant Privileges:**:
   Grant all privileges to the newly created user for the database.

   ```bash
    GRANT ALL PRIVILEGES ON DATABASE securities_db TO securities_user;

   ```

6. **Clone the Repository:**:
   Clone the project from GitHub.

   ```bash
    git clone https://github.com/Midouni/engineai.git
    cd engineai
   ```

7. **Configure the Database:**:
   Update the backend configuration (src/config/default.json) for your database settings:
   check it with your configuration your database port

   ```json
   {
     "DataSourceOptions": {
       "type": "postgres",
       "host": "localhost",
       "port": 5432,
       "username": "securities_user",
       "password": "password",
       "database": "securities_db",
       "synchronize": true,
       "logging": false,
       "entities": ["src/db/entity/**/*.ts"],
       "migrations": ["src/migration/**/*.ts"],
       "subscribers": ["src/subscriber/**/*.ts"]
     }
   }
   ```

   9. **Run the Database Scripts:**:
      Use the provided scripts to create the necessary tables and add data.

   ```bash
    # Navigate to the backend directory
    cd securities-backend

    # Run the script to create the table and add data from file to database
    npm run script

   ```

   ## Backend Setup

   10. **Install Dependencies (backend):**:
       Navigate to the backend directory and install all required dependencies.

   ```bash
    cd securities-backend
    npm install

   ```

   11. **Run the Backend Server:**:
       Start the backend server using npm.
       By default, the backend will runs on http://localhost:3021.

   ```bash
    # Start the server in development mode
    npm run local
   ```

   12. **Verify Backend Setup:**:
       The backend exposes the following routes:
       • GET / : to check server status
       • GET /api/v1/securities : Fetches a list of securities.
       • GET /api/v1/securities/:ticker : Fetches details of a security by its ticker.

   ```bash
    # Start the server in development mode
    npm run local
   ```

## frontend Setup

13. **Navigate to the Frontend Directory:**:
    Change directory to the frontend part of the project.

    ```bash
     cd ../securities-frontend
    ```

14. **Install Dependencies:**:
    Run the following command to install the required npm packages.

    ```bash
    npm install
    ```

15. **Start the Frontend Application:**:
    Run the frontend app using npm.
    The frontend application should be accessible at http://localhost:5173.

    ```bash
        npm run dev
    ```

Once both the backend and frontend servers are running:

    1.	Open your browser and go to http://localhost:5173 to access the frontend.
    2.	The frontend interacts with the backend at http://localhost:3021.
