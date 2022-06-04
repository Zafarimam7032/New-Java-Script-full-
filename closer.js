let num = function (x, y) {
  let mul = function () {
    return x * y;
  };
  return mul();
};
console.info(num(1, 2));
