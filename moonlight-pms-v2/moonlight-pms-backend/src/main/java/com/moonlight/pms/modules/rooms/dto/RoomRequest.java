package com.moonlight.pms.modules.rooms.dto;

import com.moonlight.pms.enums.HousekeepingStatus;
import com.moonlight.pms.enums.RoomStatus;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RoomRequest {

    @NotBlank(message = "Room number is required")
    private String roomNumber;

    @NotBlank(message = "Room name is required")
    private String roomName;

    @NotNull(message = "Room Type is required")
    private Long roomTypeId;

    @NotNull(message = "Building is required")
    private Long buildingId;

    private Long wingId;

    private Long floorId;

    @NotNull(message = "Adult Capacity is required")
    @Min(value = 1, message = "Adult Capacity must be at least 1")
    private Integer adultCapacity;

    @NotNull(message = "Child Capacity is required")
    @Min(value = 0, message = "Child Capacity cannot be negative")
    private Integer childCapacity;

    @NotNull(message = "Bed Count is required")
    @Min(value = 1, message = "Bed Count must be at least 1")
    private Integer bedCount;

    @NotNull(message = "Room Status is required")
    private RoomStatus roomStatus;

    @NotNull(message = "Housekeeping Status is required")
    private HousekeepingStatus housekeepingStatus;

    @Builder.Default
    private Boolean smokingAllowed = false;

    @Builder.Default
    private Boolean active = true;

    private String description;
}