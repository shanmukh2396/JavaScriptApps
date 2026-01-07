//arrays in js
let pnames = ["Realme", "LG", "Samsung", "Vivo"]; //literal syntax
let price = new Array(20000, 30000, 50000, 40000); //object syntax
console.log(pnames[0]);
for (let names of pnames) {
  console.log(names);
}
//for each method
let names = pnames.forEach((values) => {
  console.log(values);
});
//to add values to a array
//1. push()
//2. unshift()
//3. splice()
//push()
pnames.push("OnePlus");
console.log(pnames);
//unshift
pnames.unshift("Oppo");
console.log(pnames);
pnames.splice(2, 0, "Nokia", "Moto");
console.log(pnames);
//replace
pnames[2] = "Iphone";
console.log(pnames);
pnames.pop();
console.log(pnames);
pnames.shift();
console.log(pnames);
//delete pnames[2];
console.log(pnames);
// to know length
console.log(pnames.length);
//to get portion of array value slice
console.log(pnames.slice(2, 4));
console.log(pnames.slice(-4, -2));
//sort
console.log(pnames.sort()); //ascending order
console.log(pnames.reverse()); //descending order
console.log(price.sort());
console.log(price.reverse());
//Array new methods ES6 Plus
//reduce()
let sum = price.reduce((total, value) => {
  return total + value;
});
console.log(sum);
//map()
const Offer = price.map((value) => {
  return value - 5000;
});
console.log(Offer);
//concat arrays
const pnames1 = ["Iphone", "Nokia"];
console.log(pnames.concat(pnames1));
//spread operator
let pnames2=[...pnames, ...pnames1];
console.log(pnames2);
//need to explore remaining methods
