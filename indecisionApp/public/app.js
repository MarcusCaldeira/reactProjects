'use strict';

// var varName = 'Marcus'
// var varName = 'Mike'
// console.log('varName: ' + varName)

// let nameLet = 'Marcus'
// nameLet = 'JUlie'
// console.log(nameLet)

// const nameConst = 'Boogus'
// console.log(nameConst)


// Block Scoping- When something is scoped to code blocks
var fullName = 'Marcus M Caldeira';

if (fullName) {
    //this will split the first name by its spaces and grabs the first one in the array. 
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
