// ------------------------------
// imports
// ------------------------------
import { Hall } from "./Hall";
import { Showtime } from "./Showtime";
import { Movie } from "./Movie";
export class Cinema {
  private showtimes: Showtime[] = [];
  constructor(
    private cinemaID: number,
    private name: string,
    private location: string,
    private halls: Hall[]
  ) {}
  // -----------------------------
  // listMovies
  // -----------------------------
  public listMovies(): Movie[] {
    // Return unique movies from showtimes
    const movies: Movie[] = [];
    for (const showtime of this.showtimes) {
      const movie = showtime.getMovie();
      if (!movies.some((m) => m.getMovieID() === movie.getMovieID())) {
        movies.push(movie);
      }
    }
    return movies;
  }
  // -----------------------------
  // Getters and add showtime
  // -----------------------------
  public addShowtime(showtime: Showtime): void {
    this.showtimes.push(showtime);
  }
  public getShowtimes(): Showtime[] {
    return this.showtimes;
  }
  public getName(): string {
    return this.name;
  }
  public getHalls(): Hall[] {
    return this.halls;
  }
}
