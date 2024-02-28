let arr = [1,10,3,4,5,6]

let output = arr.reduce((prev,curr) => {
    return prev > curr ? prev : curr
})

console.log(output)