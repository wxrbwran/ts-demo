"use strict";
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
