// methods are bound to class instances .for render in react components this binding exists
const obj  ={
    name : 'Yash',
    getName()
    {
        console.log(this.name)
    }
}

obj.getName()

//const obj1 = obj.getName //binding breaks
const getName = obj.getName.bind(obj) //binding for fixinf context
console.log(getName())