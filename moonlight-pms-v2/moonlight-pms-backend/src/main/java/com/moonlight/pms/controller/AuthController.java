package com.moonlight.pms.controller;

import com.moonlight.pms.dto.auth.AuthResponse;
import com.moonlight.pms.dto.auth.LoginRequest;
import com.moonlight.pms.dto.auth.RegisterWorkspaceRequest;
import com.moonlight.pms.dto.auth.SignupRequest;
import com.moonlight.pms.response.ApiResponse;
import com.moonlight.pms.service.interfaces.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<AuthResponse>> signup(
            @Valid @RequestBody SignupRequest request) {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Signup successful.",
                        authService.signup(request)
                )
        );
    }

    @PostMapping("/register-workspace")
public ResponseEntity<ApiResponse<AuthResponse>> registerWorkspace(
        @Valid @RequestBody RegisterWorkspaceRequest request) {

    System.out.println("========== CONTROLLER HIT ==========");

    return ResponseEntity.ok(
            new ApiResponse<>(
                    true,
                    "Workspace registered successfully.",
                    authService.registerWorkspace(request)
            )
    );
}

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> login(
            @Valid @RequestBody LoginRequest request) {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Login successful.",
                        authService.login(request)
                )
        );
    }

    @GetMapping("/me")
    public ResponseEntity<ApiResponse<AuthResponse>> me() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Success",
                        authService.me()
                )
        );
    }
}