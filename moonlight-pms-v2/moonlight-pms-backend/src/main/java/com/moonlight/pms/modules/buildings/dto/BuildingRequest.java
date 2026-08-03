package com.moonlight.pms.modules.buildings.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BuildingRequest {

    @NotBlank(message = "Building code is required")
    private String code;

    @NotBlank(message = "Building name is required")
    private String name;

    private String description;

    private Boolean active;

}