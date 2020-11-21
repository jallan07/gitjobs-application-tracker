-- Drops the gitjobs_db if it exists currently --
DROP DATABASE IF EXISTS gitjobs_db;
-- Creates the "gitjobs_db" database --
CREATE DATABASE gitjobs_db;

USE gitjobs_db;

CREATE TABLE companies 
(
    id INT NOT NULL AUTO_INCREMENT,
    company_name VARCHAR(255) NOT NULL,
    company_website VARCHAR(255) NOT NULL,
    -- company_logo VARCHAR(255),
    company_description TEXT,
    PRIMARY KEY (id) 
);

CREATE TABLE applications 
(
    id INT NOT NULL AUTO_INCREMENT,
    job_name VARCHAR(255) NOT NULL,
    company_id VARCHAR(255) NOT NULL REFERENCES companies(id),
    job_link VARCHAR(255) NOT NULL,
    job_salary INT,
    job_hiringMgrName VARCHAR(255) NOT NULL
    job_hiringMgrTitle VARCHAR(255)
    job_hiringMgrEmail VARCHAR(255)
    job_status VARCHAR(255) NOT NULL
    job_nextStep TEXT
    applied BOOLEAN DEFAULT false,
    PRIMARY KEY (id) 
);

CREATE TABLE rolodex 
(
    id INT NOT NULL AUTO_INCREMENT,
    network_name VARCHAR(255) NOT NULL,
    network_relationship VARCHAR(255) NOT NULL,
    company_id VARCHAR(255) NOT NULL REFERENCES companies(id),
    network_title VARCHAR(255) NOT NULL
    network_city VARCHAR(255) NOT NULL
    network_phone VARCHAR(255) NOT NULL
    network_email VARCHAR(255) NOT NULL
    network_linkedin VARCHAR(255)
    network_github VARCHAR(255)
    network_notes TEXT
    PRIMARY KEY (id) 
);