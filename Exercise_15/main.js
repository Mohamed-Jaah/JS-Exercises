let person1 = {
        name : "Mohamed Abdalle Adem",
        phone : "+252 063 4894991",
        city : "Burco",
        address : "Hodan"
    }


let person2 = {
        name : "Ahmed Abdi Mohamed",
        phone : "+252 065 8854345",
        city : "Hargeisa",
        address : "Masalaha"
    }


let person3 = {
        name : "Ciise Xassan Xirsi",
        phone : "+252 067 2723456",
        city : "Borame",
        address : "Isha-Gobta"
    }


for(let key in person1){
    console.log(key + ": " + person1[key]);
}

console.log("---------------------------------------------------");

for(let key in person2){
    console.log(key + ": " + person2[key]);
}

console.log("---------------------------------------------------");

for(let key in person3){
    console.log(key + ": " + person3[key]);
}



