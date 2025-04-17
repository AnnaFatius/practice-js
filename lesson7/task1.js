// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. 
// Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, 
// a handleOdd буде виводити текст “number is odd”

function handleNum(num, cbEven, cbOdd){
    if(num % 2 === 0){
        cbEven();
    } else {
        cbOdd();
    }
}

function handleEven(){
    console.log('number is even');
}

function handleOdd(){
    console.log('number is odd');
}
handleNum(16, handleEven, handleOdd);
handleNum(21, handleEven, handleOdd);