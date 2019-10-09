"use strict";

var multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        //console.log(this.numbers[0] * this.multiplyBy)
        return this.numbers.map(function (num) {
            return num * _this.multiplyBy;
        }); //map returns a new array without changing the existing with our transformations
    }
};
console.log(multiplier.multiply());
console.log(multiplier.numbers);
