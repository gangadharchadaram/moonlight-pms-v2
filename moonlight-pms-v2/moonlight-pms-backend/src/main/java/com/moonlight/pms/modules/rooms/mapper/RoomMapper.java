package com.moonlight.pms.modules.rooms.mapper;

import org.springframework.stereotype.Component;

import com.moonlight.pms.modules.rooms.dto.RoomRequest;
import com.moonlight.pms.modules.rooms.dto.RoomResponse;
import com.moonlight.pms.modules.rooms.entity.Room;
import com.moonlight.pms.modules.roomtypes.entity.RoomType;

@Component
public class RoomMapper {

    /**
     * Convert Request -> Entity
     */
    public Room toEntity(RoomRequest request, RoomType roomType) {

        return Room.builder()
                .roomNumber(request.getRoomNumber())
                .roomName(request.getRoomName())
                .roomType(roomType)

                .buildingId(request.getBuildingId())
                .wingId(request.getWingId())
                .floorId(request.getFloorId())

                .adultCapacity(request.getAdultCapacity())
                .childCapacity(request.getChildCapacity())
                .bedCount(request.getBedCount())

                .roomStatus(request.getRoomStatus())
                .housekeepingStatus(request.getHousekeepingStatus())

                .smokingAllowed(request.getSmokingAllowed())
                .active(request.getActive())

                .description(request.getDescription())

                .build();
    }

    /**
     * Update Existing Entity
     */
    public void updateEntity(
            Room room,
            RoomRequest request,
            RoomType roomType
    ) {

        room.setRoomNumber(request.getRoomNumber());
        room.setRoomName(request.getRoomName());

        room.setRoomType(roomType);

        room.setBuildingId(request.getBuildingId());
        room.setWingId(request.getWingId());
        room.setFloorId(request.getFloorId());

        room.setAdultCapacity(request.getAdultCapacity());
        room.setChildCapacity(request.getChildCapacity());
        room.setBedCount(request.getBedCount());

        room.setRoomStatus(request.getRoomStatus());
        room.setHousekeepingStatus(request.getHousekeepingStatus());

        room.setSmokingAllowed(request.getSmokingAllowed());
        room.setActive(request.getActive());

        room.setDescription(request.getDescription());
    }

    /**
     * Convert Entity -> Response
     */
    public RoomResponse toResponse(Room room) {

        return RoomResponse.builder()

                .id(room.getId())

                .roomNumber(room.getRoomNumber())
                .roomName(room.getRoomName())

                .roomTypeId(room.getRoomType().getId())
                .roomTypeName(room.getRoomType().getName())

                // Master IDs
                .buildingId(room.getBuildingId())
                .wingId(room.getWingId())
                .floorId(room.getFloorId())

                // Will be populated after Building/Wing/Floor modules
                .buildingName(null)
                .wingName(null)
                .floorName(null)

                .adultCapacity(room.getAdultCapacity())
                .childCapacity(room.getChildCapacity())
                .bedCount(room.getBedCount())

                .roomStatus(room.getRoomStatus())
                .housekeepingStatus(room.getHousekeepingStatus())

                .smokingAllowed(room.getSmokingAllowed())
                .active(room.getActive())

                .description(room.getDescription())

                .createdAt(room.getCreatedAt())
                .updatedAt(room.getUpdatedAt())

                .createdBy(room.getCreatedBy())
                .updatedBy(room.getUpdatedBy())

                .build();
    }

}