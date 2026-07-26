package com.moonlight.pms.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final CustomUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        System.out.println("========================================");
        System.out.println("JWT FILTER EXECUTED");
        System.out.println("Request URI : " + request.getRequestURI());

        final String authHeader = request.getHeader("Authorization");

        System.out.println("Authorization Header : " + authHeader);

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            System.out.println("Bearer token not found.");
            filterChain.doFilter(request, response);
            return;
        }

        String jwt = authHeader.substring(7);

        System.out.println("JWT Token : " + jwt);

        try {

            String email = jwtService.extractUsername(jwt);

            System.out.println("Email extracted from JWT : " + email);

            if (email != null &&
                    SecurityContextHolder.getContext().getAuthentication() == null) {

                CustomUserDetails userDetails =
                        (CustomUserDetails) userDetailsService.loadUserByUsername(email);

                System.out.println("User loaded from DB : " + userDetails.getUsername());

                boolean isValid = jwtService.isTokenValid(jwt, userDetails);

                System.out.println("Is Token Valid : " + isValid);

                if (isValid) {

                    UsernamePasswordAuthenticationToken authToken =
                            new UsernamePasswordAuthenticationToken(
                                    userDetails,
                                    null,
                                    userDetails.getAuthorities());

                    authToken.setDetails(
                            new WebAuthenticationDetailsSource()
                                    .buildDetails(request));

                    SecurityContextHolder.getContext().setAuthentication(authToken);

                    System.out.println("Authentication stored successfully.");
                } else {
                    System.out.println("JWT validation failed.");
                }

            } else {

                if (email == null) {
                    System.out.println("Email extracted from token is NULL.");
                }

                if (SecurityContextHolder.getContext().getAuthentication() != null) {
                    System.out.println("SecurityContext already contains authentication.");
                }
            }

        } catch (Exception ex) {
            System.out.println("JWT Exception : " + ex.getMessage());
            ex.printStackTrace();
        }

        filterChain.doFilter(request, response);
    }
}