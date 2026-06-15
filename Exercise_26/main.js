// blocking

function blockingUserData(){
    alert("This is Blocking,Please click ok to load the data");

    return {userID: 123, name:"Mohamed Abdalle", username:"Jaah"}
}

 console.log("Hi! this is me , Blocking, i'm the first one to print any time, thanks");

 let user = blockingUserData();

 console.log("User Data", user);

  console.log("Hi! this is me , Blocking, you will see me if you click ok,else you will not. thanks");


//Non-Blocking

function nonBlockingData(){

    setTimeout(()=>{
        console.log("HI,im delaying so don't wait for me")
    },2000)

}

nonBlockingData();

console.log("HI, this is non-blocking, i will never want to vait another element to be excuted")


