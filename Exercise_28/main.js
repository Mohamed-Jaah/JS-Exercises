function promisedData (){
   return new Promise ((rosolve,reject)=>{

    setTimeout(() => {
        const success = true;
        if(success){
            console.log({userID:123,fullname:"Mohamed Abdalle Adem",username:"Jaah"});
        }else{
            console.log("Cannot Load User data  !!!");
        }

    }, 2000);

   })
}

// promisedData()
// .then((xog)=>{console.log("User data :",xog)})
// .catch((khalad)=>{console.log("Error", khalad)})

// Using async/await

async function asyncUserData (){
    try{
        let message = await promisedData ();
        console.log("User Data",message)

    }catch(khalad){
        console.log(khalad);
    }
}

asyncUserData ();



