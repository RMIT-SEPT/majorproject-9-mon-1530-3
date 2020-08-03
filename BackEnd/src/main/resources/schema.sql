DROP table if exists Bookings;

CREATE table Bookings(
    bookingID INT auto_increment PRIMARY KEY,
    custName VARCHAR(250) not NULL,
    empID VARCHAR(250) not NULL,
    date DATE not NULL
);