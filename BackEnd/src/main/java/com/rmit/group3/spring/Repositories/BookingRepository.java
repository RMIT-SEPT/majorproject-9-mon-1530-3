package com.rmit.group3.spring.Repositories;

import com.rmit.group3.spring.model.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Long> {

    Booking findByBookingID(String bookingID);
    @Override
    Iterable<Booking> findAll();


}
