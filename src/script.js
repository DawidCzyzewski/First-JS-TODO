"use strict:";
// firstly connecting JS to DOM
const input = document.querySelector(".section__input");
const output = document.querySelector(".section__output ul");
// console.log(input);

//const function to create DOM element with new input

const createNewElement = (element) => {
  newListElem = document.createElement("li");
  newListElem.textContent = element;
  console.log(element);
  console.log(output);
  output.insertAdjacentElement("afterbegin", newListElem);
  //TODO: add classes
};

// creating function to capture input and make new list element with it
const addTask = (event) => {
  event.preventDefault();

  //   searching for value:

  console.log("event.target: ", event.target);
  console.log("event.target.value: ", event.target.value);
  console.log("event.target[0].value: ", event.target[0].value);
  const newElem = event.target[0].value;
  console.log("newElem: ", newElem);
  createNewElement(newElem);
  // TODO: clear input after submit
  event.target[0].value = "";
};

// TODO: add element to deleting list elements, pointer on them, css styles
input.addEventListener("submit", addTask);
output.addEventListener("click", (e) => {
  e.target.remove();
});
