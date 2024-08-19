let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers = number1.map(function (n) {
  return n + 1;
});
console.info(numbers);
let students = [
  (studentvo = {
    studentName: "Zafar Imam",
    age: 24,
    Address: "Bihar",
  }),
  (studentvo = {
    studentName: " Mina",
    age: 24,
    Address: "Bihar",
  }),
  ((studentvo = {
    studentName: "Kiran",
    age: 24,
    Address: "Bihar",
  }),
  (studentvo = {
    studentName: "Rashika",
    age: 24,
    Address: "Bihar",
  })),
];

console.info(students);
let studentsNew = students.map(function (student) {
  return student.age + 1;
});
console.info(studentsNew);
