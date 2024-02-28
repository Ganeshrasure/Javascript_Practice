// let URL = ""



// const getFacts = async() =>{

//     let response =await fetch(URL);
//     console.log(response.status)
// }

function newPromise(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
           
            resolve("JAy Sadguru")
            console.log("Hello")
        },2000)
    })
}

async function response(){ 
    await newPromise();
}
