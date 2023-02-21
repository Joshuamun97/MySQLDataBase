const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Chimpanzee97!",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    mainFunction();
});

function mainFunction() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    { name: 'View All Employees', value: 'View Employees' },
                    { name: 'Add Employee', value: 'Add an Employee' },
                    { name: 'Update Employee Role', value: 'Update Role' },
                    { name: 'View All Roles', value: 'View Roles' },
                    { name: 'Add Role', value: 'Add a Role' },
                    { name: 'View All Departments', value: 'View Departments' },
                    { name: 'Add Department', value: 'Add a Department' },
                    { name: 'Quit', value: 'Goodbye' },
                ],
            }
        ]).then(answers => {
            if (answers.choice === 'View Employees') {
                viewAllEmployees();
                console.log("yurp")
            }
            else if (answers.choice === 'Add an Employee') {
                addEmployee();
            }
            else if (answers.choice === 'Update Role') {
                updateEmployee();
            }
            else if (answers.choice === 'View Roles') {
                viewAllRoles();
            }
            else if (answers.choice === 'Add a Role') {
                addRole();
            }
            else if (answers.choice === 'View Departments') {
                viewAllDepartments();
            }
            else if (answers.choice === 'Add a Department') {
                addDepartment();
            }
            else if (answers.choice === 'Goodbye') {
                console.log('deuces')
                connection.end();
            }
        });
};

function viewAllEmployees() {
    const sql = `SELECT * FROM employee ORDER BY role_id ASC;`;
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        mainFunction();
    });
};

function addEmployee() {
    const sql = `SELECT * FROM roles, employee;`;
    connection.query(sql, (err, res) => {
        if (err) throw err;
        let roles = res.map(role => ({ name: role.title, value: role.id }));
        let employee = res.map(employee => ({ name: employee.manager_id, value: employee.id }));


        inquirer
            .prompt([
                {
                    type: 'prompt',
                    name: 'first_name',
                    message: 'What is the first name of the employee you would like to add?'
                },
                {
                    type: 'prompt',
                    name: 'last_name',
                    message: 'What is the last name of the employee you would like to add?'
                },
                {
                    type: 'list',
                    name: 'role_id',
                    message: 'What is the title of the new employee?',
                    choices: roles
                },
                {
                    type: 'list',
                    name: 'manager_id',
                    message: 'What is the manager of the new employee?',
                    choices: employee
                }
                // Currently not properly loading role. By default it is giving a 1 every time to role ID instead of the actual role id that is tied to that specific role
            ]).then(answers => {
                console.log(answers)
                const sql = `INSERT INTO employee SET ?`;
                connection.query(sql, answers, (err, res) => {
                    if (err) throw err;
                    console.table('\n', res, '\n');
                    mainFunction();
                });

            });
    });
};
// updateEmployee currently giving unknown column error 'employee' in 'field list' when on .then
function updateEmployee() {
    const sql = `SELECT * FROM roles, employee;`;
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        // Do i need a for loop here? Currently repeating each name ten times
        let roles = res.map(role => ({ name: role.title, value: role.role_id }));
        let employee = res.map(employee => ({ name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id }));
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employee',
                    message: 'What employee would you like to update?',
                    choices: employee
                },
                {
                    type: 'list',
                    name: 'roles',
                    message: 'What will this employees new role be?',
                    choices: roles
                }
                // Maybe because its currently not doing anything with the information passed?
            ]).then(answers => {
                console.log(answers)
                const sql = `UPDATE roles SET ?`;
                connection.query(sql, answers, (err, res) => {
                    if (err) throw err;
                    console.table('\n', res, '\n');
                    mainFunction();
                });
            });

    });
};

function viewAllRoles() {
    const sql = `SELECT * FROM roles ORDER BY department_id ASC;`;
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        mainFunction();
    });
};

function addRole() {

};

function viewAllDepartments() {
    const sql = `SELECT * FROM department ORDER BY id ASC;`;
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        mainFunction();
    });
};

function addDepartment() {

};

// each function is going to have inquirer prompt and query

// db.findall()



// mainFunction();