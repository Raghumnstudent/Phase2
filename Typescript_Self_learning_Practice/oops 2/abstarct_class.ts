abstract class Human {
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.age = age
        this.name = name  
    }
    abstract greet():void;
}

class Person1 extends Human {
    constructor(name:string,age:number) {
        super(name,age);
    }
    greet(): void {
        console.log(this.name)
    }
}

let john = new Person1('John',34)
john.greet()