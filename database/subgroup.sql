-- SUBGROUP -- 
SELECT * FROM sql_store.products;

SELECT * 
FROM sql_store.customers 
WHERE customer_id NOT IN (
SELECT DISTINCT customer_id
FROM sql_store.orders
);

SELECT product_id, SUM(quantity * unit_price) total
FROM sql_store.order_items
GROUP BY product_id;

SELECT 
    total
FROM
    (SELECT 
        product_id, SUM(quantity * unit_price) total
    FROM
        sql_store.order_items
    GROUP BY product_id) AS demo
WHERE
    total > 100;
    
-- BAI TAP GROUP BY 
-- Viết câu lệnh truy vấn lấy ra các employee có Salary cao hơn mức trung bình
SELECT employee_id, CONCAT(first_name, " ", last_name) AS full_name
FROM sql_hr.employees
WHERE salary > 
(SELECT AVG(salary)
FROM sql_hr.employees);

-- Viết câu lệnh truy vấn lấy ra Office Id, Office Address có tổng Salary lớn nhất
SELECT office_id, SUM(salary) total
FROM sql_hr.employees
JOIN sql_hr.offices USING (office_id)
GROUP BY office_id
ORDER BY office_id DESC
LIMIT 1;

-- HOẶcache index
SELECT office_id, address, MAX(total)
FROM (SELECT office_id, address, SUM(salary) total
FROM sql_hr.employees
JOIN sql_hr.offices USING(office_id)
GROUP BY office_id)
AS demo
GROUP BY office_id;

-- Viết câu lệnh truy vấn lấy ra các Product chưa từng được đặt hàng
SELECT * 
FROM order_item 
NOT IN; 

SELECT * 
FROM sql_store.products
LEFT JOIN sql_store.order_items USING (product_id)
WHERE order_id IS NULL

-- Viết câu lệnh truy vấn lấy ra các client chưa có invoice
-- Viết câu lệnh truy vấn lấy ra thông tin customer đã đặt order = 3


