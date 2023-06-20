// class PenDrive {
//   constructor(capacity, color, price) {
//     this.capacity = capacity;
//     this.color = color;
//     this.price = price;
//   }
// }

// const ignite = new PenDrive("35GB", "white", 1200);
// const pny = new PenDrive("25GB", "Yellow");
// console.log(ignite);
// console.log(pny);

class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
  calculateRange() {
    return 2 * (this.width + this.height);
  }
}

let rect1 = new Rect(10, 20);
let rect2 = new Rect(100, 200);
console.log(rect1.calculateArea());
console.log(rect1.calculateRange());

console.log(rect2.calculateArea());
console.log(rect2.calculateRange());
