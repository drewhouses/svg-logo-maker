const Shapes = require("./shapes.js");

class Square extends Shapes {
  render() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="300" height="300" fill="${this.shapeColor}" />
    <text x="150" y="190" font-size="120" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
    </svg>`;
  }
}

module.exports = Square;
