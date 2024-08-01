CREATE TABLE "Products" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "price" FLOAT NOT NULL,
  "creation_dt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "Products" ("name", "description", "price") VALUES
('Product 1', 'Description for product 1', 10.0),
('Product 2', 'Description for product 2', 20.0),
('Product 3', 'Description for product 3', 30.0);
