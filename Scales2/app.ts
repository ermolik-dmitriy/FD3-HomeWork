interface IScalable {
    getScale():number;
    getName():string;
}

class Scales {

    products:Array<IScalable>=[];

    add(product:IScalable):void{
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

class Apple implements IScalable {
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

class Apple1 implements IScalable {
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

class Tomato implements IScalable {
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

class Orange implements IScalable {
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

let scale:Scales=new Scales();

let apple:Apple=new Apple(5,'apple');
let tomato:Tomato=new Tomato(6,'tomato');
let orange:Orange=new Orange(4,'orange');
let apple1:Apple=new Apple(7,'apple1');

scale.add(apple);
scale.add(tomato);
scale.add(orange);
scale.add(apple1);

console.log(scale.getSumScale());
console.log(scale.getNameList());