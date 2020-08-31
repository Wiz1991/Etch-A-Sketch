const grid = document.getElementById("grid")
let RGBPencil = false
function CreateGrid(size){
    grid.style.setProperty('--grid-size',size)
    for(let i=0; i<(size * size);i++){
        let cell = document.createElement('div')
        cell.addEventListener('mouseover',e => ColorCell(e))
        grid.appendChild(cell).className='cell'
    }
}
function ColorCell(e){
    if(RGBPencil){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.setProperty('background-color','#' + randomColor)
    }
    else{
        e.target.style.setProperty('background-color','black')
    }
}
function ClearGrid(){
    let cells = grid.children;
    for(let i=0; i< cells.length; i++){
        let cell = cells[i]
        cell.style.setProperty('background-color','white')
    }
}
function ChangeSize(){
    let size = prompt("Please, enter a grid size from 1 to 64: ","16")
    if(size == null || size == ""){
        alert("Please enter a valid number!")
    }
    else{
        while(grid.firstChild){
            grid.removeChild(grid.lastChild)
        }
        CreateGrid(size)
    }
}
function ToggleRGB(){
    RGBPencil = !RGBPencil
}

CreateGrid(32,32)