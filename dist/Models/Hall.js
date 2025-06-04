"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hall = void 0;
class Hall {
    constructor(hallID, hallName, totalSeats, availableSeats, seatStatus) {
        this.hallID = hallID;
        this.hallName = hallName;
        this.totalSeats = totalSeats;
        this.availableSeats = availableSeats;
        this.seatStatus = seatStatus;
        this.seats = [];
    }
    addSeat(seat) {
        this.seats.push(seat);
    }
    getSeats() {
        return this.seats;
    }
    getAvailableSeats() {
        return this.seats.filter(seat => seat.isAvailable());
    }
    getHallName() {
        return this.hallName;
    }
}
exports.Hall = Hall;
