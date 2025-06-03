import  { BookingStatus } from "./BookingStatus";
export class Booking {
  constructor(
    public bookingID: number,
    public date: Date,
    public status: BookingStatus,
    public totalPrice: number
  ) {}

  confirm() { this.status = BookingStatus.CONFIRMED; }
  cancel() { this.status = BookingStatus.CANCELLED; }
  getTotalCost(): number { return this.totalPrice; }
}