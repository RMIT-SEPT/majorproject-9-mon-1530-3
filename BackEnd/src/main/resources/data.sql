INSERT into Customer (username,first_Name,last_Name,email) VALUES
    ('HANSON', 'Ian', 'Hanson', 'ian.hanson@email.com'),
    ('RANKIN', 'Leila', 'Rankin', 'leila.rankin@email.com'),
    ('FOREMAN', 'Max', 'Foreman', 'max.foreman@email.com'),
    ('HOLMES', 'Jessie', 'Holmes', 'jessie@holmes@email.com');

INSERT into Employee (username,service,first_Name,last_Name,email,admin,start_Time,end_Time,employeeID) VALUES
    ('CHADWICK','hairdressing' ,'Marisa', 'Chadwick','chadwick@work.com',true,'09:30:00','17:30:00','1'),
    ('FENTON', 'nails','Rick', 'Fenton','fenton@work.com',false,'08:00:00','16:00:00','2'),
    ('WRIGHT', 'hairdressing','Rylee', 'Wright','wright@work.com',false,'09:00:00','17:00:00','3'),
    ('CLARKSON', 'nails','Katelyn', 'Clarkson','clarkson@work.com',true,'15:00:00','21:00:00','4');

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