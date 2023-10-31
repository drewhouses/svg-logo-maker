const Circle = require("./circle.js");
const Square = require("./square.js");
const Triangle = require("./triangle.js");

describe("Circle", () => {
  it("should take in shape color, text color, and letters and return a SVG string", () => {
    const circle = new Circle("blue", "white", "abc");
    const expected = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="blue" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text>
  
  </svg>`;

    expect(circle.render()).toEqual(expected);
  });
});

describe("Square", () => {
  it("should take in shape color, text color, and letters and return a SVG string for a square", () => {
    const square = new Square("green", "orange", "abc");
    const expected = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="300" height="300" fill="green" />
    <text x="150" y="190" font-size="120" text-anchor="middle" fill="orange">abc</text>
    </svg>`;

    expect(square.render()).toEqual(expected);
  });
});

describe("Triangle", () => {
  it("should take in shape color, text color, and letters and return a SVG string for a triangle", () => {
    const triangle = new Triangle("blue", "green", "ghi");
    const expected = `<svg id="triangle" viewBox="0 0 100 100">
    <polygon points="50 15, 100 100, 0 100" fill="blue" />
    <text x="50" y="80" font-size="30" text-anchor="middle" fill="green">ghi</text>
  </svg>`;

    expect(triangle.render()).toEqual(expected);
  });
});
