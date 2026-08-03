package com.moonlight.pms.modules.wings.mapper;

import org.springframework.stereotype.Component;

import com.moonlight.pms.modules.buildings.entity.Building;
import com.moonlight.pms.modules.wings.dto.WingRequest;
import com.moonlight.pms.modules.wings.dto.WingResponse;
import com.moonlight.pms.modules.wings.entity.Wing;

@Component
public class WingMapper {

    public Wing toEntity(
            WingRequest request,
            Building building) {

        return Wing.builder()
                .building(building)
                .code(request.getCode())
                .name(request.getName())
                .description(request.getDescription())
                .active(request.getActive())
                .build();
    }

    public void updateEntity(
            Wing wing,
            WingRequest request,
            Building building) {

        wing.setBuilding(building);
        wing.setCode(request.getCode());
        wing.setName(request.getName());
        wing.setDescription(request.getDescription());
        wing.setActive(request.getActive());

    }

    public WingResponse toResponse(Wing wing) {

        return WingResponse.builder()
                .id(wing.getId())
                .buildingId(wing.getBuilding().getId())
                .buildingName(wing.getBuilding().getName())
                .code(wing.getCode())
                .name(wing.getName())
                .description(wing.getDescription())
                .active(wing.getActive())
                .createdAt(wing.getCreatedAt())
                .updatedAt(wing.getUpdatedAt())
                .build();

    }

}