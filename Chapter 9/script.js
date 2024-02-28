/*
function sum(a,b){
    console.log(a+b)
}

function Calculator(a,b,sumCallBack){
    sumCallBack(a,b)
}


Calculator(1,2,sum) //1st Logic



Calculator(1,2,(a,b)=>{ // 2nd Logic
console.log(a+b)
})

*/
/*
const hello = () =>{
    console.log("Hello")
}

setTimeout(hello, 2000)

*/

//Nesting
/*
let age = 19
if(age >= 18){
    if(age >= 60){
        console.log("Senior")
    }
    else{ 
        console.log("Middle")
    }
}
*/

// nested loop
/*
for(let i= 0; i<5; i++){
let str = ""
    for(let j=0; j<5; j++){
        str = str + j
    }
    console.log(i,str)
}*/

// real class start

function getData(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data is", dataID);
      resolve("Success");
    }, 4000);
  });
}

console.log("Getting Data 1....")
async function getDAtaa() {

    await getData(1);
    console.log("Getting Data 2....")
    await getData(2);
    console.log("Getting Data 3....")
    await getData(3);
    console.log("Getting Data 4....")
    await getData(4);
};

getDAtaa();


/*
console.log("Getting Data 1")
getData(1)
.then((res) => {
    console.log("Getting Data 2")
  return getData(2);
})
.then((res) => { 
    console.log("Getting Data 3")
  return getData(3);
})
.then((res) => {
      console.log("Success");
})
*/

/*
// callback hell 
getData(1,()=>{
    console.log("Getting Data2....")
    getData(2,()=>{
        console.log("Getting Data3....")
        getData(3,()=>{
            console.log("Getting Data4....")
            getData(4);
        })
    })
})*/



// classes 

class newClass{
    constructor(name,Age,State){
        this.name =name;
        this.Age = Age;
        this.State = State;
    }
}


let std1 = new newClass("GAnesh", "27","Maharashtra")

console.log(std1)