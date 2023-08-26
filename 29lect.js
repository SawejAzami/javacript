//********************************  Inheritance 

class user{
    constructor(username){
        this .username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

// here we use the extends keyword to use the property of user
class teacher extends user{
    constructor(username,email,password){
        super(username)  // super() keyword refer to the extended class 
        // and autometically it take this keyword to the extended class and set the parameter
        this.email=email;
        this.password=password
    }
     
    addcourse(){
        console.log(` A new course was added by ${this.username}`);
    }
}
 const chai=new teacher("chai","chai@google.com","1234")
 chai.addcourse()   // A new course was added by chai
 chai.logMe()  //username is chai

 console.log(chai instanceof teacher);  //true



//  *******************************************   Static

class user1{
    constructor(username){
        this.username=username;

    }

    logme(){
        console.log(`username:${this.username}`);
    }

    static createId(){  // static keyword stop the access by any object
        console.log(`123`);
    }
}

const hitesh=new user1('hitesh')
// hitesh.createId()  // we will get error 