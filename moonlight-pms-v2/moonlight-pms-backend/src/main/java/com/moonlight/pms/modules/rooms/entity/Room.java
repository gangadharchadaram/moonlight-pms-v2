package com.moonlight.pms.modules.rooms.entity;

import java.time.LocalDateTime;

import com.moonlight.pms.enums.HousekeepingStatus;
import com.moonlight.pms.enums.RoomStatus;
import com.moonlight.pms.modules.roomtypes.entity.RoomType;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(
    name = "rooms",
    uniqueConstraints = {
        @UniqueConstraint(
            name = "uk_room_number_client",
            columnNames = {"client_id", "room_number"}
        )
    }
)
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "client_id", nullable = false)
    private Long clientId;

    @Column(name = "room_number", nullable = false, length = 20)
    private String roomNumber;

    @Column(name = "room_name", length = 100)
    private String roomName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_type_id", nullable = false)
    private RoomType roomType;

    @Column(name = "building_id")
    private Long buildingId;

    @Column(name = "wing_id")
    private Long wingId;

    @Column(name = "floor_id")
    private Long floorId;

    @Column(name = "adult_capacity")
    private Integer adultCapacity;

    @Column(name = "child_capacity")
    private Integer childCapacity;

    @Column(name = "bed_count")
    private Integer bedCount;

    @Enumerated(EnumType.STRING)
    @Column(name = "room_status", nullable = false)
    private RoomStatus roomStatus;

    @Enumerated(EnumType.STRING)
    @Column(name = "housekeeping_status", nullable = false)
    private HousekeepingStatus housekeepingStatus;

    @Column(name = "smoking_allowed")
    private Boolean smokingAllowed = false;

    @Column(name = "active")
    private Boolean active = true;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "created_by", updatable = false)
    private Long createdBy;

    @Column(name = "updated_by")
    private Long updatedBy;

    @PrePersist
    public void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    public void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}