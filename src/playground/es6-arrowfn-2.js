const multiplier = {
numbers : [2,4,6],
multiplyBy : 3,
multiply(){
    //console.log(this.numbers[0] * this.multiplyBy)
    return this.numbers.map((num)=>num*this.multiplyBy) //map returns a new array without changing the existing with our transformations
}

}
console.log(multiplier.multiply())
console.log(multiplier.numbers)