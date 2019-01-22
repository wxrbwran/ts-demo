class Person2 {
    public name: string;
    public age: number;
    constructor(name: string, age:number ) {
        this.name = name;
        this.age = age;
    }
    say():void {
        console.log('hi~');
    }
}

class Baby extends Person2 {
    cry():void {
        console.log('wawa, wawa ~');
    }
}

class Student extends Person2 {
    study():void {
        console.log(`${this.name} is studying`);
    }
}
//
// class SuperMan extends Student {
//     超人也可以学习，但是继承student不太合适
//     study():void {
//         console.log(`${this.name} is studying`);
//     }
// }


// 装饰器
//
// function Age<T extends {new(...args: any[]): {}}>
//     (constructor: T):T {
//     class Person33 extends constructor{
//         public age:number = 0;
//     }
//     return Person33;
// }


// 类装饰器
function Age(v: number) {
    return function<T extends {new(...args: any[]): {}}>
    (constructor: T):T {
        class Person33 extends constructor{
            public age:number = v;
        }
        return Person33;
    }
}

@Age(25)
class Person3 {
    name = 'wxr';
}

let p1 = new Person3();
console.log(p1);

// 方法装饰器 （路由等）

// 访问装饰器 （getter/setter）

// 属性装饰器

// 参数装饰器


