class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="0,100 300,100 150,0" height="100%" width="100%" fill="${this.color}" />`;
    }
    
}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50"  height="200" width="200" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Square, Circle };
