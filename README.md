# Employee Tracker

## Description

The **Employee Tracker** is a command-line application that helps business owners manage their company's employee database. By using Node.js, Inquirer, and PostgreSQL, the application provides an intuitive interface to view, add, and update information about departments, roles, and employees. This tool is a comprehensive Content Management System (CMS) designed to streamline workforce data organization and management.

---

## Features

### Core Functionalities

- **View Departments**: Displays all departments with their respective IDs.
- **View Roles**: Lists all roles, including title, salary, and the department they belong to.
- **View Employees**: Shows detailed employee information, including ID, name, job title, department, salary, and manager.
- **Add Department**: Enables users to create a new department.
- **Add Role**: Allows users to add a new role with a specified title, salary, and department.
- **Add Employee**: Prompts the user to input an employee's details, including their role and manager.
- **Update Employee Role**: Updates an employee's role based on user input.

### Advanced

- Manager selection dynamically lists current employees as options.
- Input validation ensures data consistency.
## Walkthrough Video

You can watch the walkthrough video [here](https://app.screencastify.com/v2/manage/videos/4IOhch17wnMNpkucJAhp). 
---

## Installation

### Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- A package manager such as `npm` or `yarn`.

### Steps

**Clone the repository:**

```bash
git clone https://github.com/your-repo/employee-tracker.git
cd employee-tracker
```

**Install dependencies:**

```bash
npm install
```

**Set up the database:**

Access PostgreSQL and create the database using `schema.sql`:

```sql
Connect to PostgreSQL
psql -U your_username
 Run the schema
\i db/schema.sql
```

Populate the database with sample data:

```bash
tsc && node dist/seed/seedDatabase.js
```

**Configure the `.env` file with your PostgreSQL credentials:**

```plaintext
DB_NAME=employeetracker_db
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
```

---

## Usage

1. Start the application:

   ```bash
   npm run start
   ```

2. Follow the on-screen prompts to:
   - View data
   - Add new entries
   - Update employee roles

---

## File Structure

```
HW8Employee-Tracker/
├── Assets/                        # Supporting documentation
├── db/                            # SQL files for schema and seed data
├── dist/                          # Compiled JavaScript files
├── src/                           # Source files (TypeScript)
│   ├── db/                        # Database logic
│   ├── seed/                      # Database seeding
│   ├── cli/                       # CLI logic
│   ├── types/                     # TypeScript interfaces
├── .env                           # Environment variables
├── README.md                      # Project documentation
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
```

---

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Inquirer.js**: Command-line interface for user prompts.
- **PostgreSQL**: Relational database management system.
- **TypeScript**: Strongly typed JavaScript for improved development.
- **Chalk**: Styling terminal strings for better user experience.

---

## Future Enhancements

- Add functionality to view employees by manager.
- Include the ability to delete departments, roles, and employees.
- Implement a feature to calculate the total budget of each department.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

## Contribution

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## Contact

- **Author**: Ian Kessack
- **Email**: [your-email@example.com](mailto:iankessack1989@gmail.com)
- **GitHub**: [your-github-profile](https://github.com/ik8991)

---



