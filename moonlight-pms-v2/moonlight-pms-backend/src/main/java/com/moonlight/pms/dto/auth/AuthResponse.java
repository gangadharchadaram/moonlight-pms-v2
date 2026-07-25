package com.moonlight.pms.dto.auth;

import com.moonlight.pms.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {

    private String token;

    private Long userId;

    private Long clientId;

    private String firstName;

    private String lastName;

    private String email;

    private Role role;
}