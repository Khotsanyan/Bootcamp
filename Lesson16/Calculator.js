function Calculator() {}

Calculator.prototype.add = function (digit1, digit2) {
  return digit1 + digit2;
};
Calculator.prototype.subtract = function (digit1, digit2) {
  return digit1 - digit2;
};
Calculator.prototype.multiply = function (digit1, digit2) {
  return digit1 * digit2;
};
Calculator.prototype.divide = function (digit1, digit2) {
  return digit1 / digit2;
};
let calculate = new Calculator();
console.log(calculate.add(10, 5));
console.log(calculate.subtract(10, 5));
console.log(calculate.multiply(10, 5));
console.log(calculate.divide(10, 5));
