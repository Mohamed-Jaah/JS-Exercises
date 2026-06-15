function operations(x,y,callback){
    return callback(x,y);
}

function multiply (x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

console.log("The Multiplication of :",operations(10,5,multiply));
console.log("The division of :",operations(100,5,divide));