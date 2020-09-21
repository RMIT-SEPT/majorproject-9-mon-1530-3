package com.rmit.group3.spring.Repositories;

import org.springframework.data.repository.CrudRepository;
import com.rmit.group3.spring.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer,Long> {

    @Override
    Iterable<Customer> findAllById(Iterable<Long> iterable);
}
