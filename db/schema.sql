DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
id INT NOT NULL,
name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE roles(
id INT NOT NULL,
title VARCHAR(30),
salary DECIMAL(6, 0),
department_id INT,
PRIMARY KEY(id)
FOREIGN KEY(department_id)
REFERENCES department(id)
);

CREATE TABLE employee(
id INT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
PRIMARY KEY(id)
);