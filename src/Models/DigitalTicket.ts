import { Hall } from "./Hall";
import { Seat } from "./Seat";
import { Ticket } from "./Ticket";

export class DigitalTicket extends Ticket {
    constructor(
        ticketID: string,
        seat: Seat[],
        private qrCode: string,
        private bookingref: string
    ) {
        super(ticketID, seat);
    }

    public verifyTicket(): boolean {
        // Add your verification logic
        return this.qrCode.length > 0 && this.bookingref.length > 0;
    }

    public getSeat(): Seat[] {
        return this.seat; 
    }
}
