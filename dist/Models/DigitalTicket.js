"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalTicket = void 0;
const Ticket_1 = require("./Ticket");
class DigitalTicket extends Ticket_1.Ticket {
    constructor(ticketID, seats, hallname, qrCode, bookingref) {
        super(ticketID, seats, hallname);
        this.qrCode = qrCode;
        this.bookingref = bookingref;
    }
    verifyTicket() {
        // Add your verification logic
        return this.qrCode.length > 0 && this.bookingref.length > 0;
    }
    getQRCode() {
        return this.qrCode;
    }
    getBookingRef() {
        return this.bookingref;
    }
    getSeats() {
        return this.seats;
    }
}
exports.DigitalTicket = DigitalTicket;
