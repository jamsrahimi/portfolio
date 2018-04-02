'use strict'

function func() {
    console.log("Hello, World!");
}
func();

// function expression
let func2 = function () {
    console.log("Hello, World!");
}
func2();

// passing a function into another function
function callFunction(funcarg) {
    funcarg();
}
callFunction(func2);