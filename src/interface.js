"use strict";
// 属性接口 对json，object的约束
function printName(name) {
    console.log(name.firstName, name.lastName);
}
function printInfo(user) {
    console.log(user.firstName, user.lastName, user.age);
}
printName({ firstName: 'w', lastName: 'xr' });
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
