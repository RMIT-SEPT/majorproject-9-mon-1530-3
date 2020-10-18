package com.rmit.group3.spring.webController;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.rmit.group3.spring.model.Booking;
import com.rmit.group3.spring.model.Employee;
import com.rmit.group3.spring.model.User;
import com.rmit.group3.spring.payload.JWTLoginSuccessResponse;
import com.rmit.group3.spring.security.JwtTokenProvider;
import com.rmit.group3.spring.service.EmployeeService;
import com.rmit.group3.spring.service.MapValidationErrorService;
import com.rmit.group3.spring.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.rmit.group3.spring.security.SecurityConstants.TOKEN_PREFIX;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private UserService userService;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> userLogin(@Valid @RequestBody User user, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) { return errorMap;}

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getUsername(),
                        user.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + tokenProvider.generateToken(authentication);

        User validatedUser = userService.getUserType(user.getUsername());
        String userType = validatedUser.getUserType();

        return ResponseEntity.ok(new JWTLoginSuccessResponse(true, jwt));
    }

    @PostMapping(value = "/token")
    public ResponseEntity<?> getUsername(@RequestBody String token, BindingResult result){
        if(result.hasErrors()){
            Map<String,String> errorMap = new HashMap<>();

            for(FieldError error:result.getFieldErrors()){
                return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }

        }

        String username = tokenProvider.getUsernameFromJWT(token);
        User user = userService.getUserType(username);
        String userType = null;
        if (employeeService.findByUser(user) != null){
            Employee employee = employeeService.findByUser(user);
            if(employee.isAdmin()){
                userType = "admin";
            } else{
                userType = user.getUserType();
            }
        } else{
            userType = user.getUserType();
        }

        Map<String, String> body = new HashMap<>();
        body.put("username", username);
        body.put("userType", userType);
        return new ResponseEntity<>(body, HttpStatus.ACCEPTED);
    }

}
