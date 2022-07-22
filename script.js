
function createGrid(size){
    const container = document.querySelector(`.container`)
    const mod = size + 1;
    for(i =0;i<(size*size) + size;i++){
        const square = document.createElement('div')
        square.classList.add('square')
        let height = 400 / size 
        if (i % mod === 0) {
            square.style.cssText = "border: 0; height: 0; width: 100%";
          } else {
            square.style.cssText = `border: 1px solid black; width: ${height}px`;
            square.style.height = `${height}px`;
          }
        container.appendChild(square)
    }
    return console.log("Grid created")
}
createGrid(16)

function draw(){
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => square.addEventListener('mouseover',function(e){
        square.classList.add('black')
    }))
}



function changeSize(){
    size = prompt("Type the new size: ")
    size = parseInt(size)
    if(size >= 2 && size <= 100){
        const squares = document.querySelectorAll(".square")
        squares.forEach(square => square.remove())
        createGrid(size)
        draw()
    }else{
        console.log("Error. Size between 2 and 100")
    }
}

const btnResize = document.querySelector(".size")
btnResize.addEventListener("click",changeSize)

draw()