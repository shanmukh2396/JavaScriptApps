//functions in js
//rest parameter
const demo = (a, b, ...c) => {
  //rest parameter usage:
  //rest parameter should always be the last parameter.
  //if we take the first parameter as rest parameter, it throws error.
  console.log(a);
  console.log(b);
  console.log(c);
};
demo(10, 20, 30, 40, 50);
//default parameters: if value is not given when function is called, then it takes default value.
// if value is given during function call, it uses the value given in function call.
// we cannot give default value to first parameter. but we can assign it as second or third and so on.
const addnum = (a, b = 10) => {
  console.log(a + b);
};
addnum(10, 30);
