package com.moonlight.pms.modules.wings.dto;

import java.time.LocalDateTime;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WingResponse {

    private Long id;

    private Long buildingId;

    private String buildingName;

    private String code;

    private String name;

    private String description;

    private Boolean active;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}