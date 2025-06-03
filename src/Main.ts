import { User } from './Models/User';
import { ShowTime } from './Models/Showtime';
import { Movie } from './Models/Movie';
import { Cinema } from './Models/Cinema';
import { Hall } from './Models/Hall';
import { Seat } from './Models/Seat';
import { SeatStatus } from './enums/SeatStatus';
import { Genre } from './enums/Genre';


// Create test data
const user1 = new User('U001', 'John Doe', 'john.doe@example.com', 'password123', 0);
const user2 = new User('U002', 'Jane Smith', 'jane.smith@example.com', 'password456', 0);
user1.register();
user2.register();
// Attempt to register a user with an existing email
const duplicateUser = new User('U003', 'Duplicate User', 'john.doe@example.com',  'password789', 0);
duplicateUser.register();
console.log(user1.login()); 
console.log(user2.login()); 

// Attempt to login with incorrect credentials
const invalidUser = new User('U004', 'Invalid User', 'invalid@example.com', 'wrongpassword', 0);
console.log(invalidUser.login()); 


////////////////// See all Movies ///////////////////////

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