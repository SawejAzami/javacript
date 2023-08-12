 //*********************************************  Filter

 let mynums=[1,2,3,4,5,6]
 // let newnums=mynums.filter( (num)=> num>4 )   // here return keyword is not need

  let newnums=mynums.filter( (num)=>{
    return  num>4               // if you use {} then you should write return keyword
    } )
  console.log(newnums);   //[ 5, 6 ]


  // in case of ForEach

  const newNums=[]
  mynums.forEach( (num)=>{
    if(num>4){
        newNums.push(num)
    }
  })
  console.log(newNums);  //[ 5, 6 ]

  const books=[
    {
        title:"book 1", genre:"fiction", publish:1981,edition:2004,
    },
    {
        title:"book 2", genre:"non-fiction", publish:1992,edition:2008,
    },
    {
        title:"book 3", genre:"history", publish:1999,edition:2007,
    },
    {
        title:"book 4", genre:"fiction", publish:1989,edition:2010,
    },
    {
        title:"book 5", genre:"science", publish:2009,edition:2014,
    },
  ]

let userbooks=books.filter((bk)=> bk.genre==="history")
  //console.log(userbooks);   //[ { title: 'book 3', genre: 'history', publish: 1999, edition: 2007 } ]

  userbooks=books.filter((bk)=>{  return bk.publish>2000})
 // console.log(userbooks);  //[ { title: 'book 5', genre: 'science', publish: 2009, edition: 2014 } ]

 userbooks=books.filter((bk)=>{  return bk.publish>=1995 && bk.genre==="history"})
// console.log(userbooks);    //[ { title: 'book 3', genre: 'history', publish: 1999, edition: 2007 } ]


// *****************************  map 
// map return every things but filter return only when condtion is ture

 const num1=[1,2,3,4,5,6,7,8,9,10]
// const newnum1=num1.map((num)=> num+10)
// console.log(newnum1);


//************************************* chaining 
// we can use multiple map , filter together

// const newnum1=num1.map((num)=> num*10).map((val)=>val+1)
const newnum1=num1
                    .map((num)=> num*10)
                    .map((val)=>val+1)
                    .filter((item)=>item<40)    

console.log(newnum1);

// ********************************reduce
// here we pass acc-> accumulator means  initial value
// second one is the value from array

const num2=[1,2,3]
// const initialValue=0
// const mytotal=num2.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval ${currval}`);
//     return acc+currval
// },initialValue)
// console.log(mytotal);

const mytotal=num2.reduce((acc,curr)=> acc+curr,3)
console.log(mytotal);


const shoppingcart=[
    {
        itemname:"data science course",
        price:6999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"web dev course",
        price:4999
    },
]
const total=shoppingcart.reduce((initial,item)=>initial+item.price,0)
console.log(total);