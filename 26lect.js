// Object oriented program

// does javascript have classes?

// Yes, JavaScript introduced the concept of classes with the ECMAScript 6 (ES6) specification, which was released in 2015.
// Before ES6, JavaScript used a prototype-based inheritance system to create objects and establish relationships between them. 


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('Alice', 30);
  person1.introduce(); // Output: "Hi, I'm Alice and I'm 30 years old."

// ******************

  class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getColor() {
      console.log(`This shape is ${this.color}.`);
    }
  }
  
  class Circle extends Shape {
    constructor(radius, color) {
      super(color);
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const circle = new Circle(5, 'blue');
  circle.getColor(); // Output: "This shape is blue."
  console.log(`Circle area: ${circle.getArea()}`); // Output: "Circle area: 78.53981633974483"

//   *****************

class Vehicle {
    constructor(type) {
      this.type = type;
    }
  
    honk() {
      console.log(`${this.type} honks.`);
    }
  }
  
  class Car extends Vehicle {
    honk() {
      console.log(`${this.type} car honks loudly.`);
    }
  }
  
  const vehicle = new Vehicle('Generic');
  vehicle.honk(); // Output: "Generic honks."
  
  const car = new Car('Sports');
  car.honk(); // Output: "Sports car honks loudly."

  
//   *****************  Object
// collection of properties(variable) and methid(function)
  
const user={
  username:"hitesh",
  logincount:8,
  signedin:true,
  getuserDetail:function(){
    // console.log("got user detail");
    console.log(`username:${this.username}`); //username:hitesh
    console.log(this);  // it give current context means we can access all variable of the user
  }
}
console.log(user.username);
user.getuserDetail()


function User(username,logincount,islogedin){
  this.username=username;
  this.logincount=logincount;
  this.islogedin=islogedin;
  return this  // if you not write return this then it will also give same output
}
// const userone=User("hitesh",12,true)
// const usertwo=User("chai",2,false)
// console.log(userone);
// here usertwo over write the userone's value
// if we print userone or usertwo both of them give same output
// that's why we use constructor a new keyword

const userone=new User("hitesh",12,true)
const usertwo=new User("chai",2,false)
console.log(userone);




