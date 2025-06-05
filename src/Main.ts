// Imports
import { User } from "./Models/User";
import { Showtime } from "./Models/Showtime";
import { Movie } from "./Models/Movie";
import { Cinema } from "./Models/Cinema";
import { Hall } from "./Models/Hall";
import { Seat } from "./Models/Seat";
import { SeatStatus } from "./enums/SeatStatus";
import { Wallet } from "./Models/Wallet";
import { Booking } from "./Models/Booking";
import { DigitalTicket } from "./Models/DigitalTicket";
import { CinemaStaff } from "./Models/CinemaStaff";
import { Genre } from "./enums/Genre";
import { BookingStatus } from "./enums/BookingStatus";
import { SeatZone } from "./enums/SeatZone";

// -----------------------------
// 1. User Registration/Login
// -----------------------------
const user1 = new User(
  "U001",
  "Panha",
  "panha@gmail.com",
  "password123",
  new Wallet(100)
);
user1.register();
user1.login();

// -----------------------------
// 2. Setup Cinema, Halls, Movies
// -----------------------------
const hall1 = new Hall("H001", "Premium Hall", 50, 50, new Map());
const hall2 = new Hall("H002", "Standard Hall", 100, 100, new Map());
const cinema = new Cinema(1, "City Cinema", "Downtown", [hall1, hall2]);

const movie1 = new Movie("M001", "Nesat Crocrodie", Genre.ACTION, 120, 4.5);
const movie2 = new Movie("M002", "Room 404", Genre.HORROR, 110, 4.2);

// -----------------------------
// 3. Add Showtimes
// -----------------------------
const showtime1 = new Showtime(
  "S001",
  new Date("2025-06-05T19:00:00"),
  cinema,
  movie1,
  hall1
);
const showtime2 = new Showtime(
  "S002",
  new Date("2025-06-05T21:00:00"),
  cinema,
  movie2,
  hall2
);

cinema.addShowtime(showtime1);
cinema.addShowtime(showtime2);

movie1.addShowtime(showtime1);
movie2.addShowtime(showtime2);

// -----------------------------
// 4. Add Seats to Halls
// -----------------------------
for (let i = 1; i <= 10; i++) {
  hall1.addSeat(
    new Seat(`P${i}`, 1, `${i}`, hall1, SeatZone.PREMIUM, SeatStatus.AVAILABLE)
  );
  hall2.addSeat(
    new Seat(`S${i}`, 1, `${i}`, hall2, SeatZone.STANDARD, SeatStatus.AVAILABLE)
  );
}

// -----------------------------
// 5. List & Filter Movies
// -----------------------------
console.log("🎬 All movies in cinema:");
cinema.listMovies().forEach((movie) => {
  console.log(
    `  - MovieID: ${movie.getMovieID()} | Title: ${movie.getTitle()} | Genre: ${movie.getGenre()} | Duration: ${movie.getDuration()}min | Rating: ${movie.getRating()}`
  );
});

const actionMovies = cinema
  .listMovies()
  .filter((m) => m.getGenre() === Genre.ACTION);
console.log(
  "\n🎯 Filtered Action movies:",
  actionMovies.map((m) => m.getTitle()).join(", ")
);

// -----------------------------
// 6. Select Showtime & View Seats
// -----------------------------
console.log("\n-------------- SHOWTIME & SEAT SELECTION --------------");
const selectedShowtime = showtime1;

console.log(
  `🎥 Selected showtime: ${selectedShowtime
    .getMovie()
    .getTitle()} at ${selectedShowtime.getStartTime().toLocaleString()}`
);
console.log(
  "Cinema:",
  selectedShowtime.getCinema().getName(),
  "| Hall:",
  selectedShowtime.getHall().getHallName()
);

console.log("All seats:");
selectedShowtime
  .getHall()
  .getSeats()
  .forEach((seat) => {
    console.log(
      `  - SeatID: ${seat.getSeatID()} | Row: ${seat["row"]} | Col: ${
        seat["column"]
      } | Zone: ${seat.getZone()} | Status: ${seat.getStatus()}`
    );
  });

