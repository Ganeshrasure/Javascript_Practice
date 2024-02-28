/*
let foodItems = ["Potato", "Tomato", "Apple","Onion"];

console.log(foodItems)

// ---------------------------------------pop Method---------------------------------------

let deletedValue = foodItems.pop();

console.log(foodItems)

console.log(`The Deleted Value is = ${deletedValue}`)
*/
/*
let pushm = ["Ganesh", "Abhishel","Amol", "Yogesh"]

 pushm.push("Varsha")

console.log(pushm)
*/
// ---------------------------------------toString Method-----------------------------------
/*
let foodItems = ["Potato", "Tomato", "Apple","Onion"];

console.log(foodItems)

console.log(foodItems.toString())
*/
// ---------------------------------------Concat Method-----------------------------------
/*
console.log("This is Concat Method")
let marvelHeroes = [ "thor","Spiderman", "IronMan"]

let dcHeroes = [ "SuperMan", "Batman"]

let indianHeroes = ["Shaktiman", "Krish", "Flying Jatt"]

let heroes = marvelHeroes.concat(dcHeroes, indianHeroes)

console.log(heroes)
*/
// ----------------------Unshift Method-------------------
/*
let unshiftm = ["Ganesh", 'Abhishek',"Yogesh"]

 unshiftm.unshift("Amol") // add to start in the array

console.log(unshiftm)
*/

// -------------------------------Shift Method-----------------------------
/*
let shiftm = ["Amol","Ganesh", 'Abhishek',"Yogesh"]

console.log("Deleted",shiftm.shift())  // Delet to start in the array

*/
// -------------------------------Slice Method-----------------------------
/*
let brothers = [ "Amol", "Abhishek", "Ganesh", "Yogesh"]

console.log(brothers.slice(1,3)) // print value index of 1 to 3 output is "Abhishek", "Ganesh"
*/
// -------------------------------Splice Method-----------------------------

let brothers = [ 1,2,3,4,5,6,7,8]

//  brothers.splice(2,2,101,102)
       // output(1,2,101,102,5,,7,8)
// add, delet, updatedValue

// ------------Add----------
// brothers.splice(2,0,27)

//---------Delet value-----
// brothers.splice(3, 2)

// ----------Replace------------
brothers.splice(4,1,27);
console.log(brothers)  
// ---------------------------------------join method ---------------------------------------------
/*
let joinm = [1,2,3,4,5,6,7,8,9]

let num = joinm.join(" and ")

console.log(num)
*/