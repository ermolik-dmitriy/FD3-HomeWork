var Product = /** @class */ (function () {
    function Product(name, scale) {
        this.name = name;
        this.scale = scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var StorageEngineArray = /** @class */ (function () {
    function StorageEngineArray() {
        this.products = [];
    }
    StorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    StorageEngineArray.prototype.getItem = function (index) {
        var product = this.products[index];
        return product;
    };
    StorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    return StorageEngineArray;
}());
var StorageEngineLocalStorage = /** @class */ (function () {
    function StorageEngineLocalStorage() {
        this.products = window.localStorage;
        this.products.setItem('storage', JSON.stringify([]));
    }
    StorageEngineLocalStorage.prototype.addItem = function (item) {
        var productsStorage = this.products.getItem('storage');
        productsStorage = JSON.parse(productsStorage);
        productsStorage.push(item);
        this.products.setItem('storage', JSON.stringify(productsStorage));
    };
    StorageEngineLocalStorage.prototype.getItem = function (index) {
        var productsStorage = this.products.getItem('storage');
        productsStorage = JSON.parse(productsStorage);
        return new Product(productsStorage[index].name, productsStorage[index].scale);
    };
    StorageEngineLocalStorage.prototype.getCount = function () {
        var productsStorage = this.products.getItem('storage');
        productsStorage = JSON.parse(productsStorage);
        return productsStorage.length;
    };
    return StorageEngineLocalStorage;
}());
var Scales = /** @class */ (function () {
    function Scales(classRef) {
        this.storage = new classRef();
    }
    ;
    Scales.prototype.add = function (item) {
        this.storage.addItem(item);
    };
    Scales.prototype.getSumScale = function () {
        var length = this.storage.getCount();
        var total = 0;
        for (var i = 0; i < length; i++) {
            total += this.storage.getItem(i).getScale();
        }
        return total;
    };
    Scales.prototype.getNameList = function () {
        var length = this.storage.getCount();
        var nameList = [];
        for (var i = 0; i < length; i++) {
            nameList.push(this.storage.getItem(i).getName());
        }
        return nameList;
    };
    return Scales;
}());
var product1 = new Product('apple', 3);
var product2 = new Product('orange', 5);
var product3 = new Product('cherry', 4);
var product4 = new Product('banana', 8);
var scales1 = new Scales(StorageEngineLocalStorage);
var scales2 = new Scales(StorageEngineArray);
scales1.add(product1);
scales1.add(product2);
scales2.add(product3);
scales2.add(product4);
console.log(scales1.getSumScale());
console.log(scales1.getNameList());
console.log(scales2.getSumScale());
console.log(scales2.getNameList());
//# sourceMappingURL=app.js.map