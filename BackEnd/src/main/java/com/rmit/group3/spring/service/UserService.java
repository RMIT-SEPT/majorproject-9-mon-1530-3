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

    public User login(User user){
        String username = user.getUserID();
        String password = user.getPassword();
        System.out.println(username + "!!!!" + password);
        Boolean loginUser = userRepository.existsByUsernameAndPassword(username, password);

        if (!loginUser){
            throw new UserException("Error: User Doesn't Exist");
        }

        return user;
    }
}
