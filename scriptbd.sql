create database ConexionNodeJS;
use ConexionNodeJS;

CREATE TABLE User (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(45) NOT NULL,
lastname VARCHAR(45) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) Engine Innodb;

Insert into User (firstname, lastname, email) values ('Guillermo', 'Alfonso', 'memo@gmail.com'),
('Esmeralda', 'Rodriguez', 'esme@gmail.com'),('Luis', 'Leonardo', 'luis@gmail.com'),
('Daniel', 'Herrera', 'daniel@gmail.com'),('Manuel', 'Aranda', 'manuel@gmail.com');

select * from user;