package com.moonlight.pms.modules.buildings.service;

import java.util.List;

import com.moonlight.pms.modules.buildings.dto.BuildingRequest;
import com.moonlight.pms.modules.buildings.dto.BuildingResponse;

public interface BuildingService {

    BuildingResponse createBuilding(
            Long clientId,
            Long userId,
            BuildingRequest request
    );

    BuildingResponse updateBuilding(
            Long clientId,
            Long userId,
            Long buildingId,
            BuildingRequest request
    );

    void deleteBuilding(
            Long clientId,
            Long buildingId
    );

    BuildingResponse getBuildingById(
            Long clientId,
            Long buildingId
    );

    List<BuildingResponse> getAllBuildings(
            Long clientId
    );

}