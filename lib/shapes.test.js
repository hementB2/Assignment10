const { Triangle, Circle, Square } = require('./shapes');


// Triangle shapes
describe('Triangle', () => {
    test('renders triangle SVG code correctly', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        expect(triangle.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="red" />');
    });
});

// circle shapes
describe('Circle', () => {
    test('renders circle SVG code correctly', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="100" fill="blue" />');
    });
});

// Square shapes
describe('Square', () => {
    test('renders square SVG code correctly', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual('<rect x="50" y="50" height="200" width="200" fill="green" />');
    });
});
