//logical operator
var num = 20;
var num2 = 30;
if (num > 0 && num2 > 0) {
  console.info("both number is valid");
} else {
  console.info("both number is not valid");
}
num2 = -30;
//Logical OR Operator
if (num > 0 || num2 > 0) {
  console.info("eighter one number is valid");
}
//Logical not Operator
var studentName = "Zafar Imam";
if (!(studentName != null)) {
  console.info("student Name is null");
} else {
  console.info(studentName);
}
studentName = null;
if (!(studentName != null)) {
  console.info("student Name is null");
} else {
  console.info(studentName);
}
