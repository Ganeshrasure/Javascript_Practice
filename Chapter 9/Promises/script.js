/*
function getData(dataID,getNextData){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log("Data is", dataID);
            reslove("Success")
            if(getNextData){
                getNextData();
            }
        },2000)
    })
   
}
*/

/*
const getPromise =() =>{
   return new Promise((reslove,reject) => {
        console.log("Iam a Promise");
        // reslove("Success");
        reject("Error")
    })
}

let promise = getPromise()
promise.then((res)=>{
    console.log("Promise Fulfilled",res)
})

promise.catch((err) => {
    console.log("Rejected",err)
})
*/








//----------------------------------------------------



const getPromise = ()=>{
  return new Promise((reslove,reject)=>{
    setTimeout(()=>{
      console.log("This is new Promise")
      reslove("Successful")
    },2000)
  
  })
}

// let promise = getPromise();
// promise.then((res)=>{
//   console.log("Success",res)
// })
// .catch((err)=>{
//   console.log("Error",err)
// })



//new type promises
async function test(){
  await getPromise()
}

test()





//-----------------------------------------------------



// function asyncFun() {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       console.log("Some Data 1");
//       reslove("Success");
//     }, 2000);
//   });
// }

// function asyncFun2() {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       console.log("Some Data 2");
//       reslove("Success");
//     }, 2000);
//   });
// }

// console.log("Fetching Data 1..........");

// asyncFun().then((res) => {
//   console.log(res);
//   //fn 2
//   console.log("Fetching Data 2..........");

//   asyncFun2().then((res) => {
//     console.log(res);
//   })
  
// }).catch((err) => {});


