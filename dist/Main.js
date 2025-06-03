"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./Models/User");
// Create test data
const user1 = new User_1.User('U001', 'John Doe', 'john.doe@example.com', 'password123', 0);
const user2 = new User_1.User('U002', 'Jane Smith', 'jane.smith@example.com', 'password456', 0);
user1.register();
user2.register();
// Attempt to register a user with an existing email
const duplicateUser = new User_1.User('U003', 'Duplicate User', 'john.doe@example.com', 'password789', 0);
duplicateUser.register();
console.log(user1.login());
console.log(user2.login());
// Attempt to login with incorrect credentials
const invalidUser = new User_1.User('U004', 'Invalid User', 'invalid@example.com', 'wrongpassword', 0);
console.log(invalidUser.login());
