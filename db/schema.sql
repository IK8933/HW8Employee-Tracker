DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

\c employeetracker_db;

DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL UNIQUE,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE SET NULL
);














