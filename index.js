const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Create instances of shapes
const triangle = new Triangle();
triangle.setColor('red');

const circle = new Circle();
circle.setColor('blue');

const square = new Square();
square.setColor('green');

// Generate SVG code for each shape
const triangleSVG = triangle.render();
const circleSVG = circle.render();
const squareSVG = square.render();

// Save SVG code to files
fs.writeFileSync('triangle.svg', triangleSVG);
fs.writeFileSync('circle.svg', circleSVG);
fs.writeFileSync('square.svg', squareSVG);

console.log('SVG files generated successfully.');
