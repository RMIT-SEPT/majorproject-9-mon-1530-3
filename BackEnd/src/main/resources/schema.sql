DROP table if exists Bookings;
DROP table if exists Customers;
DROP table if exists Employees;

CREATE table Customers(
    custID INT PRIMARY KEY,
    firstName VARCHAR(30) not NULL,
    lastName VARCHAR(30) not NULL,
    email VARCHAR(250) not NULL
);

CREATE table Employees(
    empID INT PRIMARY KEY,
    firstName VARCHAR(30),
    lastName VARCHAR(30)
);

CREATE table Bookings(
    bookingID INT auto_increment PRIMARY KEY,
    custID INT not NULL,
    empID INT not NULL,
    date DATE not NULL,
    FOREIGN KEY (custID) REFERENCES Customers(custID),
    FOREIGN KEY (empID) REFERENCES Employees(empID)
);
