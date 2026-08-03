package com.moonlight.pms.modules.rooms.dto;

import java.time.LocalDateTime;

import com.moonlight.pms.enums.HousekeepingStatus;
import com.moonlight.pms.enums.RoomStatus;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RoomResponse {

    private Long id;

    private String roomNumber;

    private String roomName;

    private Long roomTypeId;

    private String roomTypeName;

   private Long buildingId;
private String buildingName;

private Long wingId;
private String wingName;

private Long floorId;
private String floorName;

    private Integer adultCapacity;

    private Integer childCapacity;

    private Integer bedCount;

    private RoomStatus roomStatus;

    private HousekeepingStatus housekeepingStatus;

    private Boolean smokingAllowed;

    private Boolean active;

    private String description;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private Long createdBy;

    private Long updatedBy;
}