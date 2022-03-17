class cart{
    carts:any[] = []


    // methods
    adding(name1:string,price:number):void{
        let b:any = {}
        b[name1] = price
        this.carts.push(b)
    }

    removing(name2:string):void{
        

            
    }

    showproduct():any[]{
        return this.carts
    }

    chectout(){
        return `This is list of Products and Total Price ${this.carts} and call confirm method to confirm order`
    }

    confirm(){
        

    }

    
}