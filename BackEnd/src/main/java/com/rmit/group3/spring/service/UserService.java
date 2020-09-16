package com.rmit.group3.spring.service;

import com.rmit.group3.spring.Repositories.UserRepository;
import com.rmit.group3.spring.exceptions.UserException;
import com.rmit.group3.spring.model.Customer;
import com.rmit.group3.spring.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService{
    @Autowired
    private UserRepository userRepository;

    public User saveOrUpdateUser(User user) { return userRepository.save(user);}

    public boolean checkUsername(String username){ return userRepository.existsByUsername(username); }

    public boolean login(User user){
        String username = user.getUsername();
        String password = user.getPassword();
        boolean loginUser = userRepository.existsByUsernameAndPassword(username, password);

        return loginUser;
    }

    public User createFromCustomer(Customer customer){
        User newUser = new User();
        newUser.setUsername(customer.getUsername());
        newUser.setPassword(customer.getPassword());
        newUser.setUserType("Customer");

        boolean existingUsername = checkUsername(newUser.getUsername());

        if (!existingUsername){
            return saveOrUpdateUser(newUser);
        }

        return null;
    }
}
