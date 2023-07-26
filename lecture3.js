// datatype conversion
let score=33;
console.log( typeof score);// number
console.log( typeof (score)); //number
 
let score1="33abs";
console.log( typeof (score1)); //string
 // if you want to change into number then
  let valueInNumber=Number(score1)
  console.log( typeof (valueInNumber)); //number
  console.log(valueInNumber);
 
let valueInBoolean=Boolean(score);
console.log( typeof (valueInBoolean)); //number

let temp=Number(null);
console.log(typeof temp);//number
console.log(temp);// 0(zero)
let isLogedIn=1;
let InBoolean =Boolean(isLogedIn);
console.log(InBoolean);//true
//1=>true
// ""=>false
// "hello"=> true
let num=33;
let inString=String(num);
console.log(inString);//33
console.log(typeof inString);//String

