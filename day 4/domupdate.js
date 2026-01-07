//dom manipulation methods
document.getElementById("first").innerHTML =
  "Super college in terms of torture"; //html property
document.getElementById("second").style.color = "red"; //css property
//adding an element into html from js
const element = document.createElement("h2");
element.innerText = "Welcome to CAI";
document.body.appendChild(element);
document.getElementById("second").setAttribute("class", "Highlighted");
