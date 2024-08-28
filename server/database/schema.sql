-- SQLBook: Code
create table company (
  id int unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(155) not NULL,
  password VARCHAR(255) not NULL,
  company_name VARCHAR(155) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  company_size INT NOT NULL,
  validate BOOLEAN NOT NULL
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