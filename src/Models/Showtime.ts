// ------------------------------
// imports
// ------------------------------
import { Cinema } from "./Cinema";
import { Movie } from "./Movie";
import { Hall } from "./Hall";

export class Showtime {
  constructor(
    private showtimeID: string,
    private startTime: Date,
    private cinema: Cinema,
    private movie: Movie,
    private hall: Hall
  ) {}
  // -----------------------------
  // Getters
  // -----------------------------
  public getShowtimeID(): string {
    return this.showtimeID;
  }
  public getMovie(): Movie {
    return this.movie;
  }
  public getCinema(): Cinema {
    return this.cinema;
  }
  public getHall(): Hall {
    return this.hall;
  }
  public getStartTime(): Date {
    return this.startTime;
  }
  public addshowtime(startTime: Date, cinema: Cinema, movie: Movie): void {
    this.startTime = startTime;
    this.cinema = cinema;
    this.movie = movie;
  }
}
