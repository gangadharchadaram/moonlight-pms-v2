package com.moonlight.pms.modules.roomtypes.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class RoomTypeResponse {

    private Long id;

    private String code;

    private String name;

    private String description;

    private Integer maxAdults;

    private Integer maxChildren;

    private BigDecimal roomSize;

    private String roomSizeUnit;

    private BigDecimal basePrice;

    private BigDecimal extraBedPrice;

    private Boolean smokingAllowed;

    private Boolean active;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public RoomTypeResponse() {
    }

    public RoomTypeResponse(
            Long id,
            String code,
            String name,
            String description,
            Integer maxAdults,
            Integer maxChildren,
            BigDecimal roomSize,
            String roomSizeUnit,
            BigDecimal basePrice,
            BigDecimal extraBedPrice,
            Boolean smokingAllowed,
            Boolean active,
            LocalDateTime createdAt,
            LocalDateTime updatedAt) {

        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.maxAdults = maxAdults;
        this.maxChildren = maxChildren;
        this.roomSize = roomSize;
        this.roomSizeUnit = roomSizeUnit;
        this.basePrice = basePrice;
        this.extraBedPrice = extraBedPrice;
        this.smokingAllowed = smokingAllowed;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Getters & Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}