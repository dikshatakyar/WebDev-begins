// function f1(){
//     a=10;
// }
// f1();
// console.log(a);

// "use strict";
//to declare global variable inside function use window object
function f1() {
    a = 10;
    window.b = 20;
}
f1();
console.log(a);
console.log(window.b);
