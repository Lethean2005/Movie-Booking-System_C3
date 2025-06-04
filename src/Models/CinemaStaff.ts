import { DigitalTicket } from "./DigitalTicket";

export class CinemaStaff {
    constructor(
        private staffID: string,
        private name: string,
    ){
        
    }
    public Payamount(amount: number): void {
        
    }
    public verifyTicket(ticket: DigitalTicket): boolean {
        const isValid = ticket.verifyTicket();
        if (isValid) {
            console.log(`Ticket with ref ${ticket.getBookingRef()} is valid.`);
        } else {
            console.log(`Ticket with ref ${ticket.getBookingRef()} is invalid.`);
        }
        return isValid;
    }
}