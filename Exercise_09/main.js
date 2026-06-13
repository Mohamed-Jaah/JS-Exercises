let car ={
    car_name: "LandCruiser",
    model: "VX",
    year:1994,

    // Adding a method or fucntion to the  object
    start : function()
    {
        console.log("The car Has started");
    }
    
}

console.log("Here is the car name :",car.car_name);
console.log("Here is the car model : ", car.model);
console.log("Here is the car published year :", car.year);

// calling the method

car.start();

