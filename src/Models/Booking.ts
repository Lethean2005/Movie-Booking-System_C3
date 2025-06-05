// ------------------------------
// imports
// ------------------------------
import { BookingStatus } from "../enums/BookingStatus";
import { Seat } from "./Seat";
import { Ticket } from "./Ticket";
import { Showtime } from "./Showtime";
import { User } from "./User";

export class Booking {
  private seats: Seat[] = [];
  private ticket: Ticket | null = null;
  constructor(
    private bookingID: string,
    private date: Date,
    private status: BookingStatus,
    private totalPrice: number,
    private showtime: Showtime,
    private user: User
  ) {}
  // -----------------------------
  // Getters and Setters
  // -----------------------------
  public addSeat(seat: Seat): void {
    this.seats.push(seat);
  }
  public getSeats(): Seat[] {
    return this.seats;
  }
  public confirmBooking(): void {
    this.status = BookingStatus.CONFIRMED;
  }
  public cancelBooking(): void {
    this.status = BookingStatus.CANCELLED;
  }
  public getTotalPrice(): number {
    return this.totalPrice;
  }
  public setTicket(ticket: Ticket): void {
    this.ticket = ticket;
  }
  public getTicket(): Ticket | null {
    return this.ticket;
  }
  public getShowtime(): Showtime {
    return this.showtime;
  }
  public getStatus(): BookingStatus {
    return this.status;
  }
}
