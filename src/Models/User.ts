import { Booking } from './Booking';
import { Showtime } from './Showtime';
import { BookingStatus } from '../enums/BookingStatus';
import { Wallet } from './Wallet';

const users: User[] = []; 

export class User {
  constructor(
    public userID: string,
    public fullName: string,
    public email: string,
    public password: string,
    public wallet: Wallet,
  ) {}

  register(): void {
    const existingUser = users.find(user => user.email === this.email);
    if (existingUser) {
      console.log('Registration failed: Email already exists.');
        return;
    }
    users.push(this);
    console.log(`${this.fullName} has registered successfully.`);
  }

  login(): void {
    const user = users.find(
      u => u.email === this.email && u.password === this.password
    );
    if (user) {
      console.log(`${this.fullName} has logged in successfully.`);
    } else {
      console.log('Login failed: Invalid email or password.');
    }
  }

  viewBookingHistory(): Booking[] {
    
    console.log(`${this.fullName}'s booking history:`);
    return [];
  }

  leaveReview(): void {
   
    console.log(`${this.fullName} is leaving a review.`);
    
  }
}