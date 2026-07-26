CREATE TABLE rooms (

    id BIGSERIAL PRIMARY KEY,

    client_id BIGINT NOT NULL,

    room_number VARCHAR(20) NOT NULL,

    room_name VARCHAR(100),

    room_type_id BIGINT NOT NULL,

    building VARCHAR(100),

    wing VARCHAR(100),

    floor INTEGER,

    adult_capacity INTEGER NOT NULL DEFAULT 2,

    child_capacity INTEGER NOT NULL DEFAULT 0,

    bed_count INTEGER NOT NULL DEFAULT 1,

    room_status VARCHAR(30) NOT NULL,

    housekeeping_status VARCHAR(30) NOT NULL,

    smoking_allowed BOOLEAN DEFAULT FALSE,

    active BOOLEAN DEFAULT TRUE,

    description VARCHAR(500),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    created_by BIGINT,

    updated_by BIGINT,

    CONSTRAINT fk_room_room_type
        FOREIGN KEY(room_type_id)
        REFERENCES room_types(id),

    CONSTRAINT uk_room_number
        UNIQUE(client_id, room_number)

);