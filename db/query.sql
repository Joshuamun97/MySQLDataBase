SELECT department.name, roles.id
FROM department
LEFT JOIN roles ON department.name = roles.department_id
ORDER BY department.id;