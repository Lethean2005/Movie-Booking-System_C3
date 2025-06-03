import { Movie } from './Movie';
export class Cinema {
  constructor(
    public cinemaID: number,
    public name: string,
    public location: string,
    public hallname: string
  ) {}

  listMovies(): Movie[] { return []; }
}