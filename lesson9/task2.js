// Завдання 2
// Створіть об'єкт book з такими властивостями:
// -title: рядок, представляє назву книги.
// -author: рядок, представляє автора книги.
// -year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
	title: 'Kharkiv',
	author: 'I love guide',
	year: 2024,
};

const { title, author, year } = book;

console.log(title);
console.log(author);
console.log(year);
