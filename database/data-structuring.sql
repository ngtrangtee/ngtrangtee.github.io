-- QLHS 
-- Students: sID, sname, semail, sphone 
-- + class-student: cid, sid
-- Classes: cID, cname, csid 
-- + class-teacher: cid, tid
-- Teachers: ID, tname, temail, tphone
-- + teacher-subject: tid, sjid
-- Subjects: sjid, sjname
-- class-subject: cid, sjid

-- MQH 
-- 1-1: student-sid
-- 1-n
-- n-m: class-student, class-teacher, class-subject, teacher-

CREATE TABLE IF NOT EXISTS students
(sid TINYINT PRIMARY KEY AUTO_INCREMENT,
sname VARCHAR(50) NOT NULL,
 semail VARCHAR(50) NOT NULL UNIQUE,
 sphone VARCHAR(20) NOT NULL UNIQUE);
 
 CREATE TABLE IF NOT EXISTS classes
 (cid TINYINT PRIMARY KEY AUTO_INCREMENT,
 cname VARCHAR(50) NOT NULL);
 
 CREATE TABLE IF NOT EXISTS teachers
 (tid TINYINT PRIMARY KEY AUTO_INCREMENT,
tname VARCHAR(50) NOT NULL,
temail VARCHAR(50) NOT NULL UNIQUE,
 tphone VARCHAR(20) NOT NULL UNIQUE);
 
  CREATE TABLE IF NOT EXISTS subjects
 (sjid TINYINT PRIMARY KEY AUTO_INCREMENT,
 sjname VARCHAR(50) NOT NULL);
 
 CREATE TABLE IF NOT EXISTS class_student 
 (cid TINYINT,
 sid TINYINT, 
 PRIMARY KEY (cid, sid), -- tổ hợp là khóa chính
 FOREIGN KEY (cid)
 REFERENCES classes (cid)
ON UPDaTE CASCADE
 ON DELETE RESTRICT,
 FOREIGN KEY (sid)
 REFERENCES students (sid)
  ON UPDaTE CASCADE
 ON DELETE RESTRICT);
 
  CREATE TABLE IF NOT EXISTS class_teacher 
 (cid TINYINT,
 tid TINYINT, 
 PRIMARY KEY (cid, tid), -- tổ hợp là khóa chính
 FOREIGN KEY (cid)
 REFERENCES classes (cid)
ON UPDaTE CASCADE
 ON DELETE RESTRICT,
 FOREIGN KEY (tid)
  REFERENCES teachers (tid)
  ON UPDATE CASCADE
 ON DELETE RESTRICT);
 
CREATE TABLE IF NOT EXISTS class_subject 
 (cid TINYINT,
 sjid TINYINT, 
 PRIMARY KEY (cid, sjid), -- tổ hợp là khóa chính
 FOREIGN KEY (cid)
 REFERENCES classes (cid)
ON UPDaTE CASCADE
 ON DELETE RESTRICT,
 FOREIGN KEY (sjid)
 REFERENCES subjects (sjid)
ON UPDATE CASCADE
 ON DELETE RESTRICT);
 
CREATE TABLE IF NOT EXISTS teacher_subject
(tid TINYINT,
 sjid TINYINT, 
 PRIMARY KEY (tid, sjid), -- tổ hợp là khóa chính
 FOREIGN KEY (tid)
 REFERENCES classes (cid)
ON UPDATE CASCADE
 ON DELETE RESTRICT,
 FOREIGN KEY (sjid)
  REFERENCES subjects (sjid)
ON UPDATE CASCADE
 ON DELETE RESTRICT);
 
INSERT INTO students (sname, semail, sphone)
 VALUES ("trang", "trang@gmail.com", "0123235689");
 
INSERT INTO students (sname, semail, sphone)
 VALUES ("viet", "viet@gmail.com", "03333333"),
 ("trung", "trung@gmail.com", "0222222222"),
  ("dung", "dung@gmail.com", "044444444"),
  ("hanh", "hanh@gmail.com", "055555555");
  
INSERT INTO teachers (tname, temail, tphone)
VALUES ("ba", "ba@techmaster.vn", "01293892834"),
("hien", "hien@techmaster.vn", 293597352973975);
 
INSERT INTO classes (cname)
VALUES ("Foundation 10"), 
("FrontEnd 15");

INSERT INTO subjects (sjname)
VALUES ("HTML CSS"), 
("JavaScript"),
("HTML5 Game"),
("Database"),
("Python");

INSERT INTO class_student (cid, sid)
VALUES (1,1), (1,2), (1,3), (2,3), (2,4), (2,5);

INSERT INTO class_teacher (cid, tid)
VALUES (1,1), (1,2), (2,1);

INSERT INTO class_subject (cid, sjid)
VALUES (1,1), (1,2), (1,4), (2,2), (2,3), (2,5);

INSERT INTO teacher_subject (tid, sjid)
VALUES (1,1), (1,2), (1,3), (2,3), (2,4), (2,5);

SELECT cname, sname, sid, sphone
FROM classes
JOIN class_student USING(cid)
JOIN students using(sid)
WHERE cid = 1;

SELECT tid, tname, temail, tphone
FROM classes 
JOIN class_teacher USING (cid)
JOIN teachers USING (tid)
WHERE cid = 1;

SELECT sjid, sjname, tname
FROM classes
JOIN class_subject USING (cid)
JOIN subjects USING (sjid)
JOIN teacher_subject USING (sjid)
JOIN teachers USING (tid)
WHERE cid = 2;

select * FROM teachers;

-- Update
UPDATE teachers
SET tphone = "09248928374x"
WHERE tid = 1;

-- Delete
INSERT INTO teachers (tname, temail, tphone)
VALUES ("Bar", "bar@gmail.com", "982942944242");

DELETE FROM teachers
WHERE tid = 3;















 