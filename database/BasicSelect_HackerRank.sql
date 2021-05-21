-- 1. Select All
SELECT * 
FROM city;

-- 2. Select By ID
SELECT *
FROM CITY
WHERE ID = "1661"

-- 3. Japanese Cities' Attributes
SELECT * 
FROM city
WHERE countrycode = "JPN"

-- 4. Japanese Cities' Names
SELECT name 
FROM city
WHERE countrycode = "JPN"

-- 5. Weather Observation Station 1
SELECT city, state
FROM station;

-- 6. Weather Observation Station 3
SELECT DISTINCT (city) 
FROM station 
WHERE (ID % 2) = 0;

-- 7. Weather Observation Station 4
SELECT (COUNT(city) - COUNT(DISTINCT city))
FROM station;

-- 8. Weather Observation Station 5
SELECT city, length(city)
FROM station 
ORDER BY length(city) ASC, city ASC
LIMIT 1; 

SELECT city, length(city)
FROM station 
ORDER BY length(city) DESC
LIMIT 1;

-- 9. Weather Observation Station 6
SELECT DISTINCT city
FROM station
WHERE city REGEXP '^[a,e,i,o,u]';

-- 10. Weather Observation Station 7 
SELECT DISTINCT city
FROM station 
WHERE city REGEXP '[a,e,i,o,u]$';

-- 11. Weather Observation Station 8
SELECT DISTINCT city
FROM station 
WHERE city REGEXP '^[a,e,i,o,u]' AND city REGEXP '[a,e,i,o,u]$';

-- 12. Weather Observation Station 9
SELECT DISTINCT city
FROM station 
WHERE city NOT REGEXP '^[a,e,i,o,u]';

-- 13. Weather Observation Station 10
SELECT DISTINCT city
FROM station 
WHERE city NOT REGEXP '[a,e,i,o,u]$';

-- 14. Weather Observation Station 11
SELECT DISTINCT city
FROM station 
WHERE city NOT REGEXP '^[a,e,i,o,u]' OR city NOT REGEXP '[a,e,i,o,u]$';

-- 15. Weather Observation Station 12
SELECT DISTINCT city 
FROM station 
WHERE city NOT REGEXP '^[a,e,i,o,u]' AND city NOT REGEXP '[a,e,i,o,u]$';

-- 16. Higher Than 75 Marks
SELECT name
FROM students 
WHERE marks > 75
ORDER BY SUBSTRING(name, (-3)), ID ASC;

-- 17. Employee Names
SELECT name
FROM employee
ORDER BY name ASC;

-- 18. Employee Salaries
SELECT name 
FROM employee 
WHERE salary > 2000 AND months < 10
ORDER BY employee_id ASC;

-- EXTRA 1: Revising Select Query I
SELECT * 
FROM city
WHERE countrycode = "USA" AND population > 100000;

-- EXTRA 2: Revising Select Query II
SELECT name 
FROM city 
WHERE countrycode = "USA" AND population > 120000;

