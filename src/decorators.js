"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    Person2.prototype.say = function () {
        console.log('hi~');
    };
    return Person2;
}());
var Baby = /** @class */ (function (_super) {
    __extends(Baby, _super);
    function Baby() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Baby.prototype.cry = function () {
        console.log('wawa, wawa ~');
    };
    return Baby;
}(Person2));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.study = function () {
        console.log(this.name + " is studying");
    };
    return Student;
}(Person2));
//
// class SuperMan extends Student {
//     超人也可以学习，但是继承student不太合适
//     study():void {
//         console.log(`${this.name} is studying`);
//     }
// }
// 装饰器
//
// function Age<T extends {new(...args: any[]): {}}>
//     (constructor: T):T {
//     class Person33 extends constructor{
//         public age:number = 0;
//     }
//     return Person33;
// }
// 类装饰器
function Age(v) {
    return function (constructor) {
        var Person33 = /** @class */ (function (_super) {
            __extends(Person33, _super);
            function Person33() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.age = v;
                return _this;
            }
            return Person33;
        }(constructor));
        return Person33;
    };
}
var Person3 = /** @class */ (function () {
    function Person3() {
        this.name = 'wxr';
    }
    Person3 = __decorate([
        Age(25)
    ], Person3);
    return Person3;
}());
var p1 = new Person3();
console.log(p1);
// 方法装饰器 （路由等）
// 访问装饰器 （getter/setter）
// 属性装饰器
// 参数装饰器
