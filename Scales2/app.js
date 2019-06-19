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
var Apple = /** @class */ (function () {
    function Apple(scale, name) {
        this.name = name;
        this.scale = scale;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Apple1 = /** @class */ (function () {
    function Apple1(scale, name) {
        this.name = name;
        this.scale = scale;
    }
    Apple1.prototype.getScale = function () {
        return this.scale;
    };
    Apple1.prototype.getName = function () {
        return this.name;
    };
    return Apple1;
}());
var Tomato = /** @class */ (function () {
    function Tomato(scale, name) {
        this.name = name;
        this.scale = scale;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var Orange = /** @class */ (function () {
    function Orange(scale, name) {
        this.name = name;
        this.scale = scale;
    }
    Orange.prototype.getScale = function () {
        return this.scale;
    };
    Orange.prototype.getName = function () {
        return this.name;
    };
    return Orange;
}());
var scale = new Scales();
var apple = new Apple(5, 'apple');
var tomato = new Tomato(6, 'tomato');
var orange = new Orange(4, 'orange');
var apple1 = new Apple(7, 'apple1');
scale.add(apple);
scale.add(tomato);
scale.add(orange);
scale.add(apple1);
console.log(scale.getSumScale());
console.log(scale.getNameList());
//# sourceMappingURL=app.js.map