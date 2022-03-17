class person{
    name1:string;
    constructor(name1:string){
        this.name1 = name1
    }
    greet():string{
        return `Hello ${this.name1}`
    }
}
//extends is used to inherite the property and methods of parent class into child class 
class Hero extends person{
    superpower:string[] = [];
    constructor(name1:string){
        super(name1)
    }
    addpower(power:string):void{
        this.superpower.push(power)
    }
    listpower():string[]{
        return this.superpower;
    }
}

let batsman = new Hero("Raghu")
batsman.addpower("Money")
batsman.addpower("Cars")
console.log(batsman.listpower())


