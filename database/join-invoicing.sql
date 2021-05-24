USE sql_invoicing;
-- Viết câu lệnh truy vấn lấy ra dữ liệu từ tất cả các bảng trong CSDL sql_invoicing:
-- Kết quả bao gồm: payment_id, client_name, client_address, invoice_number, payment_method và amount
SELECT 
    payment_id,
    c.name,
    c.address,
    i.number,
    payment_method,
    amount
FROM
    clients AS c
        JOIN
    payments AS p ON c.client_id = p.client_id
        JOIN
    invoices AS i ON p.invoice_id = i.invoice_id
        JOIN
    payment_methods AS pm ON pm.payment_method_id = p.payment_method;




