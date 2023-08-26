//****************************** promise 

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// create promise
const promise1=new Promise(function(resolve,reject){
    // do async task
    // DB calls, cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // now it connected to .then()
    },1000)
});
promise1.then(function(){
    console.log("promise is consume");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
})
 

// how to pass data from network
const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"chai" ,email:"chai@gamil.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})


//*

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({
                username:"hitesh sir",password:"123"
            })
        }
        else{
            reject('Error:something went wrong')
        }
    },1000)
});

// const userName=promise4.then((user)=>{
//     console.log(user);
//     return user.username;  // by using this method you can not get data
// })


promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((userName)=>{
    console.log(userName);   // when error is false => hitesh sir
}).catch(function(error){
    console.log(error);  // if error is true then=>Error:something went wrong
}).finally(()=>{
    console.log("the promise is either resolve or reject");
})


const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:"javascript",password:"35654"})
        }
        else{
            reject("Error:JS went wrong")
        }
    })
})
async function consumePromise5(){
  try{
    const response= await promise5
    console.log(response);
    } catch(error){
        console.log(error);
    }

}
consumePromise5()


async function getUser(){
    try{
      const response= await fetch('https://api.github.com/users/SawejAzami')           //("https://jsonplaceholder.typicode.com/users")
    //   console.log(response);
      const data =await response.json()
      console.log(data);
      } catch(error){
          console.log("E:", error);
      }
  
  }
  getUser();



// **************************** Fetch  

// The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar).
//  A fetch() promise does not reject on HTTP errors (404, etc.).

fetch('https://api.github.com/users/SawejAzami')
.then((Response)=>{
    return Response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))


