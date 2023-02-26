const { getBooksPossessedByAccount } = require("./accounts");

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter((book)=> book.borrows[0].returned === false);
  let returnedBooks = books.filter((book) => book.borrows[0].returned ===  true);
const result = [borrowedBooks, returnedBooks];
  return result;
}

function getBorrowersForBook(book, accounts) {
  const result = book.borrows.map(borrower => {
    const result = accounts.find(account => borrower.id === account.id)
    result.returned = borrower.returned;
  return result
  })
  return result.filter((borrower, index) => result.findIndex(item => item.id === borrower.id)===index);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
