"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
class Review {
    constructor(reviewID, rating, comment, user, movieID) {
        this.reviewID = reviewID;
        this.rating = rating;
        this.comment = comment;
        this.user = user;
        this.movieID = movieID;
    }
    getReviewDetails() {
        return `Review ID: ${this.reviewID}, Rating: ${this.rating}, Comment: ${this.comment}, User: ${this.user.getUserName()}, Movie ID: ${this.movieID.getMovieID()}`;
    }
    updateReview(rating, comment) {
        this.rating = rating;
        this.comment = comment;
    }
}
exports.Review = Review;
