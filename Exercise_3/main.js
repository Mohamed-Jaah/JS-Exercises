// Variables

// let username = true;
// let password = false;

// console.log( username && password );
// console.log(username || password);
// console.log( ! username );



// Simple project for && and || operator

let username = "Mohamed";
let password = 12345;

let user = prompt("Please enter your username :");
let pass = prompt("Please enter your password :");

if(username == user && password == pass)
    console.log("Logged in successfully, Welcome " + username);
else
    console.log("Incorrect username or password, please try again later");