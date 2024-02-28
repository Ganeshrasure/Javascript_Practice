// let div = document.querySelector("div")
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para =document.getElementById("para");
// console.log(para.getAttribute("p"));

// let para =document.querySelector("p");
// console.log(para.setAttribute("class","newClass"))

// let div = document.querySelector("div");
// div.style.backgroundColor ="#fff";
// div.style.border= "1px solid red";
// div.style.color= "black";

let newButton = document.createElement("button")
newButton.innerText= "Click Me"
console.log(newButton);

let div = document.querySelector("div");
// div.append(newButton) //div tag mdhe button last la yeto

// div.prepend(newButton) //div tag mdhe agodar la yeto 

// div.before(newButton)//div tag chya agodar yeto

div.after(newButton)//div tag chya nantr yeto



//---------------------------------------------------------------------

let newHeading = document.createElement("h1");
newHeading.innerText= "Jay Sadguru";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p")

para.remove();