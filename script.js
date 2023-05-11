

let squaresPerRow = 16;
let squareSize = 100/squaresPerRow;
let squareBlock;

function createSketchBoard () {
for (i = 0; i < (squaresPerRow*squaresPerRow); i++) {
    squareBlock = document.createElement("div");
    squareBlock.classList.add("squareBlock");
    squareBlock.style.flexBasis = `${squareSize}%`;
    document.querySelector("#container").appendChild(squareBlock);

    container = document.querySelector("#container")
    var mouseIsDown = false;
    document.addEventListener("mousedown", function () {mouseIsDown = true})
    document.addEventListener("mouseup", function() {mouseIsDown = false})
    squareBlock.addEventListener("mouseover", function(e) {
    if(mouseIsDown) {
        e.target.style.backgroundColor = "blue";
    }
})
}
}





/*
create css class, that gets new background-color value when selected
create color-selection tool
*/

/*
function hasClass (elem, className) {
    return elem.className
}
})
*/


/*
Create container div for the grid divs in html
Create loop for multiple divs (16x16 = 256) in js
Set divs padding to 4 equal values to receive a square
Give the container a border and/or a background shadow 
Use Flexbox css to set container size (960 px)

Set a size for the squares in css in %
Calculate right % with input variables
Create a bar to set the input variables
*/