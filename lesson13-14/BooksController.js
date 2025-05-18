const BaseController = require('./BaseController');

class BooksController extends BaseController {
	async getAllBooks() {
		return await this.axiosInstance.get('/BookStore/v1/Books');
	}
	async addBook(userId, isbn1, token, isbn2) {
		const body = {
			userId: userId,
			collectionOfIsbns: [{ isbn: isbn1 }],
		};

		if (isbn2) {
			body.collectionOfIsbns.push({ isbn: isbn2 });
		}

		return await this.axiosInstance.post('/BookStore/v1/Books', body, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async removeBook(userId, token, isbn) {
		return await this.axiosInstance.delete(
			`/BookStore/v1/Book`,
			{
				userId: userId,
				isbn: isbn,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}

	async removeAllBooks(userId, token) {
		return await this.axiosInstance.delete(`/BookStore/v1/Books?UserId=${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}

module.exports = new BooksController();
