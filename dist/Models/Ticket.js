"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
class Ticket {
    constructor(ticketID, seats, Hallname) {
        this.ticketID = ticketID;
        this.seats = seats;
        this.Hallname = Hallname;
    }
    getHallName() {
        return this.Hallname;
    }
}
exports.Ticket = Ticket;
