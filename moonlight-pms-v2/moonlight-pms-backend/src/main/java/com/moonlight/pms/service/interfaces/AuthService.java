package com.moonlight.pms.service.interfaces;

import com.moonlight.pms.dto.auth.AuthResponse;
import com.moonlight.pms.dto.auth.LoginRequest;
import com.moonlight.pms.dto.auth.RegisterWorkspaceRequest;
import com.moonlight.pms.dto.auth.SignupRequest;

public interface AuthService {

    AuthResponse signup(SignupRequest request);

    AuthResponse registerWorkspace(RegisterWorkspaceRequest request);

    AuthResponse login(LoginRequest request);

    AuthResponse me();
}