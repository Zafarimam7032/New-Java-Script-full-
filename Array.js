var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.info(numbers);
console.info(numbers[0]);
console.info(numbers[1]);
console.info(numbers.length - 1);
console.info("length of array: " + numbers.length);
console.info("length of array: " + numbers.length);
numbers.push(9);
console.info(numbers);
console.info(numbers.pop());
console.info(numbers);
console.info(numbers.length);
let animals = ["cat", "dog", "elephant", "hen"];
console.info(animals);
console.info(animals.shift());
console.info(animals);
console.info(animals.unshift("Mina"));
console.info(animals);
console.info(animals.splice(0, 3)); //for deleting purpose
console.info(animals);
animals.push("fish", "wolf", "jackel");
console.info(animals.slice(0, 3)); //sub array
console.info(animals.concat(numbers));
console.info(numbers.concat(animals));
console.info(animals.toString());
console.info(animals.sort());
console.info(animals.join(","));
