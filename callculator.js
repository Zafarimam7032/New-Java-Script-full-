function add(number1, number2) {
  return number1 + number2;
}
function sub(number1, number2) {
  return number1 - number2;
}
function mul(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}
function avg(numbers) {
  var total = 0;
  for (num of numbers) {
    total = total + num;
  }
  return Math.round(total / numbers.length);
}
console.info(avg([1, 2, 3, 5]));
