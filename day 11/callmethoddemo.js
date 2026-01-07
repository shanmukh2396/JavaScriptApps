//Call method demo
const studentInfo = {
  studentDetails: function (age, qualification) {
    return this.fname + " " + this.lname + " " + age + " " + qualification;
  },
};
const student = {
  fname: "Shanmukh",
  lname: "Vardhan",
};
console.log(studentInfo.studentDetails.call(student, 20, "B.Tech"));
