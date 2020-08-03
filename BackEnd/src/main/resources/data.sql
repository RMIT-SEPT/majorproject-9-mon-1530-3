INSERT into Customers (custID, firstName, lastName, email) VALUES
    ('1234', 'Ian', 'Hanson', 'ian.hanson@email.com'),
    ('1235', 'Leila', 'Rankin', 'leila.rankin@email.com'),
    ('1236', 'Max', 'Foreman', 'max.foreman@email.com'),
    ('1237', 'Jessie', 'Holmes', 'jessie@holmes@email.com');

INSERT into Employees (empID, firstName, lastName) VALUES
    ('9923', 'Marisa', 'Chadwick'),
    ('9924', 'Rick', 'Fenton'),
    ('9925', 'Rylee', 'Wright'),
    ('9926', 'Katelyn', 'Clarkson');

INSERT into Bookings (custID, empID, date) VALUES
    ('1234', '9923', '2020-08-03'),
    ('1235', '9924', '2020-08-07'),
    ('1236', '9925', '2020-08-08'),
    ('1237', '9926', '2020-08-20');
