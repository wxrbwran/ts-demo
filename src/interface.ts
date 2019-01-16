// 属性接口 对json，object的约束

interface userInfo{
    firstName: string;
    lastName: string;
    age?: number;
}

function printName(name:userInfo):void {
    console.log(name.firstName, name.lastName);
}
function printInfo(user:userInfo):void {
    console.log(user.firstName, user.lastName, user.age);
}
printName({firstName:'w', lastName: 'xr'});


interface Husband{
    sex: string;
    interest: string;
    mai?: boolean
}
const my:Husband = {
    sex: 'male',
    interest: 'read',
    mai: true,
};

console.log(my);

//
interface SearchMan{
    (source: string, sunString: string): boolean;
}

const mySearch:SearchMan = (source: string, subString: string):boolean => {
    return source.indexOf(subString) !== -1;
}

console.log(mySearch('高富帅', '穷'));


