import { BookingStatus } from "../enums/BookingStatus";


export class Booking{
    constructor(
        private bookigID: number,
        private Date: Date,
        private status: BookingStatus,
        private TotalPrice: number,
    ){
        
    }
    public confirmBooking(): void {
        this.status = BookingStatus.CONFIRMED;
    }
    public cancelBooking(): void {
        this.status = BookingStatus.CANCELLED;
    }
    public getTotalPrice(): number {
        return this.TotalPrice;
    }
}