var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtract = function(number3,number4) {
  return number3 - number4;
};
var number3 = parseInt(prompt("first number:"));
var number4 = parseInt(prompt("second number"));
var answer = subtract(number3,number4);
alert(answer);


var multiply = function(number5,number6) {
  return number5 * number6;
};
var number5 = parseInt(prompt("enter a number"));
var number6 = parseInt(prompt("another number"));
var answer = multiply(number5,number6);
alert(answer);