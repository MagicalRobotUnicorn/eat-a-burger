DROP database if EXISTS burger_db;
CREATE DATABASE burger_db;

use burger_db;

create table burgers(
  burger_id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY key (burger_id)
);
