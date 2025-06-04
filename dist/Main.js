"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const User_1 = require("./Models/User");
const Showtime_1 = require("./Models/Showtime");
const Movie_1 = require("./Models/Movie");
const Cinema_1 = require("./Models/Cinema");
const Hall_1 = require("./Models/Hall");
const Seat_1 = require("./Models/Seat");
const SeatStatus_1 = require("./enums/SeatStatus");
const Wallet_1 = require("./Models/Wallet");
const Booking_1 = require("./Models/Booking");
const DigitalTicket_1 = require("./Models/DigitalTicket");
const CinemaStaff_1 = require("./Models/CinemaStaff");
const Genre_1 = require("./enums/Genre");
const BookingStatus_1 = require("./enums/BookingStatus");
const SeatZone_1 = require("./enums/SeatZone");
// -----------------------------
// 1. User Registration/Login
// -----------------------------
const user1 = new User_1.User('U001', 'Panha', 'panha@gmail.com', 'password123', new Wallet_1.Wallet(100));
user1.register();
user1.login();
// -----------------------------
// 2. Setup Cinema, Halls, Movies
// -----------------------------
const hall1 = new Hall_1.Hall('H001', 'Premium Hall', 50, 50, new Map());
const hall2 = new Hall_1.Hall('H002', 'Standard Hall', 100, 100, new Map());
const cinema = new Cinema_1.Cinema(1, 'City Cinema', 'Downtown', [hall1, hall2]);
const movie1 = new Movie_1.Movie('M001', 'Nesat Crocrodie', Genre_1.Genre.ACTION, 120, 4.5);
const movie2 = new Movie_1.Movie('M002', 'Room 404', Genre_1.Genre.HORROR, 110, 4.2);
// -----------------------------
// 3. Add Showtimes
// -----------------------------
const showtime1 = new Showtime_1.Showtime('S001', new Date('2025-06-05T19:00:00'), cinema, movie1, hall1);
const showtime2 = new Showtime_1.Showtime('S002', new Date('2025-06-05T21:00:00'), cinema, movie2, hall2);
cinema.addShowtime(showtime1);
cinema.addShowtime(showtime2);
movie1.addShowtime(showtime1);
movie2.addShowtime(showtime2);
// -----------------------------
// 4. Add Seats to Halls
// -----------------------------
for (let i = 1; i <= 10; i++) {
    hall1.addSeat(new Seat_1.Seat(`P${i}`, 1, `${i}`, hall1, SeatZone_1.SeatZone.PREMIUM, SeatStatus_1.SeatStatus.AVAILABLE));
    hall2.addSeat(new Seat_1.Seat(`S${i}`, 1, `${i}`, hall2, SeatZone_1.SeatZone.STANDARD, SeatStatus_1.SeatStatus.AVAILABLE));
}
// -----------------------------
// 5. List & Filter Movies
// -----------------------------
console.log('🎬 All movies in cinema:');
cinema.listMovies().forEach(movie => {
    console.log(`  - MovieID: ${movie.getMovieID()} | Title: ${movie.getTitle()} | Genre: ${movie.getGenre()} | Duration: ${movie.getDuration()}min | Rating: ${movie.getRating()}`);
});
const actionMovies = cinema.listMovies().filter(m => m.getGenre() === Genre_1.Genre.ACTION);
console.log('\n🎯 Filtered Action movies:', actionMovies.map(m => m.getTitle()).join(', '));
// -----------------------------
// 6. Select Showtime & View Seats
// -----------------------------
console.log('\n-------------- SHOWTIME & SEAT SELECTION --------------');
const selectedShowtime = showtime1;
console.log(`🎥 Selected showtime: ${selectedShowtime.getMovie().getTitle()} at ${selectedShowtime.getStartTime().toLocaleString()}`);
console.log('Cinema:', selectedShowtime.getCinema().getName(), '| Hall:', selectedShowtime.getHall().getHallName());
console.log('All seats:');
selectedShowtime.getHall().getSeats().forEach(seat => {
    console.log(`  - SeatID: ${seat.getSeatID()} | Row: ${seat["row"]} | Col: ${seat["column"]} | Zone: ${seat.getZone()} | Status: ${seat.getStatus()}`);
});
const availableSeats = selectedShowtime.getHall().getAvailableSeats();
console.log('\n💺 Available seats:', availableSeats.map(s => s.getSeatID()).join(', '));
// -----------------------------
// 7. Select Seats
// -----------------------------
console.log('\n--------------------- SEAT SELECTION ----------------------');
const selectedSeats = availableSeats.slice(0, 3);
selectedSeats.forEach(seat => seat.setStatus(SeatStatus_1.SeatStatus.BOOKED));
console.log(`\n🪑 ${user1.getUserName()} selected seats:`);
selectedSeats.forEach(seat => {
    console.log(`  - SeatID: ${seat.getSeatID()} | Row: ${seat["row"]} | Col: ${seat["column"]} | Zone: ${seat.getZone()} | Status: ${seat.getStatus()}`);
});
// -----------------------------
// 8. Booking & Payment
// -----------------------------
console.log('\n------------------- BOOKING & PAYMENT -------------------');
const booking = new Booking_1.Booking('B001', new Date(), BookingStatus_1.BookingStatus.PENDING, 45, selectedShowtime, user1);
selectedSeats.forEach(seat => booking.addSeat(seat));
console.log(`BookingID: ${booking["bookingID"]} | Status: ${booking.getStatus()} | Total: $${booking.getTotalPrice()}`);
console.log(`User wallet before payment: $${user1.getWallet()["balance"]}`);
if (user1.getWallet().pay(booking.getTotalPrice())) {
    booking.confirmBooking();
    user1.addBooking(booking);
    // 9. Generate Ticket
    const ticket = new DigitalTicket_1.DigitalTicket('T001', selectedSeats, hall1.getHallName(), 'QR123456', 'REF123456');
    booking.setTicket(ticket);
    console.log('🎟️ Digital ticket generated!');
    console.log(`  - TicketID: ${ticket["ticketID"]}`);
    console.log(`  - Seats: ${ticket.getSeats().map(s => s.getSeatID()).join(', ')}`);
    console.log(`  - Hall: ${ticket.getHallName()}`);
    console.log(`  - QR: ${ticket.getQRCode()}`);
    console.log(`  - Ref: ${ticket.getBookingRef()}`);
    // 10. Ticket Verification
    const staff = new CinemaStaff_1.CinemaStaff('S001', 'Alice');
    console.log(staff.verifyTicket(ticket) ? '✅ Ticket verified! Enjoy your movie!' : '❌ Ticket verification failed.');
    // 11. Leave Review
    user1.leaveReview(movie1, 5, '🔊 Great sound and 🛋️ super comfortable seats!');
    // 12. View Booking History
    user1.viewBookingHistory().forEach((b, idx) => {
        const t = b.getTicket();
        console.log(`Booking #${idx + 1}`);
        console.log(`  - Movie: ${b.getShowtime().getMovie().getTitle()}`);
        console.log(`  - Showtime: ${b.getShowtime().getStartTime().toLocaleString()}`);
        console.log(`  - Hall: ${b.getShowtime().getHall().getHallName()}`);
        console.log(`  - Seats: ${b.getSeats().map(s => s.getSeatID()).join(', ')}`);
        console.log(`  - Status: ${b.getStatus()}`);
        if (t instanceof DigitalTicket_1.DigitalTicket) {
            console.log(`  - Ticket QR: ${t.getQRCode()} | Ref: ${t.getBookingRef()}`);
        }
        console.log('--------------------------------------------------');
    });
    // 13. Movie Reviews
    movie1.getReviews().forEach(r => console.log(r.getReviewDetails()));
    // 14. Wallet After Payment
    console.log(`\nUser wallet after payment: $${user1.getWallet()["balance"]}`);
}
else {
    console.log('❌ Booking/payment failed. Please top up your wallet.');
}
