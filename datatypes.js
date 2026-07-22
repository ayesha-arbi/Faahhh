// premitive


//7 types of primitive (call by value) - changes in copy
// String,number,boolean, null,undefined,symbol,BigInt
//symbol-to make a data unique 

// Non-primitive 
//types of non-primitive (call by reference)-changes in original value
// Array ,objects, Functions

//symbol
const id = Symbol('123')
console.log(typeof id)

const biNumber = 352525436
console.log(typeof biNumber)

const heroes = ["hello","hi","nah hell nah"]

const myfunction = function(){
    console.log("hello world")
}

console.log(typeof myfunction)