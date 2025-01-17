package com.rmit.group3.spring.service;

import com.rmit.group3.spring.Repositories.BookingRepository;
import com.rmit.group3.spring.exceptions.BookingException;
import com.rmit.group3.spring.model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking saveOrUpdateBooking(Booking booking) {
    try {
        return bookingRepository.save(booking);
    }
    catch(Exception e)
        {
            throw new BookingException("Booking " + booking.getBookingID() + "already exists");
        }
    }

    public boolean deleteBookingByID(Long bookingID) {
        Booking booking = bookingRepository.findByBookingID(bookingID);

        if(booking == null) {
            return false;
        }

        bookingRepository.delete(booking);
        return true;
    }

    public Booking findBookingByID(Long bookingID)
    {
        Booking booking = bookingRepository.findByBookingID(bookingID);

        if(booking == null)
        {
            throw new BookingException("Cannot find booking with ID " + bookingID);
        }
        return booking;
    }

    public Iterable<Booking> getAllBookings()
    {
        return bookingRepository.findAll();
    }
}
