package com.rmit.group3.spring.webController;

import com.rmit.group3.spring.model.Booking;
import com.rmit.group3.spring.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("")
    public ResponseEntity<Booking>  createNewBooking(@RequestBody Booking booking)
    {
        Booking booking1 = bookingService.saveOrUpdateBooking(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }
}
