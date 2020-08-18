package com.rmit.group3.spring.webController;

import com.rmit.group3.spring.model.Employee;
import com.rmit.group3.spring.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("")
    public ResponseEntity<Employee> createNewEmployee(@RequestBody Employee employee)
    {
        Employee employee1 = employeeService.saveOrUpdateEmployee(employee);
        return new ResponseEntity<>(employee, HttpStatus.CREATED);
    }
}
