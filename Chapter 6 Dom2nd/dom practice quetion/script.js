let btn = document.createElement("button");
btn.innerText= "Click ME"

document.querySelector("body").prepend(btn)

btn.style.color= "red";
btn.style.backgroundColor= "white";


// Qs2---------------------------------

let para = document.querySelector("p");
// para.setAttribute("class", "para")

para.classList.add("newClass")
