"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log = console.log;
var age = 19;
var name = 'wxr';
var arr1 = [1, 2, 3, 4];
var arr22 = ['111'];
var arr2 = ['wxr', 'hello'];
console.log(arr2.includes('wxr1'));
var x;
x = [name, age];
var isLogin = false;
var SEASON;
(function (SEASON) {
    SEASON["spring"] = "\u6625";
    SEASON["summer"] = "\u590F";
    SEASON["fall"] = "\u79CB";
    SEASON["winter"] = "\u51AC";
})(SEASON || (SEASON = {}));
var a = 'wxr111';
a = 1111;
var num;
num = 3;
var d = new Date();
var r = /'|"/g;
var ner;
// ner = (() => {
//    throw new Error('asd');
// })();
function getUserNameByAge(age, sex, stature) {
    if (sex === void 0) { sex = '小姐姐'; }
    var res = "\u627E\u5230\u4E86" + age;
    if (stature) {
        res += ", " + stature;
    }
    return res + "\u7684" + sex + "\uFF01";
}
function overloadFunc(x) {
    if (typeof x == 'object') {
        return x.p1;
    }
    if (typeof x == 'number') {
        return x;
    }
}
var overloadFuncResult1 = overloadFunc({ p1: 'a' });
var overloadFuncResult2 = overloadFunc(1);
var add = function (a, b) {
    return a + b;
};
var sum = function (a, b) {
    return a + b;
};
log(age);
log(name);
log(isLogin);
log(SEASON.fall);
log(a);
log(d);
log(r);
var result = getUserNameByAge(111);
var result2 = getUserNameByAge(111, '啊', 'asd');
log(result, result2);
