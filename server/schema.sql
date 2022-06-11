CREATE DATABASE reviewsdb;

/* USE reviewsdb = \c dbName in postgres */
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS characreviews;
DROP TABLE IF EXISTS characteristics;

CREATE TABLE
reviews(
  /* TRY SETTING ID SERIAL TO NOT NULL ------------------ */
  id SERIAL PRIMARY KEY,
  product_id INT,
  rating INT,
  "date" BIGINT,
  summary VARCHAR(280),
  body VARCHAR(1250),
  recommended BOOLEAN,
  reported BOOLEAN,
  reviewer_name VARCHAR(150),
  reviewer_email VARCHAR(150),
  response VARCHAR(1300),
  helpfulness INT
);

CREATE TABLE
photos(
  id SERIAL PRIMARY KEY,
  review_id INT REFERENCES reviews(id),
  "url" VARCHAR(1000)
);

CREATE TABLE
characteristics(
  id SERIAL PRIMARY KEY,
  size INT,
  width INT,
  comfort INT,
  quality INT,
  leng INT,
  fit INT
);

CREATE TABLE
characreviews(
  id SERIAL PRIMARY KEY,
  characteristic_id INT,
  review_id INT REFERENCES reviews(id),
  "value" INT
);