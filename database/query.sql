select product_id, name, unit_price 
from sql_store.products 
where unit_price > 4;

select * 
from customers
where birth_date > "1990-01-01";

select *
from customers
where first_name = "elka";

select *
from orders
where not (status = 1);

select *
from customers
where not (points > 1000 and points < 2000);

select *
from customers
where not (points > 1000 or points < 2000);

select order_id, customer_id, status
from orders
where order_date < "2021-01-01";

select name, quantity_in_stock, unit_price
from products
where quantity_in_stock < 20;

select customer_id, first_name, last_name, points
from customers
where points > 2000;

-- And, or, not ket hop nhieu dk --
select *
from customers
where state in ("VA","GA","FL");

select *
from customers
where state not in ("TX","TN","VA","CA","MA","GA");

SELECT *
FROM products
WHERE quantity_in_stock in (49,38,72);

SELECT *
FROM customers
WHERE birth_date between "1990-01-01" 
and "2000-12-31";

SELECT 
    *, quantity_in_stock * unit_price AS total
FROM
    products
WHERE
    quantity_in_stock * unit_price BETWEEN 200 AND 400;

-- LIKE 
--  % Dai dien cho 1 so luong ky tu bat ky 0,1,2,3
-- _ Dai dien cho 1 chinh xac ky tu

select * from customers
where first_name like "%a%";

select * from customers
where last_name like "_a%";

select * from customers
where phone like "%9";

SELECT *
FROM sql_store.customers
WHERE address LIKE "%trail%" OR  address LIKE "%avenue%";

select * from customers
where first_name like "____";

select * from customers
where first_name like "%b%" and first_name not like "b%";

SELECT *
FROM sql_store.customers
WHERE first_name LIKE 'r%' AND last_name LIKE 'r%';

-- Regex

select * from orders
where shipped_date is not null;

select * from orders
where shipped_date is null
order by order_date DESC;

select * from order_items
order by order_id DESC, unit_price ASC;

select * from customers
order by points;

select *, quantity * unit_price as total_price from order_items
where order_id = 2
order by total_price DESC;

select * from products
order by quantity_in_stock DESC;

select *, quantity_in_stock * unit_price as total from products
order by total desc;

select * from products
limit 3, 3;
-- offset = (page-1)*productPerPage

select * from customers
order by points desc
limit 3;

select *, quantity_in_stock * unit_price as total_price from products
order by total_price desc
limit 3;

select *, quantity * unit_price as total_price from order_items
order by total_price desc
limit 3;