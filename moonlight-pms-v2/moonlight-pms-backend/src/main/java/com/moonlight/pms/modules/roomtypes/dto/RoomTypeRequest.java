package com.moonlight.pms.modules.roomtypes.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

public class RoomTypeRequest {

    @NotBlank(message = "Room type code is required")
    @Size(max = 20, message = "Code cannot exceed 20 characters")
    private String code;

    @NotBlank(message = "Room type name is required")
    @Size(max = 100, message = "Name cannot exceed 100 characters")
    private String name;

    @Size(max = 500, message = "Description cannot exceed 500 characters")
    private String description;

    @NotNull(message = "Maximum adults is required")
    @Min(value = 1, message = "Maximum adults must be at least 1")
    private Integer maxAdults;

    @NotNull(message = "Maximum children is required")
    @Min(value = 0, message = "Maximum children cannot be negative")
    private Integer maxChildren;

    @DecimalMin(value = "0.0", inclusive = false,
            message = "Room size must be greater than 0")
    private BigDecimal roomSize;

    private String roomSizeUnit;

    @NotNull(message = "Base price is required")
    @DecimalMin(value = "0.0", inclusive = false,
            message = "Base price must be greater than 0")
    private BigDecimal basePrice;

    @DecimalMin(value = "0.0",
            message = "Extra bed price cannot be negative")
    private BigDecimal extraBedPrice;

    private Boolean smokingAllowed = false;

    private Boolean active = true;

    public RoomTypeRequest() {
    }

    // Getters & Setters

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code != null ? code.trim().toUpperCase() : null;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name != null ? name.trim() : null;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description != null ? description.trim() : null;
    }

    public Integer getMaxAdults() {
        return maxAdults;
    }

    public void setMaxAdults(Integer maxAdults) {
        this.maxAdults = maxAdults;
    }

    public Integer getMaxChildren() {
        return maxChildren;
    }

    public void setMaxChildren(Integer maxChildren) {
        this.maxChildren = maxChildren;
    }

    public BigDecimal getRoomSize() {
        return roomSize;
    }

    public void setRoomSize(BigDecimal roomSize) {
        this.roomSize = roomSize;
    }

    public String getRoomSizeUnit() {
        return roomSizeUnit;
    }

    public void setRoomSizeUnit(String roomSizeUnit) {
        this.roomSizeUnit = roomSizeUnit;
    }

    public BigDecimal getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(BigDecimal basePrice) {
        this.basePrice = basePrice;
    }

    public BigDecimal getExtraBedPrice() {
        return extraBedPrice;
    }

    public void setExtraBedPrice(BigDecimal extraBedPrice) {
        this.extraBedPrice = extraBedPrice;
    }

    public Boolean getSmokingAllowed() {
        return smokingAllowed;
    }

    public void setSmokingAllowed(Boolean smokingAllowed) {
        this.smokingAllowed = smokingAllowed;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}