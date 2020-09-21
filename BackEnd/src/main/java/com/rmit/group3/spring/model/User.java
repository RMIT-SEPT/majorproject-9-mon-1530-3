package com.rmit.group3.spring.model;

import org.springframework.data.annotation.PersistenceConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class User {
    @Id
    @Column(unique = true)
    private String username;

    @NotBlank
    private String password;

    //Customer or Employee
    private String userType;

    public String getUserType(){ return userType; }

    public String getUsername(){ return username; }

    public String getPassword(){ return password; }

    //Set Username
    public void setUsername(String username) { this.username = username; }

    //Reset Password
    public void setPassword(String password){ this.password = password; }

    //Change User Type
    public void setUserType(String userType){this.userType = userType; }
}
