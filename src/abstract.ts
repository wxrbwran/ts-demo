// 提供其他类继承的基类，不能直接被实例化；
// abstract关键字定义抽象类和抽象方法，
// 抽象类中的抽象方法不包含具体实现，并且必须在派生类中实现

//abstract抽象方法只能方法抽象类中，用来定义标准

//

abstract class Animal3{
    public type: string;
    constructor(type:string){
        this.type = type;
    }
    abstract eat():any;
}

// const a = new Animal3(); // 错误，不能直接实例化

class Dog extends Animal3{
    constructor(type:string) {
        super(type);
    }
    eat():any{
        console.log(`${this.type} eat bone~`);
        return this;
    }
    run():any{
        console.log(`${this.type} run away~`);
        return this;
    }
}

const wangcai: Dog = new Dog('wang cai');
wangcai.eat().run();
// wangcai.run();
