//for loop
for (i = 0; i <= 2; i++) {
  console.log(i);
}
//while loop
i = 0;
while (i <= 2) {
  console.log(i);
  i++;
}
//do while loop
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 2);
//ESX new loops
//1.for of: work with arrays
//2.for in: work with arrays,objects
//these 2 loops are used to work with iterables(string, array, object)
//for arrays
//for in
let pname = ["LG", "Samsung", "Realme", "Vivo"];
for (let names in pname) {
  console.log(pname[names]);
}
//for of
let pname1 = ["LG", "Samssung", "Realme"];
for (let names of pname1) {
  console.log(names);
}
//for objects
let cinfo = {
  cid: 101,
  cname: "Shanu",
  cadd: "Guntur",
};
//for in
for (let info in cinfo) {
  console.log(cinfo[info]);
}
