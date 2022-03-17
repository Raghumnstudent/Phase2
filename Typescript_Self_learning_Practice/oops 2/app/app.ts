interface Iperson1{
    name:string;
    age:number
}

interface IHero extends Iperson1{
    superpowers:string[];

}

abstract class Human1 implements Iperson1{
    name: string;
    age: number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    abstract show():number;
}

class person1 extends Human1{
    constructor(name:string,age:number) {
        super(name,age)
    }
    show(): number {
        return this.age
    }
}

class Hero1 extends person1 implements IHero{
    superpowers: string[];
    constructor(name:string,age:number) {
        super(name,age)        
    }
    addpowers(pow:string):void{
        this.superpowers.push(pow)
    }
    list():string []{
        return this.superpowers;
    }
}

let batsman1 = new Hero1("Raghu",23)
batsman1.addpowers("money")
console.log(batsman1.list())
