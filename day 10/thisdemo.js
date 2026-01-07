//this keyword importance
const empinfo = {
  fname: "shanmukh",
  lname: "vardhan",
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};
console.log(empinfo.fullname());
