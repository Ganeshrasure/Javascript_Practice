/*
let marks = [85,65,78,95,65,56,87]

let sum = 0;

for (let mark of marks) {
    sum = sum + mark // in short sum += mark
}
console.log(sum)

let avg = sum / marks.length;
console.log(avg)
*/

// 2nd Practice set 

/*
let items = [250,150,250,120,240,225]
let i = 0;
for(let val of items){
    // console.log(`The Value of ${i} is ${val}`)
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`After change the value of offer ${items[i]}` )
    i++;
}
console.log(items)
*/


let items = [250,150,250,120,240,225];
for(let i = 0; i <items.length;  i++){
    let offer = items[i] / 10;
    items[i]= items[i] - offer;
    console.log(`After the Offer ${items[i]}`)
   
}