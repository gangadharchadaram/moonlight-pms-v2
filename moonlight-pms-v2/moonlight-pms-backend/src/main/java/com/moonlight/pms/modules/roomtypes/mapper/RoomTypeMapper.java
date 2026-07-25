package com.moonlight.pms.modules.roomtypes.mapper;

import com.moonlight.pms.modules.roomtypes.dto.RoomTypeRequest;
import com.moonlight.pms.modules.roomtypes.dto.RoomTypeResponse;
import com.moonlight.pms.modules.roomtypes.entity.RoomType;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class RoomTypeMapper {

    /**
     * Convert Request DTO to Entity
     */
    public RoomType toEntity(RoomTypeRequest request) {

        if (request == null) {
            return null;
        }

        RoomType roomType = new RoomType();

        roomType.setCode(request.getCode());
        roomType.setName(request.getName());
        roomType.setDescription(request.getDescription());

        roomType.setMaxAdults(request.getMaxAdults());
        roomType.setMaxChildren(request.getMaxChildren());

        roomType.setRoomSize(request.getRoomSize());
        roomType.setRoomSizeUnit(request.getRoomSizeUnit());

        roomType.setBasePrice(request.getBasePrice());
        roomType.setExtraBedPrice(request.getExtraBedPrice());

        roomType.setSmokingAllowed(request.getSmokingAllowed());
        roomType.setActive(request.getActive());

        return roomType;
    }

    /**
     * Convert Entity to Response DTO
     */
    public RoomTypeResponse toResponse(RoomType entity) {

        if (entity == null) {
            return null;
        }

        RoomTypeResponse response = new RoomTypeResponse();

        response.setId(entity.getId());

        response.setCode(entity.getCode());
        response.setName(entity.getName());
        response.setDescription(entity.getDescription());

        response.setMaxAdults(entity.getMaxAdults());
        response.setMaxChildren(entity.getMaxChildren());

        response.setRoomSize(entity.getRoomSize());
        response.setRoomSizeUnit(entity.getRoomSizeUnit());

        response.setBasePrice(entity.getBasePrice());
        response.setExtraBedPrice(entity.getExtraBedPrice());

        response.setSmokingAllowed(entity.getSmokingAllowed());
        response.setActive(entity.getActive());

        response.setCreatedAt(entity.getCreatedAt());
        response.setUpdatedAt(entity.getUpdatedAt());

        return response;
    }

    /**
     * Update Existing Entity
     */
    public void updateEntity(RoomType entity, RoomTypeRequest request) {

        entity.setCode(request.getCode());
        entity.setName(request.getName());
        entity.setDescription(request.getDescription());

        entity.setMaxAdults(request.getMaxAdults());
        entity.setMaxChildren(request.getMaxChildren());

        entity.setRoomSize(request.getRoomSize());
        entity.setRoomSizeUnit(request.getRoomSizeUnit());

        entity.setBasePrice(request.getBasePrice());
        entity.setExtraBedPrice(request.getExtraBedPrice());

        entity.setSmokingAllowed(request.getSmokingAllowed());
        entity.setActive(request.getActive());
    }

    public List<RoomTypeResponse> toResponseList(List<RoomType> entities) {

    if (entities == null) {
        return List.of();
    }

    return entities.stream()
            .map(this::toResponse)
            .toList();
}
}