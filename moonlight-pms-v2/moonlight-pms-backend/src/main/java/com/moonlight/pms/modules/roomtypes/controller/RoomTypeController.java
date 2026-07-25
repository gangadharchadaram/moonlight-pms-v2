package com.moonlight.pms.modules.roomtypes.controller;

import com.moonlight.pms.modules.roomtypes.dto.RoomTypeRequest;
import com.moonlight.pms.modules.roomtypes.dto.RoomTypeResponse;
import com.moonlight.pms.modules.roomtypes.service.RoomTypeService;
import com.moonlight.pms.response.ApiResponse;
import com.moonlight.pms.security.CustomUserDetails;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/room-types")
@RequiredArgsConstructor
public class RoomTypeController {

    private final RoomTypeService roomTypeService;

    @PostMapping
    public ResponseEntity<ApiResponse<RoomTypeResponse>> createRoomType(
            @AuthenticationPrincipal CustomUserDetails user,
            @Valid @RequestBody RoomTypeRequest request) {

        RoomTypeResponse response = roomTypeService.createRoomType(
                user.getClientId(),
                request
        );

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(
                        "Room Type created successfully.",
                        response
                ));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<RoomTypeResponse>> updateRoomType(
            @AuthenticationPrincipal CustomUserDetails user,
            @PathVariable Long id,
            @Valid @RequestBody RoomTypeRequest request) {

        RoomTypeResponse response = roomTypeService.updateRoomType(
                user.getClientId(),
                id,
                request
        );

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Room Type updated successfully.",
                        response
                )
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<RoomTypeResponse>> getRoomType(
            @AuthenticationPrincipal CustomUserDetails user,
            @PathVariable Long id) {

        RoomTypeResponse response = roomTypeService.getRoomTypeById(
                user.getClientId(),
                id
        );

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Room Type fetched successfully.",
                        response
                )
        );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<RoomTypeResponse>>> getAllRoomTypes(
            @AuthenticationPrincipal CustomUserDetails user) {

        List<RoomTypeResponse> response = roomTypeService.getAllRoomTypes(
                user.getClientId()
        );

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Room Types fetched successfully.",
                        response
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteRoomType(
            @AuthenticationPrincipal CustomUserDetails user,
            @PathVariable Long id) {

        roomTypeService.deleteRoomType(
                user.getClientId(),
                id
        );

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Room Type deleted successfully.",
                        null
                )
        );
    }
}