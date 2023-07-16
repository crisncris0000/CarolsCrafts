DROP TABLE IF EXISTS "Cart";
DROP TABLE IF EXISTS "Portfolio";
DROP TABLE IF EXISTS "Item";
DROP TABLE IF EXISTS "Users";
DROP TABLE IF EXISTS "Roles";

CREATE TABLE "Portfolio" (
    id SERIAL PRIMARY KEY,
    image_data BYTEA NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE "Item" (
    id SERIAL PRIMARY KEY,
    image_data BYTEA NOT NULL,
    item_title VARCHAR(255) NOT NULL,
    item_description TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE "Roles" (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(100)
);

CREATE TABLE "Users" (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    FOREIGN KEY (role_id) REFERENCES "Roles" (id)
);

CREATE TABLE "Cart" (
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "Users" (id),
    FOREIGN KEY (item_id) REFERENCES "Item" (id)
);
