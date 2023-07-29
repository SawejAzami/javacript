// String

// how will you define a sring, lets see.
 
let name="hitesh sir";
//or
let name1=new String("Hitesh sir")
console.log(name);  //=>hitesh sir
console.log(name1); //=> [String: 'Hitesh sir']


// there are various method in string,
//like- split,slice,trim,toUpperCase,includes,charAt etc.

let str="webDevelopment with javascript";
console.log(str.charAt(3)); //=>D    it give the letter at the given index

console.log(str.indexOf('w')); //=>0 it give the index of the given letter

console.log(str.trim()); //=> it remove the extra spaces int the sentence

console.log(str.replace("javascript","html")); //=>webDevelopment with html,
// it replece the first word with the second word

console.log(str.slice(3,8)); //=>Devel,   it give the subsrting whitin given position  

console.log(str.split(' ')); //=>[ 'webDevelopment', 'with', 'javascript' ]
// it it split the given sentence according to the given space,-,_,' '," "  etc

console.log(str.toUpperCase());//=>WEBDEVELOPMENT WITH JAVASCRIPT

console.log(str.includes("css"));// false

let name2="shyam";
let score=50;
console.log(`hello my name is ${name2} and I have scored ${score} in my exam`);
//hello my name is shyam and I have scored 50 in my exam