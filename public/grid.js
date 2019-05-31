function createGrid(width, height){
    
    var gridContainer = document.getElementsByClassName('grid-container')[0];
    
    for(var i = 0; i < height; i++){

        for(var j = 0; j < width; j++){
            var space = document.createElement('div');
            space.classList.add('grid-space');

            gridContainer.appendChild(space);
        }

    }
}

var grid = document.getElementsByClassName('grid-container')[0];
