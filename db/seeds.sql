INSERT INTO department (name)
VALUES
('Human Resources'),
('Engineering'),
('Sales'),
('Marketing'),
('Finance');

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES
('HR Manager', 80000.00, 1),
('Software Engineer', 120000.00, 2),
('Salesperson', 60000.00, 3),
('Marketing Specialist', 65000.00, 4),
('Financial Analyst', 70000.00, 5);

SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, NULL),       -- HR Manager
('Jane', 'Doe', 2, NULL),       -- Software Engineer
('Alice', 'Johnson', 3, 1),    -- Salesperson reporting to John Doe
('Bob', 'Brown', 4, 1),        -- Marketing Specialist reporting to John Doe
('Charlie', 'Davis', 5, 1),    -- Financial Analyst reporting to John Doe
('Emily', 'Clark', 2, 2),      -- Software Engineer reporting to Jane Doe
('Frank', 'Taylor', 3, 2);     -- Salesperson reporting to Jane Doe

SELECT * FROM employee;