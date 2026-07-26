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

    private String building;

    private String wing;

    @Min(value = 0, message = "Floor cannot be negative")
    private Integer floor;

    @NotNull
    @Min(value = 1)
    private Integer adultCapacity;

    @NotNull
    @Min(value = 0)
    private Integer childCapacity;

    @NotNull
    @Min(value = 1)
    private Integer bedCount;

    @NotNull(message = "Room Status is required")
    private RoomStatus roomStatus;

    @NotNull(message = "Housekeeping Status is required")
    private HousekeepingStatus housekeepingStatus;

    private Boolean smokingAllowed;

    private Boolean active;

    private String description;
}