"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Review_1 = require("./Review");
const users = [];
class User {
    constructor(userID, fullName, email, password, wallet) {
        this.userID = userID;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.wallet = wallet;
        this.bookings = [];
        this.reviews = [];
    }
    register() {
        const existingUser = users.find(user => user.email === this.email);
        if (existingUser) {
            console.log('Registration failed: Email already exists.');
            return;
        }
        users.push(this);
        console.log(`${this.fullName} has registered successfully.`);
    }
    login() {
        const user = users.find(u => u.email === this.email && u.password === this.password);
        if (user) {
            console.log(`${this.fullName} has logged in successfully.`);
            return true;
        }
        else {
            console.log('Login failed: Invalid email or password.');
            return false;
        }
    }
    viewBookingHistory() {
        console.log(`${this.fullName}'s booking history:`);
        return this.bookings;
    }
    addBooking(booking) {
        this.bookings.push(booking);
    }
    leaveReview(movie, rating, comment) {
        const review = new Review_1.Review(`R${Date.now()}`, rating, comment, this, movie);
        this.reviews.push(review);
        movie.addReview(review);
        console.log(`${this.fullName} left a review for ${movie.getTitle()}`);
    }
    getUserName() {
        return this.fullName;
    }
    getWallet() {
        return this.wallet;
    }
}
exports.User = User;
