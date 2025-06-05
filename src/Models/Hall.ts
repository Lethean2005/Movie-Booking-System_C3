// ------------------------------
// imports
// ------------------------------
import { Seat } from "./Seat";

export class Hall {
  private seats: Seat[] = [];
  constructor(
    private hallID: string,
    private hallName: string,
    private totalSeats: number,
    private availableSeats: number,
    private seatStatus: Map<string, string>
  ) {}
  // -----------------------------
  // Getters and add seat
  // -----------------------------
  public addSeat(seat: Seat): void {
    this.seats.push(seat);
  }
  public getSeats(): Seat[] {
    return this.seats;
  }
  public getAvailableSeats(): Seat[] {
    return this.seats.filter((seat) => seat.isAvailable());
  }
  public getHallName(): string {
    return this.hallName;
  }
}
