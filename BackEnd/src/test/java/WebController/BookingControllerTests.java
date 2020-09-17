package WebController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.group3.spring.Application;
import com.rmit.group3.spring.model.Booking;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.sql.Time;
import java.util.Date;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


//Testing bookings controller
@SpringBootTest(classes = Application.class)
@AutoConfigureMockMvc
public class BookingControllerTests {

    @Autowired
    private MockMvc mvc;

    //used to create a json message to send to controller based upon a created booking object
    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    @Test //Should return all example bookings created in data.sql
    void testGetAllBookings() throws Exception{

        mvc.perform(get("/api/booking/all").contentType("application/json"))
                .andDo(print()).andExpect(status().isOk());
    }

    @Test   //should post a created booking and return an HttpStatus of created
    void postBasicBooking() throws Exception{

        Booking testBooking = new Booking((long) 1, (long) 2,
                new Date(2020,9,18),
                new Time(9,00,00),
                true);

        mvc.perform(post("/api/booking").content(
                asJsonString(testBooking)).contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated()).andDo(print());
                //prints all created bookings to terminal
    }

    @Test   //should return a single booking (booking with ID 1 in data.sql) and status is ok
    void getBookingByID() throws Exception{

        //Dummy booking (to preset a set booking ID)
        Booking testBooking = new Booking((long) 1, (long) 2,
                new Date(2020,9,18),
                new Time(9,00,00),
                true);

        testBooking.setBookingID((long) 1);

        mvc.perform(get("/api/booking/get").content(
                asJsonString(testBooking)).contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)).andDo(print())
                .andExpect(status().isOk());

    }

    @Test //should delete booking 2 from data.sql, should return status as accepted
    void deleteBookingByID() throws Exception{

        //Dummy booking (to preset a set booking ID)
        Booking testBooking = new Booking((long) 2, (long) 2,
                new Date(2020,9,18),
                new Time(9,00,00),
                true);
        testBooking.setBookingID((long) 2);

        mvc.perform(post("/api/booking/delete").content(
                asJsonString(testBooking)).contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)).andDo(print())
                .andExpect(status().isAccepted());

    }

}