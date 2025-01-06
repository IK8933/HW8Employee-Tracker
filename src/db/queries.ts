import { pool } from './index';
import { Department, Role, Employee } from '../types/index';

// View all departments
export const viewDepartments = async (): Promise<void> => {
    try {
        const result = await pool.query<Department>('SELECT * FROM department ORDER BY id');
        console.table(result.rows);
    } catch (err) {
        console.error('Error viewing departments:', err);
    }
};

export const viewRoles = async (): Promise<void> => {
    try {
        const result = await pool.query(
            `SELECT 
                role.id AS "Role ID",
                role.title AS "Title",
                role.salary AS "Salary",
                department.name AS "Department"
            FROM role
            JOIN department ON role.department_id = department.id
            ORDER BY role.id`
        );
        console.table(result.rows);
    } catch (err) {
        console.error('Error viewing roles:', err);
    }
};

export const viewEmployees = async (): Promise<void> => {
    try {
        const result = await pool.query(
            `SELECT 
                e.id AS "Employee ID",
                e.first_name AS "First Name",
                e.last_name AS "Last Name",
                role.title AS "Role",
                department.name AS "Department",
                role.salary AS "Salary",
                COALESCE(m.first_name || ' ' || m.last_name, 'None') AS "Manager"
            FROM employee e
            JOIN role ON e.role_id = role.id
            JOIN department ON role.department_id = department.id
            LEFT JOIN employee m ON e.manager_id = m.id
            ORDER BY e.id`
        );
        console.table(result.rows);
    } catch (err) {
        console.error('Error viewing employees:', err);
    }
};

export const addDepartment = async (name: string): Promise<void> => {
    try {
        await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
        console.log(`Department "${name}" added successfully.`);
    } catch (err) {
        console.error('Error adding department:', err);
    }
};

export const addRole = async (title: string, salary: number, departmentId: number): Promise<void> => {
    try {
        await pool.query(
            'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
            [title, salary, departmentId]
        );
        console.log(`Role "${title}" added successfully.`);
    } catch (err) {
        console.error('Error adding role:', err);
    }
};

export const addEmployee = async (firstName: string, lastName: string, roleId: number, managerId: number | null): Promise<void> => {
    try {
        await pool.query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
            [firstName, lastName, roleId, managerId]
        );
        console.log(`Employee "${firstName} ${lastName}" added successfully.`);
    } catch (err) {
        console.error('Error adding employee:', err);
    }
};

export const updateEmployeeRole = async (employeeId: number, newRoleId: number): Promise<void> => {
    try {
        await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
        console.log(`Employee ID ${employeeId} updated to role ID ${newRoleId}.`);
    } catch (err) {
        console.error('Error updating employee role:', err);
    }
};

// Get departments for prompt
export const getDepartmentsForPrompt = async (): Promise<{ name: string; id: number }[]> => {
    try {
        const result = await pool.query('SELECT id, name FROM department ORDER BY id');
        return result.rows; // Returns an array of objects like [{ id: 1, name: 'Engineering' }]
    } catch (err) {
        console.error('Error retrieving departments:', err);
        return [];
    }
};

// Get roles for prompt
export const getRolesForPrompt = async (): Promise<{ title: string; id: number }[]> => {
    try {
        const result = await pool.query('SELECT id, title FROM role ORDER BY id');
        return result.rows;
    } catch (err) {
        console.error('Error retrieving roles:', err);
        return [];
    }
};

// Get managers for prompt
export const getManagersForPrompt = async (): Promise<{ id: number; firstName: string; lastName: string }[]> => {
    try {
        const result = await pool.query(
            `SELECT id, first_name AS "firstName", last_name AS "lastName" FROM employee ORDER BY id`
        );
        return result.rows; // Returns an array of objects like [{ id: 1, firstName: 'John', lastName: 'Doe' }]
    } catch (err) {
        console.error('Error retrieving managers:', err);
        return [];
    }
};