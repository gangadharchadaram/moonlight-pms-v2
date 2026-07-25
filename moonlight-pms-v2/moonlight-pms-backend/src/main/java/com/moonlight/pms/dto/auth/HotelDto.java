package com.moonlight.pms.dto.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class HotelDto {

    @NotBlank
    private String hotelName;

    private String businessType;

    private String country;

    private String state;

    private String city;

    private String timezone;

    private String currency;

    private Integer roomCount;
}