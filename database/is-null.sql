SELECT * FROM sql_store.orders;

SELECT *, ISNULL (shipper_id)
FROM sql_store.orders;

SELECT *
FROM sql_store.orders
WHERE (shipper_id) IS NULL;

-- SELECT IFNULL(a,b)
-- Nếu a NULL --> b
-- Nếu a != NULL --> a

SELECT IFNULL(NULL,10);

-- SELECT COALESCE (NULL, NULL, 4) -- phiên bản mở rộng của ISNULL

-- BÀI TẬP ---
-- Viết câu lệnh truy vấn lấy ra tất cả order trong bảng orders:
-- Bất kỳ giá trị NULL nào được hiển thị text thay thế là ---
SELECT 
    IFNULL(order_id, '---') AS order_id,
    IFNULL(customer_id, '---') AS customer_id,
    IFNULL(order_date, '---') AS order_date,
    IFNULL(status, '---') AS status,
    IFNULL(comments, '---') AS comments,
    IFNULL(shipped_date, '---') AS shipped_date,
    IFNULL(shipper_id, '---') AS shipper_id
FROM
    sql_store.orders;

-- Viết câu lệnh truy vấn lấy ra tất cả order trong bảng orders:
-- Các order không có comment hiển thị text No comment
SELECT 
    order_id,
    customer_id,
    order_date,
    status,
    IFNULL(comments, 'No comment'),
    shipped_date,
    shipper_id
FROM
    sql_store.orders;
    
