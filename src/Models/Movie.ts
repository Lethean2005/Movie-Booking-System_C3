import { Genre } from "../enums/Genre";
import { Showtime } from "./Showtime";

export class Movie{
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
    public getShowtime(): Showtime[] {
        
        return [];
        
    }
    public getMovieID(): string {
        return this.movieID;
    }
}