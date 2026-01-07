//without closure
let counter = 1; //global scope
const cres = () => {
  let counter = 0; //local scope
  counter += 1;
  return counter;
};
console.log(cres());
console.log(cres());
console.log(cres());
