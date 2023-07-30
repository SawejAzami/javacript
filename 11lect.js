//  Object


const mysym=Symbol("key2")

const user={
    name:"hitesh sir",          // here name is a string but we not write it as "name"
    "full name":"hitesh choudhary" ,  // it can not be access by this format console.log(user.full name);
    age:18,
    [mysym]:"mykey1",  // to define Symbol [] (square brakect) are used
    location:"jaipur",
    Email:"hitesh@google.com",
    isLogedIn:false,
}

// how to access the object

console.log(user.Email);  // It is right but not corect way to access

console.log(user["Email"]); // it is right way to access
 
console.log(user["full name"]);
console.log(user[mysym]); //mykey1

// to chane the value of any key
user.Email="hi@gail.com"
console.log(user["Email"]);

//to freeze the object to avoid the changes
// Object.freeze(user);
// now if we want to change any things it will not change
user.Email="sa@gmail.com"
console.log(user["Email"]);
console.log(user);

// let add function to the object

user.greeting=function() {
    console.log("hello ji");
}
console.log(user.greeting());   //hello ji
console.log(user.greeting);   //[Function (anonymous)]
// here the function not exicuted but reference is passed


// if you want to reference same object then "this" is used ,then we get all property of the object
// let we want to reference name then
user.greetingTwo=function() {
    console.log(`hello ji ${this.name}`);
}
console.log(user.greetingTwo()); 


//  two mwthod to declare object 
 const tinder=new Object();
 const tinder1={ }
 console.log(tinder);

 
    tinder.id="123abc",
    tinder.name="sammy",

 console.log(tinder);

 const regular={
    email:"user@google.com",
    fullname:{
        userFullname:{
            firstname:"hitesh",
            lastname:"choudhary",
        }
    }
 }
 console.log(regular.fullname.userFullname);

//  console.log(regular.fullname?.userFullname); 
 // here ? is used to check if fullname exit then go further

 const obj1={ 1:"a", 2:"b"};
 const obj2={ 3:"a", 4:"b"};
//  const obj3={obj1,obj2}
//  console.log(obj3);   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
Object.assign(obj1,obj2)  // here obj1 is the target and obj2 is the source
// its mean that value of obj2 are assign into obj1
console.log(obj1);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4=Object.assign(obj1,obj2)
console.log(obj4);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 // you can also combine it by
const obj5= Object.assign({},obj1,obj2)  // {} it become the target and all are source
console.log(obj5);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

