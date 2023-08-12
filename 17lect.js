// ******************* For Loop *****************

for(let i=0;i<=10;i++){
    const element=i;
   // console.log(element );
}

for(let i=0;i<5;i++){
   // console.log(`Outer Loop ${i}`);
    for(let j=0;j<5;j++){
//        console.log(`${i} * ${j} =${i*j} `);

    }
}


let myArr=["flash","superman","batman"]
for(let i=0;i<myArr.length;i++){
   // console.log(myArr[i]);
}

// Break and Continue

for(let i=0;i<5;i++){
    if(i==3){
        break;
    }
   // console.log(i);
}

for(let i=0;i<5;i++){
    if(i==3){
      continue;
    }
   // console.log(i);
}

//*********************** */ while loop

let index=0;
while(index<10){
   // console.log(index);
    index+=2;
}

// ******************************** do while loop
let i=0
do{
 //console.log(i);
 i++;
}while(i<5);


//*************************************  for of  =>array specific 

const arr=[1,2,3,4,5,6]

// for (const iterator of object) {
//       // iterator is name of variable
//       // object is that where you want to apply loop
// }

for (const val of arr) {
   // console.log(val);   // 1,2,3,4,5,6
}

const greeting="hello world!"
for (const greet of greeting) {
   // console.log(greet);  // it will print each character
}

//********************* Map 
// The map object hold key-value pairs and remembers the original insertion oder of the keys.
// it is the unique in the map's collection.there is no duplicate value

const map=new Map();
map.set('IN',"india")
map.set('USA',"america")
map.set('Fr',"france")
//console.log(map);  //Map(3) { 'IN' => 'india', 'USA' => 'america', 'Fr' => 'france' }

for (const key of map) {
    console.log(key);
} 
// output=> [ 'IN', 'india' ]
//          [ 'USA', 'america' ]
//          [ 'Fr', 'france' ]

for (const [key] of map) {
    console.log(key); // IN , USA, Fr
} 



for (const[ key, value] of map) {
    console.log(key, ':-', value);
} 
//output => IN :- india
//           USA :- america
//            Fr :- france


// const myobject={
//     game1:"NFS",
//     game2:"spiderman",
// }
// for (const [key,value] of myobject) {
//     console.log(key, ':-', value);      //myobject is not iterable
// }

  //******************************************* for in 
const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple',
}
for (const key in myobject) {
   // console.log(key);  //js, cpp ,  rb ,  swift
  
}
for (const key in myobject) {
    //console.log(`${key} shortcut is for ${myobject[key]}`);  

    //output => js shortcut is for javascript
                // cpp shortcut is for c++
                // rb shortcut is for ruby
                // swift shortcut is for swift by apple
                    

}


const program=["js","rb","py","cpp"]
for (const key in program) {
   console.log(key);  // 0 1 2 3
}

for (const key in program) {
    console.log(program[key]); // js,rb,py,cpp
 }

 // ################### Map is not iterable therefor for in loop is not used for Map


 //***************************************** forEach 

// const num1=[1,2,3,5,7]
// num1.forEach( functon name(key) {})   name is not allowed


//  const num=[2,3,4,5,6]
//  num.forEach( function (val){
//     console.log(val);    // 2,3,4,5,6
//  } )

const num=[2,3,4,5,6]
num.forEach( (val) =>{      // num.foreach(  name=(val)=>{})    , name is not allowed
 //  console.log(val);    // 2,3,4,5,6
} )


// *** if you give function as parameter

const print=["js","rb","py","cpp"]
function printme(item){
    console.log(item);
}
//print.forEach(printme)  // js,rb,py,cpp


function printme(item,index,arr){
    console.log(item,index,arr);
}
// print.forEach(printme)

// output => js 0 [ 'js', 'rb', 'py', 'cpp' ]
// rb 1 [ 'js', 'rb', 'py', 'cpp' ]
// py 2 [ 'js', 'rb', 'py', 'cpp' ]
// cpp 3 [ 'js', 'rb', 'py', 'cpp' ]


const mycoding=[
    {
    languagename:"java",
    languagefilename:"javafile"
    },
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
            languagename:"python",
            languagefilename:"py"
    },
]
mycoding.forEach( (item)=>{
   console.log(item.languagename);  // java,javascript,python
})

let coding=["js","ruby","java","cpp"]
const values=coding.forEach( (item)=> {
    console.log(item);
    return item                // ForEach does not return any value
} )
console.log(values);



