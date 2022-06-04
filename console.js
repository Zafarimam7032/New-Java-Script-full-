console.info("this is info message");
console.error("thisis error is message");
console.warn("this is warning message");
console.log("this is log message");
console.assert(20 == 21, "this is assert method");
console.assert(20 == 21, { h: "true", hi: "fasle" });
//console.clear("this is usedfor clearing the console");
console.count();
let user = "";

function greet() {
  console.count();
  return "hi " + user;
}
greet();
console.debug("this debug console ");
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
