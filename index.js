let container = document.getElementById('container');
let button = document.querySelector('.change-grid');
let div;
let newGrid;

    

/**
 * 
 * @param {x} x 
 * This function has a default values of a 16 x 16 grid.
 * When the user enters the size of the grid, the value will be multiplied and 
 * call and pass the value to the gridSize funtion
 * It will create and element div and apend to the container generating the cells
 */
function displayGrid(x = 16){
    for(let i = 0; i < (x*x); i++){
        gridSize(x)
        div = document.createElement('div');
        div.setAttribute('class', 'grid');
        container.append(div); 
        
    }
}

/**
 * 
 * @param {x} x 
 * This function allows for the grid size to be adjusted according to the user input
 */
function gridSize(x){
    container.style.setProperty('--grid-cols', x);
    container.style.setProperty('--grid-rows', x);
}


/**
 *  This eventListiner draws on the grid using event delegation
 *  Use an if statement to check if the event is equal to the class name grid
 * If true than the background color is chnaged to black
 */
container.addEventListener('mouseover', function(e){
    if(e.target.className === 'grid'){
        e.target.style.background = 'black';
    }
    
    console.log(e.target)
});

/**
 * This function clears the grid and ask the user to enter a number between 1 and 100
 * Then it will call the gridSize function and generate the grid
 */
function clearGrid(){
    container.innerHTML = "";
    let x = window.prompt("Enter a number between 1 and 100:")
    for(let i = 0; i < (x*x); i++){
        gridSize(x)
        div = document.createElement('div');
        div.setAttribute('class', 'grid');
        container.append(div);   
    }
}
/**
 * When the button is pressed the grid will clear by calling the clear grid function
 */
button.addEventListener('click', clearGrid);

// Display the grid
displayGrid()