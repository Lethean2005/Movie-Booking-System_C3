"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const users = [];
class User {
    constructor(userID, fullName, email, password, wallet) {
        this.userID = userID;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.wallet = wallet;
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
        }
        else {
            console.log('Login failed: Invalid email or password.');
        }
    }
    viewBookingHistory() {
        // Placeholder implementation for viewing booking history
        console.log(`${this.fullName}'s booking history:`);
        return []; // Replace with actual logic to fetch booking history
    }
    leaveReview() {
        // Placeholder implementation for leaving a review
        console.log(`${this.fullName} is leaving a review.`);
        // Replace with actual logic to leave a review
    }
}
exports.User = User;
