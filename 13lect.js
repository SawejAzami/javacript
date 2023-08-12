  // ************* Global and Local Scope  **********
   
  //Block scope: The scope created with a pair of curly braces (a block).
//  Global scope: The default scope for all code running in script mode.
  
// let a=10;
// const b=20;
// var c=30;
// console.log(a);  //10
// console.log(b);  //20
// console.log(c);  //30 

// {
//     let a=10;
// const b=20;
// var c=30;
// }
// console.log(a);  // it give error
// console.log(b);  // it give error
// console.log(c);  //30 


// function scope

function one(){
  const user="hitesh sir";
       function two(){
          const website="pw skills";
          console.log(user);
       }
       two();
      
}
one();

// function two() can use the value of the function one() but function one() can not use value of function two()


console.log(addone(5));
function addone(num){
  return num +1;
}


//console.log(addtwo);    //Cannot access 'addtwo' before initialization  because function is asign to a variable
const addtwo=function(num){  // addtwo is know as expression
  return num+2;
}

// *** hoisting  => you can not access the variable before declaratin


