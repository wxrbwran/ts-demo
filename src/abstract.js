"use strict";
// 提供其他类继承的基类，不能直接被实例化；
// abstract关键字定义抽象类和抽象方法，
// 抽象类中的抽象方法不包含具体实现，并且必须在派生类中实现
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
//abstract抽象方法只能方法抽象类中，用来定义标准
//
var Animal3 = /** @class */ (function () {
    function Animal3(type) {
        this.type = type;
    }
    return Animal3;
}());
// const a = new Animal3(); // 错误，不能直接实例化
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(type) {
        return _super.call(this, type) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.type + " eat bone~");
        return this;
    };
    Dog.prototype.run = function () {
        console.log(this.type + " run away~");
        return this;
    };
    return Dog;
}(Animal3));
var wangcai = new Dog('wang cai');
wangcai.eat().run();
// wangcai.run();
