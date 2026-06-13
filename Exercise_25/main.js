// spread operator

let array1 = [1,2,3];

let array2 = [...array1,4,5,6];

console.log(array2);

// Rest operator

function multiply(...numbers){
    return numbers.reduce((num1,num2) => num1 * num2,1);
}
console.log(multiply(10,2));