const log:any = console.log;

let age:number = 19;
const name:string = 'wxr';
let arr1:number [] = [1,2,3,4];
const isLogin: boolean = false;

enum SEASON {
    spring = '春',
    summer = '夏',
    fall = '秋',
    winter = '冬'
}
var a:any = 'wxr';
a = 1111;
const d:Date = new Date();
const r:RegExp = /'|"/g;

let arr2:Array<string> = ['wxr','hello'];
let x : [string, number];
x = [name, age];


function getUserNameByAge(age:number,sex:string = '小姐姐', stature?:string):string {
    let res:string = `找到了${age}`;
    if (stature) {
        res += `, ${stature}`;
    }
    return `${res}的${sex}！`;
}
var add = function (a:number, b:number):number {
    return a + b;
}

const sum = (a:number, b:number):number => {
    return a + b;
}

log(age);
log(name);
log(isLogin);
log(SEASON.fall);
log(a);
log(d);
log(r);

const result:string = getUserNameByAge(111);
const result2:string = getUserNameByAge(111, '啊', 'asd');

log(result, result2);
export {}
