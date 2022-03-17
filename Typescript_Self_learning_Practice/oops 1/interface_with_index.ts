interface Iuser{
    name:string,
    readonly age:number,
    address?:string,    //this property is optional 
    [property:string]:any //we can add n number of properties to this because we are using indexing(means [property:string]:any)
}
let adminuser:Iuser={
    name:"raghu",
    age:26,
    Engineering:"RIT",
    Diploma:"Govt Polytechnic Mirle",
    SSLC:"Mahadeshwara High school"   //here we are adding extra properties using indexing method
}

adminuser.Engineering;