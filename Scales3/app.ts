interface IStorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class Product {
    private name:string;
    private scale:number;

    constructor(name:string, scale:number){
        this.name=name;
        this.scale=scale;
    }

    public getScale():number{
        return this.scale;
    }

    public getName():string{
        return this.name;
    }
}

class StorageEngineArray implements IStorageEngine{
    private products:Product[]

    constructor (){
        this.products=[]
    }

    addItem(item:Product):void{
        this.products.push(item);
    }

    getItem(index:number):Product{
        let product: Product = this.products[index];
        return product;
    }

    getCount():number{
        return this.products.length;
    }
} 

class StorageEngineLocalStorage implements IStorageEngine{
    private products
       
    constructor (){
        this.products=window.localStorage
        this.products.setItem ('storage', JSON.stringify([]))
    }

    addItem(item:Product):void{
        let productsStorage  = this.products.getItem ('storage')
        productsStorage=JSON.parse (productsStorage);
        productsStorage.push(item);  
        this.products.setItem( 'storage' , JSON.stringify(productsStorage));
    }
    
    getItem(index:number):Product{
        let productsStorage  = this.products.getItem ('storage')
        productsStorage=JSON.parse (productsStorage)
        return new Product (productsStorage[index].name, productsStorage[index].scale)
    }

    getCount():number{
        let productsStorage  = this.products.getItem ('storage')
        productsStorage=JSON.parse (productsStorage)
        return productsStorage.length
    }
} 

class Scales<StorageEngine extends IStorageEngine>{

    storage:StorageEngine;
    
    constructor(classRef: { new (): StorageEngine; }){
        this.storage = new classRef();
            
    };
    
    add(item: Product){
        this.storage.addItem(item);
    }

    getSumScale():number {
        let length:number = this.storage.getCount()
        let total:number = 0

        for (let i:number = 0 ; i<length; i++) {
            total += this.storage.getItem(i).getScale()
        }

        return total
    }

    getNameList ():string[]{
        let length:number = this.storage.getCount()
        let nameList:string[] = [];

        for (let i:number = 0 ; i<length; i++) {
            nameList.push (this.storage.getItem(i).getName())
        }

        return nameList
    }
}

let product1=new Product('apple', 3);
let product2=new Product('orange', 5);
let product3=new Product('cherry', 4);
let product4=new Product('banana', 8);

let scales1 = new Scales(StorageEngineLocalStorage);
let scales2 = new Scales(StorageEngineArray);

scales1.add(product1);
scales1.add(product2);
scales2.add(product3);
scales2.add(product4);

console.log(scales1.getSumScale());
console.log(scales1.getNameList());
console.log(scales2.getSumScale());
console.log(scales2.getNameList());

