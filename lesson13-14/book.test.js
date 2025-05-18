const BooksController = require('./BooksController');
const AccountController = require('./AccountController');

const isbn = '9781449331818';
const isbn1 = '9781449325862';
const isbn2 = '9781449365035';
let token;
const user = {
	userId: '40ee558a-9807-4b7d-95ab-81ce8f6045ff',
	userName: 'Anna Fa',
	password: 'Qwerty12345#',
};

describe('Books tests', () => {
	beforeAll(async () => {
		token = await AccountController.getAuthToken(user.userName, user.password);
	});

	test('Get all books and verify length [/BookStore/v1/Books]', async () => {
		const response = await BooksController.getAllBooks();
		const responseBody = response.data;
		expect(responseBody.books).toHaveLength(8);
	});

	test('Verify first book title [/BookStore/v1/Books]', async () => {
		const response = await BooksController.getAllBooks();
		const responseBody = response.data;
		expect(responseBody.books[0].title).toBe('Git Pocket Guide');
	});

	test('Add new book to user [/BookStore/v1/Books]', async () => {
		const response = await BooksController.addBook(user.userId, isbn, token);
		expect(response.status).toBe(201);
		expect(response.data.books[0].isbn).toBe(isbn);
	});

	test('Add couple book to user [/BookStore/v1/Books]', async () => {
		const response = await BooksController.addBook(user.userId, isbn1, token, isbn2);
		expect(response.status).toBe(201);
		expect(response.data.books[0].isbn).toBe(isbn1);
		expect(response.data.books[1].isbn).toBe(isbn2);
	});

	afterAll(async () => {
		const response = await BooksController.removeAllBooks(user.userId, token);
		expect(response.status).toBe(204);
	});
});

describe('Account tests', () => {
	test('Generate token [/Account/v1/GenerateToken]', async () => {
		const response = await AccountController.getAuthToken(user.userName, user.password);
		console.log(response);
	});
});
