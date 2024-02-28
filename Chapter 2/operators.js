/*
let a = 5;

let b = 4;

// ---------------------------------------assignment operator -------------------------------------

a **= 4; // a = a **= 4; this operator returns a value in the form of square qube and etc.
console.log("a = " + a);
*/

/*
// ---------------------------------------comparison operator -----------------------------------

let a  = 5;

let b = 6;

console.log("a < b && a === b" , a < b && a === b);


console.log("a < b || a === b" , a < b || a === b);

console.log("!(a < b)" , !(a < b)); // this value returns false is true and true is false

*/
// --------------------------------------conditions----------------------------------------------

let a = "White";

let color;

if (a === "Red") {
  color = "Dark";
} else {
  color = "orange";
}

console.log(color);

// -------------------------------conditions odd or even--------------------------

let num = 10;
let dnum = 5;
if (num % dnum === 0) {
  console.log(`${num} This is even Number`);
} else {
  console.log(`${num} This is odd Number`);
}

//--------------------------------- Ternary Operator--------------------------------------

let age = 25;
//------------------------------ first type to print -------------------------------------
let result =
  age >= 18
    ? `You are adult because your age is ${age}`
    : `You are not adult because your age is ${age}`;

console.log(result);

// ------------------------------------second type to print -------------------------------------------
age >= 18
    ? console.log(`You are adult because your age is ${age}`)
    : console.log(`You are not adult because your age is ${age}`);


    // ----------------------quition for practice --------------------------

    let number = 20

   if(number % 5 ===  0){
    console.log(`${number} is a multiple of 5`);
   }else{
    console.log("${number} is not multiple of 5");
   }


//    ------------------------------quetion 2---------------------------

let marks = 101;
if(marks >= 80 && marks <= 100){
    console.log(`your grade is A beacuse your marks is ${marks} `);
}else if (marks >= 70 && marks <= 79){
    console.log(`your grade is B beacuse your marks is ${marks} `);
}else if (marks >= 60 && marks <= 69){
    console.log(`your grade is C beacuse your marks is ${marks} `);
}else if (marks >= 50 && marks <= 59){
    console.log(`your grade is D beacuse your marks is ${marks} `);
}else if (marks >= 0 && marks <= 49){
    console.log(`your grade is F beacuse your marks is ${marks} and you are fail`);
}else{
    console.log("Marks dosn't match");
}