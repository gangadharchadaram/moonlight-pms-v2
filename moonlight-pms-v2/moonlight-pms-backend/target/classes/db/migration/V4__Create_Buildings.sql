CREATE TABLE buildings (

    id BIGSERIAL PRIMARY KEY,

    client_id BIGINT NOT NULL,

    code VARCHAR(20) NOT NULL,

    name VARCHAR(120) NOT NULL,

    description TEXT,

    active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    created_by BIGINT,

    updated_by BIGINT,

    CONSTRAINT uk_building_code
        UNIQUE (client_id, code)

);