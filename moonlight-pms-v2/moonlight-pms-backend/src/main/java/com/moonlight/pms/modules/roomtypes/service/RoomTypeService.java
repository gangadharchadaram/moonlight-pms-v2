package com.moonlight.pms.modules.roomtypes.service;

import com.moonlight.pms.modules.roomtypes.dto.RoomTypeRequest;
import com.moonlight.pms.modules.roomtypes.dto.RoomTypeResponse;

import java.util.List;

public interface RoomTypeService {

    RoomTypeResponse createRoomType(
            Long clientId,
            RoomTypeRequest request
    );

    RoomTypeResponse updateRoomType(
            Long clientId,
            Long roomTypeId,
            RoomTypeRequest request
    );

    void deleteRoomType(
            Long clientId,
            Long roomTypeId
    );

    RoomTypeResponse getRoomTypeById(
            Long clientId,
            Long roomTypeId
    );

    List<RoomTypeResponse> getAllRoomTypes(
            Long clientId
    );
}