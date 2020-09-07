package com.rmit.group3.spring.service;

import com.rmit.group3.spring.Repositories.UserRepository;
import com.rmit.group3.spring.exceptions.UserException;
import com.rmit.group3.spring.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService{
    @Autowired
    private UserRepository userRepository;

    public User saveOrUpdateUser(User user) { return userRepository.save(user);}

    public boolean login(User user){
        String username = user.getUsername();
        String password = user.getPassword();
        // System.out.println(username + "!!!!" + password);
        boolean loginUser = userRepository.existsByUsernameAndPassword(username, password);

        return loginUser;
    }
}
