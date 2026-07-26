package com.moonlight.pms.modules.rooms.repository;

import com.moonlight.pms.modules.rooms.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findByClientIdAndActiveTrue(Long clientId);

    Optional<Room> findByIdAndClientId(Long id, Long clientId);

    Optional<Room> findByClientIdAndRoomNumber(Long clientId, String roomNumber);

    boolean existsByClientIdAndRoomNumber(Long clientId, String roomNumber);
}