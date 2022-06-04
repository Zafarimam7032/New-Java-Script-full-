let result = function () {
  console.info("info message");
};
result();
let message = function () {
  return "hi how are you";
};
console.info(message());

let addition = function (x, y) {
  return x * y;
};
console.info(addition(1, 2));

let result1 = () => {
  console.info("this is arrow function");
};
result1();

let add = function (x, y) {
  return x + y;
};
let sub = function (x, y) {
  return x - y;
};
let mul = function (x, y) {
  return x * y;
};
let div = function (x, y) {
  return x / y;
};

let resultinfo = [add, sub, mul, div];
console.info(resultinfo[3](100, 2));
for (let call of resultinfo) {
  console.info(call(10, 20));
}
