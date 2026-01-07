//callback types
//callback using anonymous function.
let prices = [20000, 30000, 50000, 40000];
const newprices = prices.map((val) => {
  return val - 5000;
});
console.log(newprices);
//map is used to modify the elements of an array based on some condition.
//callback with named funtion.
function sample() {
  console.log("HI");
}
function demo(callback) {
  return callback;
}
demo(sample());
//sample() is passed as a callback function to demo()
