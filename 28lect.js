// ******************** Call

function setusername(username){

    this.username=username;
}

function createuser(username,email,password){
    // setusername(username)// we call it but it not give the access of the username therefore we use
// we use .call to hold its referance and here we given this keyword because to hold the value of username
    setusername.call(this,username)

    this.email=email;
    this.password=password;
}

const chai =new createuser("chai","chai@google.com","123");
console.log(chai);


// *********************************  Constructor

// class user{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;

//     }

//     encryptpassword(){
//         console.log(`${this.password}abc`);
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const tea=new user("tea","tea@","123")

// tea.encryptpassword();  //123abc
// console.log(tea.changeusername());  // TEA


// behind the scene

function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;

}
user.prototype.encryptpassword=function(){
    console.log(`${this.password}abc`);
}

user.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`;
}
const hello=new user("hello","tea@","123")

hello.encryptpassword();  //123abc
console.log(hello.changeusername());  // HELLO
