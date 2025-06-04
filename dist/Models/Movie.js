"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    constructor(movieID, title, genre, duration, rating) {
        this.movieID = movieID;
        this.title = title;
        this.genre = genre;
        this.duration = duration;
        this.rating = rating;
        this.reviews = [];
        this.showtimes = [];
    }
    filterByGenre(genre) {
        return this.genre === genre;
    }
    addShowtime(showtime) {
        this.showtimes.push(showtime);
    }
    getShowtimes() {
        return this.showtimes;
    }
    getMovieID() {
        return this.movieID;
    }
    getTitle() {
        return this.title;
    }
    addReview(review) {
        this.reviews.push(review);
    }
    getReviews() {
        return this.reviews;
    }
    getGenre() {
        return this.genre;
    }
    getDuration() {
        return this.duration;
    }
    getRating() {
        return this.rating;
    }
}
exports.Movie = Movie;
