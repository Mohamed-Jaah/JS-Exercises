
// making the adding item function 
function addNewItem(){

    // calling the parent element
    const list = document.querySelector('.parentList');

    // creating the li
    const newItem = document.createElement('li');

    // putting the Li with a value
    newItem.textContent="New Item";

    // Printing the result to the Console
    console.log(newItem)

    // Putting the values to the browrer DOM section
    list.appendChild(newItem);

}


// making the removing item function 
function deleteExistingItem(){
    // calling the parent element
    const list = document.querySelector('.parentList');
    
    // deleting
    if(list.lastChild){
        list.removeChild(list.lastChild);
    }
}