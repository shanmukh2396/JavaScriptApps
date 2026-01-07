//async and await demo
const movierating = async () => {
  return new Promise((resolve, reject) => {
    let rating = 4.5;
    if (rating > 4) {
      resolve("good movie");
    } else {
      reject("bad movie");
    }
  });
};
const result = async () => {
  try {
    const data = await movierating();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
result();
