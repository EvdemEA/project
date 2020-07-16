"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 7+7;
// console.log(number);

// const obj = {
//   a: 50
// };

// obj.a = 10;
// console.log(obj);

// закрытая let
// {
//    let result = 50;
// }
// // console.log(result);


// неправильно
// a = 15;
// console.log(a);

// ЧИСЛА
// let number = 4.6;

// console.log(-4/0);
// console.log('string' * 9);

// // СТРОКА
// const persone = 'Alex';

// // boolean

// const bool = true;

// // NULL -------------------------------------------------------------
// // console.log(something);

// // UNDEFINED --------------------------------------------------------
// let und;
// console.log(und);

// OBJECTS
// const obj = {
//   name: 'John',
//   age: 25,
//   isMarried: false
// };

// // console.log(obj.name); - обращение к объекту
// // console.log(obj['name']);

// // МАССИВЫ -------------------------------------------------------
// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[3]);

// 

// let result = confirm('Ты норм?');
// console.log(result);

// const answer = prompt('Вам есть 18?', '18');
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Какая у вас фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));

// ИНТЕРПОЛЯЦИЯ ----------------------------------------------
// const category = 'TOYS';
// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';
// alert(`Hi ${user}`);

// ОПЕРАТОРЫ -------------------------------------------------
// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// инкрементирование в постфиксной форме
// console.log(incr++);
// // декрементирование в постфисной форме
// console.log(decr--);
// // получение остатка от деления чисел
// console.log(5%2);
// // сравниение по значению (не строгое)
// console.log(2*4 == 8);
// // сравнение по типу данных (строгое)
// console.log(2*4 === '8');
// // оператор И и ИЛИ
// const isChecked = true,
//       isClose = true;
// // оба аргумента правдивы
// console.log(isChecked && isClose);
// // хотя бы один аргумент правдив
// console.log(isChecked || isClose);
// // ! отрицание (разворот значения на противоположное)
// console.log(isChecked || !isClose);

// УСЛОВИЯ
// if (4 == 9) {
//   console.log('OK!');
// } else {
//   console.log('ERROR')
// }

// const num = 50;
// // if (num < 49) {
// //   console.log('ERROR!');
// // } else if (num > 100) {
// //   console.log('TO MUCH');
// // } else {
// //   console.log('OK!');
// // }

// // (num === 50) ? console.log('OK!') : console.log('ERROR!'); тернарное условие

// switch (num) {
//   case 49:
//     console.log('неверно!');
//     break;
//   case 100:
//     console.log('неверно!');
//     break;
//   case 50:
//     console.log('В точку!');
//     break;
//   default:
//     console.log('Не в этот раз(');
//     break;
// }

// ЦИКЛЫ
// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }

// while (num < 55);

// for (let i = 1; i < 5; i++) {
//   if (i === 5) {
//     // break;
//     // continue;
//   }

//   console.log(i);
// }

// ФУНКЦИИ
// let num = 20; ГЛОБАЛЬНАЯ ПЕРЕМЕННАЯ
// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   // let num = 10; ЛОКАЛЬНАЯ ПЕРЕМЕННАЯ
//   let num = 10;
//   console.log(num);
// }

// showFirstMessage('Hello world!');
// console.log(num);

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// let logger = function() {  _____FUNCTION EXPRESSION_____
//   console.log('Hello!');
// };

// logger();

// const calc = (a, b) => {
//   console.log(a + b);
//   return a + b;
// };

// console.log(calc);

// МЕТОДЫ И СВОЙСТВА
const str = 'test';
const arr = [1, 2, 3];


console.log(arr.length);