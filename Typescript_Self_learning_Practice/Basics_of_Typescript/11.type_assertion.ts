type User = {
    name:string,
    age:number
};


// type assertion means we can't follow data type structure 
// we can use any value using following method
const myuser  = {};
// one way
// (myuser as User).age = 28

// second way
(<User>myuser).age = 29