const availableSeats = selectedShowtime.getHall().getAvailableSeats();
console.log(
  "\n💺 Available seats:",
  availableSeats.map((s) => s.getSeatID()).join(", ")
);

// -----------------------------
// 7. Select Seats
// -----------------------------
console.log("\n--------------------- SEAT SELECTION ----------------------");
const selectedSeats = availableSeats.slice(0, 3);
selectedSeats.forEach((seat) => seat.setStatus(SeatStatus.BOOKED));

console.log(`\n🪑 ${user1.getUserName()} selected seats:`);
selectedSeats.forEach((seat) => {
  console.log(
    `  - SeatID: ${seat.getSeatID()} | Row: ${seat["row"]} | Col: ${
      seat["column"]
    } | Zone: ${seat.getZone()} | Status: ${seat.getStatus()}`
  );
});

// -----------------------------
// 8. Booking & Payment
// -----------------------------
console.log("\n------------------- BOOKING & PAYMENT -------------------");
const booking = new Booking(
  "B001",
  new Date(),
  BookingStatus.PENDING,
  45,
  selectedShowtime,
  user1
);
selectedSeats.forEach((seat) => booking.addSeat(seat));

console.log(
  `BookingID: ${
    booking["bookingID"]
  } | Status: ${booking.getStatus()} | Total: $${booking.getTotalPrice()}`
);
console.log(`User wallet before payment: $${user1.getWallet()["balance"]}`);

if (user1.getWallet().pay(booking.getTotalPrice())) {
  booking.confirmBooking();
  user1.addBooking(booking);
  // ----------------------
  // 9. Generate Ticket
  // ----------------------
  const ticket = new DigitalTicket(
    "T001",
    selectedSeats,
    hall1.getHallName(),
    "QR123456",
    "REF123456"
  );
  booking.setTicket(ticket);

  console.log("🎟️ Digital ticket generated!");
  console.log(`  - TicketID: ${ticket["ticketID"]}`);
  console.log(
    `  - Seats: ${ticket
      .getSeats()
      .map((s) => s.getSeatID())
      .join(", ")}`
  );
  console.log(`  - Hall: ${ticket.getHallName()}`);
  console.log(`  - QR: ${ticket.getQRCode()}`);
  console.log(`  - Ref: ${ticket.getBookingRef()}`);
  // ----------------------
  // 10. Ticket Verification
  // ----------------------
  const staff = new CinemaStaff("S001", "Alice");
  console.log(
    staff.verifyTicket(ticket)
      ? "✅ Ticket verified! Enjoy your movie!"
      : "❌ Ticket verification failed."
  );
  // ----------------------
  // 11. Leave Review
  // ----------------------
  user1.leaveReview(
    movie1,
    5,
    "🔊 Great sound and 🛋️ super comfortable seats!"
  );
  // ----------------------
  // 12. View Booking History
  // ----------------------
  user1.viewBookingHistory().forEach((b, idx) => {
    const t = b.getTicket();
    console.log(`Booking #${idx + 1}`);
    console.log(`  - Movie: ${b.getShowtime().getMovie().getTitle()}`);
    console.log(
      `  - Showtime: ${b.getShowtime().getStartTime().toLocaleString()}`
    );
    console.log(`  - Hall: ${b.getShowtime().getHall().getHallName()}`);
    console.log(
      `  - Seats: ${b
        .getSeats()
        .map((s) => s.getSeatID())
        .join(", ")}`
    );
    console.log(`  - Status: ${b.getStatus()}`);
    if (t instanceof DigitalTicket) {
      console.log(
        `  - Ticket QR: ${t.getQRCode()} | Ref: ${t.getBookingRef()}`
      );
    }
    console.log("--------------------------------------------------");
  });
  // ----------------------
  // 13. Movie Reviews
  // ----------------------
  movie1.getReviews().forEach((r) => console.log(r.getReviewDetails()));

  // ----------------------
  // 14. Wallet After Payment
  // ----------------------
  console.log(`\nUser wallet after payment: $${user1.getWallet()["balance"]}`);
} else {
  console.log("❌ Booking/payment failed. Please top up your wallet.");
}
