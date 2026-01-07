//asynchronous output
console.log("HI");
setTimeout(() => {
  console.log("HELLO");
}, 2000);
console.log("HOW ARE YOU?");
//asynchronous nature is non blocking in javascript.
// It will not wait for the previous line to execute.
//it will execute the next line immediately.
//after the specified time only the callback function will be executed.