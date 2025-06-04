"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const BookingStatus_1 = require("../enums/BookingStatus");
class Booking {
    constructor(bookingID, date, status, totalPrice, showtime, user) {
        this.bookingID = bookingID;
        this.date = date;
        this.status = status;
        this.totalPrice = totalPrice;
        this.showtime = showtime;
        this.user = user;
        this.seats = [];
        this.ticket = null;
    }
    addSeat(seat) {
        this.seats.push(seat);
    }
    getSeats() {
        return this.seats;
    }
    confirmBooking() {
        this.status = BookingStatus_1.BookingStatus.CONFIRMED;
    }
    cancelBooking() {
        this.status = BookingStatus_1.BookingStatus.CANCELLED;
    }
    getTotalPrice() {
        return this.totalPrice;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    getShowtime() {
        return this.showtime;
    }
    getStatus() {
        return this.status;
    }
}
exports.Booking = Booking;
