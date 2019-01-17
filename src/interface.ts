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

interface Config{
    type: string;
    url: string,
    data?: string | any;
    dataType?: string;
}

function xhr(config:Config) {}

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

// 函数类型接口，对参数及返回值进行约束
interface SearchMan{
    (source: string, sunString: string): boolean;
}

const mySearch:SearchMan = (source: string, subString: string):boolean => {
    return source.indexOf(subString) !== -1;
}

console.log(mySearch('高富帅', '穷'));

// 可索引接口，对数组，对象的约束，不常用
var arr11:number [] = [1,2,3];
var arr222:Array<string> = ['1'];

interface userArray{
    [index: number]: number;
}

var arrNum:userArray = [1,2,3];
// var arrNum2:userArray = [1,2,3,'5'];

interface userObj{
    [index: string]: string;
}
const user:userObj = {
    name: 'zs',
}


// 类类型接口， 对类的约束，抽象类相似


interface IAnimal{
    name: string;
    eat(str:string):void;
}

class Dog2 implements IAnimal{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    eat(s:string) {
        console.log('eat', s);
    }
}

// 接口的扩展

interface IPerson extends IAnimal{
    speak(content:string):void;
}

class Man2 implements IPerson{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(food: string) {
        console.log('eat ', food);
    }
    speak(content:string) {
        console.log(`${this.name} say ${content}`);
    }
}
class Programmer{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    coding(code:string):void {
        console.log(`${this.name} write ${code}`);
    }
}

class Web extends Programmer implements IPerson {
    constructor(name:string){
        super(name);
    }
    eat(food:string) {
        console.log('eat', food);
    }
    speak(content:string){
        console.log(`${this.name} say ${content} and i can code`);
    };
}

const xiaoming2 = new Web('xiaoming');
xiaoming2.eat('meat');
xiaoming2.speak('hello world');
xiaoming2.coding('hello, world');

