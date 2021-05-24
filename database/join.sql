SELECT *, c.customer_id
FROM sql_store.customers AS c
JOIN orders AS o ON c.customer_id = o.customer_id;

-- BÀI TẬP--
-- 1. Viết câu lệnh truy vấn lấy dữ liệu từ 2 bảng orders và shippers:
-- Kết quả bao gồm: order_id, shipped_date và shipper_name
SELECT *
FROM sql_store.orders 
JOIN sql_store.shippers
USING (shipper_id);

-- 2. Viết câu lệnh truy vấn lấy dữ liệu từ 2 bảng order_items và products:
-- Kết quả bao gồm: order_id, product_name, quantity, unit_price
-- Chỉ lấy ra các records có quantity lớn hơn 5
SELECT 
    o.order_id, name, p.name, o.quantity, p.unit_price
FROM
    sql_store.order_items AS o
        JOIN
    sql_store.products AS p USING (product_id)
WHERE
    quantity_in_stock > 5;

-- Viết câu lệnh truy vấn lấy dữ liệu từ 2 bảng orders và customers:
-- Kết quả bao gồm: order_id, full_name (first_name + last_name), status
SELECT 
    o.order_id AS order_id,
    CONCAT(c.first_name, ' ', c.last_name) AS full_name,
    p.name AS product_name,
    oi.quantity, 
    oi.unit_price
FROM
    sql_store.orders AS o
        JOIN
    sql_store.customers AS c USING (customer_id)
        JOIN
    sql_store.products AS p USING (product_id)
        JOIN
    sql_store.order_items AS oi USING (order_id)
WHERE
    o.order_id = 2;

-- Mệnh đề nối --     
    SELECT 
    o.order_id AS order_id,
    CONCAT(c.first_name, ' ', c.last_name) AS full_name,
    p.name AS product_name,
    oi.quantity, 
    oi.unit_price
FROM
    sql_store.orders AS o
        JOIN
    sql_store.customers AS c USING (customer_id)
        JOIN
    sql_store.products AS p USING (product_id)
        JOIN
    sql_store.order_items AS oi USING (order_id)
WHERE
    o.order_id = 2;

-- Viết câu lệnh truy vấn lấy ra dữ liệu từ 3 bảng orders, order_items và products:
-- Kết quả bao gồm: order_id, status, total_price (quantity * unit_price) và product_name
-- Sắp xếp tập kết quả theo order_id 
SELECT order_id, status, (quantity * unit_price) AS total_price, product_name
