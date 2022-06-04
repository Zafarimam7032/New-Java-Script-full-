function info() {
  return "this is info return function";
}
var message = info();
console.info(message);

var studentVo = {
  studentName: "Zafar Imam",
  address: "siwan bihar",
};
function studentValidation() {
  if (studentVo != null) {
    return studentVo;
  }
  return null;
}
console.info(studentValidation());
