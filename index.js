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
    .prompt ([
        {
            type: 'list',
            name: 'employeeMain',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        }
    ]) .then(answers =>{
        if(answers.list === "View All Employees") {
            // call view all employees function 
        }
        else if(answers.list === "Add Employee") {
            // call add employee function 
        }
        else if(answers.list === "Update Employee Role") {
            // call update employee role function 
        }
        else if(answers.list === "View All Roles") {
            // call view all roles function 
        }
        else if(answers.list === "Add Role") {
            // call add role function 
        }
        else if(answers.list === "View All Departments") {
            // call view all departments function 
        }
        else if(answers.list === "Add Department") {
            // call add department function 
        } 
        // else if(answers.list === "Quit") {
        //     connection.end();
        // }
    });
};

// function for each choice.

// each function is going to have inquirer prompt and query





mainFunction();