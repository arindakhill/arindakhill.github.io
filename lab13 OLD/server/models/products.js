let products = [

    {id: 1, title: 'HP', description: 'Good', price:99},
    {id: 2, title: 'DELL', description: 'Great', price:199},
    {id: 3, title: 'Apple', description: 'Amazing', price:299}

]
let counter = 4;

module.exports = class Product{
    constructor(id, title, description, price){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }
static getAllProducts(){
    return products;
}

static getProductById(id){
    return products.find(p=>p.id == id)
}

save(){
    this.id = counter++;
    products.push(this)
}

updateById(id){
   const index = products.findIndex(p=>p.id== id)
    if(index > -1){
       
        products[index] = this;
        this.id = id;
    }else throw new Error(`product with ID: ${id} cannot be found in DB`)
}

static deleteById(id){
   //products = products.filter(p=>p.id != id)
   const index = products.findIndex(p=>p.id==id)
   if(index > -1){
    products.splice(index,1)
   }else{
    throw new Error(`product with ID: ${id} cannot be found in the DB`)
   }
}

}