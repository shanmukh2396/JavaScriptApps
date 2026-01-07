//ES6+ Features
//how to define multi line strings
//1. Backtick syntax
let desc = `Vignan Lara Institute of Technology & Science is a reputed engineering college.
It focuses on quality education and practical learning.
The institute encourages innovation, discipline, and ethical values.
It helps students build strong careers and a bright future.`;
console.log(desc);
//string interpolation
let fname = "Shanu";
let lname = "Kumar";
console.log(`${fname} ${lname}`);
//array destructure
let pnames = ["Realme", "LG", "Vivo"];
let [b1, b2, b3] = pnames;
console.log(b1);
console.log(b2);
console.log(b3);
//object destructure
let minfo = {
  mname: "Bahubali",
  mdirector: "Rajamouli",
  mprod: "Shobu Yarlagadda",
};
let { mname, mdirector, mprod } = minfo;
console.log(mname);
console.log(mdirector);
console.log(mprod);
