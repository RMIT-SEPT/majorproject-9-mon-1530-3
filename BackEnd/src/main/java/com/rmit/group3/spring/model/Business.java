package com.rmit.group3.spring.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Business {


    @Id
    private long businessID;

    private String email;
    private int phone;

    private Date created_At;
    private Date updated_At;

    public Business(){
    }

    public long getBusinessID() {
        return businessID;
    }

    public void setBusinessID(long businessID) {
        this.businessID = businessID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    @PrePersist
    protected void onCreate() {
        this.created_At = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updated_At = new Date();
    }


}
