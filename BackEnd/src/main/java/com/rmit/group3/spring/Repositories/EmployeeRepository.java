package com.rmit.group3.spring.Repositories;

import org.springframework.data.repository.CrudRepository;
import com.rmit.group3.spring.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee,Long>{

    @Override
    Iterable<Employee> findAllById(Iterable<Long> iterable);

}
