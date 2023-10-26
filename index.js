const inquirer = require("inquirer");
const Shape = require("./lib/shapes.js");
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");
const Circle = require("./lib/circle.js");

const questions = [
  "Enter up to 3 characters for your logo: ",
  "What color text would you like?",
  "Which shape would you like to use?",
  "What color do you want the shape to be?",
];

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "letters",
      },
      {
        type: "input",
        message: questions[1],
        name: "textColor",
      },
      {
        type: "list",
        message: questions[2],
        name: "shape",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        message: questions[3],
        name: "shapeColor",
      },
    ])
    .then((response) => {
      switch (response.shape) {
        case "circle":
          break;
        case "square":
          break;
        case "triangle":
          break;
      }
    });
}

init();
