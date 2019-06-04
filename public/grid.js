
var gridContainer = document.getElementsByClassName('grid-container')[0];
var containerWidth = gridContainer.getBoundingClientRect().width;

function createGrid(size){
    
    for(var i = 0; i < size; i++){

        for(var j = 0; j < size; j++){

            var space = document.createElement('div');
            space.classList.add('grid-space');

            var spaceWidth = (containerWidth / (size)) - 2;

            console.log("(" + containerWidth + ", " + containerWidth + ")" + ", (" + spaceWidth + ", " + spaceWidth + ")" );

            space.style.width = spaceWidth + "px";
            space.style.height = spaceWidth + "px";

            gridContainer.appendChild(space);
        }

    }
}

createGrid(30);

function changeColor(event){
    event.target.style.backgroundColor = color;
}

var spaces = gridContainer.childNodes;
for(var i = 0; i < spaces.length; i++){
    spaces[i].addEventListener('click', changeColor);
}

var colorpicker =  document.getElementsByClassName('colorpicker-container')[0];
var colors = colorpicker.childNodes;

for(var i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', setColor);
}

var color;

function setColor(event){
    color = event.target.getAttribute('background-color');
    console.log(color);
}