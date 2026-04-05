-- Migration: initial schema
CREATE TABLE users (id SERIAL PRIMARY KEY, email TEXT NOT NULL);
CREATE TABLE posts (id SERIAL PRIMARY KEY, user_id INT REFERENCES users(id), title TEXT);