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

const dueDate = borrowDurationDays * 24 * 60 * 60 * 1000;

const checkDueDate = () => {
  const currentDate = new Date().toLocaleDateString();
  const returnDate = new Date(Date.now() + dueDate).toLocaleDateString();
return { 
  CurrentDate: currentDate,
  ReturnDate: returnDate 
}};

console.log(checkBookLimit);
console.log(checkDueDate());
console.log(availableBooks());




