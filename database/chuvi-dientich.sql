SELECT * FROM sql_store.products
WHERE TRUNCATE(unit_price, 0) = 3; -- chỉ lấy giá trị nguyên bằng 3

-- Bài tập 1--
CREATE DATABASE exercises;
USE exercises;
CREATE TABLE circle (
r DECIMAL(3, 1) NOT NULL
);

INSERT INTO circle (r) VALUES (1.5), (2.1), (3.0), (4), (5.5), (4.5);

-- BÀI LÀM: THêm CỘt chu vi, cột diện tích, tương ứng với giá trị bán kính
SELECT 
    *,
    round(2 * PI() * r) AS circumference,
    round(PI() * r * r) AS area
FROM
    exercises.circle;

-- Bài tập 2 -- 
CREATE DATABASE exercises1;
USE exercises1;
CREATE TABLE rectangle (
w INT NOT NULL,
h INT NOT NULL
);

INSERT INTO rectangle (w, h) VALUES (1, 5), (3, 2), (3, 1), (4, 5), (5, 5), (5, 10);

SELECT 
*,
w * h AS CV,
2 * (w + h) AS area
FROM
exercises1.rectangle;