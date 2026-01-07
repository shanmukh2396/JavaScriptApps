//callback function
console.log("HI");
let prices = [20000, 50000, 30000, 40000];
const newprice = prices.filter((price) => { //filter is used for sorting the elements based on condition.
  return price > 20000;
});
console.log(newprice);
console.log("BYE");