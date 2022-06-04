let string = "";
for (let i = 0; i < 10; i++) {
  for (let j = i; j <= 10; j++) {
    string += "*";
  }
  string += "\n";
}
console.info(string);
