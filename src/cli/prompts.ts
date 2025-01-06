import inquirer from "inquirer";
import { getDepartmentsForPrompt, getRolesForPrompt, getManagersForPrompt } from "../db/queries";

// Prompt for department name
export const promptForDepartmentName = async (): Promise<string> => {
    const questions: any = [
        {
            type: "input",
            name: "deptName",
            message: "Enter the name of the new department:",
            validate: (input: string) => input.trim() ? true : "Department name cannot be empty.",
        },
    ];
    const { deptName } = await inquirer.prompt(questions);
    return deptName.trim();
};

// Prompt for role details
export const promptForRoleDetails = async (): Promise<{ title: string; salary: number; departmentId: number }> => {
    const departments = await getDepartmentsForPrompt();
    const departmentChoices = departments.map((dept) => ({ name: dept.name, value: dept.id }));

    const questions: any = [
        {
            type: "input",
            name: "title",
            message: "Enter the role title:",
            validate: (input: string) => input.trim() ? true : "Role title cannot be empty.",
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the salary for this role:",
            validate: (input: string) => {
                const num = parseFloat(input);
                return num > 0 ? true : "Salary must be a positive number.";
            },
            filter: (input: string) => parseFloat(input),
        },
        {
            type: "list",
            name: "departmentId",
            message: "Select the department for this role:",
            choices: departmentChoices,
        },
    ];
    const { title, salary, departmentId } = await inquirer.prompt(questions);
    return { title: title.trim(), salary, departmentId };
};

// Prompt for employee details
export const promptForEmployeeDetails = async (): Promise<{ firstName: string; lastName: string; roleId: number; managerId: number | null }> => {
    const roles = await getRolesForPrompt();
    const roleChoices = roles.map((role) => ({ name: role.title, value: role.id }));

    const managers = await getManagersForPrompt();
    const managerChoices = managers.map((manager) => ({
        name: `${manager.firstName} ${manager.lastName}`,
        value: manager.id,
    }));
    managerChoices.unshift({ name: "None", value: -1 }); // Add a 'None' option with -1 as placeholder

    const questions: any = [
        {
            type: "input",
            name: "firstName",
            message: "Enter the employee's first name:",
            validate: (input: string) => input.trim() ? true : "First name cannot be empty.",
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter the employee's last name:",
            validate: (input: string) => input.trim() ? true : "Last name cannot be empty.",
        },
        {
            type: "list",
            name: "roleId",
            message: "Select the role for the employee:",
            choices: roleChoices,
        },
        {
            type: "list",
            name: "managerId",
            message: "Who is the employee's manager?",
            choices: managerChoices,
        },
    ];
    const { firstName, lastName, roleId, managerId } = await inquirer.prompt(questions);
    return {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        roleId,
        managerId: managerId === -1 ? null : managerId, // Handle -1 as null
    };
};

// Prompt for updating employee role
export const promptForEmployeeRoleUpdate = async (): Promise<{ employeeId: number; newRoleId: number }> => {
    const roles = await getRolesForPrompt();
    const roleChoices = roles.map((role) => ({ name: role.title, value: role.id }));

    const questions: any = [
        {
            type: "input",
            name: "employeeId",
            message: "Enter the employee ID:",
            validate: (input: string) => {
                const num = parseInt(input, 10);
                return Number.isInteger(num) && num > 0 ? true : "Employee ID must be a positive integer.";
            },
            filter: (input: string) => parseInt(input, 10),
        },
        {
            type: "list",
            name: "newRoleId",
            message: "Select the new role for the employee:",
            choices: roleChoices,
        },
    ];
    const { employeeId, newRoleId } = await inquirer.prompt(questions);
    return { employeeId, newRoleId };
};