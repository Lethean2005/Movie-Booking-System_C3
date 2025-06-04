import { Hall } from "./Hall";
import { Seat } from "./Seat";
import { Ticket } from "./Ticket";

export class DigitalTicket extends Ticket {
    constructor(
        ticketID: string,
        seat: Seat[],
        hallname: string,
        private qrCode: string,
        private bookingref: string
    ) {
        super(ticketID, seat, hallname);
    }

    public verifyTicket(): boolean {
        // Add your verification logic
        return this.qrCode.length > 0 && this.bookingref.length > 0;
    }

    public getQRCode(): string {
        return this.qrCode;
    }
    public getBookingRef(): string {
        return this.bookingref;
    }
}
