class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Reactangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(10), new Reactangle(5, 8)];
for (let i = 0; i < shapes.length; i++) {
  const shape = shapes[i];
  console.log(shape.getArea());
}
