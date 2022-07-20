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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.setName = function () {
        this.name = "Test";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this) || this;
    }
    Dog.prototype.callFromDog = function () {
        console.log("Call from dog...");
        this.setName();
        console.log("Checking name from >>> ", this.name);
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this) || this;
    }
    Cat.prototype.callFromCat = function () {
        console.log("Call from cat...");
        console.log("Checking name from >>> ", this.name);
    };
    return Cat;
}(Animal));
var doggy = new Dog();
doggy.callFromDog();
var cat = new Cat();
cat.callFromCat();
