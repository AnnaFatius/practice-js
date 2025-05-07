// Завдання 1
// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

console.log('Function Declaration');
function calculateArea1(width1, height1) {
	let result = width1 * height1;
	return result;
}
console.log(calculateArea1(5, 10));
console.log(calculateArea1(13, 9));

console.log('Function Expression');
const calculateArea2 = function (width2, height2) {
	let result2 = width2 * height2;
	return result2;
};
console.log(calculateArea2(2, 14));
console.log(calculateArea2(23, 52));

console.log('Arrow Function');
const calculateArea3 = (width3, height3) => {
	let result3 = width3 * height3;
	return result3;
};
console.log(calculateArea3(17, 21));
console.log(calculateArea3(11, 12));
