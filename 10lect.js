 //           Array

//A "shallow" copy of an object is a copy whose properties share the same references

//A "deep" copy of an object is a copy whose properties do not share the same references


 const myArray=[1,2,3,4,5,6,7]
 const arr=new Array(5,6,7,8,9)
 console.log(myArray);  //=>[ 1, 2, 3, 4, 5 ]
 console.log(arr);      //=>[ 5, 6, 7, 8, 9 ]

 console.log(arr[0]);// 5

 // array method

 myArray.push(6);  // push() operation insert the new element at the last
 console.log(myArray);
 myArray.pop();       // pop() operation delete the last element
 console.log(myArray);
 myArray.shift();       // shift() operation delete the first element
 console.log(myArray);
 myArray.unshift(9);       // unshift() operation insert the element in the first
 console.log(myArray);

const newarr=myArray.join();
console.log(myArray);   //[ 9, 2, 3, 4, 5 ]
console.log(newarr);   //9,2,3,4,5
console.log(typeof newarr);   //string


// // slice and splice

// slice after getting subArray ,it dose not change the origional Array
//slice after getting subArray ,it  change the origional Array 
//and remove that part from the original Array

console.log("A",myArray);               
console.log("slice=>",myArray.slice(1,4));
console.log("B",myArray);
console.log("splice=>",myArray.splice(1,4))
console.log("C",myArray);




 marvel_heros=["Thor","Ironman","Spiderman"]
 dc_heros=["superman","flash","batman"]

 marvel_heros.push(dc_heros)
 console.log(marvel_heros); //[ 'Thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
 // push() trete the dc_heros as a single element
 // we got an Array inside an Array,it not merge properly
   const newarray1=marvel_heros.concat(dc_heros)
   console.log(newarray1);   //[ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
   // now we got merge Array
 
   const all_heros=[...marvel_heros,...dc_heros]
   console.log(all_heros);  //[ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
   // here we used the spread method


   const arr2=[1,2,3,[4,5,6],7,[1,3,5,6,[7,8,9]]]
   const arr3=arr2.flat(Infinity)
   console.log(arr3)
   // flat method simply merge all array which are inside the array