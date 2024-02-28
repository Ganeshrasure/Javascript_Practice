/*
let sum = 0

for(let i = 1; i <= 5; i++){
   sum =  sum + i // 0 + 1, sum = 1+2=3, sum = 3+3 = 6, sum = 6+4=10, sum = 10+5 = 15
}
console.log("sum = ", sum); // output is 15
console.log("Loop has ended");

*/
//-----------------------------------while loop--------------------------------------
/*
let i = 1;
while(i <= 5){
    console.log("Jay Sadguru");
    i++
}
*/
/*
let i = 1;
do{
    console.log("Ganesha");
    i++
}while(i <= 10)

let j = 1;
do{
    console.log("J +",j);
    j++
}while(j <= 10)

*/
//------------------------------------- for of loop ------------------------------------------------

console.log("For of Loop"); 

let str = "Ganesh"

let size = 0;
for(let i of str ){ // iterater --> character
    console.log("i = ",i);
    size++; // 0 + 1 = 1
}

console.log(`This is str size ${size}`);

// -------------------------------for in loop -------------------------

let student = {
    Name:"Ganesh Rasure",
    Age:22,
    Ph:"9168167973",
    ispass:true
}

for ( let key in student){
    console.log("key = ",key, "Value = ", student[key]);
}








// -------------------------------practice set 1---------------------------------------
/*
for (let num = 0; num <= 100; num++){
    if (num % 2 == 0){
        console.log(`Even Numbers  0 to  100 are ${num}`);
    }
}
*/







// ------------------------------Practice Set 2 ----------------------------------------
let gamNum = 25;
let i = 0;
let userNum = 20;
if (userNum == gamNum) {
  console.log("Congratulation you entered the right number");
} else {
  console.log("you entered wrong number please guess the correct number");
}







// -------------------Prime number printing ---------------------
/*
let firstName = 2;

let secondName = 40;

for(let i = firstName; i<=secondName; i++){
if(i>1){
    let isPrime = true;
    for(let j = 2; j< i; j++){
        if(i % j == 0){ 
        isPrime = false
    break;
        }
    }
    if(isPrime==true){
        console.log(i);
    }
}
}
*/
