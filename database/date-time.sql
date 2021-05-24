SELECT * FROM sql_store.customers;

SELECT customer_id, CONCAT(first_name, " ", last_name) AS full_name, birth_date, phone, address, city, state, points
FROM sql_store.customers;

-- THời gian: định dạng là "YYYY-MM-DD HH:MM:SS"
-- NOW() trả về cả date & time

SELECT NOW();

SELECT CURDATE(); -- Lấy ngày
SELECT CURTIME(); -- lấy thời gian 

SELECT YEAR ("2021-05-20");
SELECT MONTH ("2021-05-20");
SELECT DAY ("2021-05-20");

SELECT HOUR ("14:26:22");
SELECT MINUTE ("14:26:22");
SELECT SECOND ("14:26:22");

-- Lấy riêng 1 phần trong ngày tháng năm
SELECT EXTRACT(YEAR_MONTH FROM "2021-05-20 14:27:50");
SELECT LEFT(EXTRACT(YEAR_MONTH FROM "2021-05-20 14:27:50"), 2);

-- Ngày chênh lệch
SELECT DATEDIFF("2021-05-20 14:34:20", "1992-05-24 10:30:00");
SELECT TIMEDIFF("2021-05-20 14:34:20", "1992-05-24 10:30:00");

-- Format lại 
SELECT date_format("2021-05-20 14:34:20", "%d %M, %Y");

SELECT * 
FROM sql_store.customers
WHERE YEAR(birth_date) = 1991 AND MONTH(birth_date) = 9;