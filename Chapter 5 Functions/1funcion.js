function newF(msg){
    console.log(msg)
}

newF("Jay Sadguru")

function twoSum( a, b){
    return a+b;
}

console.log("The sum of a and b is = ",twoSum(2,5))


// ------------------ARrow Functions ------------

const arrowFn = (a , b) => {
   return a * b 

}
console.log("New arrow")
arrowFn(2,3)


// new one 
const arrowMul = (a , b) => {
    console.log( a * b);
}

console.log("This is a new Aroow fn",arrowFn(2,5))

console.log("Without Params")

let arrow = () => {
    console.log("Hello")
}

arrow()