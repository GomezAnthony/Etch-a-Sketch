
const container = document.querySelector('.container');

function displayGrid(){
    for(let i = 1; i <= 256; i++){
        let div = document.createElement('div');
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px"; 
       
        container.append(div);
    }
}

displayGrid()