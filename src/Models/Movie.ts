import { Genre } from "../enums/Genre";
import { Showtime } from "./Showtime";
import { Review } from "./Review";

export class Movie{
    private reviews: Review[] = [];
    private showtimes: Showtime[] = [];
    constructor(
        private movieID: string,
        private title: string,
        private genre: Genre,
        private duration: number, 
        private rating: number, 
    ){
        
    }
    public filterByGenre(genre: Genre): boolean {
        return this.genre === genre;
    }
    public addShowtime(showtime: Showtime): void {
        this.showtimes.push(showtime);
    }
    public getShowtimes(): Showtime[] {
        return this.showtimes;
    }
    public getMovieID(): string {
        return this.movieID;
    }
    public getTitle(): string {
        return this.title;
    }
    public addReview(review: Review): void {
        this.reviews.push(review);
    }
    public getReviews(): Review[] {
        return this.reviews;
    }
    public getGenre(): Genre {
        return this.genre;
    }
    public getDuration(): number {
        return this.duration;
    }
    public getRating(): number {
        return this.rating;
    }
}