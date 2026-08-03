package com.moonlight.pms.modules.buildings.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moonlight.pms.modules.buildings.entity.Building;

public interface BuildingRepository extends JpaRepository<Building, Long> {

    Optional<Building> findByIdAndClientId(
            Long id,
            Long clientId
    );

    List<Building> findByClientIdOrderByNameAsc(
            Long clientId
    );

    List<Building> findByClientIdAndActiveTrueOrderByNameAsc(Long clientId);

    boolean existsByClientIdAndCode(
            Long clientId,
            String code
    );

    boolean existsByClientIdAndCodeAndIdNot(
            Long clientId,
            String code,
            Long id
    );

}