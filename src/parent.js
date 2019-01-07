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
var Parent = /** @class */ (function () {
    function Parent(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Parent.prototype.say = function () {
        console.log("I'm " + this.name);
    };
    return Parent;
}());
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children(name, age, skill, classes) {
        var _this = _super.call(this, name, age, skill) || this;
        _this.xingxiang = 'aaaaa~';
        _this.classes = classes;
        return _this;
    }
    Children.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log("and I'm " + this.age + " years old");
    };
    Children.prototype.move = function () {
        console.log("I'm moving");
    };
    return Children;
}(Parent));
var xiaoming = new Children('xiaoming', 10, 'paint', '二年级');
xiaoming.say();
xiaoming.move();
