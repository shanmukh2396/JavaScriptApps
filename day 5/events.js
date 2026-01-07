//event logic
let btnvalue = document.getElementById("demo");
let infoval = document.getElementById("infoval");
let uname = document.getElementById("one");
let uvalue = document.getElementById("sam");
function first() {
  alert("HI");
}
function second() {
  alert("HELLO");
}
const overlogic = () => {
  infoval.style.color = "blue";
};
const outlogic = () => {
  infoval.style.color = "";
};
const unamevalue = () => {
  let name = uname.value;
  uvalue.textContent = name;
};
//btnvalue.onclick = first();
//btnvalue.onclick = second();
//about addEventListener Method
btnvalue.addEventListener("click", first);
btnvalue.addEventListener("click", second);
infoval.addEventListener("mouseover", overlogic);
infoval.addEventListener("mouseout", outlogic);
uname.addEventListener("input", unamevalue);
