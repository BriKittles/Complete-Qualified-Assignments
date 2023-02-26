function findAccountById(accounts, id) {

  //let results = [accounts.find((account) => account === id)];
  //return results
  return accounts.find((account) => account.id === id)

}

/*
It returns a sorted array of the provided account objects.
The objects are sorted alphabetically by last name.
*/
function sortAccountsByLastName(accounts) {
const sorted = accounts.sort((nameA, nameB) =>
 nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1);
 return sorted
}
function getTotalNumberOfBorrows(account, books) {

  const userId = account.id;
  let accumalator = 0;
  const total = books.reduce((acc, book) => {
  const borrowed = book.borrows;
  const mappedIds = borrowed.map((record) => record.id);
  if (mappedIds.includes(userId)) acc++;
      return acc;
}, accumalator);
return total
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
  .map(book => {const author = authors.find(author => author.id === book.authorId)
  book.author = author;
  return book
})
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
