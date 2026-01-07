//promises syntax
const movierating = new Promise((resolve, reject) => {
  let rating = 5;
  if (rating >= 4) {
    resolve("Excellent Movie");
  } else {
    reject("Waste of your time");
  }
});
movierating
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
