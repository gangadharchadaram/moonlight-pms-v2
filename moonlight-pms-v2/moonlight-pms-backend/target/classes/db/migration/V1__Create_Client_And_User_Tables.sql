-- ==========================================
-- MoonLight PMS V2
-- Initial Database Schema
-- ==========================================

-- ==========================================
-- CLIENTS TABLE
-- ==========================================

CREATE TABLE clients (
    id BIGSERIAL PRIMARY KEY,

    business_name VARCHAR(255) NOT NULL,

    email VARCHAR(255) NOT NULL UNIQUE,

    phone VARCHAR(20) NOT NULL,

    address TEXT,

    timezone VARCHAR(100) DEFAULT 'Asia/Kolkata',

    subscription_plan VARCHAR(50) DEFAULT 'TRIAL',

    subscription_expiry DATE,

    active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL,

    updated_at TIMESTAMP NOT NULL
);

-- ==========================================
-- USERS TABLE
-- ==========================================

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,

    client_id BIGINT NOT NULL,

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100) NOT NULL,

    email VARCHAR(255) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    phone VARCHAR(20) NOT NULL,

    role VARCHAR(50) NOT NULL,

    active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL,

    updated_at TIMESTAMP NOT NULL,

    CONSTRAINT fk_users_client
        FOREIGN KEY (client_id)
        REFERENCES clients(id)
        ON DELETE CASCADE
);

-- ==========================================
-- INDEXES
-- ==========================================

CREATE INDEX idx_users_client_id
ON users(client_id);

CREATE INDEX idx_users_email
ON users(email);

CREATE INDEX idx_clients_email
ON clients(email);