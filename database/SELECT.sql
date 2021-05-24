USE sql_store;

SELECT 
    product_id, name, quantity_in_stock, unit_price
FROM
    products;

SELECT * //Khong ne du
FROM orders;

SELECT 1 + 2 + 3 + 4 AS 'Total Value';

SELECT 
    name, product_id AS pid
FROM
    products;

-- Tinh toan gia tri bieu thuc khong can FROM   
SELECT 1 + 2;
SELECT 10 % 4;
SELECT 1 / 2;
SELECT 10 - 1;

-- Bai tap
-- Viết câu lệnh truy vấn lấy ra tất cả product trong bảng products:
-- Tập kết quả gồm các cột name, unit_price, và new_price
SELECT 
    product_id, name, unit_price, unit_price * 1.10 AS new_price
FROM
    products lấy ra tất cả customer trong bảng customers:
SELECT first_name, last_name, address, phone;
FROM customers;
-- Tập kết quả gồm các cột first_name, last_name, phone, address và points
-- Viết câu lệnh truy vấn lấy ra tất cả product trong bảng products:
SELECT 
    order_id AS OrderId,
    product_id AS ProductId,
    quantity * unit_price AS Inventory
FROM
    order_items;
-- Tập kết quả gồm các cột: Id (product_id), Name (name), và Inventory (quantity_in_stock * unit_price)
-- Viết câu lệnh truy vấn lấy ra tất cả order trong bảng order_items:
-- Tập kết quả gồm các cột: OrderId (order_id), ProductId (product_id), và Inventory (quantity * unit_price)
--  