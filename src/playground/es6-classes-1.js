class Person {
constructor(name='Ananonumous',age=0) { //providing default to fn
    this.name = name  //inside of class methods 'this' refers to the class instance
    this.age=age
}
getGreeting() 
{
    //return 'Hi ' + this.name
    return `Hi ${this.name}` //es-6 template string syntax -- back ticks to be used its the char beside the number 1 on keyboard
}

getDescription()
{
    return `This is ${this.name} aged ${this.age} year(s) old`
}

}

class Student extends Person {
    constructor(name,age,major) { //we do not have to setup the defaults and props again which we did in its parent class constructor
        super(name,age) 
        this.major = major
    }

    hasMajor()
    {
        return !!this.major
    }
    getDescription()
    {
        let description = super.getDescription()
        if(this.hasMajor())
        {
            description  += ` Their major is ${this.major}`
        }
        return description
     }
}


class Traveller extends Person {
    constructor(name,age,location)
    {
        super(name,age)
        this.location=location
        
    }

    
    getGreeting ()
    {
        let greet = super.getGreeting()
        if(!!this.location)
        {
           greet += ` I'm visiting ${this.location}`

        }
        return greet
    }
}

const me = new Traveller('Yash',10,'Delhi')
const you = new Traveller('Hari',20)
console.log(me.getGreeting())
console.log(you.getGreeting())