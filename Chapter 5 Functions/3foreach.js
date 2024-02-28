let arr = ["Pune", "Benglore", "Mumbai"]

arr.forEach( (val,idx, arr) => {  // Value at Each Index //index of  each value //all array output
console.log(val.toUpperCase(),idx, arr)
})

let nums = [25,57,9,3]

nums.forEach((val)=>{
    console.log(val*val)
})

// New Typeof Arrow funt for forEach Loop
console.log("This is New Type")
let newM = [5,3,6,7,2]
let calMul = (val)=>{

    console.log(val*val)
}

newM.forEach(calMul)