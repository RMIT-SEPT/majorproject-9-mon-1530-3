package com.rmit.group3.spring.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class UserException extends RuntimeException{
    public UserException(String message){
        super(message);
    }
}
