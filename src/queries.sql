--#Submissions Page
-- Post Question [INSERT]
INSERT INTO questions (id, title, body, user_id, created_at)
VALUES (value1, value2, value3, value4, value5);

--#Profile Page
-- Show User Profile [SELECT]
SELECT username, password, year, first_name, lastname, department, created_at
FROM users
WHERE id = {user input} --AND password = {user input}

--#Results Page
--Show all questions [SELECT]
SELECT question.body
FROM question
JOIN users ON question.user_id = users.id
WHERE users.id = '{user input}';

--#Voting Page
--Show individual Question [SELECT]
SELECT question.body
FROM question
JOIN users ON question.user_id = users.id
WHERE users.id = '{user input}';

--Post a vote [INSERT]
INSERT INTO votes (id, question_id, vote, user_id, created_at)
VALUES (value1, value2, value3, value4, value5);

--#Forgot Password Page
-- Update Password [SELECT]
UPDATE users
SET password = {user input}
WHERE user_id;


-- #Chat Page & Results Page
-- Get Vote Count (1, 2, 3) [SELECT]
SELECT COUNT(*)
FROM vote
JOIN question ON vote.question_id = question.id
WHERE question.id = 1;

SELECT COUNT(*)
FROM vote
JOIN question ON vote.question_id = question.id
WHERE question.id = 2;

SELECT COUNT(*)
FROM vote
JOIN question ON vote.question_id = question.id
WHERE question.id = 3;
