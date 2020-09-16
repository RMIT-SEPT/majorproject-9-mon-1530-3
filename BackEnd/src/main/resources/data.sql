INSERT into Customer (username,first_Name,last_Name,email) VALUES
    ('HANSON', 'Ian', 'Hanson', 'ian.hanson@email.com'),
    ('RANKIN', 'Leila', 'Rankin', 'leila.rankin@email.com'),
    ('FOREMAN', 'Max', 'Foreman', 'max.foreman@email.com'),
    ('HOLMES', 'Jessie', 'Holmes', 'jessie@holmes@email.com');

INSERT into Employee (employeeID,first_Name,last_Name,email) VALUES
    ('9923', 'Marisa', 'Chadwick','chadwick@work.com'),
    ('9924', 'Rick', 'Fenton','fenton@work.com'),
    ('9925', 'Rylee', 'Wright','wright@work.com'),
    ('9926', 'Katelyn', 'Clarkson','clarkson@work.com');

INSERT into Booking (bookingID, customerID, employeeID, confirmed, date) VALUES
    ('1','1234', '9923', 'True','2020-08-03'),
    ('2','1235', '9924', 'True','2020-08-07'),
    ('3','1236', '9925', 'False','2020-08-08'),
    ('4','1237', '9926', 'False','2020-08-20');