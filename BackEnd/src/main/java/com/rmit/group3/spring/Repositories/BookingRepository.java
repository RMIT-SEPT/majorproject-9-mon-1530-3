package com.rmit.group3.spring.Repositories;

import com.rmit.group3.spring.model.Booking;
import org.springframework.data.repository.CrudRepository;

public interface BookingRepository extends CrudRepository<Booking, Long> {

    @Override
    Iterable<Booking> findAllById(Iterable<Long> iterable);
}
