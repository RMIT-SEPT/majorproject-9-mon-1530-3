package com.rmit.group3.spring.Repositories;

import com.rmit.group3.spring.model.Business;
import org.springframework.data.repository.CrudRepository;

public interface BusinessRepository extends CrudRepository<Business, Long> {

    @Override
    Iterable<Business> findAllById(Iterable<Long> iterable);
}
