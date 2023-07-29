// Date and Time
let myDate=new Date()
console.log(myDate);  //2023-07-28T03:07:45.096Z

console.log(myDate.toString());//Fri Jul 28 2023 03:09:58 GMT+0000(Coordinated Universal Time)

console.log(myDate.toDateString);
//Fri Jul 28 2023 03:11:21 GMT+0000 (Coordinated Universal Time)
//[Function: toDateString]

console.log(myDate.toISOString()); //         2023-07-28T03:13:08.209Z

console.log(myDate.toJSON());//               2023-07-28T03:14:19.586Z

console.log(myDate.toLocaleString()); //      7/28/2023, 3:16:57 AM    mm/dd/yyyy

let myCreatedDate=new Date(2023,6,28,5,8)
console.log(myCreatedDate.toDateString());  //Fri Jul 28 2023
console.log(myCreatedDate.toLocaleString());  //7/28/2023, 5:08:00 AM

let mDate=new Date("2023-01-14")
console.log(mDate.toLocaleString());  //     1/14/2023, 12:00:00 AM


let mytimeStamp= Date.now();
console.log(mytimeStamp);   //  1690515252298
console.log(myCreatedDate.getTime())  //  1690520880000
//  gettime()  => Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
console.log(myCreatedDate.getDate()); // 28
console.log(myCreatedDate.getMonth()); // 6  its means july because it count the month from 0
console.log(Date.now());  // it will give current date in millisecond   => 1690515537980

// convert it into seconds 
console.log(Math.floor(Date.now()/1000)); //1690515772

let newDate=new Date();
newDate.toLocaleString('default',{
    weekday:"long"
})
