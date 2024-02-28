let marks = [1,2,3,4,5,6]

marks[2] = 5

console.log(marks)

let heros = ["Amol", "Abhishek", "Ganesh", "Yogesh"]

for(let i = 0;i < heros.length;i++){
    console.log(heros[i])
}


// for of loop 
for (let hero of heros) {
    console.log(hero)
}

console.log("These Are The City Names")
let cities = ["Murum", "Pune", "Benglore", "Chennai"]
for (const city of cities) {
    console.log(city.toUpperCase())
}


let items = [250,150,250,120,240,225];
for(let i = 0; i <items.length;  i++){
    let offer = items[i] / 10;
    items[i]= items[i] - offer;
    console.log(`After the Offer ${items[i]}`)
   
}
