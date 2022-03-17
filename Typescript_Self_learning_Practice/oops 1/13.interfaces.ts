// In interface we make property optional
interface Iuser{
    name:string;
    readonly age:number;
    address?:string  //address is optional property, we can add or not
}

const user1:Iuser = {
    name:"Raghu",
    age:47,
}
// user1.age = 34   


// interfacing the function
interface Igreet{
    (name1:string,language:string):string
}


let hello:Igreet;
hello = function(n:string,lang:string){
    if(lang==='en'){
        return `Hello ${n}`
    }
    else{
        return `Hel ${n}`
    }
}
hello("Raghu","en")
