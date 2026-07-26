package com.moonlight.pms.modules.roomtypes.service.impl;

import com.moonlight.pms.entity.Client;
import com.moonlight.pms.exception.ResourceNotFoundException;
import com.moonlight.pms.modules.roomtypes.dto.RoomTypeRequest;
import com.moonlight.pms.modules.roomtypes.dto.RoomTypeResponse;
import com.moonlight.pms.modules.roomtypes.entity.RoomType;
import com.moonlight.pms.modules.roomtypes.mapper.RoomTypeMapper;
import com.moonlight.pms.modules.roomtypes.repository.RoomTypeRepository;
import com.moonlight.pms.modules.roomtypes.service.RoomTypeService;
import com.moonlight.pms.repository.ClientRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RoomTypeServiceImpl implements RoomTypeService {

    private final RoomTypeRepository repository;
    private final RoomTypeMapper mapper;
    private final ClientRepository clientRepository;

    public RoomTypeServiceImpl(
            RoomTypeRepository repository,
            RoomTypeMapper mapper,
            ClientRepository clientRepository) {

        this.repository = repository;
        this.mapper = mapper;
        this.clientRepository = clientRepository;
    }

    @Override
    public RoomTypeResponse createRoomType(Long clientId, RoomTypeRequest request) {

        if (repository.existsByClient_IdAndCode(clientId, request.getCode())) {
            throw new IllegalArgumentException("Room Type code already exists.");
        }

        Client client = clientRepository.findById(clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Client not found."));

        RoomType roomType = mapper.toEntity(request);
        roomType.setClient(client);

        RoomType savedRoomType = repository.save(roomType);

        return mapper.toResponse(savedRoomType);
    }

    @Override
    public RoomTypeResponse updateRoomType(
            Long clientId,
            Long roomTypeId,
            RoomTypeRequest request) {

        RoomType roomType = repository
                .findByIdAndClient_Id(roomTypeId, clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Room Type not found."));

        if (repository.existsByClient_IdAndCodeAndIdNot(
                clientId,
                request.getCode(),
                roomTypeId)) {

            throw new IllegalArgumentException("Room Type code already exists.");
        }

        mapper.updateEntity(roomType, request);

        RoomType updatedRoomType = repository.save(roomType);

        return mapper.toResponse(updatedRoomType);
    }

    @Override
    public void deleteRoomType(Long clientId, Long roomTypeId) {

        RoomType roomType = repository
                .findByIdAndClient_Id(roomTypeId, clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Room Type not found."));

        repository.delete(roomType);
    }

    @Override
    @Transactional(readOnly = true)
    public RoomTypeResponse getRoomTypeById(
            Long clientId,
            Long roomTypeId) {

        RoomType roomType = repository
                .findByIdAndClient_Id(roomTypeId, clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Room Type not found."));

        return mapper.toResponse(roomType);
    }

    @Override
    @Transactional(readOnly = true)
    public List<RoomTypeResponse> getAllRoomTypes(Long clientId) {

        List<RoomType> roomTypes =
                repository.findAllByClient_IdOrderByNameAsc(clientId);

        return mapper.toResponseList(roomTypes);
    }

}