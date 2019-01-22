"use strict";
// 泛型 可以支持不特定的数据类型
// T 表示泛型，具体什么类型是调用方法的时候决定的；
function getData(value) {
    console.log(value);
    return [value];
}
getData('111');
getData(111);
// getData<number>('222');
function getDatas(value, type) {
    console.log(value);
    return [value, type];
}
// 泛型类
// class MinClass{
//     public list:number[];
//     constructor(list:number[]){
//         this.list = list;
//     }
//     min():number{
//         return Math.min.apply(null, this.list);
//     }
// }
//
// const l = new MinClass([-1,2,21,3,123,1,2,3]);
// console.log(l.min());
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var min = this.list[0];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var num = _a[_i];
            if (num < min) {
                min = num;
            }
        }
        return min;
    };
    return MinClass;
}());
var t = new MinClass();
// 实例化类，并表示类型T代表的类型是number
t.add(1);
t.add(-121);
t.add(3);
// t.add('aaa');
console.log(t.min());
var letter = new MinClass();
letter.add('a');
letter.add('b');
letter.add('c');
console.log(letter.min());
// interface IConfig3<T extends HTMLElement>{
//     (value:T):void;
// }
var getData1 = function (value) {
    return value;
};
function getData2(value) {
    return value;
}
var myGetData = getData2;
myGetData('12213');
//
// const getData2:IConfig2 = function<T> (value:T):T {
//     return value;
// }
// function getArray(constructor: {new()}) {
//     // {new()} 接受一个构造函数
//     return new constructor();
// }
//
// getArray(Array);
