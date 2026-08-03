package com.moonlight.pms.modules.wings.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moonlight.pms.modules.wings.entity.Wing;

public interface WingRepository extends JpaRepository<Wing, Long> {

    Optional<Wing> findByIdAndClientId(
            Long id,
            Long clientId
    );

    List<Wing> findByClientIdOrderByNameAsc(
            Long clientId
    );

    List<Wing> findByClientIdAndBuilding_IdOrderByNameAsc(
            Long clientId,
            Long buildingId
    );

    boolean existsByClientIdAndBuilding_IdAndCode(
            Long clientId,
            Long buildingId,
            String code
    );

}