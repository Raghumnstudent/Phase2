// class person1{
//     private name1:string;
    
//     constructor(name1:string){
//         this.name1 = name1
//     }
//     greet():string{
//         return `Hello ${this.name1}`
//     }
// }
// //private ---> we can only use the private property of class within that class


// class Hero1 extends person{
//     superpower:string[] = [];
//     constructor(name1:string){
//         super(name1);
//     }
//     addpower(power:string):void{
//         this.superpower.push(power)
//     }
//     listpower():string[]{
//         return this.superpower;
//     }
//     details(): string {
//         return `Name is ${this.name1}`
//     }
// }

// let batsman1 = new Hero("Raghu")
// batsman1.name1;
// batsman1.addpower("Money")
// batsman1.addpower("Cars")
// batsman1.listpower()

//Protected

// class person1{
//     protected name1:string;
    
//     constructor(name1:string){
//         this.name1 = name1
//     }
//     greet():string{
//         return `Hello ${this.name1}`
//     }
// }


// //protected--->we can  use only within a parent and child class


// class Hero1 extends person{
//     superpower:string[] = [];
//     constructor(name1:string){
//         super(name1);
//     }
//     addpower(power:string):void{
//         this.superpower.push(power)
//     }
//     listpower():string[]{
//         return this.superpower;
//     }
//     details(): string {
//         return `Name is ${this.name1}`
//     }
// }

// let batsman1 = new Hero("Raghu")
// batsman1.name1;
// batsman1.addpower("Money")
// batsman1.addpower("Cars")
// batsman1.listpower()

//readonly



class person1{
    readonly name1:string;
    
    constructor(name1:string){
        this.name1 = name1
    }
    greet():string{
        return `Hello ${this.name1}`
    }
}

//readonly --->we can't reassign value to that property of class
class Hero1 extends person{
    superpower:string[] = [];
    constructor(name1:string){
        super(name1);
    }
    addpower(power:string):void{
        this.superpower.push(power)
    }
    listpower():string[]{
        return this.superpower;
    }
    details(): string {
        return `Name is ${this.name1}`
    }
}

let batsman1 = new Hero("Raghu")
batsman1.name1;
batsman1.addpower("Money")
batsman1.addpower("Cars")
batsman1.listpower()




