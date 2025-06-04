"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seat = void 0;
const SeatStatus_1 = require("../enums/SeatStatus");
class Seat {
    constructor(seatID, row, column, hall, seatZone, seatStatus) {
        this.seatID = seatID;
        this.row = row;
        this.column = column;
        this.hall = hall;
        this.seatZone = seatZone;
        this.seatStatus = seatStatus;
    }
    getSeatID() {
        return this.seatID;
    }
    getZone() {
        return this.seatZone;
    }
    getStatus() {
        return this.seatStatus;
    }
    setStatus(status) {
        this.seatStatus = status;
    }
    isAvailable() {
        return this.seatStatus === SeatStatus_1.SeatStatus.AVAILABLE;
    }
    getHall() {
        return this.hall;
    }
    getAvailableSeats() {
        return [];
    }
}
exports.Seat = Seat;
