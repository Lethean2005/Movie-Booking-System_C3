import { Booking } from './Booking';
import { Showtime } from './Showtime';
import { BookingStatus } from '../enums/BookingStatus';
import { Wallet } from './Wallet';

const users: User[] = []; 

export class User {
  constructor(
    private userID: string,
    private fullName: string,
    private email: string,
    private password: string,
    private wallet: Wallet,
  ) {}

  public register(): void {
    const existingUser = users.find(user => user.email === this.email);
    if (existingUser) {
      console.log('Registration failed: Email already exists.');
        return;
    }
    users.push(this);
    console.log(`${this.fullName} has registered successfully.`);
  }

  public login(): void {
    const user = users.find(
      u => u.email === this.email && u.password === this.password
    );
    if (user) {
      console.log(`${this.fullName} has logged in successfully.`);
    } else {
      console.log('Login failed: Invalid email or password.');
    }
  }

  public viewBookingHistory(): Booking[] {
    
    console.log(`${this.fullName}'s booking history:`);
    return [];
  }

  public leaveReview(): void {
   
    console.log(`${this.fullName} is leaving a review.`);
    
  }
  public getUserName(): string {
    return this.fullName;
  }
}