function greet(name:string,language:string,address?:string):string{
    if(language==='en'){
        return `Hello ${name}`
    }
    else if(language==='es'){
        return `hel ${name}`

    }
    else{
        return `Bye ${name}`
    }
}

greet('Raghu','en')
greet('Ravi','es')
