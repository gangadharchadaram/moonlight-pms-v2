CREATE TABLE wings (

    id BIGSERIAL PRIMARY KEY,

    client_id BIGINT NOT NULL,

    building_id BIGINT NOT NULL,

    code VARCHAR(20) NOT NULL,

    name VARCHAR(120) NOT NULL,

    description TEXT,

    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    created_by BIGINT,

    updated_by BIGINT,

    CONSTRAINT fk_wing_building
        FOREIGN KEY (building_id)
        REFERENCES buildings(id),

    CONSTRAINT uk_wing_code
        UNIQUE (
            client_id,
            building_id,
            code
        )

);

CREATE INDEX idx_wing_building
ON wings(building_id);