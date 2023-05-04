// what is i++/ i--?
// i++ is the same as i = i + 1 it increments i by 1
// i-- is the same as i = i - 1 it decrements i by 1

/* **************** */
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
];

// to get the title of each book in the array
// for(let book of books) {
//     console.log(book.title.toUpperCase());
// }

const bookTitle = [];
for (let i = 0; i < books.length; i++) {
  bookTitle.push(books[i].title.toUpperCase());
}
console.log(bookTitle);

// using map
const bookTitle2 = books.map((book) => book.title.toUpperCase());
console.log(bookTitle2);

// using filter
const goodBooks = books.filter((b) => b.rating > 4.3);
console.log(goodBooks);

// using find
const neilBook = books.find((b) => b.authors.includes("Neil Gaiman"));
console.log(neilBook);

// using reduce
const totalRating = books.reduce((acc, currVal) => {
  return acc + currVal.rating;
}, 0);
console.log(totalRating);

// to get all the books that are fantasy
const fantasyBooks = books.filter((b) => b.genres.includes("fantasy"));
console.log(fantasyBooks);

// to get all the books that are fiction
const fictionBooks = books.filter((b) => b.genres.includes("fiction"));
console.log(fictionBooks);

//we can also use includes to check if a string includes a certain character

// to get all the books that are nonfiction using includes
const fantasyBooks2 = books.filter((Element) => {
  return Element.genres.includes("nonfiction");
});

console.log(fantasyBooks2);

// USING LET QUERY
// const query = "The";
// const results = books.filter((book) => {
//   const title = book.title.toLowerCase();
//   return title.includes(query.toLowerCase());
// });

let query = "The"; // this is the search query

const results = books.filter((book) => {
  // this is the array we are searching through
  const title = book.title.toLowerCase(); // this is the title of the book
  return title.includes(query.toLowerCase()); // this is the search query
}); // this is the results of the search query

console.log("results ", results); // this is the results of the search query

module.exports = books;

// to use this in anpther js file we need to export it and import it in the other file using require and module.exports respectively  */

// example const books = require("./books.js");
