class Tiger {
  #speed = 100;
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`I am ${this.name}.I am running at ${this.#speed} mph`);
  }
}

const royal = new Tiger("ROyel Bengle");
console.log(royal.#speed);
royal.run();
