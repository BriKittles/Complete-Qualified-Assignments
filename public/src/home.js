function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

/*The `getBooksBorrowedCount()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns a _number_ that represents the number of books _
that are currently checked out of the library._ 
This number can be found by looking at the first transaction 
object in the `borrows` array of each book. 
If the transaction says the book has not been returned 
(i.e. `returned: false`), the book is currently being borrowed.
*/


function getBooksBorrowedCount(books) {
 const borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
 return borrowedBooks.length 

}


/* First Attempt 
for (let i = 0; i < books.length; i++){
  if(books[i].returned === false){
    borrowedBooks++;
  }
}
 return borrowedBooks;
 */

function getMostCommonGenres(books) {
  const genre = books.map((book) => book.genre);
  const result = [];
  const count = {};
  genre.forEach(function (index){
    
    count[index] = (count[index] || 0) +1;

  });

  for (let key in count) {
    result.push({
      name: key ,
      count: count[key] ,
    })
  }
  result.sort((a, b ) => (a.count < b.count ? 1 : -1));
  return result.slice(0,5)
}

function getMostPopularBooks(books) {
  const sliced = books.length > 5 ? 5: books.length;
  return books.map(book =>{
    return {
      name: book.title ,
      count: book.borrows.length
    }
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, sliced)
}

function getMostPopularAuthors(books, authors) {
  const result = [];
  authors.forEach(author => {
    const returnAuthor = {
      name: `${author.name.first} ${author.name.last}` ,
      count: 0
    }
    books.forEach(book =>{
      if (book.authorId === author.id){
        returnAuthor.count += book.borrows.length;
      }
    })
    result.push(returnAuthor);
  })
  return result.sort((a, b) => b.count - a.count).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
