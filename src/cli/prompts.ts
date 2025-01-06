import inquirer from "inquirer";

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
            type: "input",
            name: "departmentId",
            message: "Enter the department ID for this role:",
            validate: (input: string) => {
                const num = parseInt(input, 10);
                return Number.isInteger(num) && num > 0 ? true : "Department ID must be a positive integer.";
            },
            filter: (input: string) => parseInt(input, 10),
        },
    ];
    const { title, salary, departmentId } = await inquirer.prompt(questions);
    return { title: title.trim(), salary, departmentId };
};

// Prompt for employee details
export const promptForEmployeeDetails = async (): Promise<{ firstName: string; lastName: string; roleId: number; managerId: number | null }> => {
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
            type: "input",
            name: "roleId",
            message: "Enter the role ID for the employee:",
            validate: (input: string) => {
                const num = parseInt(input, 10);
                return Number.isInteger(num) && num > 0 ? true : "Role ID must be a positive integer.";
            },
            filter: (input: string) => parseInt(input, 10),
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter the manager ID for the employee (or leave blank for none):",
            default: null,
            validate: (input: string) => {
                if (input.trim() === "") return true;
                const num = parseInt(input, 10);
                return Number.isInteger(num) && num >= 0 ? true : "Manager ID must be a non-negative integer or left blank.";
            },
            filter: (input: string) => (input.trim() === "" ? null : parseInt(input, 10)),
        },
    ];
    const { firstName, lastName, roleId, managerId } = await inquirer.prompt(questions);
    return {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        roleId,
        managerId,
    };
};

// Prompt for updating employee role
export const promptForEmployeeRoleUpdate = async (): Promise<{ employeeId: number; newRoleId: number }> => {
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
            type: "input",
            name: "newRoleId",
            message: "Enter the new role ID for the employee:",
            validate: (input: string) => {
                const num = parseInt(input, 10);
                return Number.isInteger(num) && num > 0 ? true : "Role ID must be a positive integer.";
            },
            filter: (input: string) => parseInt(input, 10),
        },
    ];
    const { employeeId, newRoleId } = await inquirer.prompt(questions);
    return { employeeId, newRoleId };
};































// import chalk from 'chalk'; 
// import inquirer from 'inquirer';

// // Prompt for department name
// export const promptForDepartmentName = async (): Promise<string> => {
//     const questions: inquirer.Question[] = [
//         {
//             type: 'input',
//             name: 'deptName',
//             message: 'Enter the department name:',
//             validate: (input: string) =>
//                 input.trim() ? true : chalk.red('Department name cannot be empty.'),
//         },
//     ];
//     const { deptName } = await inquirer.prompt(questions);
//     return deptName.trim();
// };

// // Prompt for role details
// export const promptForRoleDetails = async (): Promise<{ title: string; salary: number; departmentId: number }> => {
//     const questions: inquirer.Question[] = [
//         {
//             type: 'input',
//             name: 'title',
//             message: 'Enter the role title:',
//             validate: (input: string) =>
//                 input.trim() ? true : chalk.red('Role title cannot be empty.'),
//         },
//         {
//             type: 'input',
//             name: 'salary',
//             message: 'Enter the role salary:',
//             validate: (input: string) => {
//                 const num = parseFloat(input);
//                 return num > 0 ? true : chalk.red('Salary must be a positive number.');
//             },
//             filter: (input: string) => parseFloat(input), // Ensures the value is parsed to a number
//         },
//         {
//             type: 'input',
//             name: 'departmentId',
//             message: 'Enter the department ID for this role:',
//             validate: (input: string) => {
//                 const num = parseInt(input, 10);
//                 return Number.isInteger(num) && num > 0
//                     ? true
//                     : chalk.red('Department ID must be a positive integer.');
//             },
//             filter: (input: string) => parseInt(input, 10), // Ensures the value is parsed to a number
//         },
//     ];
//     const { title, salary, departmentId } = await inquirer.prompt(questions);
//     return { title: title.trim(), salary, departmentId };
// };

// // Prompt for employee details
// export const promptForEmployeeDetails = async (): Promise<{ firstName: string; lastName: string; roleId: number; managerId: number | null }> => {
//     const questions: inquirer.Question[] = [
//         {
//             type: 'input',
//             name: 'firstName',
//             message: "Enter the employee's first name:",
//             validate: (input: string) =>
//                 input.trim() ? true : chalk.red('First name cannot be empty.'),
//         },
//         {
//             type: 'input',
//             name: 'lastName',
//             message: "Enter the employee's last name:",
//             validate: (input: string) =>
//                 input.trim() ? true : chalk.red('Last name cannot be empty.'),
//         },
//         {
//             type: 'input',
//             name: 'roleId',
//             message: 'Enter the role ID for the employee:',
//             validate: (input: string) => {
//                 const num = parseInt(input, 10);
//                 return Number.isInteger(num) && num > 0
//                     ? true
//                     : chalk.red('Role ID must be a positive integer.');
//             },
//             filter: (input: string) => parseInt(input, 10),
//         },
//         {
//             type: 'input',
//             name: 'managerId',
//             message: 'Enter the manager ID for the employee (or leave blank for none):',
//             default: null,
//             validate: (input: string) => {
//                 if (input.trim() === '') return true;
//                 const num = parseInt(input, 10);
//                 return Number.isInteger(num) && num >= 0
//                     ? true
//                     : chalk.red('Manager ID must be a non-negative integer or left blank.');
//             },
//             filter: (input: string) => (input.trim() === '' ? null : parseInt(input, 10)),
//         },
//     ];
//     const { firstName, lastName, roleId, managerId } = await inquirer.prompt(questions);
//     return {
//         firstName: firstName.trim(),
//         lastName: lastName.trim(),
//         roleId,
//         managerId,
//     };
// };






// import inquirer from 'inquirer';

// export const promptForDepartmentName = async (): Promise<string> => {
// const { deptName } = await inquirer.prompt({
//     type: 'input',
//     name: 'deptName',
//     message: 'Enter the department name:',
//     validate: (input) => (input ? true : 'Department name cannot be empty'),
// });
// return deptName;
// };