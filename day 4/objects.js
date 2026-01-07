//objects in js
const movieInfo = {
  movietitle: "OG",
  heroname: "Pawan Kalyan",
  director: "Sujeeth",
};
//different ways to get specific property
console.log(movieInfo.director); //dot property
console.log(movieInfo["heroname"]); //accesser
for (let info in movieInfo) {
  console.log(movieInfo[info]);
}
//object.keys
Object.keys(movieInfo).forEach((key) => {
  // to retrieve the column data or headings
  console.log(key);
});
//object.values
Object.values(movieInfo).forEach((value) => {
  //to retrieve the data present in object
  console.log(value);
});
//object.entries
Object.entries(movieInfo).forEach((entry) => {
  console.log(entry[0] + " " + entry[1]);
});
//nested objects
//creating array in an objects and creating objects inside arrays
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
//cart object
const cartItems = {
  items: [
    { pid: 1, pname: "drone", pprice: 20000 },
    { pid: 2, pname: "AC", pprice: 30000 },
  ],
  shipadd: {
    addline1: "Vadlmudi",
    addline2: "Guntur",
    pincode: 522213,
  },
  userinfo: {
    userid: 123,
    username: "Shanu",
  },
};
console.log(cartItems.userinfo.username);
