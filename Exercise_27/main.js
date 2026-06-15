function promisedData (){
   return new Promise ((rosolve,reject)=>{

    setTimeout(() => {
        const success = false;
        if(success){
            console.log({userID:123,fullname:"Mohamed Abdalle Adem",username:"Jaah"});
        }else{
            console.log("Cannot Load User data  !!!");
        }

    }, 2000);

   })
}

promisedData()
.then((xog)=>{console.log("User data :",xog)})
.catch((khalad)=>{console.log("Error", khalad)})