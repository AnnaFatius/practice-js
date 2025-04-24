// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    { name: "Anna", email: "anna@123.com", age: 21 },
    { name: "Max", email: "max@123.com", age: 30 },
    { name: "Olga", email: "olga@123.com", age: 25 }
  ];
  
  for (const user of users) {
    const { name, email, age } = user;
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  }



