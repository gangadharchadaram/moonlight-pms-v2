package com.moonlight.pms.modules.buildings.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import com.moonlight.pms.response.ApiResponse;
import com.moonlight.pms.modules.buildings.dto.BuildingRequest;
import com.moonlight.pms.modules.buildings.dto.BuildingResponse;
import com.moonlight.pms.modules.buildings.service.BuildingService;
import com.moonlight.pms.security.CustomUserDetails;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/buildings")
@RequiredArgsConstructor
public class BuildingController {

    private final BuildingService buildingService;

@PostMapping
@ResponseStatus(HttpStatus.CREATED)
public ApiResponse<BuildingResponse> createBuilding(
        @AuthenticationPrincipal CustomUserDetails user,
        @Valid @RequestBody BuildingRequest request) {

    BuildingResponse response = buildingService.createBuilding(
            user.getClientId(),
            user.getId(),
            request);

    return ApiResponse.success(
            "Building created successfully",
            response);
}

@PutMapping("/{id}")
public ApiResponse<BuildingResponse> updateBuilding(
        @PathVariable Long id,
        @AuthenticationPrincipal CustomUserDetails user,
        @Valid @RequestBody BuildingRequest request) {

    BuildingResponse response = buildingService.updateBuilding(
            user.getClientId(),
            user.getId(),
            id,
            request);

    return ApiResponse.success(
            "Building updated successfully",
            response);
}

@GetMapping("/{id}")
public ApiResponse<BuildingResponse> getBuilding(
        @PathVariable Long id,
        @AuthenticationPrincipal CustomUserDetails user) {

    BuildingResponse response = buildingService.getBuildingById(
            user.getClientId(),
            id);

    return ApiResponse.success(
            "Building fetched successfully",
            response);
}

@GetMapping
public ApiResponse<List<BuildingResponse>> getAllBuildings(
        @AuthenticationPrincipal CustomUserDetails user) {

    List<BuildingResponse> response = buildingService.getAllBuildings(
            user.getClientId());

    return ApiResponse.success(
            "Buildings fetched successfully",
            response);
}

@DeleteMapping("/{id}")
public ApiResponse<Void> deleteBuilding(
        @PathVariable Long id,
        @AuthenticationPrincipal CustomUserDetails user) {

    buildingService.deleteBuilding(
            user.getClientId(),
            id);

    return ApiResponse.success(
            "Building deleted successfully",
            null);
}

}