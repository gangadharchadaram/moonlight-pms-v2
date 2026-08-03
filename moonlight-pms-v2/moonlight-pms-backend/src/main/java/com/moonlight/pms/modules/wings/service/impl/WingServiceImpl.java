package com.moonlight.pms.modules.wings.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moonlight.pms.exception.BadRequestException;
import com.moonlight.pms.exception.ResourceNotFoundException;
import com.moonlight.pms.modules.buildings.entity.Building;
import com.moonlight.pms.modules.buildings.repository.BuildingRepository;
import com.moonlight.pms.modules.wings.dto.WingRequest;
import com.moonlight.pms.modules.wings.dto.WingResponse;
import com.moonlight.pms.modules.wings.entity.Wing;
import com.moonlight.pms.modules.wings.mapper.WingMapper;
import com.moonlight.pms.modules.wings.repository.WingRepository;
import com.moonlight.pms.modules.wings.service.WingService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class WingServiceImpl implements WingService {

    private final WingRepository wingRepository;

    private final BuildingRepository buildingRepository;

    private final WingMapper wingMapper;

    @Override
    public WingResponse createWing(
            Long clientId,
            Long userId,
            WingRequest request) {

        Building building = buildingRepository
                .findByIdAndClientId(
                        request.getBuildingId(),
                        clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Building not found."));

        if (wingRepository.existsByClientIdAndBuilding_IdAndCode(
                clientId,
                building.getId(),
                request.getCode())) {

            throw new BadRequestException(
                    "Wing code already exists.");

        }

        Wing wing = wingMapper.toEntity(
                request,
                building);

        wing.setClientId(clientId);

        wing.setCreatedBy(userId);

        wing.setUpdatedBy(userId);

        Wing savedWing = wingRepository.save(wing);

        return wingMapper.toResponse(savedWing);
    }

    @Override
    public WingResponse updateWing(
            Long clientId,
            Long userId,
            Long wingId,
            WingRequest request) {

        Wing wing = wingRepository
                .findByIdAndClientId(
                        wingId,
                        clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Wing not found."));

        Building building = buildingRepository
                .findByIdAndClientId(
                        request.getBuildingId(),
                        clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Building not found."));

        if (!wing.getCode().equals(request.getCode())
                && wingRepository.existsByClientIdAndBuilding_IdAndCode(
                        clientId,
                        building.getId(),
                        request.getCode())) {

            throw new BadRequestException(
                    "Wing code already exists.");

        }

        wingMapper.updateEntity(
                wing,
                request,
                building);

        wing.setUpdatedBy(userId);

        Wing updatedWing = wingRepository.save(wing);

        return wingMapper.toResponse(updatedWing);
    }

    @Override
    public void deleteWing(
            Long clientId,
            Long wingId) {

        Wing wing = wingRepository
                .findByIdAndClientId(
                        wingId,
                        clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Wing not found."));

        wing.setActive(false);

        wingRepository.save(wing);
    }

    @Override
    @Transactional(readOnly = true)
    public WingResponse getWingById(
            Long clientId,
            Long wingId) {

        Wing wing = wingRepository
                .findByIdAndClientId(
                        wingId,
                        clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Wing not found."));

        return wingMapper.toResponse(wing);
    }

    @Override
    @Transactional(readOnly = true)
    public List<WingResponse> getAllWings(
            Long clientId) {

        return wingRepository
                .findByClientIdOrderByNameAsc(clientId)
                .stream()
                .map(wingMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<WingResponse> getWingsByBuilding(
            Long clientId,
            Long buildingId) {

        return wingRepository
                .findByClientIdAndBuilding_IdOrderByNameAsc(
                        clientId,
                        buildingId)
                .stream()
                .map(wingMapper::toResponse)
                .toList();
    }

}