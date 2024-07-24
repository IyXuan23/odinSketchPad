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
        var newValue = window.prompt("How many boxes do you want on each side?");
        //if user hits cancel
        if (newValue == null) {
            return;
        }
        console.log('change value');
    })

    body.prepend(resetButton);
}


createResetButton(document.body);
const gridContainer = document.querySelector('.container');
createGrid(gridContainer, NUM_OF_SQUARES);
