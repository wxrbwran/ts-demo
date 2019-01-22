// 泛型 可以支持不特定的数据类型

// T 表示泛型，具体什么类型是调用方法的时候决定的；
function getData<T>(value:T):[T]{
    console.log(value);
    return [value];
}

getData<string>('111');
getData<number>(111);
// getData<number>('222');

function getDatas<T,S>(value:T, type: S):[T, S]{
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

class MinClass<T>{
    public list:T[] = [];
    add(value:T):void{
        this.list.push(value);
    }
    min():T{
        let min = this.list[0];
        for(const num of this.list) {
            if (num < min) {
                min = num;
            }
        }
        return min;
    }
}

const t = new MinClass<number>();
// 实例化类，并表示类型T代表的类型是number

t.add(1);t.add(-121);t.add(3);
// t.add('aaa');
console.log(t.min());

const letter = new MinClass<string>();
letter.add('a');letter.add('b');letter.add('c');
console.log(letter.min());

// 泛型接口

// interface IConfig{
//     (val1: string, val2:string): string;
// }
//
// var getData2:IConfig = function(val1:string,
//   val2:string):string {
//     return val1 + val2;
// };

// 第一种
interface IConfig{
    <T>(value:T):T;
}
// 第二种

interface IConfig2<T>{
    (value:T):T;
}
// interface IConfig3<T extends HTMLElement>{
//     (value:T):void;
// }
const getData1:IConfig = function<T> (value:T):T {
    return value;
}

function getData2<T>(value:T):T{
    return value;
}
const myGetData:IConfig2<string> = getData2;
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

