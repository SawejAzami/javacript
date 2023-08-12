////  This and Arrow Function

// this give the information about current context , by using this we can access all variable 
const user ={
    username:"hitesh sir",
    price: 999 ,

        welcomeMessage:function(){
            console.log(`${this.username} , welcome to website`);
            console.log(this);
        }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this);   // if we print this keyword outside the function then it give only a empty {}


function chai(){
    let username="hitesh"
        console.log(this.username);  //here we can not access the username by using this keyword
}

chai();

//****arrow function */
const chaiCode=(num1,num2)=> num1+num2;// implicit return means you have not need to write to return it, autometically return
//const chaiCode=(num1,num2)=>( num1+num2)
console.log(chaiCode(3,4));//7


// if you want return object

const hello=(num1,num2)=>({username:"hitesh sir"})
console.log(hello());  //{ username: 'hitesh sir' }

//Immediately Invoked Function Expression (EIFE)

(function one(){
    console.log(`hello world`);
})();  //hello world    , you should  use ; (semicolon) hereto end the function

// globle scope ke pollution se kayi bar problem hoti hai ,
//globle scope ke variable ko hatane ke liye hamne IIFE ka use kiya

((name)=>{
    console.log(`${name}`);
})('hitsh sir');
