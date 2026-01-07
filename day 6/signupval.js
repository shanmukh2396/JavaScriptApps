// validation logic
function validate() {
  // request data gathering logic
  let uname = document.getElementById("username").value;
  let pwd = document.getElementById("password").value;
  let regex = /[a-z][A-Z]/;
  let mobile = document.getElementById("phone").value;
  let regex1 = /[0-9]/;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let add = document.getElementById("address").value;
  let genderMale = document.getElementById("male").checked;
  let genderFemale = document.getElementById("female").checked;
  let qualification = document.getElementById("qualification").value;
  let skills = document.getElementById("skills").value;
  let shift = document.getElementById("shift").value;
  let resume = document.getElementById("resume").value;
  // validation logic
  if (uname == "") {
    alert("please enter username");
    return false;
  }
  if (pwd == "") {
    alert("please enter password");
    return false;
  }
  if (pwd.length <= 8 || pwd.length > 12) {
    alert("password should be minimum 8 characters,maximum 12 characters");
    return false;
  }
  if (!regex.test(pwd)) {
    alert("password should be combination of small and capital letters");
    return false;
  }
  if (mobile == "") {
    alert("please enter mobile number");
    return false;
  }
  if (mobile.length != 10) {
    alert("mobile number should be 10 digits");
    return false;
  }
  if (!regex1.test(mobile)) {
    alert("mobile number should only contain digits");
    return false;
  }
  if (email == "") {
    alert("please enter email");
    return false;
  }
  if (!email.includes(".com")) {
    alert("please enter valid email");
    return false;
  }
  if (date == "") {
    alert("please enter date of birth");
    return false;
  }
  if (add == "") {
    alert("please enter address");
    return false;
  }
  if (!genderMale && !genderFemale) {
    alert("please select gender");
    return false;
  }
  if (qualification == "") {
    alert("Please select qualification");
    return false;
  }
  if (skills == "") {
    alert("please enter skills");
    return false;
  }
  if (shift == "") {
    alert("please select shift");
    return false;
  }
  if ((resume = "")) {
    alert("please upload resume");
    return false;
  }
  return true;
}
