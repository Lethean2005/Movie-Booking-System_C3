// ------------------------------
// imports
// ------------------------------
import { Hall } from "./Hall";
import { Seat } from "./Seat";
import { Ticket } from "./Ticket";

export class DigitalTicket extends Ticket {
  constructor(
    ticketID: string,
    seats: Seat[],
    hallname: string,
    private qrCode: string,
    private bookingref: string
  ) {
    super(ticketID, seats, hallname);
  }
  // -----------------------------
  // Add your verification logic
  // -----------------------------

  // ------------------------------
  // verifyTicket
  // ------------------------------
  public verifyTicket(): boolean {
    return this.qrCode.length > 0 && this.bookingref.length > 0;
  }

  // ------------------------------
  // Getters

  public getQRCode(): string {
    return this.qrCode;
  }
  public getBookingRef(): string {
    return this.bookingref;
  }
  public getSeats(): Seat[] {
    return (this as any).seats;
  }
}
