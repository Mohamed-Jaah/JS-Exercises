// calling the fuction

function changeImage(){

    // calling the image1 element
    let image = document.querySelector('#image1')

    // requsting to change the image settings
    let urlChange = prompt("Please enter your new image Link :")
    let widthChange = prompt("Please enter width in px")
    let heightChange = prompt("Please enter height in px")
    let borderChange = prompt("Please enter border setting like this (10px solid blue)")
    let borderRadius = prompt("Please enter you preferred border-radius in px:")

    // setting the new image 
    image.setAttribute ('src',urlChange);

    // setting declared image width size
    image.style.width= widthChange;
    image.setAttribute('width',widthChange)

    // setting declared image height size
    image.style.height= heightChange;
    image.setAttribute('width',heightChange)

    // setting the declred border settings
    image.style.border= borderChange;
    image.setAttribute('border',borderChange)
    

    // setting the declred border radius
    image.style.borderRadius= borderRadius;
    image.setAttribute('borderRadius',borderRadius)




}