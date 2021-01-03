'use strict';

/* Даны числа 4, -2, 5, 19, -130, 0, 10. 
Найдите минимальное и максимальное число.*/
function minNumb(arr) {
  let min = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

function maxNumb(arr) {
  let max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

/* Дан массив arr. Найдите среднее арифметическое его элементов. 
Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.*/

function arrayAverage(arr) {
  let sum = arr[0];
  for(let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

/*Выведите на экран случайное целое число от 1 до 100. */
function getRandomInt() {
  return Math.floor(Math.random() * 101) + 1; 
};

/*Заполните массив 10-ю случайными целыми числами.*/
function getRandomArr() {
  for(let i = 1; i < 10; i++){
    console.log(i);
  }
  return  Math.floor(Math.random() * 100) + 1; 
};
