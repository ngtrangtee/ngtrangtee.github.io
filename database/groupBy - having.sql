SELECT 
    *
FROM
    sql_store.order_items;

-- GROUP BY: 
	SELECT 
    order_id, SUM(quantity * unit_price) total
FROM
    sql_store.order_items
GROUP BY order_id;

	-- Tinh theo san pham
SELECT 
    product_id, SUM(quantity * unit_price) total
FROM
    sql_store.order_items
GROUP BY product_id;

-- Tất cả các cột phà 0 phải là hàm tổng hợp thì phải xuất hiện trong GROUP BY! 
-- Thứ tự cũng quan trọng --> nhóm theo cái nào trước, ở trước

SELECT 
    oi.order_id,
    CONCAT(c.first_name, ' ', c.last_name) full_name,
    o.status,
    SUM(oi.quantity * oi.unit_price) total
FROM
    order_items AS oi
        JOIN
    orders AS o ON o.order_id = oi.order_id
        JOIN
    customers AS c ON o.customer_id = c.customer_id
GROUP BY oi.order_idName, Status Name, Shipper Name của các order có status là 2, nhóm và sắp xếp kết quả theo order_id
SELECT o.order_id, CONCAT(c.first_name, ' ', c.last_name) full_name, o.status, s.name
FROM sql_store.orders AS o 
JOIN customers AS c USING (customer_id)
JOIN shippers AS s USING (shipper_id)
WHERE o.status = 2
GROUP BY o.order_id;

-- Viết câu lệnh truy vấn lấy ra Client Id, Name, và tổng Total (invoice_total), nhóm và sắp xếp kết quả theo client_id
SELECT c.client_id, c.name, SUM(i.invoice_total) AS total
FROM sql_invoicing.clients AS c
JOIN sql_invoicing.invoices AS i USING (client_id)
GROUP BY c.client_id;

-- Viết câu lệnh tính tổng số employee của mỗi office theo office_id, sắp xếp theo office_id
SELECT office_id, COUNT(employee_id)
FROM sql_hr.employees
GROUP BY office_id;

-- Viết câu lệnh truy vấn lấy ra payment method name, tổng amount nhóm theo payment method name
SELECT payment_method, SUM(amount)
FROM sql_invoicing.payments
GROUP BY payment_method;

-- Viết câu lệnh truy vấn lấy ra Date, Method(payment method name), và Total (amount) nhóm theo date và payment method name, sắp xếp theo date tăng dần và total amount giảm dần
select p.date, pm.name, sum(p.amount) total
from sql_invoicing.payment_methods as pm 
join sql_invoicing.payments as p on pm.payment_method_id = p.payment_method
group by p.date, pm.name
order by date ASC, total DESC;

-- HAVING: Lọc dữ liệu dựa trên giá trị hàm tổng hợp

-- Btap HAVING
-- 1. Viết câu lệnh truy vấn lấy ra Order Id, Customer Full Name, Status Name, Total (quantity * unit_price) nhóm kết quả theo order_id, và Total lớn hơn 50
select oi.order_id, concat(c.first_name, ' ', c.last_name) full_name, o.status, sum(oi.quantity * oi.unit_price) total
from sql_store.order_items as oi 
join sql_store.orders as o on o.order_id = oi.order_id
join sql_store.customers as c on o.customer_id = c.customer_id
join sql_store.shippers as s on s.shipper_id = o.shipper_id
group by order_id
having total > 50;

-- 2. Viết câu lệnh truy vấn lấy ra Product Name, Total (quantity_in_stock * unit_price) với Total lớn hơn 200
SELECT name, SUM(quantity_in_stock * unit_price) AS total
FROM sql_store.products
GROUP BY name
HAVING total > 200;

-- Viết câu lệnh truy vấn lấy ra Client Id, Total (invoice_total), và tổng số records được nhóm theo client_id, có tổng invoice_total lớn hơn 500 và tổng số records lớn hơn 5
SELECT c.client_id, SUM(i.invoice_total) as total_invoices, COUNT(i.client_id) AS total_records
FROM sql_invoicing.clients AS c
JOIN sql_invoicing.invoices AS i USING (client_id)
GROUP BY client_id
HAVING total_invoices > 500 AND total_records > 5;

-- Viết câu lệnh truy vấn lấy thông tin customers có tổng thanh toán > 100
SELECT *, SUM(amount) total_amount
FROM sql_invoicing.payments
GROUP BY client_id
HAVING total_amount > 100;