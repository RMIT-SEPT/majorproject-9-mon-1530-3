package com.rmit.group3.spring.webController;


import com.rmit.group3.spring.Repositories.CustomerRepository;
import com.rmit.group3.spring.model.Customer;
import com.rmit.group3.spring.model.User;
import com.rmit.group3.spring.service.CustomerService;
import com.rmit.group3.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<?> createNewCustomer(@Valid @RequestBody Customer customer, BindingResult result)
    {
        if(result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();

            for (FieldError error : result.getFieldErrors()) {
                return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }

        }

        System.out.println(customer.getPassword());
        User newUser = userService.createFromCustomer(customer);

        if (newUser != null){
            Customer created = customerService.saveOrUpdateCustomer(customer);
            return new ResponseEntity<>(created, HttpStatus.CREATED);
        }

        return new ResponseEntity<>("username", HttpStatus.NOT_ACCEPTABLE);

    }

}
