-- - condition ? value_if_true : value_if_false;

-- if (condition) {
-- 	value_if_true;
-- } else {
-- 	value_if_false;
-- }

-- IF (condition, value_if_true, value_if_false; chỉ kiểm tra được 1 điều kiện

SELECT *, IF (ISNULL(shipped_date), "Not Delivery", "delivered") AS status
FROM sql_store.orders
ORDER BY status;

-- nhiều điều kiện kết hợp với nhau
-- CASE 
-- 	WHEN condition THEN value, expression 
--     WHEN codition THEN value, expression
--     ...
--     ELSE value, expression 
-- END 

-- kiểm tra số lượng stock, nếu có trên 
SELECT * FROM sql_store.customers;

SELECT *, CASE
	WHEN quantity_in_stock > 50 THEN "tồn kho quá nhiều"
    WHEN quantity_in_stock > 30 THEN "bình thường"
    WHEN quantity_in_stock > 10 THEN "sắp hết, cần nhập thêm"
    ELSE "Nhập khẩn cấp"
END "trạng thái tồn kho"
FROM sql_store.products;

-- BÀI TẬP --
-- Viết câu lệnh truy vấn lấy ra tất cả customer trong bảng customers:
-- Kết quả gồm các cột: customer_id, full_name (first_name + last_name), phone và ratings
-- Nếu points >= 3000 thì ratings là Gold
-- Nếu points >= 2000 thì ratings là Silver
-- Nếu points >= 1000 thì ratings là Bronze
-- Nếu points < 1000 thì ratings là Iron

SELECT 
    customer_id,
    CONCAT(first_name, ' ', last_name) AS full_name,
    phone,
    points,
    CASE
        WHEN points >= 3000 THEN 'Gold'
        WHEN points >= 2000 THEN 'Silver'
        WHEN points >= 1000 THEN 'Bronze'
        ELSE 'Iron'
    END 'rating'
FROM
    sql_store.customers
ORDER BY points DESC;

-- BÀI 2: 
CREATE DATABASE IF NOT EXISTS exercises;

USE exercises;

CREATE TABLE IF NOT EXISTS qe2 ( -- ax2 + bx + c = 0
a INT,
b INT,
c INT);

INSERT INTO qe2 VALUES
(1, 2, 3),
(1, 3, 2),
(2, 1, 3),
(2, 3, 1),
(3, 1, 2),
(3, 2, 1);

-- Tìm nghiệm PT bậc 2 với giá trị trong bảng qe2
SELECT *, POW(b,2)-4*a*c AS delta, CASE
WHEN (POW(b,2)-4*a*c > 0) THEN '2 Nghiệm'
WHEN (POW(b,2)-4*a*c = 0) THEN 'Nghiệm kép'
ELSE 'Vô Nghiệm'
END 'Số nghiệm'
FROM exercises.qe2;

-- Chữa bài --
select *, case
when b*b - 4*a*c  > 0 then concat('x1 =',(-b+sqrt(b*b - 4*a*c))/2*a, ' ','x2 =' , (-b-sqrt(b*b - 4*a*c))/2*a)
when b*b - 4*a*c = 0 then 'PT có nghiệm kép'
else 'PT vo nghiem'
end Ketqua
 from qe2;

CREATE TABLE IF NOT EXISTS grade(
point decimal(3, 1)
);

INSERT INTO grade VALUES
(3.0), (4.0), (4.5), (5.4), (5.5), (6.1), (7.4), (7.9), (8.6), (9.0), (9.5), (10.0);

-- BT3: Quy đổi điểm sang hệ chữ:
-- < 4.0 -> F 
-- 4.0 - 5.5 -> D
-- 5.5 - 7.0 -> C 
-- 7.0 - 8.5 -> B 
-- 8.5 - 9.5 -> A
-- 9.5 - 10 -> A+

SELECT *, CASE
WHEN point < 4.0 THEN 'F'
WHEN 4.0 <= point AND point < 5.5 THEN 'D'
WHEN 5.5 <= point AND point < 7.0 THEN 'C'
WHEN 7.0 <= point AND point < 8.5 THEN 'B'
WHEN 8.5 <= point AND point < 9.5 THEN 'A'
ELSE 'A+'
END 'letter_grade'
FROM exercises.grade;

-- LAST_INSERT_ID; trả về ID của hàng vừa được thêm vào
-- Inner Join - lấy dữ liệu trùng nhau trong cả hai bảng




