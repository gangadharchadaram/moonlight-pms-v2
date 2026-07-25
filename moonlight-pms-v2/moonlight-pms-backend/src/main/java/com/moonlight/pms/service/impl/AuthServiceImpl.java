package com.moonlight.pms.service.impl;

import com.moonlight.pms.dto.auth.AuthResponse;
import com.moonlight.pms.dto.auth.LoginRequest;
import com.moonlight.pms.dto.auth.SignupRequest;
import com.moonlight.pms.entity.Client;
import com.moonlight.pms.entity.User;
import com.moonlight.pms.enums.Role;
import com.moonlight.pms.exception.BadRequestException;
import com.moonlight.pms.exception.ResourceNotFoundException;
import com.moonlight.pms.repository.ClientRepository;
import com.moonlight.pms.repository.UserRepository;
import com.moonlight.pms.security.CustomUserDetails;
import com.moonlight.pms.security.JwtService;
import com.moonlight.pms.service.interfaces.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import com.moonlight.pms.dto.auth.RegisterWorkspaceRequest;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final ClientRepository clientRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    // ==========================================================
    // Legacy Signup
    // ==========================================================

    @Override
    public AuthResponse signup(SignupRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Email already registered.");
        }

        Client client = new Client();
        client.setBusinessName(request.getBusinessName());
        client.setEmail(request.getEmail());
        client.setPhone(request.getPhone());
        client.setSubscriptionPlan("TRIAL");
        client.setSubscriptionExpiry(LocalDate.now().plusDays(30));
        client.setActive(true);

        client = clientRepository.save(client);

        User user = new User();
        user.setClient(client);
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.OWNER);
        user.setActive(true);

        user = userRepository.save(user);

        String token = jwtService.generateToken(new CustomUserDetails(user));

        return AuthResponse.builder()
                .token(token)
                .userId(user.getId())
                .clientId(client.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }

    // ==========================================================
    // New Workspace Registration
    // ==========================================================

    @Override
    @Transactional
    public AuthResponse registerWorkspace(RegisterWorkspaceRequest request) {

        if (userRepository.existsByEmail(request.getAdmin().getEmail())) {
            throw new BadRequestException("Email already registered.");
        }

        // Create Client
        Client client = new Client();

        client.setBusinessName(request.getHotel().getHotelName());
        client.setEmail(request.getAdmin().getEmail());
        client.setPhone(request.getAdmin().getPhone());
        client.setTimezone(request.getHotel().getTimezone());

        client.setSubscriptionPlan(
                request.getWorkspace().getSubscription().toUpperCase()
        );

        client.setSubscriptionExpiry(LocalDate.now().plusDays(30));

        client.setActive(true);

        client = clientRepository.save(client);

        // Create Owner User
        User user = new User();

        user.setClient(client);
        user.setFirstName(request.getAdmin().getFirstName());
        user.setLastName(request.getAdmin().getLastName());
        user.setEmail(request.getAdmin().getEmail());
        user.setPhone(request.getAdmin().getPhone());

        user.setPassword(
                passwordEncoder.encode(request.getAdmin().getPassword())
        );

        user.setRole(Role.OWNER);
        user.setActive(true);

        user = userRepository.save(user);

        String token = jwtService.generateToken(
                new CustomUserDetails(user)
        );

        return AuthResponse.builder()
                .token(token)
                .userId(user.getId())
                .clientId(client.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }

    // ==========================================================
    // Login
    // ==========================================================

    @Override
    public AuthResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        String token = jwtService.generateToken(
                new CustomUserDetails(user)
        );

        return AuthResponse.builder()
                .token(token)
                .userId(user.getId())
                .clientId(user.getClient().getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }

    // ==========================================================
    // Current User
    // ==========================================================

    @Override
    public AuthResponse me() {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        CustomUserDetails userDetails =
                (CustomUserDetails) authentication.getPrincipal();

        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        return AuthResponse.builder()
                .userId(user.getId())
                .clientId(user.getClient().getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }
}