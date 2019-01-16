class Animal{
  public name: string;
  protected age: number;
  private sex: string;
  public constructor (name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  walk():void {
      console.log(`${this.name} can walk~`);
  }
}

let dog: Animal = new Animal('旺财', 1, 'male');

console.log(dog);
console.log(dog.name);
// console.log(dog.age);
// console.log(dog.sex);

dog.walk();

class Man{
    public readonly sex:string = '男';
}

var man:Man = new Man();
