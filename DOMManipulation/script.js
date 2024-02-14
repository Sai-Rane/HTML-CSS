const myBody = document.body;
console.log("myBody", myBody);
myBody.style.backgroundColor = "red";

const box2 = document.getElementById("box-2");
console.log(box2);

const divs = document.getElementsByTagName("div");
console.log(divs);

const boxes = document.getElementsByClassName("box");
console.log("boxes", boxes);

const random = document.querySelector(".container .box");
console.log("random", random);

//innerHTML
const box1 = document.getElementById("box-1");
// box1.innerHTML = "Hello World";
box1.innerHTML = "<h1>hello</h1>";

box1.style.backgroundColor = "yellow";

box1.classList.add("round-border");

// for (let i = 0; i < boxes.length; i++) {
//   boxes[i].classList.add("round-border");
// }

box1.classList.remove("box");

// Creating and Appending element
// We can create element using the createElement() method of document. We can append this new Element(node) inside any other element

const newParagraph = document.createElement("p");
newParagraph.innerText = "This is brand new";

const container = document.getElementById("container");
// Now lets append the p tag which we made, inside the container
container.appendChild(newParagraph);
