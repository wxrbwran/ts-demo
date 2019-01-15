"use strict";
var Animal = /** @class */ (function () {
    function Animal(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Animal.prototype.walk = function () {
        console.log(this.name + " can walk~");
    };
    return Animal;
}());
var dog = new Animal('旺财', 1, 'male');
console.log(dog);
console.log(dog.name);
// console.log(dog.age);
// console.log(dog.sex);
dog.walk();
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
