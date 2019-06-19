var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        this.products.forEach(function (product) {
            sum += product.getScale();
        });
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var arrayProduct = [];
        this.products.forEach(function (product) {
            arrayProduct.push(product.getName());
        });
        return arrayProduct;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(scale, name) {
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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(scale) {
        return _super.call(this, scale, 'apple') || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(scale) {
        return _super.call(this, scale, 'tomato') || this;
    }
    return Tomato;
}(Product));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(scale) {
        return _super.call(this, scale, 'orange') || this;
    }
    return Orange;
}(Product));
var scale = new Scales();
var apple = new Apple(5);
var tomato = new Tomato(6);
var orange = new Orange(4);
var apple1 = new Apple(7);
scale.add(apple);
scale.add(tomato);
scale.add(orange);
scale.add(apple1);
console.log(scale.getSumScale());
console.log(scale.getNameList());
//# sourceMappingURL=app.js.map