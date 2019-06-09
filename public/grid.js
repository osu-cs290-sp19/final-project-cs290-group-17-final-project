
var gridContainer = document.getElementsByClassName('grid-container')[0];
var containerWidth = gridContainer.getBoundingClientRect().width;

var sizeInput = document.getElementsByClassName("size-picker")[0];
var inputField = document.getElementById('size-selector');
var sizeButton = document.getElementById('size-confirm-button');

gridspaces = document.getElementsByClassName('grid-space');

function resetGrid(){
    gridspaces = document.getElementsByClassName('grid-space');
    for(var i = gridspaces.length - 1; i >= 0; i--){
        gridspaces[i].parentNode.removeChild(gridspaces[i]);
    }

}

function createGrid(size){
    resetGrid();
    
    for(var i = 0; i < size; i++){

        for(var j = 0; j < size; j++){

            var space = document.createElement('div');
            space.classList.add('grid-space');

            var spaceWidth = (containerWidth / (size)) - 2;

            space.style.width = spaceWidth + "px";
            space.style.height = spaceWidth + "px";
            space.addEventListener('click', changeColor);
            gridContainer.appendChild(space);
        }

    }
}

createGrid(30);

function changeColor(event){
    event.target.style.backgroundColor = color;
}


var colorpicker =  document.getElementsByClassName('colorpicker-container')[0];
var colors = colorpicker.childNodes;

for(var i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', setColor);
}

var color;

function setColor(event){
    color = window.getComputedStyle( event.target , null).getPropertyValue( 'background-color' );
}

sizeButton.addEventListener('click', reSize);

function reSize(event){
    createGrid(inputField.value);
}
