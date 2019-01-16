"use strict";
// function Person(){
// }
//
// Person.say = function () {
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.live = function () {
        // 静态方法，无法直接调用类属性，
        // 可以调用静态属性
        console.log('live ~~~', this.type);
    };
    Person.prototype.run = function () {
        console.log(this.name + "\u5728\u8D70\u8DEF");
    };
    Person.type = 'lived';
    return Person;
}());
Person.live();
var p = new Person('张三');
p.run();
var Animal2 = /** @class */ (function () {
    function Animal2(type) {
        this.type = type;
    }
    // 多态，子类具体实现；
    Animal2.prototype.say = function () { };
    return Animal2;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(type) {
        return _super.call(this, type) || this;
    }
    Cat.prototype.say = function () {
        console.log('moe moe~');
    };
    return Cat;
}(Animal2));
var mimi = new Cat('cat');
mimi.say();
