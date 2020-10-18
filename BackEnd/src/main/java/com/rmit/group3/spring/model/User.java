package com.rmit.group3.spring.model;

import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.util.Collection;

@Entity
public class User implements UserDetails{
    @Id
    @Column(unique = true)
    private String username;

    @NotBlank
    private String password;

    //Customer or Employee
    private String userType;

    public String getUserType(){ return userType; }

    public String getUsername(){ return username; }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    public String getPassword(){ return password; }

    //Set Username
    public void setUsername(String username) { this.username = username; }

    //Reset Password
    public void setPassword(String password){ this.password = password; }

    //Change User Type
    public void setUserType(String userType){this.userType = userType; }
}
