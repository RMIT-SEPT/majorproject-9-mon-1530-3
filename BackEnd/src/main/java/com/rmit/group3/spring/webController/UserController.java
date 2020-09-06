package com.rmit.group3.spring.webController;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.rmit.group3.spring.model.Booking;
import com.rmit.group3.spring.model.User;
import com.rmit.group3.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> userLogin(@Valid @RequestBody User user, BindingResult result){
        if(result.hasErrors()){
            Map<String,String> errorMap = new HashMap<>();

            for(FieldError error:result.getFieldErrors()){
                return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }

        }

        boolean loginUser = userService.login(user);

        /*HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "http://localhost:3000");
        headers.add("Access-Control-Allow-Credentials", "true");*/

        return new ResponseEntity<>(loginUser, HttpStatus.ACCEPTED);
    }


}