var NUM_OF_SQUARES = 16;

function createGrid(gridContainer, NUM_OF_SQUARES) {

    //create 16 rows
    for (var i = 0; i < NUM_OF_SQUARES; i++) {
        
        var row = document.createElement('div');
        row.classList.add('row');
        
        //each row should have 16 squares
        for (var x = 0; x < NUM_OF_SQUARES; x++) {

            var square = document.createElement('div');
            square.classList.add('square');

            //add class to colour the square
            square.addEventListener('mouseover', function() {
                
                this.style.backgroundColor = 'blue';
            })

            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }
    
}

const gridContainer = document.querySelector('.container');
createGrid(gridContainer, NUM_OF_SQUARES);
