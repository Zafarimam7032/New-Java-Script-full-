console.info(addition);
var addition = "addition";
console.info(addition); //var is support hoisting for variable

//console.info(message);
let message = "hi how are you"; //let is not support hoisting for variable
console.info(message);

//console.info(age); //const is not support hoisting for variable
const age = 10;
console.info(age);

//console.info(functioninformation()); //hoisting is not support for var function
var functioninformation = function () {
  return "function call";
};
console.info(functioninformation());

//console.info(functionformation()); //hoisting is not support for let function
let functionformation = function () {
  return "let function call";
};
console.info(functionformation());

//console.info(funformation()); //hoisting is not support for const function
var funformation = function () {
  return " var function call";
};
console.info(funformation());
