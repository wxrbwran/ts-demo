namespace shuaiGe{
    export class Dehua{
        private name: string =  '刘德华';
        talk() {
            console.log(this.name);
        }
    }
}

namespace baJie{
    export class Dehua{
        private name: string =  '🐴德华';
        talk() {
            console.log(this.name);
        }
    }
}

const dehua1 = new shuaiGe.Dehua();
const dehua2 = new baJie.Dehua();

dehua1.talk();
dehua2.talk();
