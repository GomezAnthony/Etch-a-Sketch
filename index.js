let container = document.getElementById('container');
let div = document.querySelector('div');
let button = document.querySelector('.change-grid');






// Create a grid that is 16 x 16
// Use a foor loop to render the grid
// Create a div with the name .grid which will be styled and appended to the container.
function displayGrid(){
    for(let i = 1; i <= 256; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'grid');
        div.style.backgroundColor = '#fff';
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px"; 
        container.append(div);
    }
     
}

function clearGrid(){
    return "";
}

container.addEventListener('mouseover', function(e){
    e.target.style.background = 'black';
  
    
    console.log(e.target)
});

button.addEventListener('click', clearGrid);






displayGrid()