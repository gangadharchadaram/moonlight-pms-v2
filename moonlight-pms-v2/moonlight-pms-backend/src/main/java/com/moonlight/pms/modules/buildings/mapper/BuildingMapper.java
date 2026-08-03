package com.moonlight.pms.modules.buildings.mapper;

import org.springframework.stereotype.Component;

import com.moonlight.pms.modules.buildings.dto.BuildingRequest;
import com.moonlight.pms.modules.buildings.dto.BuildingResponse;
import com.moonlight.pms.modules.buildings.entity.Building;

@Component
public class BuildingMapper {

    /**
     * Request -> Entity
     */
    public Building toEntity(BuildingRequest request) {

        return Building.builder()
                .code(request.getCode())
                .name(request.getName())
                .description(request.getDescription())
                .active(request.getActive())
                .build();
    }

    /**
     * Update Existing Entity
     */
    public void updateEntity(
            Building building,
            BuildingRequest request
    ) {

        building.setCode(request.getCode());
        building.setName(request.getName());
        building.setDescription(request.getDescription());
        building.setActive(request.getActive());

    }

    /**
     * Entity -> Response
     */
    public BuildingResponse toResponse(Building building) {

        return BuildingResponse.builder()
                .id(building.getId())
                .code(building.getCode())
                .name(building.getName())
                .description(building.getDescription())
                .active(building.getActive())
                .createdAt(building.getCreatedAt())
                .updatedAt(building.getUpdatedAt())
                .createdBy(building.getCreatedBy())
                .updatedBy(building.getUpdatedBy())
                .build();

    }

}