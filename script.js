const container = document.getElementById("container");
const edit = document.querySelector("button");
let newGrid = 16;


for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.style.border = "solid";
    div.style.borderWidth = "1px";
    div.style.width = "100px";
    div.style.height = "100px";
    container.appendChild(div)

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "yellow";
    });
}

edit.addEventListener('click', () => {
    newGrid = prompt("Please enter squares per side of new grid")
    while (newGrid > 100) {
        newGrid = prompt("Please enter a valid value less than 100")
    }
    createNewGrid(newGrid);
});

function createNewGrid(gridSize) {
    container.innerHTML = '';

    for (let i = 0; i < (gridSize*gridSize); i++) {
        let div = document.createElement('div');
        let divSize = 1600/gridSize;

        div.style.border = "solid";
        div.style.borderWidth = "1px";
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        container.appendChild(div)
    
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "yellow";
        });
    }
}