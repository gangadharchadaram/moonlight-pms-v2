package com.moonlight.pms.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "clients")
public class Client extends BaseEntity {

    @Column(nullable = false)
    private String businessName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String phone;

    private String address;

    private String timezone = "Asia/Kolkata";

    private String subscriptionPlan = "TRIAL";

    private LocalDate subscriptionExpiry;

    @Column(nullable = false)
    private Boolean active = true;
}