//variables using javascript
var pprice = 50000;
//new keywords
let pname = "Samsung";
const pid = 1002;
//drawbacks of var
var pprice = 55000;
console.log(pprice); //we can redeclare var keyword
//let don't allow redeclaration
//2nd drawwback
for (var i = 1; i <= 3; i++) {
  console.log("inner i value:" + i);
}
console.log("outer i value:" + i); //i is accessible outside the block. This is a drawback of var.
for (let j = 1; j <= 3; j++) {
  console.log("inner j value:" + j);
}
//console.log("outer j value:" + j); //j is not accessible outside the block. This is the advantage of let.
//for (const k = 1; k <= 3; k++) {
//console.log("inner k value:" + k);
//}
//console.log("outer k value:" + k); //k is not accessible outside the block. This is the advantage of const.
const pan = 5123456789;
console.log(pan);
