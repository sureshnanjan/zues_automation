--orrectness of find table salaries

IF EXISTS(
SELECT
  			*
  		FROM
  			INFORMATION_SCHEMA.TABLES
  		WHERE
  			TABLE_NAME = 'salaries'
			)
SELECT 'found' AS search_result ELSE SELECT 'not found' AS search_result;


--correctness of column emp_no

IF EXISTS(
SELECT * FROM
INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME = 'emp_no')
SELECT 'found' AS search_result ELSE SELECT 'not found' AS search_result;

--correctness of primary key
IF EXISTS(
SELECT * FROM
INFORMATION_SCHEMA.TABLE_CONSTRAINTS T  
JOIN INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE C  
ON C.CONSTRAINT_NAME=T.CONSTRAINT_NAME  
WHERE C.TABLE_NAME='salaries'  
AND T.CONSTRAINT_TYPE='PRIMARY KEY'
AND T.COLUMN_NAME = 'emp_no')
SELECT 'found' AS search_result ELSE SELECT 'not found' AS search_result;