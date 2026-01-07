//with closure
const cres = (() => {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})(); //IIFE(immediate invoking function expression) self invoking function
console.log(cres());
console.log(cres());
console.log(cres());
