import { User } from './Models/User';
import { Showtime } from './Models/Showtime';
import { Movie } from './Models/Movie';
import { Cinema } from './Models/Cinema';
import { Hall } from './Models/Hall';
import { Seat } from './Models/Seat';
import { SeatStatus } from './enums/SeatStatus';

// Create test data
const user1 = new User('U001', 'John Doe', 'john.doe@example.com', 'password123', 0);
const user2 = new User('U002', 'Jane Smith', 'jane.smith@example.com', 'password456', 0);
user1.register();
user2.register();
// Attempt to register a user with an existing email
const duplicateUser = new User('U003', 'Duplicate User', 'john.doe@example.com',  'password789', 0);
duplicateUser.register();
console.log(user1.login()); 
console.log(user2.login()); 

// Attempt to login with incorrect credentials
const invalidUser = new User('U004', 'Invalid User', 'invalid@example.com', 'wrongpassword', 0);
console.log(invalidUser.login()); 
