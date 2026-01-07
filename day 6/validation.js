//validation logic
function validate() {
  //request data gathering logic
  let uname = document.getElementById("username").value;
  let pwd = document.getElementById("password").value;
  let regex = /[A-Z][a-z]/;
  //validation logic
  if (uname == "") {
    alert("Please enter your name");
    return false;
  }
  if (pwd == "") {
    alert("please enter password");
    return false;
  }
  if (pwd.length <= 8 || pwd.length >= 12) {
    alert("password should be at least 8 characters or maximum 12 characters");
    return false;
  }
  if (!regex.test(pwd)) {
    alert("password should be combination of small and capital letters");
    return false;
  }
  return true;
}
