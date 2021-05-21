"use strict"
console.log("connected");

const addButton = document.querySelector("#addBlocksButton");
const resetButton = document.querySelector("#resetButton");
const blockContainer = document.querySelector("#blockContainer");

addButton.addEventListener("click", () => {
    let numberOfBlocks = Math.floor((Math.random() * 7) + 1);
    for(let i = 1; i <=numberOfBlocks; i++){
        let randomNumber = Math.floor(Math.random() * 252);
        const div = document.createElement("div");
        div.textContent = randomNumber;
        div.classList.add("block");
        blockContainer.appendChild(div)
    }
});

blockContainer.addEventListener("click", (evt) => {
    if(evt.target.classList.contains("blockContainer") === false){
        evt.target.classList.toggle("selected");
    }
});

resetButton.addEventListener("click", () => {
    blockContainer.textContent = "";
}); 