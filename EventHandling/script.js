function myFunction() {
  console.log("click");
}

function mouseOver() {
  console.log("mouseOver");
}

function keypress() {
  console.log("keypress");
}

function keyup() {
  console.log("keyup");
}

function keydown() {
  console.log("keydown");
}

//To add event listener first you need to capture the element on which you want to add the event listener
const box3 = document.getElementById("box-3");
box3.addEventListener("click", () => console.log("box3 clicked"));

box3.addEventListener("mouseover", (e) => {
  console.log("event", e);
});

const inputbox = document.getElementById("nameInput");
inputbox.addEventListener("keypress", (e) => {
  console.log(e.key);
});

const container = document.getElementById("container");
container.addEventListener("click", () => console.log("clicked on container"));
// container.addEventListener("click", () => console.log("clicked on container"),true);  capturing(parent to child travelling)
