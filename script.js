function getRGB(str){
    var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return match ? {
       rgb: [
      match[1],
      match[2],
      match[3]
        ]
    } : {rgb: []};
  }


////////////////SKETCH///////////////////////
const grid = document.getElementById("grid")
let RGBPencil = false
const pencilOpacity = 40

function CreateGrid(size){
    grid.style.setProperty('--grid-size',size)
    for(let i=0; i<(size * size);i++){
        let cell = document.createElement('div')
        cell.addEventListener('mouseover',e => ColorCell(e))
        cell.style.setProperty('background-color','#ffffff')
        grid.appendChild(cell).className='cell'
    }
}
function ColorCell(e){
    if(RGBPencil){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.setProperty('background-color','#' + randomColor)
    }
    else{
        let rgbValue = getRGB(e.target.style.backgroundColor)
        rgbValue['rgb'].forEach(function(val,index,arr){
            val = Math.max(0,val - pencilOpacity)
            arr[index]=val
        })
        e.target.style.backgroundColor=`rgb(${rgbValue['rgb'].join(',')})`
    }
}
function ClearGrid(){
    let cells = grid.children;
    for(let i=0; i< cells.length; i++){
        let cell = cells[i]
        cell.style.setProperty('background-color','#ffffff')
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


CreateGrid(16,16)