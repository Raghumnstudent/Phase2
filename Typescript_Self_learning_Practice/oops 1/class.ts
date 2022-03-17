/*
syntax : class nameofclass{
    property1:datatype,
    property2:datatype,
   
    propertyn:datatype,
    constructor (property1:datatype,property2:datatype,     propertyn:datatype,){
        this.property1 = property1,
        this.property2 = property2,



        this.propertyn = propertyn
    }
    creating method inside the class
    nameoffunction():return type{

    }
}
*/
class person{
    name:string
    constructor(name:string){
        this.name = name
    }
    greet():string{
        return `Hello ${this.name}`
    }
}
let p1 = new person("Raju")
let p2 = new person("Ravi")

class Hero extends person{
    superpowers:string[] = []
    constructor(name:string){
        super(name);
    }
    addpower(power:string):void{
        this.superpowers.push(power)
    }
    listpower():string[]{
        return this.superpowers;
    }
}

const  person1 = new Hero("Raghu")
person1.addpower("Money")
person1.addpower("Good Helping nature")

person1.listpower()

