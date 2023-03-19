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

    //Делаем остаток от деления (если 5 % 2 тогда бyдет 1 потомyчто в 5 влезет две двойки и останется 1 или 6 % 3 бyдет 0 потомy что в 6 влезет две тройки) 
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


/* let productName = "Droid";
let pricePerItem = 2000;   

productName = "Repair droid";
pricePerItem = 3500; */


/* const clients = ["hffgg", "Poly", "Ajax", "Poly", "Mango"];
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax" */



/* const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
} */



/* const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) {
  console.log(character);
} */


/* const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // На каждой итерации будем проверять совпадает ли элемент массива с
  // именем клиента. Если совпадает то мы записываем в message сообщение
  // об успехе и делаем break чтобы не искать дальше
  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }

  // Если они не совпадают то запишем в message сообщение об отсутствии имени
  message = "Клиента с таким именем нету в базе данных!";
}

console.log(message); // "Клиент с таким именем есть в базе данных!"



const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message = "Клиента с таким именем нету в базе данных!";

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }
  // Если не совпадает, то на этой итерации ничего не делаем
}

console.log(message); // Клиент с таким именем есть в базе данных! */



/* const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
} 
 */

/* const a = ["Mango"];
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Изменим массив, добавив еще один элемент, используя указатель из a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b также изменилось, потому что b, как и a,
// просто содержит ссылку на одно и то же место в памяти
console.log(b); // ["Mango", "Poly"]

// Результат повторяется
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"] */



/* const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript это интересно";
console.log(message.split(" ")); // ["JavaScript", "это", "интересно"] */


/* const words = ["JavaScript", "это", "интересно"];
console.log(words.join("")); // "JavaScriptэтоинтересно"
console.log(words.join(" ")); // "JavaScript это интересно"
console.log(words.join(" - ")); // "JavaScript-это-интересно" */


/* const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1 */ 


/* const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5] */


/* //Задача пощитать общую сумму покупок (В данном примере используется цикл FOR но правильнее использовать FOR OF (Ниже пояснение))
/* const cart = [4, 6, 82, 345, 33, 76, 45, 77, 12];
//2 Обьявить переменную total до цикла (Потомучто если обьявить переменную внутри цикла она будет видна только внутри цикла и за пределами цикла будет не видна по этому сначала обьявляется переменну потом проходит цикл и потом она используется)
let total = 0;
//1 Перебрать масив
for (let i=0; i < cart.length; i+=1) {
    console.log(cart[i]);
// 3 Каждия елемент приплюсовать  к total
    total += cart[i];
} 
console.log('Total:', total); */

/* const cart = [4, 6, 82, 345, 33, 76, 45, 77, 12];
let total = 0;

// for of используется в том случае исли не нужно имень доступ к счетчику и не нужно перезаписывать елемент масива(cart i не нужно изменять тоесть внутри каждого елемента масива переопределить его значение задача ниже)
for (const value of cart) {
    total += value;
}
console.log('Total:', total); */

//Задача нужно добавить ПДВ на каждую еденицу покупки 10% (для этого нам нужно обратится к каждому елементу масива и переопределить его, используем цикл for)
/* const cart = [4, 6, 82, 345, 33, 76, 45, 77, 12];
for (let i = 0; i < cart.length; i += 1) {
    cart[i] = Math.round(cart[i] * 1.1)
}
console.table(cart) */
//если елемент масива изменяется for если не изменяется for of */




// 1 вари
/* const min = 6;
const max = 45;
let total = 0;
// 2 делаем цыкл на четные числа 
for (let i = min; i <= max; i +=1 ) {

    //Делаем остаток от деления (если 5 % 2 тогда бyдет 1 потомyчто в 5 влезет две двойки и останется 1 или 6 % 3 бyдет 0 потомy что в 6 влезет две тройки) 
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

//Задача напиши скрипт который подсчитывает сумму всех четных чисел в массиве

/* const numbers = [1, 4, 6, 3, 7, 56, 2, 8, 1, 4];
let total = 0;
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
    if (numbers[i] % 2 === 0) {
        console.log('четное: ')
        total += numbers[i];
    }
}
console.table('Total: ', total); */

// Привильнее решить задачу через for of
/* const numbers = [1, 4, 6, 3, 7, 56, 2, 8, 1, 4];
let total = 0;
for(const number of numbers) {
    if (number % 2 === 0) {
        console.log('четное: ')
        total += number;
    }
}
console.table('Total: ', total); */


//Задача найти самое большое число массива
const nambers = [3, 234, 1, 45, 12, 14, 144, 123, 43, 15];
let biggestNamber = nambers[0];

for (const namber of nambers) {
    if (namber > biggestNamber) {
        biggestNamber = namber;
    }
}
console.log(biggestNamber);