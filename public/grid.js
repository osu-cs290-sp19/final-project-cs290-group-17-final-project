function createGrid(width, height){
    
    var gridContainer = document.getElementsByClassName('grid-container')[0];

    var containerWidth = gridContainer.getBoundingClientRect().width;
    var containerHeight = gridContainer.getBoundingClientRect().height;
    
    for(var i = 0; i < height; i++){

        for(var j = 0; j < width; j++){
            var space = document.createElement('div');
            space.classList.add('grid-space');

            var spaceWidth = Math.floor(containerWidth / (width + 1));
            var spaceHeight = Math.floor(containerHeight / (height));

            console.log("(" + containerWidth + ", " + containerHeight + ")" + ", (" + spaceWidth + ", " + spaceHeight + ")" );

            space.setAttribute("width", spaceWidth + "px");
            space.setAttribute("height", spaceHeight + "px");

            gridContainer.appendChild(space);
        }

    }
}

createGrid(20,20);

var grid = document.getElementsByClassName('grid-container')[0];
