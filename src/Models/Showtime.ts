import { Cinema } from "./Cinema";
import { Movie } from "./Movie";

export class ShowTime {
    constructor(
        public showtimeID: number,
        public startTime: Date,
        public cinema: string, // not modeled in UML as class attribute
        public movie: Movie
    ) {
      
    } public showTime(): string {
        return `${this.startTime.toLocaleString()} at ${this.cinema}`;
    }

    // ✅ Static method to create and link
    static addShowTime(showtimeID: number, startTime: Date, cinema: string, movie: Movie): ShowTime {
        const st = new ShowTime(showtimeID, startTime, cinema, movie);
        movie._pushShowTime(st); // internal call to push
        return st;
    }
}
