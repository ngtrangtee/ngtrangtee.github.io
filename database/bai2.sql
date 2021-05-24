SELECT * FROM sql_store.products;

SELECT product_id, name, unit_price
FROM sql_store.products; -- Lấy ra toàn bộ

SELECT product_id, name, unit_price
FROM sql_store.products
-- Lấy giá trị lớn hơn $4, dùng WHERE để lọc dữ liệu
WHERE unit_price > 4; -- seach_condition = > < >= <= ( != <> -- khác)

SELECT * FROM sql_store.customers;

SELECT *
FROM sql_store.customers
WHERE birth_date > "1990-01-01";

SELECT * 
FROM sql_store.customers
WHERE first_name = "elka";

-- BÀI TẬP LUYỆN TẬP
-- Viết câu lệnh truy vấn lấy ra tất cả order trong bảng orders:
SELECT * FROM sql_store.orders;
-- Chỉ lấy các order có order_date trước năm nay
-- Tập kết quả gồm các cột order_id, customer_id và status
SELECT order_id, customer_id, status
FROM sql_store.orders
WHERE order_date < "2021-01-01";

-- Viết câu lệnh truy vấn lấy ra tất cả product trong bảng products:
-- Chỉ lấy các product có quantity_in_stock < 20
-- Tập kết quả gồm các cột name, quantity_in_stock và unit_price
SELECT name, quantity_in_stock, unit_price
FROM sql_store.products
WHERE quantity_in_stock < 20;

-- Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers, yêu cầu:
-- Chỉ lấy ra customer có points > 2000
-- Tập kết quả gồm các cột: customer_id, first_name, last_name và points
SELECT customer_id, first_name, last_name, points
FROM sql_store.customers
WHERE points > 2000;

-- LOGICAL OPERATORS: OR ||, AND &&, NOT ! -- Để kết hợp nhiều condition trong mệnh đề WHERE
	-- !Condition (Nếu true > False, False > true)
-- var x = 1
-- OR : Tìm & trả về gía trị (khi mà chuyển về kiểu Boolean) True đầu tiên nó thấy
-- MỆNH ĐỀ AND
SELECT *
FROM sql_store.customers
WHERE birth_date >= "1990-01-01" AND points > 500;
-- MỆNH ĐỀ OR
SELECT * 
FROM sql_store.customers
WHERE first_name = "Barbara" OR last_name = "";

SELECT * FROM sql_store.orders
WHERE NOT (status = 1); 

-- Select 1000 < points < 2000 or not points < 1000 || points > 2000
SELECT *
FROM sql_store.customers
WHERE NOT (points < 1000 AND points > 2000);

-- BÀI TẬP
-- 1. Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers:
-- Các customer có birth_date > 1990 hoặc có points >2000 AND state = VA
SELECT * FROM sql_store.customers
WHERE birth_date > "1990-01-01" OR (points > 2000 AND state = "VA");

-- Viết câu lệnh truy vấn lấy ra tất cả order item trong bảng order_items:
-- order_id = 2 và total_price (quantity * unit_price) > 10
SELECT 
    order_id,
    product_id,
    quantity,
    unit_price,
    (quantity * unit_price) AS total_price
FROM
    sql_store.order_items
WHERE
    order_id = 2
        AND quantity * unit_price > 10;
        
-- IN: Kiểm tra xem x có nằm trong tập không; cú pháp rút gọn của OR
SELECT * 
FROM sql_store.customers
WHERE state = "VA" OR state = "GA" OR state = "FL";

SELECT * 
FROM sql_store.customers
WHERE state IN ("VA", "GA", "FL");

-- BETWEEN
SELECT * 
FROM sql_store.customers
WHERE 1000 <= points AND points <= 2000;

SELECT *
FROM sql_store.customers 
WHERE points BETWEEN 1000 AND 2000;

-- BÀI TẬP LUYỆN TẬP --
-- 1. Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers
-- state không phải TX hoặc TN hoặc VA hoặc CA hoặc MA hoặc GA
SELECT * FROM sql_store.customers
WHERE NOT state IN ("TX", "VA", "CA", "MA", "GA"); -- STATE NOT IN CŨNG ĐƯỢC

-- 2. Viết câu lệnh truy vấn lấy ra tất cả product trong bảng products:
-- quantity_in_stock bằng 49, 38, hoặc 72
SELECT * FROM sql_store.products
WHERE quantity_in_stock IN (49, 38, 72);

-- 3. Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers:
-- Customer có birth_date trong khoảng 1990 - 2000
SELECT * FROM sql_store.customers
WHERE birth_date BETWEEN "1990-01-01" AND "2000-01-01";

