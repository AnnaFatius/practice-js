import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("Old Story", "Anna Smith", 2022);
const book2 = new EBook("Future World", "John Doe", 2013, "PDF");
const book3 = new EBook("Modern Times", "Alice Johnson", 2005, "PDF");

book1.printInfo();
book2.printInfo();
book3.printInfo();

book1.bookName = "New Title"; 
book1.year = 2023;

console.log("\nПісля змін:");
book1.printInfo();

const books = [book1, book2, book3];

const oldestBook = Book.findOldestBook(books); //STATIC

if (oldestBook) {
    console.log("\nНайстаріша книжка:");
    oldestBook.printInfo();
  } else {
    console.log("No books found.");
  }


  const eBook3 = EBook.createEBookInstance(book1, "PDF");
  eBook3.printInfo();