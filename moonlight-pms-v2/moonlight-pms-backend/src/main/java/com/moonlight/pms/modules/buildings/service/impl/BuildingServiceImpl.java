package com.moonlight.pms.modules.buildings.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moonlight.pms.exception.BadRequestException;
import com.moonlight.pms.exception.ResourceNotFoundException;
import com.moonlight.pms.modules.buildings.dto.BuildingRequest;
import com.moonlight.pms.modules.buildings.dto.BuildingResponse;
import com.moonlight.pms.modules.buildings.entity.Building;
import com.moonlight.pms.modules.buildings.mapper.BuildingMapper;
import com.moonlight.pms.modules.buildings.repository.BuildingRepository;
import com.moonlight.pms.modules.buildings.service.BuildingService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class BuildingServiceImpl implements BuildingService {

    private final BuildingRepository buildingRepository;
    private final BuildingMapper buildingMapper;

    @Override
    public BuildingResponse createBuilding(
            Long clientId,
            Long userId,
            BuildingRequest request) {

        if (buildingRepository.existsByClientIdAndCode(
                clientId,
                request.getCode())) {

            throw new BadRequestException(
                    "Building code already exists.");
        }

        Building building = buildingMapper.toEntity(request);

        building.setClientId(clientId);
        building.setCreatedBy(userId);
        building.setUpdatedBy(userId);

        Building saved = buildingRepository.save(building);

        return buildingMapper.toResponse(saved);
    }

    @Override
    public BuildingResponse updateBuilding(
            Long clientId,
            Long userId,
            Long buildingId,
            BuildingRequest request) {

        Building building = buildingRepository
                .findByIdAndClientId(buildingId, clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Building not found."));

        if (!building.getCode().equals(request.getCode())
                && buildingRepository.existsByClientIdAndCode(
                        clientId,
                        request.getCode())) {

            throw new BadRequestException(
                    "Building code already exists.");
        }

        buildingMapper.updateEntity(building, request);

        building.setUpdatedBy(userId);

        Building updated = buildingRepository.save(building);

        return buildingMapper.toResponse(updated);
    }

    @Override
    public void deleteBuilding(
            Long clientId,
            Long buildingId) {

        Building building = buildingRepository
                .findByIdAndClientId(buildingId, clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Building not found."));

        building.setActive(false);

        buildingRepository.save(building);
    }

    @Override
    @Transactional(readOnly = true)
    public BuildingResponse getBuildingById(
            Long clientId,
            Long buildingId) {

        Building building = buildingRepository
                .findByIdAndClientId(buildingId, clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Building not found."));

        return buildingMapper.toResponse(building);
    }

    @Override
    @Transactional(readOnly = true)
    public List<BuildingResponse> getAllBuildings(
            Long clientId) {

        return buildingRepository
                .findByClientIdOrderByNameAsc(clientId)
                .stream()
                .map(buildingMapper::toResponse)
                .toList();
    }

}