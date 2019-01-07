class Parent{
    public name: string;
    public age: number;
    public skill: string;
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
    public say() {
        super.say();
        console.log(`and I'm ${this.age} years old`);
    }
    public move() {
        console.log(`I'm moving`);
    }
}

const xiaoming: Children = new Children('xiaoming',
    10,'paint', '二年级');

xiaoming.say();
xiaoming.move();
