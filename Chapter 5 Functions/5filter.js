let arr = [27,19,21,23,22,2,7,5]

let evenArr = arr.filter((v) => {
    return v % 2 == 0
})

console.log(`This is Even No on Array ${evenArr}`);


let oddArr = arr.filter((v) => {
    return v % 2 !== 0
})



console.log(`This is a odd No in Array ${oddArr}`)

let greater = arr.filter((v) => {
    return v > 3 
})

console.log(`Value greater than 3 is  ${greater} `)

console.log(arr)