const log:any = console.log;

let age:number = 19;
const name:string = 'wxr';
let arr1:number [] = [1,2,3,4];
let arr22:Array<string> = ['111'];
let arr2:Array<string> = ['wxr','hello'];
let x : [string, number];
x = [name, age];
const isLogin: boolean = false;

enum SEASON {
    spring = '春',
    summer = '夏',
    fall = '秋',
    winter = '冬'
}

var a:string | number = 'wxr111';
a = 1111;

var num:number | undefined;
num = 3;
const d:Date = new Date();
const r:RegExp = /'|"/g;
var ner:never;

// ner = (() => {
//    throw new Error('asd');
// })();



function getUserNameByAge(age:number,sex:string = '小姐姐', stature?:string):string {
    let res:string = `找到了${age}`;
    if (stature) {
        res += `, ${stature}`;
    }
    return `${res}的${sex}！`;
}

// 方法重载
function overloadFunc(x: { p1: string }): string;
function overloadFunc(x: number): number;
function overloadFunc(x:any): any {
    if (typeof x == 'object') {
        return x.p1;
    }

    if (typeof x == 'number') {
        return x;
    }
}

let overloadFuncResult1 = overloadFunc({ p1: 'a' });
let overloadFuncResult2 = overloadFunc(1);

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
