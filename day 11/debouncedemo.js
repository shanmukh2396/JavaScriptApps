//request data gathering logic
let btn = document.getElementById("demo");
let clickres = document.getElementById("sample");
let triggerres = document.getElementById("simple");

//business logic
let clickcount = 0;
let triggercount = 0;
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}
const debouncedres = debounce(() => {
  triggercount++;
  triggercount.innerHTML = `Triggered:  ${triggercount}`;
}, 800);
btn.addEventListener("click", () => {
  clickcount++;
  clickres.innerHTML = `clicked ${clickcount}`;
  debouncedres();
});
