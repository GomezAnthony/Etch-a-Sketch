let container = document.getElementById('container');
let button = document.querySelector('.change-grid');
let div;

// Create a grid that is 16 x 16
// Use a foor loop to render the grid
// Create a div with the name .grid which will be styled and appended to the container.
function displayGrid(){
    for(let i = 1; i <= 256; i++){
        div = document.createElement('div');
        div.setAttribute('class', 'grid');
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px"; 
        container.append(div);
    }
     
}
// This eventListiner draws on the grid using event delegation
// Use an if statement to check if the event is equal to the class name grid
// If true than the background color is chnaged to black
container.addEventListener('mouseover', function(e){
    if(e.target.className === 'grid'){
        e.target.style.background = 'black';
    }
    
    console.log(e.target)
});

// Clear the grid using inner html
// Create a new grid 
function clearGrid(){
    container.innerHTML = '';
    for(let i = 1; i <= 256; i++){
        div = document.createElement('div');
        div.setAttribute('class', 'grid');
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px"; 
        container.append(div);
    }
}
// When the button is pressed the grid will clear
button.addEventListener('click', clearGrid);

displayGrid()