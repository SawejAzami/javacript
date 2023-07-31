// Function

function funcName(){
    console.log("thankyou hitesh sir");
}
 
funcName // it is the reference 
funcName() //  it is exicution

function addTwoNum(num1,num2){  // here num1 and num2 are the parameter
console.log(num1+num2);
}
addTwoNum(3,4);  //=>7    here 3,4 are the argument
const result=addTwoNum(3,4); 
console.log("result :",result);  //result : undefined

function fun(n1,n2){
    const res=n1+n2;
    return res;
}
const result1=fun(3,5)
console.log("result :",result1);  //result : 8

// if you gave any value to the user like username="sam" then it will print sam if you not give any argument
function loginUser(username){  
    if(username===undefined){  //(!username) you can write it
                console.log("please enter a username");
        return;
    }
    return `${username} just logged in `
}
console.log(loginUser("hitesh sir"));   //hitesh sir just logged in 
console.log(loginUser());   //undefined just logged in   if  you not give anr argument


// function with object and array

// three dots are known as rest operator its mean that if we don't know the range of parameter
// then we use rest operator , it reurn it in the form of array
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,300,400,500));//[ 200, 300, 400, 500 ]

function insert(val1,val2,...val){
    return val;
}
console.log(insert(21,23,45,56,8,89));  //[ 45, 56, 8, 89 ]   , val1=21  , val2=23

//************/ how to use object in the function  **********

// as parametr we use anyobject to access any object as argument we pass object name
const cart={
    username:"hitesh sir",
    price:199,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(cart);  //username is hitesh sir and price is 199

handleObject({
    username:"sam",
    price:798,
});     //username is sam and price is 798

const myArray=[200,333,444,555,666]
function returnArray(getarray){
    return getarray[2];
}
console.log(returnArray(myArray));    //444
console.log(returnArray([200,333,444,555,666]));  //444
