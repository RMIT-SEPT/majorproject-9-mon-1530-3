package com.rmit.group3.spring.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class User {
    @Id
    private String username;

    @NotBlank
    private String password;

    //Customer or Employee
    private String userType;

    public String getUserType(){ return userType; }

    public String getUserID(){ return username; }

    public String getPassword(){ return password; }

    //Reset Password
    public void setPassword(String password){ this.password = password; }

    //Change User Type
    public void setUserType(String userType){this.userType = userType; }
}
