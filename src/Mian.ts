import { User } from './User';
import { Movie } from './Movie';
import { ShowTime } from './Showtime';
import { Genre } from './Genre';
import { Cinema } from './Cinema';

const m1 = new Movie(1, "Interstellar", Genre.ACTION, 169, 4.8);
const m2 = new Movie(2, "Titanic", Genre.ROMANCE, 195, 4.6);
const m3 = new Movie(3, "The Ring", Genre.HORROR, 115, 4.3);

// Showtimes
ShowTime.addShowTime(101, new Date("2025-06-03T14:00:00"), "Cinema A", m1);
ShowTime.addShowTime(102, new Date("2025-06-03T18:00:00"), "Cinema B", m2);
ShowTime.addShowTime(103, new Date("2025-06-03T20:00:00"), "Cinema C", m3);

// All movies
const movies = [m1, m2, m3];

console.log("🎬 All Movies:");
movies.forEach(movie => {
    console.log(`- ${movie.title} (${movie.genre})`);
    console.log(`  Duration: ${movie.duration} mins, Rating: ${movie.rating}`);
    console.log("  Showtimes:");
    movie.getShowTimes().forEach(show => {
        console.log("  📍 " + show.showTime());
    });
});
