class Animal{
  name: string;
  age: number;
  constructor (name: string, age: number) {
    this.name = name;
      this.age = age;
  }
  walk() {
      console.log(`${this.name} can walk~`);
  }
}

let dog: Animal = new Animal('旺财', 1);

console.log(dog);

dog.walk();
