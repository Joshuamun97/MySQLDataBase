const mysql = require('mysql2');
const inquirer = require('inquirer')
const cTable = require('console.table')

inquirer
    .prompt ([
        {
            type: 'list',
            name: 'employeeMain',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        }
    ]);