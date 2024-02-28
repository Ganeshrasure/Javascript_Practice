let Data = "Secrate Data";

class User{
    constructor(name, email){
        this.name = name;
        this.email=email;
    }
    viewData(){
        console.log(`Data is ${Data}`)
    }
}

let stu1 = new User("Ganesh","ganesh@gmail.com");
let std2 = new User("Yogesh","yogesh@gmail.com");

let teacher = new User("Alakh","alakh@gmail.com");

// pr 2
class Admin extends User{
    constructor(name,email){
       super(name,email) 
    }
    editData(){
        Data = "Some New Data"
    }
}

let Admin1 = new Admin("Admin","admin@gmail.com")


