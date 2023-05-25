

// assigns sketch board container to variable & defines square size

container = document.querySelector("#container");
let squaresPerRow = 16;
let squareSize = 100/squaresPerRow;


// defines default color for Color Mode

let pickedColor = "#617ea5";


// creates the sketch board

function createSketchBoard () {
    for (i = 0; i < (squaresPerRow*squaresPerRow); i++) {
        squareBlock = document.createElement("div");
        squareBlock.classList.add("squareBlock");
        squareBlock.style.flexBasis = `${squareSize}%`;
        container.appendChild(squareBlock);
    };
};

createSketchBoard();


// checks if computer mouse is clicked or not

let mouseIsDown = false;
container.addEventListener("mousedown", function () {mouseIsDown = true})
document.addEventListener("mouseup", function() {mouseIsDown = false})


// changes color of passed squares, argument decides which color

function sketch (color) {
    container.addEventListener("mousemove", function(e) {
        if(mouseIsDown) {
            e.target.style.backgroundColor = color;
        };
    });
};


// change sketch board size with slider

let slider = document.getElementById("slider");

slider.oninput = (e) => changeBoardSize(e.target.value);

function changeBoardSize (newSizeValue) {
    clearSketchBoard();
    setNewSize(newSizeValue);
}

function clearSketchBoard () {
    squareBlockArray = document.querySelectorAll(".squareBlock");
    squareBlockArray.forEach((squareBlock) => {squareBlock.remove()})
}

function setNewSize (newSizeValue) {
    squaresPerRow = newSizeValue;
    squareSize = 100/newSizeValue;
}

slider.addEventListener("mouseup", function () {
    createSketchBoard();
})


// assigns buttons to variables

colorButton = document.querySelector(".color");
rainbowButton = document.querySelector(".rainbow");
eraserButton = document.querySelector(".eraser");


// sets color button as default

colorButton.classList.add("active");
let buttonCheck = "color";
changeColor();


// generates a random rgb color

function randomColor () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = "rgb("+`${red},`+` ${green},`+` ${blue}`+")";
    return randomColor;
};

// lets you pick a color for the Color Mode

let colorPicker = document.getElementById("colorPicker");

colorPicker.oninput = function (e) {
    pickedColor = e.target.value;
    changeColor ();
} 


// checks which button is active and defines sketch color

function changeColor () {
    if (buttonCheck === "color") { 
            sketch(pickedColor);
    } else if (buttonCheck === "rainbow") {
            container.addEventListener("mouseover", function rainbow () {
                sketch(randomColor());
                // removes the randomColor generating if another color changing button is clicked
                colorButton.addEventListener ("click", function () {
                    container.removeEventListener("mouseover", rainbow);
                });
                eraserButton.addEventListener ("click", function () {
                    container.removeEventListener("mouseover", rainbow);
                });
            });
    } else if (buttonCheck === "eraser") {
            sketch("#ffffff");
    } else {
            sketch("#617ea5");
    }
};


// sets color button on active

colorButton.addEventListener("click", function () {
    colorButton.classList.add("active");
    rainbowButton.classList.remove("active");
    eraserButton.classList.remove("active");
    buttonCheck = "color";
    changeColor();
});


// sets rainbow button on active

rainbowButton.addEventListener("click", function () {
    rainbowButton.classList.add("active");
    colorButton.classList.remove("active");
    eraserButton.classList.remove("active");
    buttonCheck = "rainbow";
    changeColor();
});


// sets eraser button on active

eraserButton.addEventListener("click", function () {
    eraserButton.classList.add("active");
    colorButton.classList.remove("active");
    rainbowButton.classList.remove("active");
    buttonCheck = "eraser";
    changeColor();
});


// clears the whole sketch board

clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function () {
    clearSketchBoard ();
    createSketchBoard();
    container.style.backgroundColor = "#ffffff";
});
