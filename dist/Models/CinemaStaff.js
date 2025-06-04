"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CinemaStaff = void 0;
class CinemaStaff {
    constructor(staffID, name) {
        this.staffID = staffID;
        this.name = name;
    }
    Payamount(amount) {
    }
    verifyTicket(ticket) {
        const isValid = ticket.verifyTicket();
        if (isValid) {
            console.log(`Ticket with ref ${ticket.getBookingRef()} is valid.`);
        }
        else {
            console.log(`Ticket with ref ${ticket.getBookingRef()} is invalid.`);
        }
        return isValid;
    }
}
exports.CinemaStaff = CinemaStaff;
