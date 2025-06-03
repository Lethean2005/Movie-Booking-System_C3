import { User } from './User';
import { Movie } from './Movie';
export class Review {
  constructor(
    public reviewID: number,
    public rating: number,
    public comment: string,
    public user: User,
    public movie: Movie
  ) {}

  updateReview(comment: string, rating: number): void {
    this.comment = comment;
    this.rating = rating;
  }
}