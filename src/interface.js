"use strict";
// 属性接口 对json，object的约束
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
function printName(name) {
    console.log(name.firstName, name.lastName);
}
function printInfo(user) {
    console.log(user.firstName, user.lastName, user.age);
}
printName({ firstName: 'w', lastName: 'xr' });
function xhr(config) { }
var my = {
    sex: 'male',
    interest: 'read',
    mai: true,
};
console.log(my);
var mySearch = function (source, subString) {
    return source.indexOf(subString) !== -1;
};
console.log(mySearch('高富帅', '穷'));
// 可索引接口，对数组，对象的约束，不常用
var arr11 = [1, 2, 3];
var arr222 = ['1'];
var arrNum = [1, 2, 3];
var user = {
    name: 'zs',
};
var Dog2 = /** @class */ (function () {
    function Dog2(name) {
        this.name = name;
    }
    Dog2.prototype.eat = function (s) {
        console.log('eat', s);
    };
    return Dog2;
}());
var Man2 = /** @class */ (function () {
    function Man2(name) {
        this.name = name;
    }
    Man2.prototype.eat = function (food) {
        console.log('eat ', food);
    };
    Man2.prototype.speak = function (content) {
        console.log(this.name + " say " + content);
    };
    return Man2;
}());
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + " write " + code);
    };
    return Programmer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function (food) {
        console.log('eat', food);
    };
    Web.prototype.speak = function (content) {
        console.log(this.name + " say " + content + " and i can code");
    };
    ;
    return Web;
}(Programmer));
var xiaoming2 = new Web('xiaoming');
xiaoming2.eat('meat');
xiaoming2.speak('hello world');
xiaoming2.coding('hello, world');
// interface Window{
//     [attr: string]: any;
// }
// Window.miao = 1;
