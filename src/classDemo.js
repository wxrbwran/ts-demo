var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.age = age;
        this.name = name;
    }
    Animal.prototype.walk = function () {
        console.log(this.name + " can walk~");
    };
    return Animal;
}());
var dog = new Animal('旺财', 1);
console.log(dog);
dog.walk();
