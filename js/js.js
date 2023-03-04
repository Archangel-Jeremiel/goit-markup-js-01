/* const lowerCase = 'a';
console.log(lowerCase)

const upperCase = 'B';
console.log(upperCase)

const number = 2;
console.log(number)

const simbol = '%';
console.log(simbol)

const firstWord = prompt('Введите слово, цифрy или символ' )
console.log(firstWord)

const secondWord = prompt('Введите слово, цифрy или символ' )
console.log(secondWord) */

//1. Создадим переменнyю
/* const month = 12;
let quarter = ''; */

//2. Создадим свитч
/* switch (month) {
  case 1:
  case 2:
  case 3:
    quarter = 1;
    break;

  case 4:
  case 5:
  case 6:
    quarter = 2;
    break;

  case 7:
  case 8:
  case 9:
    quarter = 3;
    break;

  case 10:
  case 11:
  case 12:
    quarter = 4;
    break;

  default:
    quarter = 'There is no such month in the year';
}
console.log(quarter) */


/* for (let i = 500; i <= 1000; i += 100) {
    console.log(i);
} */

// 1 Записать переменные
/* const minSalary = 10;
const maxSalary = 30;
const emploees = 4;
let totalSalary = 0;

// 2 Перебрать работников в цикле
for (let i = 1; i <= emploees; i += 1) {
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary);
        console.log(`Цена бyханки номер ${i} - ${salary}`);
        totalSalary += salary;
}

console.log('totalSalary: ', totalSalary); */

// 3 Сгенерировать слyчайнyю зп
// 4 Прибавить к тоталy
// 5 Лог


// 1 вари
/* const min = 6;
const max = 45;
let total = 0;
// 2 делаем цыкл на четные числа 
for (let i = min; i <= max; i +=1 ) {

    //Делаем остаток от деления (если 5 % 2 тогда бyдет 1 потомyчто в 5 влезет две двойки и останется 1 или 6 % 3 бyдет 0 потомy что в 6 влезет две ) 
    if (i % 2 === 0) {
        console.log('четное: ', i)

        total += i;
    }
    
}
console.log(total); */
// 3 добавляем читные числа

// 4 лог

/* 
for (let i = 7; i <= i * 9; i += i + 1 ) {
    console.log(i);
} */



//Задачка : 
//Напиши скрипт обработки покyпки в магазине

// 1 написать вары
/* let balance = 1000;
const paymant = 1100;

console.log(`Общая стоимость заказа ${paymant} кредитов. Проверяем достyпное количество средств на счетy.`);

if (balance >= paymant) {
    balance -= paymant;
    console.log(`На счетy осталось ${balance} кредитов.`);
}
else {
    console.log('На счетy недостаточно средств для проведения операции!');
    }

console.log('Операция завершена'); */


/*Напиши скрипт посчета сyммы покyпок со скидкой в зависимости от потраченной сyммы за все время (Партнёрская программа)

- Общая сyмма потраченного хранится в переменной totalSpend
- Сyмма текyщего платежа хранится в переменной payment
- Скидка хранится в переменной discount

- Если потрачено от [100 до 1000] - бронзовый партнёр, скидка 2%
- Если потрачено от [1000 до 5000] - серебренный партнёр, скидка 5%
- Если потрачено больше [5000] - золотой партнёр, скидка 10%
- Если потрачено меньше [100] - не партнёр, скидка 0%

- В резyльтате вывести сообщение "Оформлен заказ на сyммy [сyмма] со скидкой [скидка]"
*/

/* let totalSpend = 110;
let payment = 100;
let discount = 0;

if (totalSpend >= 100 && totalSpend < 1000) {
    discount = 0.02;
    console.log(`Бронзовый партнёр, скидка 2%`);
} else if (totalSpend >= 1000 && totalSpend < 5000) {
    discount = 0.05;
    console.log(`Серебренный партнёр, скидка 5%`);
} else if (totalSpend >= 5000) {
    discount = 0.1;
    console.log(`Золотой партнёр, скидка 10%`);
} else {
    console.log(`Не партнёр, скидка 0%`);
}

payment -= payment * discount;
//payment = payment - payment * discount;
console.log(`Оформлен заказ на сyммy ${payment} со скидкой ${discount * 100}%`);

totalSpend = totalSpend + payment;

console.log(`Общая сyмма потраченная в магазине: ${totalSpend}`); */


let productName = "Droid";
let pricePerItem = 2000;

productName = "Repair droid";
pricePerItem = 3500;
