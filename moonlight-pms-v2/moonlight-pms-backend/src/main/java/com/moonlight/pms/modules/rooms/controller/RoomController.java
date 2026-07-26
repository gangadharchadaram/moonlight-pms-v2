package com.moonlight.pms.modules.rooms.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.moonlight.pms.response.ApiResponse;
import com.moonlight.pms.security.CustomUserDetails;
import com.moonlight.pms.modules.rooms.dto.RoomRequest;
import com.moonlight.pms.modules.rooms.dto.RoomResponse;
import com.moonlight.pms.modules.rooms.service.RoomService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/rooms")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    /**
     * Create Room
     */
    @PostMapping
    public ResponseEntity<ApiResponse<RoomResponse>> createRoom(
            @Valid @RequestBody RoomRequest request,
            Authentication authentication) {

        CustomUserDetails user =
                (CustomUserDetails) authentication.getPrincipal();

        RoomResponse response = roomService.createRoom(
                user.getClientId(),
                user.getId(),
                request);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(
                        "Room created successfully.",
                        response));
    }

    /**
     * Update Room
     */
    @PutMapping("/{roomId}")
    public ResponseEntity<ApiResponse<RoomResponse>> updateRoom(
            @PathVariable Long roomId,
            @Valid @RequestBody RoomRequest request,
            Authentication authentication) {

        CustomUserDetails user =
                (CustomUserDetails) authentication.getPrincipal();

        RoomResponse response = roomService.updateRoom(
                user.getClientId(),
                user.getId(),
                roomId,
                request);

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Room updated successfully.",
                        response));
    }

    /**
     * Get All Rooms
     */
    @GetMapping
    public ResponseEntity<ApiResponse<List<RoomResponse>>> getAllRooms(
            Authentication authentication) {

        CustomUserDetails user =
                (CustomUserDetails) authentication.getPrincipal();

        List<RoomResponse> response =
                roomService.getAllRooms(user.getClientId());

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Rooms fetched successfully.",
                        response));
    }

    /**
     * Get Room By Id
     */
    @GetMapping("/{roomId}")
    public ResponseEntity<ApiResponse<RoomResponse>> getRoomById(
            @PathVariable Long roomId,
            Authentication authentication) {

        CustomUserDetails user =
                (CustomUserDetails) authentication.getPrincipal();

        RoomResponse response =
                roomService.getRoomById(
                        user.getClientId(),
                        roomId);

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Room fetched successfully.",
                        response));
    }

    /**
     * Delete Room (Soft Delete)
     */
    @DeleteMapping("/{roomId}")
    public ResponseEntity<ApiResponse<Void>> deleteRoom(
            @PathVariable Long roomId,
            Authentication authentication) {

        CustomUserDetails user =
                (CustomUserDetails) authentication.getPrincipal();

        roomService.deleteRoom(
                user.getClientId(),
                roomId);

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Room deleted successfully.",
                        null));
    }

}