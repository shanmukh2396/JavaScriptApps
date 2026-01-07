// promises chaining
const cleanRoom = () => {
  return new Promise((resolve, reject) => {
    resolve("room is clean");
  });
};
const removeGarbage = (message) => {
  return new Promise((resolve, reject) => {
    resolve("garbage removed");
  });
};
const winIcecream = (message) => {
  return new Promise((resolve, reject) => {
    resolve("Icecream now");
  });
}; /*
cleanRoom()
  .then((res) => {
    return removeGarbage(res + " ");
  })
  .then((res) => {
    return winIcecream(res + "->");
  })
  .then((res) => {
    console.log("finished:" + res);
  })
  .catch((err) => {
    console.log("error:" + err);
  });*/
  //executing all promises at a time
Promise.all([
  cleanRoom(),
  removeGarbage("Start: "),
  winIcecream("Start: "),
]).then((msg) => {
  console.log("all tasks completed:");
});
