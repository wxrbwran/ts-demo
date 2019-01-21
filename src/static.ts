// function Person(){
// }
//
// Person.say = function () {
// }

class Person{
    static type: string = 'lived';
    public name:string;
    constructor(name:string) {
        this.name = name;
    }
    static live():void{
        // 静态方法，无法直接调用类属性，
        // 可以调用静态属性
        console.log('live ~~~', this.type);
    }
    run():void{
        console.log(`${this.name}在走路`);
    }
}

Person.live();

const p = new Person('张三');

p.run();

class Animal2{
    public type: string;
    constructor(type:string) {
        this.type = type;
    }
    // 多态，子类具体实现；
    say():void{}
}

class Cat extends Animal2{
    constructor(type:string){
        super(type)
    }
    say():void{
        console.log('moe moe~');
    }
}

const mimi = new Cat('cat')
mimi.say();
