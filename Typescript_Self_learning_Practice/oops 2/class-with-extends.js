var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name1) {
        this.name1 = name1;
    }
    person.prototype.greet = function () {
        return "Hello ".concat(this.name1);
    };
    return person;
}());
//extends is used to inherite the property and methods of parent class into child class 
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(name1) {
        var _this = _super.call(this, name1) || this;
        _this.superpower = [];
        return _this;
    }
    Hero.prototype.addpower = function (power) {
        this.superpower.push(power);
    };
    Hero.prototype.listpower = function () {
        return this.superpower;
    };
    return Hero;
}(person));
var batsman = new Hero("Raghu");
batsman.addpower("Money");
batsman.addpower("Cars");
console.log(batsman.listpower());
