package com.rmit.group3.spring.service;

import com.rmit.group3.spring.Repositories.EmployeeRepository;
import com.rmit.group3.spring.exceptions.EmployeeException;
import com.rmit.group3.spring.model.Employee;
import com.rmit.group3.spring.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee saveOrUpdateEmployee(Employee employee)
    {
        try{
            return employeeRepository.save(employee);
        }
        catch(Exception e)
        {
            throw new EmployeeException("Employee " + employee.getEmployeeID() + " has error in updating");
        }
    }

    public Employee findEmployeeByID(Long employeeID){
        Employee employee = employeeRepository.findByEmployeeID(employeeID);

        if(employee == null){
            throw new EmployeeException("Cannot find employee with ID "+employeeID);
        }
        return employee;
    }

    public Iterable<Employee> getAllEmployees(){return employeeRepository.findAll();}

    public boolean deleteEmployeeByID(Long employeeID){

        Employee employee = employeeRepository.findByEmployeeID(employeeID);

        if (employee == null) {
            return false;
        }
        else {
            employeeRepository.delete(employee);
            return true;
        }
    }

    public Employee findByUser(User user){
        String username = user.getUsername();
        return employeeRepository.findByUsername(username);
    }
}
