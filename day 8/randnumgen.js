let randnum = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10 + 1);
  console.log(num);
  if (num > 4) {
    resolve("Positive");
  } else {
    reject("Negative");
  }
});
randnum
  .then((res) => {
    console.log("Generated number:" + res);
  })
  .catch((res) => {
    console.log("Generated number is low:" + res);
  });
