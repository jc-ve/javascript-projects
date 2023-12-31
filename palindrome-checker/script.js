"use strict";

const form = document.getElementById("form");
const inputText = document.getElementById("text-input");
const btnCheck = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (e) => {
  e.preventDefault();

  if (inputText.value === "") {
    alert("Please input a value");
  } else {
    const stringClear = inputText.value.trim();
    const reversedText = stringClear.split("").reverse().join("");
    reversedText === inputText.value
      ? (result.textContent = `${inputText.value} is a palindrome`)
      : (result.textContent = `${inputText.value} is not a palindrome`);
  }
};

form.addEventListener("submit", checkPalindrome);
