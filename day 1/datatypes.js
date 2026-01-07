var empid = 1001; //number: integer
console.log(typeof empid);
var emobnum = 9554654755; //number:long int
console.log(typeof emobnum);
var esal = 25000.465; //number:float
console.log(typeof esal);
var ename = "rahul"; //string
console.log(typeof ename);
var pemployee = true; //boolean
console.log(typeof pemployee);
var esi = null; //object: null
console.log(typeof esi);
var empdesg = ["developer", "HR", "manager"]; //object:array
console.log(typeof empdesg);
var custinfo = { cid: 101, cname: "shanu", cadd: "Guntur" }; //object:dictionary or object
console.log(typeof custinfo);
var pf; //Undefined
console.log(typeof pf);
//Advanced Data Types
var wiproturnover = BigInt("9007199254741991"); //bigint
console.log(typeof wiproturnover);
var pname = Symbol("LG"); //Symbol
var pname1 = Symbol("LG"); //Symbol
console.log(pname == pname1);