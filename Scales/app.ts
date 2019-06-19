class Scales {

    products:Array<Product>=[];

    add(product:Product):void{
        this.products.push(product);
    }
    getSumScale():number{
        let sum:number=0;
        this.products.forEach(product => {
            sum+=product.getScale()
        });
        return sum;
    }
    getNameList():Array<string>{
        let arrayProduct:Array<string>=[];
        this.products.forEach(product => {
            arrayProduct.push(product.getName());
        });
        return arrayProduct;
    } 
}

class Product {
    name:string;
    scale:number;

    constructor(scale:number,name:string){
        this.name=name;
        this.scale=scale;
    }

    getScale():number{
        return this.scale;
    }
    getName():string{
        return this.name;
    }
    
}

class Apple extends Product {
    constructor(scale:number){
        super(scale,'apple')
    }
}

class Tomato extends Product {
    constructor(scale:number){
        super(scale,'tomato')
    }
}

class Orange extends Product {
    constructor(scale:number){
        super(scale,'orange')
    }
}

let scale:Scales=new Scales();

let apple:Apple=new Apple(5);
let tomato:Tomato=new Tomato(6);
let orange:Orange=new Orange(4);
let apple1:Apple=new Apple(7);

scale.add(apple);
scale.add(tomato);
scale.add(orange);
scale.add(apple1);

console.log(scale.getSumScale());
console.log(scale.getNameList());