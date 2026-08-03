package com.moonlight.pms.modules.wings.service;

import java.util.List;

import com.moonlight.pms.modules.wings.dto.WingRequest;
import com.moonlight.pms.modules.wings.dto.WingResponse;

public interface WingService {

    WingResponse createWing(
            Long clientId,
            Long userId,
            WingRequest request);

    WingResponse updateWing(
            Long clientId,
            Long userId,
            Long wingId,
            WingRequest request);

    void deleteWing(
            Long clientId,
            Long wingId);

    WingResponse getWingById(
            Long clientId,
            Long wingId);

    List<WingResponse> getAllWings(
            Long clientId);

    List<WingResponse> getWingsByBuilding(
            Long clientId,
            Long buildingId);

}