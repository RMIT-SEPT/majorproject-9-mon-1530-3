INSERT into Customer (customerID,first_Name,last_Name,email) VALUES
    ('1234', 'Ian', 'Hanson', 'ian.hanson@email.com'),
    ('1235', 'Leila', 'Rankin', 'leila.rankin@email.com'),
    ('1236', 'Max', 'Foreman', 'max.foreman@email.com'),
    ('1237', 'Jessie', 'Holmes', 'jessie@holmes@email.com');

INSERT into Employee (employeeID,service,first_Name,last_Name,email,start_Time,end_Time) VALUES
    ('9923','Hairdressing','Marisa', 'Chadwick','chadwick@work.com','09:30:00','17:30:00'),
    ('9924', 'Hairdressing','Rick', 'Fenton','fenton@work.com','08:00:00','16:00:00'),
    ('9925', 'Nails','Rylee', 'Wright','wright@work.com','09:00:00','17:00:00'),
    ('9926', 'Nails','Katelyn', 'Clarkson','clarkson@work.com','15:00:00','21:00:00');

INSERT into Booking (bookingID, customerID, employeeID, confirmed, date) VALUES
    ('1','1234', '9923', 'True','2020-08-03'),
    ('2','1235', '9924', 'True','2020-08-07'),
    ('3','1236', '9925', 'False','2020-08-08'),
    ('4','1237', '9926', 'False','2020-08-20');