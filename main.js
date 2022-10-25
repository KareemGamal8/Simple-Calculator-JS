// Select Elements
let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

// Add Numbers To Screen
buttons.forEach((btn) => {
  btn.onclick = function (e) {
    let value = e.target.dataset.num;
    screen.value += value;
  };
});

// Equal Function

equal.onclick = (e) => {
  screen.value === ""
    ? (screen.value = "")
    : (screen.value = eval(screen.value));
};

// Clear Function

clear.onclick = function (e) {
  screen.value = "";
};
