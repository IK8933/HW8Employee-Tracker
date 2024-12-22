DROP DATABASE IF EXISTS EmployeeTracker_db;

CREATE DATABASE EmployeeTracker_db;

\c EmployeeTracker_db;

CREATE TABLE departmentT (
  dept_id SERIAL PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
  FOREIGN KEY (role_id) REFERENCES rolesT (role_id)
  FOREIGN KEY
);

CREATE TABLE rolesT (
    role_id SERIAL PRIMARY KEY,
    title VARCHAR(30), NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    dept_id INTEGER,
    FOREIGN KEY (dept_id) REFERENCES departmentT (dept_id)
    );

    CREATE TABLE employeesT (
        employee_id SERIAL PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INTEGER,
        manager_id INTEGER,
        FOREIGN KEY (role_id) REFERENCES rolesT (role_id),
        FOREIGN KEY (manager_id) REFERENCES employeesT (employee_id) 
        );