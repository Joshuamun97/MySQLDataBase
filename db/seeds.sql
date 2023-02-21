INSERT INTO department (name)
VALUES  ("Electrical"),
        ("Special Systems"),
        ("ITS");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Electrical Foreman", 90000, 1),
        ("Apprentice", 45000, 1),
        ("Journeyman", 85000, 1),
        ("Low Voltage Foreman", 78000, 2),
        ("Low Voltage Technician", 50000, 2),
        ("Low Voltage Senior Technician", 75000, 2),
        ("Low Voltage Fiber Technician", 77000, 2),
        ("ITS Foreman", 78000, 3),
        ("Heavy Machinery Operator", 77000, 3),
        ("ITS Technician", 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 1, 1),
        ("Jane", "Doe", 2, 1),
        ("Tom", "Green", 3, 1),
        ("Gerald", "Brown", 4, 2),
        ("Tiffany", "Smith", 5, 2),
        ("Alice", "Mace", 6, 2),
        ("David", "Brightwell", 7, 2),
        ("Tim", "Schmear", 8, 3),
        ("April", "Long", 9, 3),
        ("Jacob", "Hemphill", 10, 3);


