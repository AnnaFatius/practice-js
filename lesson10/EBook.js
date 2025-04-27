import Book from "./Book.js";

export default class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year);
        this._format = format;
    }
    
    get format() {
        return this._format;
      }
     
    set format(value) {
        if (typeof value !== 'string' || value.trim() === '') {
          throw new Error('Format must be a non-empty string.');
        }
        this._format = value;
      }
 
    printInfo() {
        console.log(`\nBook name is: ${this.bookName}\nAuthor of this book is: ${this.bookAuthor}\nYear: ${this.year}\nFormat: ${this.format}`);
      }

    static createEBookInstance(bookInstance, format) {
        if (!(bookInstance instanceof Book) || typeof format !== 'string') {
            throw new Error("First argument must be an instance of Book or format isn't string");
        }
        return new EBook(bookInstance.bookName, bookInstance.bookAuthor, bookInstance.year, format);
    }
      
}