import { Cinema } from "./Cinema";
import { Movie } from "./Movie";

export class Showtime{
    constructor(
        private showtimeID: string,
        private startTime: Date,
        private cinema: Cinema,
        private Movie: Movie,
    ){

    }
    public getShowtimeID(): string {
        return this.showtimeID;
    }
    public addshowtime(startTime: Date, cinema: Cinema, movie: Movie): void {
        this.startTime = startTime;
        this.cinema = cinema;
        this.Movie = movie;
    }
}