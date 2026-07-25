package com.moonlight.pms.dto.auth;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class RegisterWorkspaceRequest {

    @Valid
    @NotNull
    private HotelDto hotel;

    @Valid
    @NotNull
    private AdminDto admin;

    @Valid
    @NotNull
    private WorkspaceDto workspace;
}