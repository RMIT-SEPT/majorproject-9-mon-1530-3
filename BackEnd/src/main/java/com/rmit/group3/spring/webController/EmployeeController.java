package com.rmit.group3.spring.webController;

import com.rmit.group3.spring.model.Employee;
import com.rmit.group3.spring.model.User;
import com.rmit.group3.spring.service.EmployeeService;
import com.rmit.group3.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<?> createNewEmployee(@Valid @RequestBody Employee employee, BindingResult result)
    {
        if(result.hasErrors()){
            Map<String,String> errorMap = new HashMap<>();

            for(FieldError error:result.getFieldErrors()){
                return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }

        }

        User newUser = userService.createFromEmployee(employee);

        Employee employee1 = employeeService.saveOrUpdateEmployee(employee);
        return new ResponseEntity<>(employee, HttpStatus.CREATED);
    }

    @GetMapping("/get")
    public ResponseEntity<?> getEmployeeByID(@Valid @RequestBody Employee employee){
        Employee employee1 = employeeService.findEmployeeByID(employee.getEmployeeID());

        return new ResponseEntity<Employee>(employee1,HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateExistingEmployee(@Valid @RequestBody Employee employee, BindingResult result)
    {

        if(result.hasErrors()){
            Map<String,String> errorMap = new HashMap<>();

            for(FieldError error:result.getFieldErrors()){
                return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }

        }

        Employee employeeOld = employeeService.findEmployeeByID(employee.getEmployeeID());

        if(employeeOld.getEmployeeID() == employee.getEmployeeID()){

            Employee employeeNew = employeeService.saveOrUpdateEmployee(employee);
            return new ResponseEntity<>(true,HttpStatus.OK);

        }

        return new ResponseEntity<>(false,HttpStatus.NOT_MODIFIED);

    }

    @GetMapping("/all")
    public Iterable<Employee> getAllEmployees(){return employeeService.getAllEmployees();}

    @PostMapping("/delete")
    public ResponseEntity<Boolean> deleteEmployeeByID(@Valid @RequestBody Employee employee){

        Boolean deleted = employeeService.deleteEmployeeByID(employee.getEmployeeID());

        return new ResponseEntity<>(deleted, HttpStatus.ACCEPTED);


    }
}
