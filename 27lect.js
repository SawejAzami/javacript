//**************************** Prototype and new  *********************************



// **********************************  new
function multiply(num){
    return num*5;
}
multiply.power=2;  // function can be use as a variable
console.log(multiply(6)); // 30
console.log(multiply.prototype); // {}
console.log(multiply.power); // 2


function Createuser(username , score){
    this.username=username;
    this.score=score;

}
Createuser.prototype.increment=function(){
    this.score++;
}
Createuser.prototype.printme=function(){
  console.log(`score is ${this.score}`);
}
const chai= new Createuser("chai",25)
const tea=new Createuser("tea",250)

// chai.printme()  //score is 25


// console.log(chai);  //Createuser { username: 'chai', score: 25 }

// console.log(tea);  //Createuser { username: 'tea', score: 250 }



/* 

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object

A Prototype is linked: the newly created object gets linked to the prototype of the constructor function.
This means that it has access to properties and method defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the 
newly created object.If no explicit return value is specified from the constructor,javascript assume this
the newly created object, to be the intended return value.

The new object is return: After the constructor function has been called, 
if it does'n return a non-primitive value (object,array,function,etc) the newly created object is return.
*/

// *****************************  prototype


let Myname="sawej"
console.log(Myname.length);  // 5

// if we have given 
Myname="sawej     "

console.log(Myname.length);  // 10

// if we want that it give only original string length not add the space

Myname="sawej     "
String.prototype.trueLength=function(){
    
   console.log(`${this}`); // sawej   // jisne call kiya wax sxhi this hai
   console.log(` True length is :${this.trim().length}`);  //True length is :5
}
Myname.trueLength()

"hitesh".trueLength()
"teachai".trueLength()



//* if we define any prototype to object then we can access it with function , Array, object
// but reverse is not possible

//*************** prototype  inheritance 


const user={
    name:"chai",
    email:"chai@google.com",
}
const teacher={
    makevideo:true,
}
const teachersupport={
    isavialable:false
}
const TAsupport={
    makeassingment:"javascript",
    fulltime:true,
    __proto__:teachersupport,
}
teacher.__proto__=user

// modern syntax

Object.setPrototypeOf(teachersupport,teacher)