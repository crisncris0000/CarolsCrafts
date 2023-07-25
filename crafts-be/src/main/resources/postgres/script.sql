DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS portfolio;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

CREATE TABLE portfolio (
    id SERIAL PRIMARY KEY,
    image_data BYTEA NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    image_data BYTEA NOT NULL,
    item_title VARCHAR(255) NOT NULL,
    item_description TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(100)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles (id)
);

CREATE TABLE cart (
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (item_id) REFERENCES items (id)
);

INSERT INTO roles (role_name) VALUES
    ('USER'),
    ('ADMIN');

INSERT INTO users (first_name, last_name, email, password, role_id, created_at, updated_at) VALUES
    ('Admin', 'Admin', 'demo@gmail.com', '$2a$10$s2BSJPDLgImvF7AgYf/Ueuduh7q8ctyYwtdZCwswKxuMsJa3Y/V7u', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


SELECT * FROM users;
