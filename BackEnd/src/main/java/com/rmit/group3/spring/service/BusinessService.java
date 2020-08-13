package com.rmit.group3.spring.service;

import com.rmit.group3.spring.Repositories.BusinessRepository;
import com.rmit.group3.spring.model.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessService {
    @Autowired
    private BusinessRepository businessRepository;

    public Business saveOrUpdateBusiness(Business business)
    {
        return businessRepository.save(business);
    }
}

