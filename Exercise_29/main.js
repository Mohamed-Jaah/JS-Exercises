async function loadDataJson(){
    console.log("Here we are loading data from the JSON file");
    let response = await fetch('data.JSON');
    let info = await response.json();
    console.log("Here is the information :",info)
}

loadDataJson();