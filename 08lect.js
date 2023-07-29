// Number and math

const score=400;
console.log(score); //=>400
console.log( typeof score); //=>number

const newNum=new Number(100);
console.log(newNum);   //=>[Number: 100]
console.log( typeof newNum);   //=>object

console.log(newNum.toString()); // now it is converted into string
// now we can use it as a string
console.log(newNum.toString().length);  //3

console.log(newNum.toExponential());  //  1e+2 
 
let num2=2344.786567;
console.log(num2.toFixed(2)) //2344.79 
//Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.

let num3=10000000;//we can not read it very easly
console.log(num3.toLocaleString());//10,000,000
//it convert into international(US form) for which is in readable  
console.log(num3.toLocaleString('en-IN'));//1,00,00,000   it is in indian form

let num4=23.6867;
console.log(num4.toPrecision(3));23.7
//Number of significant digits. Must be in the range 1 - 21, inclusive.

//**************math*********************

console.log(Math.abs(-4));//4
// A numeric expression for which the absolute value is needed
console.log(Math.round(45.6));//46   
// it remove the decimal and round of it same as we normaly do

console.log(Math.ceil(45.9))//46       it give most upper value
console.log(Math.floor(45.9)) //45     it give most lover value 

console.log(Math.max(2,3,4,5))//5
console.log(Math.min(2,3,4,5))//2

console.log(Math.pow(2,6))// it give 2 ki power 6 =>64

console.log(Math.random())   //Returns a pseudorandom number between 0 and 1

let max=6;
let min=1;
console.log(Math.floor(((Math.random()*(max-min+1))+min)))
// it will give you a random number bitween 1 and 6




