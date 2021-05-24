-- Tính giá trị biểu thức trong từng hàng rồi sau đó mới tổng lại
USE sql_store;
SELECT MAX(unit_price) FROM sql_store.products;

SELECt MAX (quantity_in_stock) "highest", 
MIN (quantity_in_stock) "lowest", 
AVG (unit_price) "average_price"
FROM sql_store.orders;

SELECT order_id, SUM(quantity * unit_price) AS "total_bill" 
FROM sql_store.order_items
WHERE order_id = 2;

-- Khi query có một cột không phải là tổng hợp
SELECT * FROM sql_store.products
WHERE unit_price = MAX(unit_price);

-- Viết câu lệnh truy vấn tính tổng, giá trị lớn nhất, nhỏ nhất, trung bình của quantity * unit_price trong bảng order_items
SELECT 
    quantity,
    unit_price,
    (quantity * unit_price) AS total_price,
    SUM(quantity * unit_price),
    MAX(quantity * unit_price),
    MIN(quantity * unit_price),
    AVG(quantity * unit_price)
FROM
    sql_store.order_items;

-- Viết câu lệnh truy vấn tính tổng, giá trị lớn nhất, nhỏ nhất, trung bình của points trong bảng customers
SELECT points, SUM(points), MAX(points), MIN(points), AVG(points) 
FROM sql_store.customers;

-- Viết câu lệnh truy vấn tính tổng, giá trị lớn nhất, nhỏ nhất, trung bình của amount trong bảng sql_invoicing.payments
SELECT amount, SUM(amount), MAX(amount), MIN(amount), AVG(amount)
FROM sql_invoicing.payments;

-- BAI TAP TONG HOP --
-- Viết câu lệnh truy vấn tính tổng invoice_total, payment_total và expert (invoice_total - payment_total)
-- trong bảng sql_invoicing.invoices, kết quả thể hiện các giá trị cho nửa đầu 2019, nửa cuối 2019,
-- và tổng cả năm 2019 (date_range (invoice_date)
 SELECT * FROM sql_invoicing.invoices;
 
 SELECT 
    'nua_dau_2019' AS 'date_range',
    SUM(invoice_total) AS total_invoice,
    SUM(payment_total) AS total_payment,
    SUM(invoice_total - payment_total) AS expert
FROM
    sql_invoicing.invoices
WHERE
    YEAR(invoice_date) = 2019
        AND MONTH(invoice_date) >= 1
        AND MONTH(invoice_date) <= 6
UNION 
SELECT 
    'nua_cuoi_2019' AS 'date_range',
    SUM(invoice_total) AS total_invoice,
    SUM(payment_total) AS total_payment,
    SUM(invoice_total - payment_total) AS expert
FROM
    sql_invoicing.invoices
WHERE
    YEAR(invoice_date) = 2019
        AND MONTH(invoice_date) >= 7
UNION
SELECT 
    'ca_nam_2019' AS 'date_range',
    SUM(invoice_total) AS total_invoice,
    SUM(payment_total) AS total_payment,
    SUM(invoice_total - payment_total) AS expert
FROM
    sql_invoicing.invoices
WHERE
    YEAR(invoice_date) = 2019;
