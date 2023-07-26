// there are two type of datatype "premitive" and "Non premitive"
// they are classified based on the how they are stored in memory and how to access 

// Premitive datatype => they are call by their value not reference
// they are 7 type - Number,string,boolean,Null,Undefiled,Symbol,bigInt

let num1=1234;
let num2=num1;
console.log(num1);
console.log(num2);
// both the output will be same 
num2=435;
console.log(num2);
// In premitive datatype , its value stored in the "Stack"
// here the value of num1 and num2 are not same ,
// its means that num2 can not chane the value of num1
// when we assign num1 to num2 then it pass the copy of the value not the original value
// but in case of Non premitive datatype it is different 

// Non premitive => they are called by their reference/original value
// type -Array, Object,Function;
// its value stored in the "heap"


let user1={
    email:"user1@google.com",
    upi:"user@ybl"

}
let user2=user1;
console.log(user1.email);
console.log(user2.email);
// here the both output will be same

user2.email="hitesh@google.com"
console.log(user1.email);
console.log(user2.email);
// 
// here we changed ony user2 but automatically changed user1's email
// it means that Non premitive datatype pass the original value