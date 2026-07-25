package com.moonlight.pms.security;

import com.moonlight.pms.entity.User;
import lombok.Getter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Getter
public class CustomUserDetails implements UserDetails {

    private final Long id;
    private final Long clientId;
    private final String email;
    private final String password;
    private final boolean active;
    private final Collection<? extends SimpleGrantedAuthority> authorities;

    public CustomUserDetails(User user) {

        this.id = user.getId();
        this.clientId = user.getClient().getId();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.active = user.getActive();

        this.authorities = List.of(
                new SimpleGrantedAuthority("ROLE_" + user.getRole().name())
        );
    }

    @Override
    public Collection<? extends SimpleGrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return active;
    }

    @Override
    public boolean isAccountNonLocked() {
        return active;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return active;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }
}