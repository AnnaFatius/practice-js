export default class Book {
	constructor(name, author, year) {
		this._bookName = name;
		this._bookAuthor = author;
		this._year = year;
	}

	get bookName() {
		return this._bookName;
	}

	get bookAuthor() {
		return this._bookAuthor;
	}

	get year() {
		return this._year;
	}

	set bookName(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Book name must be a non-empty string.');
		}
		this._bookName = value;
	}

	set bookAuthor(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Author must be a non-empty string.');
		}
		this._bookAuthor = value;
	}

	set year(value) {
		if (typeof value !== 'number' || value <= 0) {
			throw new Error('Year must be a positive number.');
		}
		this._year = value;
	}

	printInfo() {
		console.log(
			`Book name is: ${this.bookName}\nAuthor of this book is: ${this.bookAuthor}\nYear: ${this.year}`,
		);
	}

	static findOldestBook(books) {
		// STATIC
		if (!Array.isArray(books) || books.length === 0) {
			return null;
		}

		let oldest = books[0];

		for (const book of books) {
			if (book.year < oldest.year) {
				oldest = book;
			}
		}

		return oldest;
	}
}
