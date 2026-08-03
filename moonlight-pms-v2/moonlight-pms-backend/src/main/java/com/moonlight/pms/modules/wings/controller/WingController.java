package com.moonlight.pms.modules.wings.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.moonlight.pms.security.CustomUserDetails;
import com.moonlight.pms.modules.wings.dto.WingRequest;
import com.moonlight.pms.modules.wings.dto.WingResponse;
import com.moonlight.pms.modules.wings.service.WingService;
import com.moonlight.pms.response.ApiResponse;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/wings")
@RequiredArgsConstructor
@Validated
public class WingController {

    private final WingService wingService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse<WingResponse> createWing(
            @AuthenticationPrincipal CustomUserDetails user,
            @Valid @RequestBody WingRequest request) {

        WingResponse response = wingService.createWing(
                user.getClientId(),
                user.getId(),
                request);

        return ApiResponse.success(
                "Wing created successfully",
                response);
    }

    @PutMapping("/{id}")
    public ApiResponse<WingResponse> updateWing(
            @PathVariable Long id,
            @AuthenticationPrincipal CustomUserDetails user,
            @Valid @RequestBody WingRequest request) {

        WingResponse response = wingService.updateWing(
                user.getClientId(),
                user.getId(),
                id,
                request);

        return ApiResponse.success(
                "Wing updated successfully",
                response);
    }

    @GetMapping("/{id}")
    public ApiResponse<WingResponse> getWingById(
            @PathVariable Long id,
            @AuthenticationPrincipal CustomUserDetails user) {

        return ApiResponse.success(
                "Wing fetched successfully",
                wingService.getWingById(
                        user.getClientId(),
                        id));
    }

    @GetMapping
    public ApiResponse<List<WingResponse>> getAllWings(
            @AuthenticationPrincipal CustomUserDetails user) {

        return ApiResponse.success(
                "Wings fetched successfully",
                wingService.getAllWings(
                        user.getClientId()));
    }

    @GetMapping("/building/{buildingId}")
    public ApiResponse<List<WingResponse>> getByBuilding(
            @PathVariable Long buildingId,
            @AuthenticationPrincipal CustomUserDetails user) {

        return ApiResponse.success(
                "Wings fetched successfully",
                wingService.getWingsByBuilding(
                        user.getClientId(),
                        buildingId));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteWing(
            @PathVariable Long id,
            @AuthenticationPrincipal CustomUserDetails user) {

        wingService.deleteWing(
                user.getClientId(),
                id);

        return ApiResponse.success(
                "Wing deleted successfully",
                null);
    }

}