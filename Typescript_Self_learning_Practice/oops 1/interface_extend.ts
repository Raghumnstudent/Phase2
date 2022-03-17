interface Iperson{
    name:string
}


//we are using the property of Iperson in Hero using extend key
//extend key import property of one interface into another interface
interface Hero extends Iperson{
    superpower:string,
    strength?:string

}

let regularjeo:Iperson ={
    name:"Raghu"
};


let batsman:Hero ={
    name:"Bruce",
    superpower:"money",
    strength:"strong"
}