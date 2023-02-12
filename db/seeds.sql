INSERT INTO department (id, name)
VALUES  (1, "Electrical"),
        (2, "Special Systems"),
        (3, "ITS");

INSERT INTO roles (id, title, salary, department_id)
VALUES  (1, "Electrical Foreman", 90000, 1),
        (2, "Apprentice", 45000, 1),
        (3, "Journeyman", 85000, 1),
        (4, "Low Voltage Foreman", 78000, 2),
        (5, "Low Voltage Technician", 50000, 2),
        (6, "Low Voltage Senior Technician", 75000, 2),
        (7, "Low Voltage Fiber Technician", 77000, 2),
        (8, "ITS Foreman", 78000, 3),
        (9, "Heavy Machinery Operator", 77000, 3),
        (10, "ITS Technician", 60000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "John", "Doe", 1, 1),
        (2, "Jane", "Doe", 2, 1),
        (3, "Tom", "Green", 3, 1),
        (4, "Gerald", "Brown", 4, 2),
        (5, "Tiffany", "Smith", 5, 2),
        (6, "Alice", "Mace", 6, 2),
        (7, "David", "Brightwell", 7, 2),
        (8, "Tim", "Schmear", 8, 3),
        (9, "April", "Long", 9, 3),
        (10, "Jacob", "Hemphill", 10, 3);


