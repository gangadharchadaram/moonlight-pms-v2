CREATE TABLE room_types (
    id BIGSERIAL PRIMARY KEY,

    client_id BIGINT NOT NULL,

    code VARCHAR(20) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,

    max_adults INT NOT NULL,
    max_children INT DEFAULT 0,

    room_size DECIMAL(10,2),
    room_size_unit VARCHAR(10),

    base_price DECIMAL(12,2) NOT NULL,
    extra_bed_price DECIMAL(12,2) DEFAULT 0,

    smoking_allowed BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT uk_room_type UNIQUE (client_id, code)
);

CREATE INDEX idx_room_type_client
ON room_types(client_id);

CREATE INDEX idx_room_type_name
ON room_types(name);