package com.rmit.group3.spring.webController;

import com.rmit.group3.spring.model.Business;
import com.rmit.group3.spring.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/business")
public class BusinessController {

    @Autowired
    private BusinessService businessService;

    @PostMapping("")
    public ResponseEntity<Business> createNewBusiness(@RequestBody Business business)
    {
        Business business1 = businessService.saveOrUpdateBusiness(business);
        return new ResponseEntity<>(business, HttpStatus.CREATED);
    }
}
