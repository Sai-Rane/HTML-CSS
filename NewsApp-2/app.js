// https://www.youtube.com/watch?v=Cad46WAHApY&t=6s

hello();

// function hello() {
//   console.log("hello");
// }

// anonymous function
// const hello = function () {
//     console.log("hello");
// };

// arrow function
// const hello = () => {
//   console.log("hello");
// };

// decode(); //error: decode is not defined, reason is the scope for decode function is local to the hello function so the decode function is hoisted to top the function and not at the top of the global scope
function hello() {
  decode();
  console.log("hello");

  function decode() {
    console.log("decode");
  }
}

// ------------------------------------------------
// now lets see how hoisting works with variables

// variables declared with var are hoisted to top of the scope they are defined in, but with a default value of undefined
console.log(name); //undefined
var name = "john";

console.log(a); //error:  Cannot access 'a' before initialization
const a = "apple";

console.log(fruit); // error:  Cannot access 'fruit' before initialization
let fruit = "banana";

// --------------------------------------------------
// https://www.youtube.com/watch?v=cHHU0jXfjKY
// var c = 10;
// if (true) {
//   let a = 1;
//   const b = 20;
//   var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// let and const are block scope
