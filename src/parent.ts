class Parent{
    public name: string; // 共有，类，子类，类外面都可以访问
    public age: number;  // 保护，类，子类可以访问
    public skill: string; // 私有，只有类里面可以访问
    constructor(name: string, age: number, skill: string) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    public say() {
        console.log(`I'm ${this.name}`);
    }
}

class Children extends Parent{
    public classes: string;
    private xingxiang: string = 'aaaaa~';
    constructor(name: string, age: number, skill: string, classes:string) {
        super(name, age, skill);
        this.classes = classes;
    }
    public say():void {
        super.say();
        console.log(`and I'm ${this.age} years old`);
    }
    public move():void {
        console.log(`I'm moving`);
    }
}

const xiaoming: Children = new Children('xiaoming',
    10,'paint', '二年级');

xiaoming.say();
xiaoming.move();
xiaoming.classes;
