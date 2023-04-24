// Import Classes Here
class Product{
    constructor(name,price,description){
        this.name=name
        this.price=price
        this.description=description

    }
    instock(){
        return true
    }
    display(){
        return "Name:"+this.name+", Price: $"+this.price+", Description:"+this.description
    }
}



// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}
