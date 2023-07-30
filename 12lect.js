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