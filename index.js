const inquirer = require("inquirer");
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");
const Circle = require("./lib/circle.js");
const fs = require("fs");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("logo generated")
  );
}

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter up to 3 characters for your logo: ",
        name: "letters",
        validate: function (input) {
          if (input.length > 3) {
            return "Must be no greather than 3 characters";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What color text would you like?",
        name: "textColor",
      },
      {
        type: "list",
        message: "Which shape would you like to use?",
        name: "shape",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        message: "What color do you want the shape to be?",
        name: "shapeColor",
      },
    ])
    .then((response) => {
      console.log(response.shape);
      let shape;
      switch (response.shape) {
        case "Circle":
          shape = new Circle(
            response.shapeColor,
            response.textColor,
            response.letters
          );
          break;
        case "Square":
          shape = new Square(
            response.shapeColor,
            response.textColor,
            response.letters
          );
          break;
        case "Triangle":
          shape = new Triangle(
            response.shapeColor,
            response.textColor,
            response.letters
          );
          break;
      }
      writeToFile(`logo.svg`, shape.render());
    });
}

init();
