const Shapes = require("./shapes.js");

class Circle extends Shapes {
  render() {
    console.log("In render function");
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
  
  </svg>`;
  }
}

module.exports = Circle;
