CREATE TABLE "Carts" (
  "id" SERIAL PRIMARY KEY,
  "userId" INTEGER NOT NULL,
  "productId" INTEGER NOT NULL,
  "quantity" INTEGER DEFAULT 1
);

INSERT INTO "Carts" ("userId", "productId", "quantity") VALUES
(1, 1, 2),
(1, 2, 1),
(2, 3, 3);
