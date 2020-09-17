INSERT into Customer (username,first_Name,last_Name,email) VALUES
    ('HANSON', 'Ian', 'Hanson', 'ian.hanson@email.com'),
    ('RANKIN', 'Leila', 'Rankin', 'leila.rankin@email.com'),
    ('FOREMAN', 'Max', 'Foreman', 'max.foreman@email.com'),
    ('HOLMES', 'Jessie', 'Holmes', 'jessie@holmes@email.com');

INSERT into Employee (username,first_Name,last_Name,email,admin) VALUES
    ('CHADWICK', 'Marisa', 'Chadwick','chadwick@work.com',true),
    ('FENTON', 'Rick', 'Fenton','fenton@work.com',false),
    ('WRIGHT', 'Rylee', 'Wright','wright@work.com',false),
    ('CLARKSON', 'Katelyn', 'Clarkson','clarkson@work.com',true);

INSERT into Booking (bookingID, customerID, employeeID, confirmed, date) VALUES
    ('1','1234', '9923', 'True','2020-08-03'),
    ('2','1235', '9924', 'True','2020-08-07'),
    ('3','1236', '9925', 'False','2020-08-08'),
    ('4','1237', '9926', 'False','2020-08-20');

INSERT into User (username, password, user_type) VALUES
    ('CHADWICK', '1234', 'employee'),
    ('FENTON', '1234', 'employee'),
    ('WRIGHT', '1234', 'employee'),
    ('CLARKSON', '1234', 'employee'),
    ('HANSON', '1234', 'customer'),
    ('RANKIN', '1234', 'customer'),
    ('FOREMAN', '1234', 'customer'),
    ('HOLMES', '1234', 'customer');