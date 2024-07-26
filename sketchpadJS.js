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

function createResetButton(body) {

    var resetButton = document.createElement('button');
    resetButton.textContent = 'Change Size';
    resetButton.classList.add('resetButton');

    resetButton.addEventListener('click', function() {
        var newValue = window.prompt("How many boxes do you want on each side? (Max 100)");
        //if user hits cancel
        if (newValue == null) {
            return;
        }

        else if (newValue != null) {
            newValue = parseInt(newValue);

            //check if invalid input 
            if (!Number.isInteger(newValue) || newValue > 100) {
                console.log('invalid value');
                return;
            }
                    
            //change value
            else {
                console.log('change value');
                
                //remove existing grid
                var currentContainer = document.querySelector('.container');
                document.body.removeChild(currentContainer);

                //create new container and grid
                var newContainer = document.createElement('div');
                newContainer.classList.add('container');
                document.body.appendChild(newContainer);

                createGrid(newContainer, newValue);

            }
        }
    })

    body.prepend(resetButton);
}


createResetButton(document.body);
const gridContainer = document.querySelector('.container');
createGrid(gridContainer, NUM_OF_SQUARES);
