import inquirer from "inquirer";
import {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} from "../db/queries";
import {
  promptForDepartmentName,
  promptForRoleDetails,
  promptForEmployeeDetails,
  promptForEmployeeRoleUpdate,
} from "./prompts";

export const mainMenu = async (): Promise<void> => {
  try {
    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ]);

    switch (choice) {
      case "View all departments":
        await viewDepartments();
        break;
      case "View all roles":
        await viewRoles();
        break;
      case "View all employees":
        await viewEmployees();
        break;
      case "Add a department":
        const deptName = await promptForDepartmentName();
        await addDepartment(deptName);
        break;
      case "Add a role":
        const roleDetails = await promptForRoleDetails();
        await addRole(roleDetails.title, roleDetails.salary, roleDetails.departmentId);
        break;
      case "Add an employee":
        const employeeDetails = await promptForEmployeeDetails();
        await addEmployee(
          employeeDetails.firstName,
          employeeDetails.lastName,
          employeeDetails.roleId,
          employeeDetails.managerId
        );
        break;
      case "Update an employee role":
        const roleUpdateDetails = await promptForEmployeeRoleUpdate();
        await updateEmployeeRole(roleUpdateDetails.employeeId, roleUpdateDetails.newRoleId);
        break;
      case "Exit":
        console.log("Goodbye!");
        process.exit(0);
    }

    await mainMenu(); // Repeat menu
  } catch (error) {
    console.error("An error occurred in the main menu:", error);
  }
};



























// import inquirer from "inquirer";
// import { viewDepartments } from "../db/queries";

// import {
//   viewRoles,
//   viewEmployees,
//   addDepartment,
//   addRole,
//   addEmployee,
//   updateEmployeeRole,
// } from "../db/queries";

// export const mainMenu = async (): Promise<void> => {
//   const { choice } = await inquirer.prompt([
//     {
//       type: "list",
//       name: "choice",
//       message: "What would you like to do?",
//       choices: [
//         "View all departments",
//         "View all roles",
//         "View all employees",
//         "Add a department",
//         "Add a role",
//         "Add an employee",
//         "Update an employee role",
//         "Exit",
//       ],
//     },
//   ]);

//   switch (choice) {
//     case "View all departments":
//       await viewDepartments();
//       break;
//     case "View all roles":
//       await viewRoles();
//       break;
//     case "View all employees":
//       await viewEmployees();
//       break;
//     case "Add a department":
//       await addDepartment();
//       break;
//     case "Add a role":
//       await addRole();
//       break;
//     case "Add an employee":
//       await addEmployee();
//       break;
//     case "Update an employee role":
//       await updateEmployeeRole();
//       break;
//     case "Exit":
//       process.exit(0);
//   }

//   await mainMenu(); // Repeat menu
// };
