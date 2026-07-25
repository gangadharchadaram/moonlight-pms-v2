package com.moonlight.pms.modules.roomtypes.repository;

import com.moonlight.pms.modules.roomtypes.entity.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RoomTypeRepository extends JpaRepository<RoomType, Long> {

  Optional<RoomType> findByIdAndClient_Id(Long id, Long clientId);

List<RoomType> findAllByClient_IdOrderByNameAsc(Long clientId);

boolean existsByClient_IdAndCode(Long clientId, String code);

boolean existsByClient_IdAndCodeAndIdNot(
        Long clientId,
        String code,
        Long id
);
}