-- 4. Viết câu lệnh truy vấn lấy ra tất cả sản phẩm trong bảng products:
-- Product có total_price (quantity_in_stock * unit_price) trong khoảng 200 - 400
SELECT *, quantity_in_stock * unit_price AS total_price
FROM sql_store.products
WHERE (quantity_in_stock * unit_price) BETWEEN 200 AND 400;

-- LIKE --
-- % đại diện cho số lượng kí tự bất kì
	-- %b -> ab, bb, b, uksjfksjb, aa
-- _ đại điện cho 1 (CHÍNH XACD) kí tự
	-- _a -> ba, ca, aa, da

SELECT * 
FROM sql_store.customers
WHERE first_name LIKE "%a";

SELECT * 
FROM sql_store.customers
WHERE last_name LIKE "%a%";

-- Bài tập luyện tập -- 
-- 1. Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers:
-- address chứa từ TRAIL hoặc AVENUE
SELECT *
FROM sql_store.customers
WHERE address LIKE "%trail%" OR  address LIKE "%avenue%";

-- 2. Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers:
-- phone kết thúc với số 9
SELECT * 
FROM sql_store.customers
WHERE phone LIKE "%9";

-- 3. Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers:
-- first_name và last_name bắt đầu bằng ký tự R
SELECT * 
FROM sql_store.customers
WHERE first_name LIKE "R%" AND last_name LIKE "R%";

-- 4. Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers:
-- first_name có độ dài 4 ký tự
SELECT *
FROM sql_store.customers
WHERE first_name LIKE "____";

-- 5. Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers:
-- first_name có chứa ký tự B, nhưng không bắt đầu bằng B
SELECT *
FROM sql_store.customers
WHERE first_name LIKE '%b%' AND first_name NOT LIKE 'b%';

-- NULL--
SELECT * 
FROM sql_store.orders
WHERE shipped_date IS NOT NULL;

-- ORDER BY--
	-- tăng dần
SELECT * 
FROM sql_store.orders
WHERE shipped_date IS NULL
ORDER BY order_date;
	-- giảm dần
SELECT * 
FROM sql_store.orders
WHERE shipped_date IS NULL
ORDER BY order_date DESC;

SELECT * 
FROM sql_store.order_items
ORDER BY order_id DESC, unit_price ASC;

-- BÀI TẬP ORDER BY --
-- 1. Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers:
-- Sắp xếp theo points tăng dần
SELECT *
FROM sql_store.customers
ORDER BY points ASC;

-- 2. Viết câu lệnh truy vấn lấy ra tất cả order item trong bảng order_items:
-- order_id bằng 2
-- Sắp xếp theo total_price (quantity * unit price) giảm dần
SELECT 
    *, quantity * unit_price AS total_price
FROM
    sql_store.order_items
ORDER BY total_price DESC; -- vì ORDERBY xuất hiện sau SELECT

-- 3. Viết câu lệnh truy vấn lấy ra tất cả product trong bảng products:
-- Sắp xếp theo quantity_in_stock giảm dần
SELECT * 
FROM sql_store.products
ORDER BY quantity_in_stock DESC;

-- Viết câu lệnh truy vấn lấy ra tất cả product trong bảng products:
-- Sắp xếp theo total (quantity_in_stock * unit_price) tăng dần
SELECT *, quantity_in_stock * unit_price AS total
FROM sql_store.products
ORDER BY quantity_in_stock * unit_price ASC;

-- LIMIT ---
-- 1 trang có 3 sản phẩm, 10 sản phầm -> 4 trang
-- [1], [2], [3], [4]
-- trang 1
SELECT * 
FROM sql_store.products
LIMIT 3, 3; -- offset, count --> mặc định là count, offset = 0; bỏ qua 3 thằng, lấy 3 thằng tiếp theo
	-- offset = (page - 1) * productPerPage => (1-1) * 3 [trang 1]
	-- offset = (2-1)*3 = 3 [trang 2]
    -- offset = (3-1)*3 = 6 [trang 3]
    
-- Viết câu lệnh truy vấn lấy ra 3 customer trong bảng customers:
-- Ba customer có points cao nhất
SELECT * 
FROM sql_store.customers
ORDER BY points DESC
LIMIT 3;

-- 2. Viết câu lệnh truy vấn lấy ra 3 product trong bảng products:
-- Ba product có total_price (quantity_in_stock * unit_price) cao nhất
SELECT *, quantity_in_stock * unit_price AS total_price
FROM sql_store.products
ORDER BY total_price DESC
LIMIT 3;

-- 3. Viết câu lệnh truy vấn lấy ra 3 order item trong bảng order_items:
-- Ba order item có total_price (quantity * unit_price) cao nhất
SELECT *, quantity * unit_price AS total_price
FROM sql_store.order_items
ORDER BY total_price DESC
LIMIT 3;








