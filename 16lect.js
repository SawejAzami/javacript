// ********************* Control flow *********************

//if-else
const score=200;
if(score>100){
    const power="fly"
    console.log(`user power: ${power}`);
}
else{
    console.log("user power:fast run");
}

//switch case

const num=3
switch(num){
    case 1: console.log("Monday");
            break;
    case 2: console.log("Tuesday");
            break;
    case 3: console.log("Wednessday");
            break;
    case 4: console.log("Thursday");
            break;
    case 5: console.log("Friday");
            break;
    default:console.log("enter valid value");
}



const useremail=""
if(useremail){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}

// to check by Array
if(useremail.length===0){
    console.log("Array is empty");
}

//to check object
const obj={}
if(Object.keys(obj).length===0){
    console.log("object is empty");
}

//Ternary operator
// condition ? true :false
const iceprice=100
iceprice<=80?console.log("less than 80"):console.log("more than 80");

// Nullish Coalescing operator(??):null,undefined
val1=5??10
console.log(val1);//5
val1=null??10
console.log(val1);//10
val1=undefined??15
console.log(val1);//15


// falsy value=>
// false,0,-0,bigInt 0n,null,undefined,NaN,""

//truthy value=>
// "0",'false'," ",{},[],function(){}


// false==0 , false=='',0==''  all are true