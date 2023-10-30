// import Shapes from "./shapes";
const Shapes = require("./shapes.js");

class Triangle extends Shapes {
  render() {
    console.log("In triangle.render()");
    return `<svg id="triangle" viewBox="0 0 100 100">
    <polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}" />
    <text x="50" y="80" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
  </svg>`;
  }
}

module.exports = Triangle;
