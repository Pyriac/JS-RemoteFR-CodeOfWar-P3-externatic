-- SQLBook: Code
create table company (
  id int unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(155) not NULL,
  password VARCHAR(255) not NULL,
  name VARCHAR(155) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  size INT NOT NULL,
  validate BOOLEAN NOT NULL,
  image VARCHAR(255) DEFAULT "../assets/images/default.png",
  logo VARCHAR(255) DEFAULT "../assets/images/logo_default.png"
);

create table announce (
  id int unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
  job_title VARCHAR(155) not NULL,
  location VARCHAR(155) NULL,
  description TEXT not NULL,
  min_salary DECIMAL(10.2) not NULL,
  max_salary DECIMAL(10.2) not NULL,
  benefits TEXT not NULL,
  job_type VARCHAR(55) not NULL,
  telework VARCHAR(55) not NULL,
  company_id int unsigned not NULL,
  Foreign key (company_id) REFERENCES company(id)
  );

  create table candidate (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(155) NOT NULL,
    password VARCHAR(255) NOT NULL,
    cv VARCHAR(255),
    location VARCHAR(155) NOT NULL,
    first_name VARCHAR(55) NOT NULL,
    last_name VARCHAR(55) NOT NULL,
    title VARCHAR(155) NOT NULL,
    birthday DATE,
    degree VARCHAR(155),
    phone VARCHAR(55)
  );

  INSERT INTO company(email, password, name, phone, size, validate)
  VALUES("auchan@auchan.fr", "0000", "auchan", "03087965412", 500, 1 ),
  ("lidl@lidl.fr", "1234", "lidl", "03087965412", 300, 1 ),
  ("action@action.fr", "azerty", "action", "03087965412", 100, 0 );

  INSERT INTO announce ( job_title,  location, description, min_salary, max_salary, benefits, job_type, telework, company_id)
VALUES('Agent de maîtrise', 'Saint-dié-des-Vosges', 'Tu maîtrises un peu tout on te demandera donc des choses divers et variés sans jamais attribuer de poste fixe', 1600, 1750, 'chèques cadeau', 'CDI', 'Présentiel', 1),
('developpeur web', 'lille', 'Tu maîtrises un peu tout, on te demandera donc des choses divers et variés sans jamais attribuer de poste fixe', 1600, 1750, 'ticket resto', 'CDD', 'remote', 2),
('Caissier', 'Bastia', 'Tu passeras des clients avec le sourire et un sens du service client parfait', 1500, 1600, 'chèques cadeau', 'CDD', 'Présentiel', 3);

INSERT INTO candidate (email, password, location, first_name, last_name, title, degree)
VALUES ("pechin.geoffrey@externatech.com", "StanLee", "Noisy Le Grand", "Geoffrey", "Pechin",  "Développeur Front-End", "Titre RNCP niveau 5"),
("anthony.gelormini@externatech.com", "FreeCorsica", "Corsica", "Anthony", "Gelormini", "Developpeur Back-End", "Titre RNCP niveau 6"),
("aissatou.diallo@externatech.com", "RobotVoice", "Lille", "Aïssatou", "Diallo", "Data Analyst", "BTS développeur d'application"),
("samih.ringuet@externatech.com", "Anarchy4life", "Corse", "Samih", "Ringuet", "Développeur Full-Stack", "Titre RNCP niveau 5");