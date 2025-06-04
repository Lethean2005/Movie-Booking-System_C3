"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Showtime = void 0;
class Showtime {
    constructor(showtimeID, startTime, cinema, movie, hall) {
        this.showtimeID = showtimeID;
        this.startTime = startTime;
        this.cinema = cinema;
        this.movie = movie;
        this.hall = hall;
    }
    getShowtimeID() {
        return this.showtimeID;
    }
    getMovie() {
        return this.movie;
    }
    getCinema() {
        return this.cinema;
    }
    getHall() {
        return this.hall;
    }
    getStartTime() {
        return this.startTime;
    }
    addshowtime(startTime, cinema, movie) {
        this.startTime = startTime;
        this.cinema = cinema;
        this.movie = movie;
    }
}
exports.Showtime = Showtime;
