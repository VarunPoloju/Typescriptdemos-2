// topic--------constructors
var square = /** @class */ (function () {
    function square() {
    }
    // without constructor
    square.prototype.draw = function () {
        console.log("value of x is " + this.x + " value of y is " + this.y);
    };
    return square;
}());
var sq = new square();
sq.x = 1;
sq.y = 2;
// with constructor
var square1 = /** @class */ (function () {
    function square1(x1, y1) {
        this.x1 = x1;
        this.y1 = y1;
    }
    square1.prototype.draw1 = function () {
        console.log("value of x1 is " + this.x1 + " value of y1 is " + this.y1);
    };
    return square1;
}());
var sq1 = new square1(10);
sq1.draw1();
