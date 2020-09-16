package com.rmit.group3.spring.service;

import com.rmit.group3.spring.Repositories.CustomerRepository;
import com.rmit.group3.spring.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public Customer saveOrUpdateCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    //Checks for existing username
    public boolean checkUsername(Customer customer){
        return customerRepository.existsByUsername(customer.getUsername());
    }

}
