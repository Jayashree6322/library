// Domain 3: Library / Book Borrowing System
// Basic Book Catalog
// Write a program to list available books and let users check out and return books.

// Borrow Limits
// Implement a limit on how many books a user can borrow.

// Due Dates
// Add due dates and check for overdue books.

// Fine Calculation
// Calculate fines for overdue books.

// User Registration & History
// Track user registrations and their borrowing history.

// Search & Filter
// Add functionality to search for books by title, author, or genre.

// Reservation System
// Let users reserve books that are currently borrowed.

// Reporting
// // Generate reports on popular books, active users, and overdue items.

const config = require('./config.json');

const {
  books,
  users,
  reservations,
} = config;

const { } = require('./function.cjs');


const availableBooks = () => books.filter(book => book.available);

console.log(availableBooks());




