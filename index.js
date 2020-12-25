'use strict';

//1

function isAdult (age) {
  if(age>18) {
    return true;
  }
  else {
    return false;
  }
};
console.log(isAdult(20));
console.log(isAdult(4));

// 2 

function checkMultiplicity (a, b) {
  if (a % b === 0) {
    return true;
  }
  else {
    return false;
  }
};
console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4)); 

// 3

function isTriangle (a, b, c) {
   if (a+b > c && a+c > b && b+c > a) {
    return true;
  }
  else {
    return false;
  }
};
console.log(isTriangle(2,2,3));
console.log(isTriangle(2,2,5));
console.log(isTriangle(2,3,5));
console.log(isTriangle(4,3,5));

// 4.1

function sRhombus (d1, d2) {
  return 0.5*d1*d2;
};
console.log (sRhombus(6, 3));

// 4.2

const input1 = +prompt('Input radius:');
const input2 = +prompt('Input height:');
const p = 3.14;
const sCylinder = function(r, h, p) {
  return 2*p*r*h;
};
const s = sCylinder(input1, input2, p);
console.log(s);

// 4.3

function sTriangle (a, h) {
  return 0.5*a*h;
};
console.log (sTriangle(6, 8));

// 4.4

function sRectangle (a, b) {
  return a*b;
};
console.log (sRectangle(4, 3));
