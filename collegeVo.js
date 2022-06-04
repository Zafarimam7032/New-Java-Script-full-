let collegeVo = {
  collegeName: "Mall reddy college of engineering",
  collegeCode: "MRCE",
  collegeAddress: "Hyderabad",
  facalties: [
    (teacherVo = {
      teacherName: "anand",
      teacherMail: "abc@gmail.com",
      teacherMobileNumber: "2232223",
    }),
    (teacherVo = {
      teacherName: "zafar",
      teacherMail: "abc@gmail.com",
      teacherMobileNumber: "2232223",
    }),
    (teacherVo = {
      teacherName: "imam",
      teacherMail: "abc@gmail.com",
      teacherMobileNumber: "2232223",
    }),
  ],
  students: [
    (studentVo = {
      studentName: "Zafar imam",
      studentContectNumber: "+917032871006",
      studentEmail: "abcd@gmail.com",
      studentAddress: "siwan Bihar",
    }),
    (studentVo = {
      studentName: "bunty raj",
      studentContectNumber: "+917032871986",
      studentEmail: "abcd@gmail.com",
      studentAddress: "siwan Bihar",
    }),
    (studentVo = {
      studentName: "kiran",
      studentContectNumber: "+917032871006",
      studentEmail: "abcd@gmail.com",
      studentAddress: "siwan Bihar",
    }),
  ],
};
//console.info(collegeVo);
console.info(collegeVo.students[0]);
