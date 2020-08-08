package com.rmit.group3.spring.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Employees{


    @Id
    private Long employeeID;

    private String firstName;
    private String lastName;
    private String email;

    public Long getEmployeeID() {
        return employeeID;
    }

    public Employees() {
    }

    public void setEmployeeID(Long employeeID) {
        this.employeeID = employeeID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private Date created_At;
    private Date updated_At;

    @PrePersist
    protected void onCreate() {
        this.created_At = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updated_At = new Date();
    }

}
