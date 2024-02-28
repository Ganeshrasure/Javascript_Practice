function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("Weather Data")
            resolve(200);
        },2000)
    })
    
}

console.log("Ganesh")
async function getWeatherData(){
   await api()
};

getWeatherData();