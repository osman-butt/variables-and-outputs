"use strict";
window.addEventListener("load", initApp);

// Variables
let number = 0;
let incrementButton = document.querySelector("#btn-increment");
let decrementButton = document.querySelector("#btn-decrement");
let numberDisplay = document.querySelector("#number");

// Initialize app event
function initApp() {
  console.log("App is initialized!");
  incrementButton.addEventListener("click", incrementNumber);
  decrementButton.addEventListener("click", decrementNumber);
}

// Increment number function
function incrementNumber() {
  number++;
  displayNumber();
}

// Decrement number function
function decrementNumber() {
  number--;
  displayNumber();
}

// Display number
function displayNumber() {
  numberDisplay.textContent = number;
}
