interface Iperson{
    name:string;
}


// implements is used to make the class to follow the structure of interface
class Person implements Iperson{
    name: string;
    constructor(name:string){
        this.name = name
    }
    greet():string{
        return `Hello ${this.name}`
    }    
}



