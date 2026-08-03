package com.moonlight.pms.modules.wings.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WingRequest {

    @NotNull(message = "Building is required")
    private Long buildingId;

    @NotBlank(message = "Wing code is required")
    private String code;

    @NotBlank(message = "Wing name is required")
    private String name;

    private String description;

    private Boolean active;

}