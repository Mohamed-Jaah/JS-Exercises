let pickColor = document.querySelector("#pickColor");
let colorShowBox = document.querySelector("#colorShowBox");
let historyList = document.querySelector("#historyList");
let clearHistory = document.querySelector("#clearHistory");

// here i will break down into 3 stages

// stage 1 - filling selected color into the color to the colorShowBox

pickColor.addEventListener("input",function(){
    let selectedColor = pickColor.value;
    colorShowBox.style.backgroundColor = selectedColor;
    addColorToHistory(selectedColor);
})

// Stage 2 - adding the color in to the color history

function addColorToHistory(color) {
    const list = document.createElement('li');
    list.textContent = color;
    list.style.color = color;
    historyList.appendChild(list);
}


// Stage 3 - removing the color from the history
clearHistory.addEventListener('click',function(){
    historyList.innerHTML = '';
})