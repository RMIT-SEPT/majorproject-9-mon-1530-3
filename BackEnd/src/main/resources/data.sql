INSERT into Customers (customerID,first_Name,last_Name,email) VALUES
    ('1234', 'Ian', 'Hanson', 'ian.hanson@email.com'),
    ('1235', 'Leila', 'Rankin', 'leila.rankin@email.com'),
    ('1236', 'Max', 'Foreman', 'max.foreman@email.com'),
    ('1237', 'Jessie', 'Holmes', 'jessie@holmes@email.com');

INSERT into Employees (employeeID,first_Name,last_Name,email) VALUES
    ('9923', 'Marisa', 'Chadwick','chadwick@work.com'),
    ('9924', 'Rick', 'Fenton','fenton@work.com'),
    ('9925', 'Rylee', 'Wright','wright@work.com'),
    ('9926', 'Katelyn', 'Clarkson','clarkson@work.com');

INSERT into Bookings (bookingID, customerID, employeeID, date) VALUES
    ('1','1234', '9923', '2020-08-03'),
    ('2','1235', '9924', '2020-08-07'),
    ('3','1236', '9925', '2020-08-08'),
    ('4','1237', '9926', '2020-08-20');