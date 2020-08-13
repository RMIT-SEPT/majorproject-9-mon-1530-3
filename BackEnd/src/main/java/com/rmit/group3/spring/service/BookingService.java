package com.rmit.group3.spring.service;

import com.rmit.group3.spring.Repositories.BookingRepository;
import com.rmit.group3.spring.model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking saveOrUpdateBooking(Booking booking)
    {
        return bookingRepository.save(booking);
    }
}
