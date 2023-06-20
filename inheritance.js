class Parents {
  constructor() {
    this.fatherName = "Mickel";
  }
}

class Child extends Parents {
  constructor(name) {
    super();
    this.name = name;
  }
}
const baby = new Child("Mike");
const baby1 = new Child("Bob");
console.log(baby, baby1);
