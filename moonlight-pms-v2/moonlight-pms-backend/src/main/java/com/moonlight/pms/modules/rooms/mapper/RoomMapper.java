package com.moonlight.pms.modules.rooms.mapper;

import com.moonlight.pms.modules.rooms.dto.RoomRequest;
import com.moonlight.pms.modules.rooms.dto.RoomResponse;
import com.moonlight.pms.modules.rooms.entity.Room;
import com.moonlight.pms.modules.roomtypes.entity.RoomType;
import org.springframework.stereotype.Component;

@Component
public class RoomMapper {

    public Room toEntity(RoomRequest request, RoomType roomType) {

        return Room.builder()
                .roomNumber(request.getRoomNumber())
                .roomName(request.getRoomName())
                .roomType(roomType)
                .building(request.getBuilding())
                .wing(request.getWing())
                .floor(request.getFloor())
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

    public void updateEntity(Room room,
                             RoomRequest request,
                             RoomType roomType) {

        room.setRoomNumber(request.getRoomNumber());
        room.setRoomName(request.getRoomName());
        room.setRoomType(roomType);
        room.setBuilding(request.getBuilding());
        room.setWing(request.getWing());
        room.setFloor(request.getFloor());
        room.setAdultCapacity(request.getAdultCapacity());
        room.setChildCapacity(request.getChildCapacity());
        room.setBedCount(request.getBedCount());
        room.setRoomStatus(request.getRoomStatus());
        room.setHousekeepingStatus(request.getHousekeepingStatus());
        room.setSmokingAllowed(request.getSmokingAllowed());
        room.setActive(request.getActive());
        room.setDescription(request.getDescription());
    }

    public RoomResponse toResponse(Room room) {

        return RoomResponse.builder()
                .id(room.getId())
                .roomNumber(room.getRoomNumber())
                .roomName(room.getRoomName())
                .roomTypeId(room.getRoomType().getId())
                .roomTypeName(room.getRoomType().getName())
                .building(room.getBuilding())
                .wing(room.getWing())
                .floor(room.getFloor())
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