package com.moonlight.pms.modules.rooms.service;

import java.util.List;

import com.moonlight.pms.modules.rooms.dto.RoomRequest;
import com.moonlight.pms.modules.rooms.dto.RoomResponse;

public interface RoomService {

    RoomResponse createRoom(Long clientId, Long userId, RoomRequest request);

    RoomResponse updateRoom(Long clientId,
                            Long userId,
                            Long roomId,
                            RoomRequest request);

    void deleteRoom(Long clientId, Long roomId);

    RoomResponse getRoomById(Long clientId, Long roomId);

    List<RoomResponse> getAllRooms(Long clientId);

}