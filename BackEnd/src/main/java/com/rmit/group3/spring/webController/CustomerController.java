package com.rmit.group3.spring.webController;


import com.rmit.group3.spring.Repositories.CustomerRepository;
import com.rmit.group3.spring.model.Customer;
import com.rmit.group3.spring.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("")
    public ResponseEntity<Customer> createNewPerson(@RequestBody Customer customer)
    {
        Customer customer1 = customerService.saveOrUpdateCustomer(customer);
        return new ResponseEntity<>(customer, HttpStatus.CREATED);
    }

}
