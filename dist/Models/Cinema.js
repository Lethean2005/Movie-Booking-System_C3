"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cinema = void 0;
class Cinema {
    constructor(cinemaID, name, location, halls) {
        this.cinemaID = cinemaID;
        this.name = name;
        this.location = location;
        this.halls = halls;
        this.showtimes = [];
    }
    listMovies() {
        // Return unique movies from showtimes
        const movies = [];
        for (const showtime of this.showtimes) {
            const movie = showtime.getMovie();
            if (!movies.some(m => m.getMovieID() === movie.getMovieID())) {
                movies.push(movie);
            }
        }
        return movies;
    }
    addShowtime(showtime) {
        this.showtimes.push(showtime);
    }
    getShowtimes() {
        return this.showtimes;
    }
    getName() {
        return this.name;
    }
    getHalls() {
        return this.halls;
    }
}
exports.Cinema = Cinema;
