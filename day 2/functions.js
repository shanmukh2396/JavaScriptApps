//functions in js
//function without parameters
function showMsg() {
  //camel syntax
  console.log("HI");
}
showMsg();
//function with parameters
function sumOfNum(a, b) {
  console.log("Sum is:" + (a + b));
}
sumOfNum(10, 20);
//function with return value
function mulres(a, b) {
  //parameters
  return a * b;
}
const result = mulres(10, 20); //arguements
console.log("Result:" + result);
//ES6 new function
//arrow function without parameters
const first = () => {
  console.log("Arrow function Demo");
};
first();
//arrow function with parameters
const addnum = (a, b) => {
  console.log("Sum is:" + (a + b));
};
addnum(10, 20);
//arrow function in simple way(if it contains 1 statements)
const addnum1 = (a, b) => a + b;
console.log("Sum is:", addnum1(10, 20));
//arrow function with return value
const mulnum = (a, b) => {
  return a * b;
};
const res = mulnum(10, 20);
console.log("result:", +res);
//in a simple way
const mulnum1 = (a, b) => a * b;
const res1 = mulnum1(10, 2);
console.log("result:" + res1);
