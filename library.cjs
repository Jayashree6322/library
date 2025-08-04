const config = require('./config.json');

const {
  books,
  users,
  reservations,
  maxBorrowLimit,
  borrowDurationDays
} = config;

const availableBooks = () => books.filter(book => book.available);

const checkBookLimit = users.map((user) => 
  user.borrowedBooks.length >= maxBorrowLimit ? "Limit reached" : "Can borrow more books");

console.log(checkBookLimit);
console.log(availableBooks());



