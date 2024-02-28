// const student = {
//    inctax(){
//     console.log( "Tax rete on your salary is 10%")
//    }
// }

// const employ = {
//     Name: "Ganesh"
// }

// employ.__proto__= student



// Classes in JS 
/*
class ToyataCar {
    constructor(brand, Milage){
        this.brand = brand;
        this.Milage = Milage;
    }
start(){
    console.log("Start")
}
Stop(){
    console.log("stop")
}
// brand(brand){
//     this.brand = brand;
// }

}

let fortuner = new ToyataCar("fortuner",12);
fortuner.brand = "newFortuner"
*/



// ----------------------------------------------------------------------
// Inheritance 
/*
class parent{
    hello(){
        console.log("Hello!");
    }
}

class child extends parent{}

let obj = new child();

*/


class Person{
    constructor(name){
        this.species = "Homo Sapiens"
        this.name= name
    }
    eat(){
        
        console.log("eat")
    }
  
}

class Engineer extends Person{
    constructor(name,branch){
        super(name); // To invoke Parent Class Constructor
        this.branch = branch
        
    }
    work(){
        // super keyword lavlya sivay apan parent class che methods ani properties access kru sakt nhi 
        super.eat()
        console.log("Solve Problems, Build Something!")
    }
}
// class Docter extends Person{
//     work(){
//         console.log("Treat patients")
//     }
// }

// let yogesh = new Docter();

let GaneshObj = new Engineer("Ganesh","It Engineer");



/*

class Gana{
    constructor(Company,Offer){
        this.Item ="Apple";
        this.prize =5000;
        this.Rate = "5Star";
        this.Company =Company
        this.Offer = Offer

    }
    Product(){
        console.log("Same Value")
    }
}


class Offer extends Gana{
    constructor(Company,Offer){

        super(Company,Offer)
        this.Company = Company
        this.Offer = Offer
    }

}

let Amazon = new Offer("Amazon","10% Off")