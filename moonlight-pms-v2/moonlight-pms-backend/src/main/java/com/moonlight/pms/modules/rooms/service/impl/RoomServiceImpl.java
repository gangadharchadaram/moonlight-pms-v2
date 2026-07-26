package com.moonlight.pms.modules.rooms.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moonlight.pms.exception.BadRequestException;
import com.moonlight.pms.exception.ResourceNotFoundException;
import com.moonlight.pms.modules.roomtypes.entity.RoomType;
import com.moonlight.pms.modules.roomtypes.repository.RoomTypeRepository;
import com.moonlight.pms.modules.rooms.dto.RoomRequest;
import com.moonlight.pms.modules.rooms.dto.RoomResponse;
import com.moonlight.pms.modules.rooms.entity.Room;
import com.moonlight.pms.modules.rooms.mapper.RoomMapper;
import com.moonlight.pms.modules.rooms.repository.RoomRepository;
import com.moonlight.pms.modules.rooms.service.RoomService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    private final RoomTypeRepository roomTypeRepository;

    private final RoomMapper roomMapper;

    /**
     * Create Room
     */
    @Override
    public RoomResponse createRoom(Long clientId,
                                   Long userId,
                                   RoomRequest request) {

        if (roomRepository.existsByClientIdAndRoomNumber(clientId,
                request.getRoomNumber())) {

            throw new BadRequestException(
                    "Room number already exists.");
        }

        RoomType roomType = roomTypeRepository
                .findByIdAndClient_Id(
                        request.getRoomTypeId(),
                        clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Room Type not found."));

        Room room = roomMapper.toEntity(request, roomType);

        room.setClientId(clientId);

        room.setCreatedBy(userId);

        room.setUpdatedBy(userId);

        Room savedRoom = roomRepository.save(room);

        return roomMapper.toResponse(savedRoom);
    }

    /**
     * Update Room
     */
    @Override
    public RoomResponse updateRoom(Long clientId,
                                   Long userId,
                                   Long roomId,
                                   RoomRequest request) {

        Room room = roomRepository
                .findByIdAndClientId(roomId, clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Room not found."));

        if (!room.getRoomNumber().equals(request.getRoomNumber())
                && roomRepository.existsByClientIdAndRoomNumber(
                        clientId,
                        request.getRoomNumber())) {

            throw new BadRequestException(
                    "Room number already exists.");
        }

        RoomType roomType = roomTypeRepository
                .findByIdAndClient_Id(
                        request.getRoomTypeId(),
                        clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Room Type not found."));

        roomMapper.updateEntity(room, request, roomType);

        room.setUpdatedBy(userId);

        Room updatedRoom = roomRepository.save(room);

        return roomMapper.toResponse(updatedRoom);
    }

    /**
     * Soft Delete Room
     */
    @Override
    public void deleteRoom(Long clientId,
                           Long roomId) {

        Room room = roomRepository
                .findByIdAndClientId(roomId, clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Room not found."));

        room.setActive(false);

        roomRepository.save(room);
    }

    /**
     * Get Room By Id
     */
    @Override
    @Transactional(readOnly = true)
    public RoomResponse getRoomById(Long clientId,
                                    Long roomId) {

        Room room = roomRepository
                .findByIdAndClientId(roomId, clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Room not found."));

        return roomMapper.toResponse(room);
    }

  /**
 * Get All Rooms
 */
@Override
@Transactional(readOnly = true)
public List<RoomResponse> getAllRooms(Long clientId) {

    return roomRepository
            .findByClientIdAndActiveTrue(clientId)
            .stream()
            .map(roomMapper::toResponse)
            .toList();
}

}