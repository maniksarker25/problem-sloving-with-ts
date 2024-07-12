//2.Task: Object Manipulation

//Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

// solution ---------
type TBook = {
  title: string;
  author: string;
  year: number;
};

const books: TBook[] = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "The Mockingbird",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
  },
];

const getBookTitles = (books: TBook[]): string[] => {
  const bookTitles = books.map((book) => book.title);
  return bookTitles;
};

console.log(getBookTitles(books));
