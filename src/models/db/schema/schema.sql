DROP TABLE IF EXISTS members;

CREATE TABLE members (
  id serial,
  username varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  role varchar(255) DEFAULT 'regular'
);
