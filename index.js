
function createDivs(gridWidth = 16, gridHeight = 16) {
    let container = document.getElementById("container");
    for (let i = 0; i < gridHeight; i++) {
        for (let j = 0; j < gridWidth; j++) {
            let divGrid = document.createElement("div");
            divGrid.style.width = container.offsetWidth / gridWidth + "px";
            divGrid.style.height = container.offsetHeight / gridHeight + "px";
            divGrid.addEventListener("mouseover", () => {
                divGrid.style.backgroundColor = "black";
            });
            container.appendChild(divGrid);
        }
    }
}

let btn = document.getElementById("gridMake");

btn.addEventListener("click", () => {
    let height = prompt("Enter an amount for grid Height");
    let width = prompt("Enter an amount for grid Width");
    let container = document.getElementById("container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createDivs(height, width);
});

createDivs();