import { Booking } from './Booking';
import { Showtime } from './Showtime';
import { BookingStatus } from '../enums/BookingStatus';
import { Wallet } from './Wallet';
import { Review } from './Review';
import { Movie } from './Movie';

const users: User[] = []; 

export class User {
  private bookings: Booking[] = [];
  private reviews: Review[] = [];
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

  public login(): boolean {
    const user = users.find(
      u => u.email === this.email && u.password === this.password
    );
    if (user) {
      console.log(`${this.fullName} has logged in successfully.`);
      return true;
    } else {
      console.log('Login failed: Invalid email or password.');
      return false;
    }
  }

  public viewBookingHistory(): Booking[] {
    console.log(`${this.fullName}'s booking history:`);
    return this.bookings;
  }

  public addBooking(booking: Booking): void {
    this.bookings.push(booking);
  }

  public leaveReview(movie: Movie, rating: number, comment: string): void {
    const review = new Review(`R${Date.now()}`, rating, comment, this, movie);
    this.reviews.push(review);
    movie.addReview(review);
    console.log(`${this.fullName} left a review for ${movie.getTitle()}`);
  }

  public getUserName(): string {
    return this.fullName;
  }

  public getWallet(): Wallet {
    return this.wallet;
  }
}