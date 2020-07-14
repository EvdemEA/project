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
let incr = 10,
    decr = 10;

// incr++;
// decr--;

// инкрементирование в постфиксной форме
console.log(incr++);
// декрементирование в постфисной форме
console.log(decr--);
// получение остатка от деления чисел
console.log(5%2);
// сравниение по значению (не строгое)
console.log(2*4 == 8);
// сравнение по типу данных (строгое)
console.log(2*4 === '8');
// оператор И и ИЛИ
const isChecked = true,
      isClose = true;
// оба аргумента правдивы
console.log(isChecked && isClose);
// хотя бы один аргумент правдив
console.log(isChecked || isClose);
// ! отрицание (разворот значения на противоположное)
console.log(isChecked || !isClose);