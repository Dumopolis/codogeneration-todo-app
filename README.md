# 📝 TODO Application

This repository hosts a TODO application designed to compare two approaches for developing a full-stack application: with **code generation** and **without code generation**. This comparison aims to highlight the benefits and challenges of each method, especially when dealing with complex TypeScript-based projects.

---

## 📂 Project Structure

The project includes three main directories:

1. **server** - Contains the backend logic, developed using TypeScript, Express, and Sequelize.
2. **frontend** - Houses the frontend, built with Vite, React, TypeScript, Mantine UI library, and the Feature-Sliced Design (FSD) architecture.
3. **openAPI** - Holds the OpenAPI specification, detailing API contracts and serving as a source for potential code generation.

---

## ⚙️ Key Technologies

- **Backend**: TypeScript, Express, Sequelize ORM
- **Frontend**: Vite, React, TypeScript, Mantine UI
- **API Contracts**: OpenAPI for defining endpoints and data structures

---

## 🚀 Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/todo-app
   cd codogeneration-todo-app
2. **Install dependencies for both frontend and backend**:
   ```bash
    cd server
    npm install
    cd ../frontend
    npm install
3. **Database Setup**:
  Ensure you have PostgreSQL installed and a todos table in database created.
  - **Installing PostgreSQL**
  Ensure that PostgreSQL is installed on your computer. If PostgreSQL is not yet installed, you can download it from the [official PostgreSQL website](https://www.postgresql.org/download/) and follow the installation instructions for your operating system.
  - **Creating a Database**
  After installing PostgreSQL, execute the following commands to create the `todo_app` database and create table inside:
    ```bash  
    
    # Log in to psql as the postgres user
    sudo -u postgres psql
    
    # Create the database
    CREATE DATABASE todo_app;
    
    # Open todo_app database
    \c todo_app;
    
    # Create new table
    CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

  - **Add the connection details in server/.env file.**
    ```bash
    DB_NAME=your_database_name
    DB_USER=your_username_name
    DB_PASSWORD=your_password_name
    DB_HOST=your_host_name
    DB_PORT=DB_PORT
5. **Run the server**:
   ```bash
   cd server
   npm run dev
6. **Run the frontend**:
   ```bash
   cd ../frontend
   npm run dev
   
## 🖥️ Usage

- Navigate to [http://localhost:3000](http://localhost:3000) to interact with the application.
- Use the frontend to create, update, and delete TODO items.
- The server processes requests and interacts with the PostgreSQL database.

---

## 🔧 Code Generation

The project includes an OpenAPI specification in the `openAPI` directory. This specification can be used to generate TypeScript client code, providing type-safe API interactions. The code generation approach helps avoid boilerplate code and maintains consistency across API definitions.

---

## 🆚 Comparison of Approaches

### ✅ With Code Generation
- **Advantages**: Faster development, reduces manual errors, and provides type safety.
- **Disadvantages**: Relies on correct OpenAPI specs and tooling.

### ❌ Without Code Generation
- **Advantages**: Greater flexibility, fewer dependencies.
- **Disadvantages**: Requires more manual work to ensure type safety and consistency.

---

## 🤝 Contributing

Feel free to open issues or submit pull requests to improve the project.

---
