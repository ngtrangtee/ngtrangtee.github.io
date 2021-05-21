-- 1. African Cities
SELECT 
    city.name
FROM
    city
        JOIN
    country ON city.countrycode = country.code
WHERE
    country.continent = 'Africa';
    
-- 2. Average Population of Each Continent
SELECT 
    country.continent, FLOOR(AVG(city.population))
FROM
    city
        JOIN
    country ON CITY.CountryCode = COUNTRY.Code
GROUP BY country.continent;

-- 3. The Report
SELECT 
    IF(grades.grade < 8, NULL, name),
    grades.grade,
    students.marks
FROM
    students
        JOIN
    grades
WHERE
    marks BETWEEN min_mark AND max_mark
ORDER BY grades.grade DESC , name ASC , students.marks ASC;

-- 4. Top Competitors
select
    h.hacker_id,
    h.name
from
    hackers h
    inner join
    (
        select
            s.hacker_id,
            count(*) as cnt
        from
            challenges c
            inner join difficulty d
                on c.difficulty_level = d.difficulty_level
            inner join submissions s
                on c.challenge_id = s.challenge_id
        where
            s.score = d.score
        group by s.hacker_id
        having count(*) > 1
    ) as ch
        on h.hacker_id = ch.hacker_id
order by
    ch.cnt desc,
    h.hacker_id
    
-- EXTRA: Poplutation Census
SELECT SUM(city.population)
FROM city
JOIN country
ON CITY.CountryCode = COUNTRY.Code 
WHERE continent = "Asia";




    
    


