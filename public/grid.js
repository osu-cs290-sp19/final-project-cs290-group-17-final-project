function createGrid(width, height){
    
    var gridContainer = document.getElementsByClassName('grid-container');
    
    for(var i = 0; i < height; i++){

        for(var j = 0; j < width; j++){
            var space = document.createElement('div');
            space.classList.add('gridSpace');

            gridContainer.appendChild(space);
        }

    }
}

createGrid(20, 20);