package com.rmit.group3.spring.service;

import com.rmit.group3.spring.Repositories.EmployeeRepository;
import com.rmit.group3.spring.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee saveOrUpdateEmployee(Employee employee)
    {
        return employeeRepository.save(employee);
    }
}
