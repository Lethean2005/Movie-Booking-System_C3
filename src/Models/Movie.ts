import { Genre } from "../enums/Genre";
import { ShowTime } from "./Showtime";
export class Movie {
    private showtimes: ShowTime[] = [];

    constructor(
        public movieID: number,
        public title: string,
        public genre: Genre,
        public duration: number,
        public rating: number
    ) {}

     // ✅ You only want this
    public getShowTimes(): ShowTime[] {
        return this.showtimes;
    }

    // 🔒 Internal use only (still needed to connect showtime to movie)
    public _pushShowTime(showtime: ShowTime): void {
        this.showtimes.push(showtime);
    }

    static filterByGenre(movies: Movie[], genre: Genre): Movie[] {
        return movies.filter(movie => movie.genre === genre);
    }
}