// let marks= [87,54,65,87,90,95,92,97,65]

// let result = marks.filter((marks) => {
//     return marks >= 90
// })

// console.log(result)

// ----------------Second Quetion-----------------------

let user = [9]

let arr = []

for(let i =1;i <= user;i++){
    arr[i - 1] = i;
}
console.log(arr)

let output = arr.reduce((prev,curr) => {
    return prev + curr
   
})

let newOutput = arr.reduce((prev,curr) => {
    return prev * curr
})

console.log(newOutput)