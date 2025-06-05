import { Movie } from "./Movie";
import { User } from "./User";

export class Review{
    constructor(
        private reviewID: string,
        private rating: number,
        private comment: string,
        private user:User,
        private movieID: Movie,
    ){
        
    }
// -----------------------------
// Get review
    public getReviewDetails(): string {
        return `Review ID: ${this.reviewID}, Rating: ${this.rating}, Comment: ${this.comment}, User: ${this.user.getUserName()}, Movie ID: ${this.movieID.getMovieID()}`;
    }

// -----------------------------
// update review
// -----------------------------
    public updateReview(rating: number, comment: string): void {
        this.rating = rating;
        this.comment = comment;
    }
}