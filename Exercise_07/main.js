// declaring the array

let colors = ["Red", "Blue" , "Red"];

console.log("color one is : ", colors[0]);
console.log("Color two is :",colors[1]);
console.log("Color three is :",colors[2]);

// Adding the array to new element
colors.push("Purple");
console.log("Color four is :",colors[3]);

// Displying total number of elements in the array
console.log("Total number of element in the Colors array is :",colors.length);

// Removing the first element from the array 

colors.shift();
console.log("Removing the first element : ", colors);