var nameVar = 'Yash'
nameVar = 'Mike' //var based variables can be overridden
var nameVar = 'Ahu' //also redefined
console.log('nameVar',nameVar) 

let nameLet = 'jen' //es6 part --> "let is valid withing the scope it is declared"
nameLet = 'Yash' //override is possible here also
// let nameLet = 'Ahu' //althought with let redefine is not possible  it will giver error(duplicate declaration error)

console.log('nameLet',nameLet)

const nameConst = 'Yash' 
//const nameConst = 'Julie' // redefineing not possible
//nameConst = 'Ahi' //overriding is also not possible
console.log('nameConst',nameConst)

//scoping for var vs let vs const
//all the 3 do not allow to be used outside the fn they are declared in
function getName(){
    const name = 'Hal'
    return name
}
getName()
console.log(name)

//block scoping
//var allows it to be used outside blocks.Const and let do not
var fullName = 'Yash Bhardwaj'
if(fullName)
{
    var firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)