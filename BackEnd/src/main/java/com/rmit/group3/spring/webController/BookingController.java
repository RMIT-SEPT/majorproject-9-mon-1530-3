package com.rmit.group3.spring.webController;

import com.rmit.group3.spring.model.Booking;
import com.rmit.group3.spring.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.awt.print.Book;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("")
    public ResponseEntity<?> createNewBooking(@Valid @RequestBody Booking booking, BindingResult result)
    {
        if(result.hasErrors()){
            Map<String,String> errorMap = new HashMap<>();

            for(FieldError error:result.getFieldErrors()){
                return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }

        }
        Booking booking1 = bookingService.saveOrUpdateBooking(booking);
        return new ResponseEntity<>(booking1.getBookingID(), HttpStatus.CREATED);
    }

    @GetMapping("/get")
    public ResponseEntity<?> getBookingByID(@Valid @RequestBody Booking booking)
    {
        Booking booking1 = bookingService.findBookingByID(booking.getBookingID());
        return new ResponseEntity<Booking>(booking1, HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteBooking(@Valid @RequestBody Booking booking)
    {
        System.out.println((booking.getBookingID()) +" deleted.");
        boolean deleted = bookingService.deleteBookingByID(booking.getBookingID());
        return new ResponseEntity<>(deleted, HttpStatus.ACCEPTED);
    }

    @GetMapping("/all")
    public Iterable<Booking> getAllBookings()
    {
        return bookingService.getAllBookings();
    }




}
