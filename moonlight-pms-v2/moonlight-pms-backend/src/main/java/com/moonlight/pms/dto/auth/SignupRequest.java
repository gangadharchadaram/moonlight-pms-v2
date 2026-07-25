package com.moonlight.pms.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SignupRequest {

    @NotBlank
    private String businessName;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName; 

    @Email
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private String phone;
}