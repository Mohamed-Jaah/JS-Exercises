
function add(a,b){
    return a + b;
}


console.log(add(10,20));
console.log(add(20,30));
console.log(add(30,40));
console.log(add(40,50));
console.log(add(50,60));

console.log("Here below is the funtion expression only");

let sum = function (a,b){
    
    console.log(a+b)
}

sum(10,20);
sum(30,40);

console.log("Intan waxaan kusoo bandhigi doonaa Arrow Function kaliya")

let isugayn = (a,b)=>{
    console.log(a + b);
}

isugayn(1000,2000);

