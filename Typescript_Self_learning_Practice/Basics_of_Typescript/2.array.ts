// creating array
const numbers:Number[] = [1,3,4,6,7]
console.log(numbers)

const names:String [] = ["Raghu","Ravi","Raju"]
console.log(names)


// we can add any datatyes if we use any 
const mixed:any [] = ["Raghu",23,"from Malavalli",true]
console.log(mixed)

const require:Array <String|boolean> = ["Raghu", true]  //this allow only string and boolean datatype
console.log(require)

mixed.push("Father is Nagendra")
mixed.push("Mother is Devamma")

console.log(mixed)