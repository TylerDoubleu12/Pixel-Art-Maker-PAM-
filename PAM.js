//assign all variables for pixel grid//
let rows = document.getElementById("gw");
let columns = document.getElementById("gh");
let color = document.getElementById("colorChoice");
const inputSize = document.getElementById("pixlgrid");
const pixelgrid = document.getElementById("pixgrid");


//submits pixelgrid with input sizes//
inputSize.addEventListener("submit", pixelGrid);

// creates pixel grid with for loops//
function pixelGrid(event) {
  //removes grid before starting
  event.preventDefault();
  removeGrid();

  //choose input values and use the loops to create rows and columns//
  let gridHeight = gh.value;
  let gridWidth = gw.value;
  
  for (let i = 0; i <= gridHeight; i=i+1) {
    const gridRow = document.createElement("tr");
    gridRow.id ="row"+i;


    for (let j = 0; j <= gridWidth; j=j+1) {
      const gridColumn = document.createElement("td");
      gridColumn.id = "row+column"+j;
      gridRow.appendChild(gridColumn);
      }


    pixelgrid.appendChild(gridRow);
  }

// allows the selection of specific color to select each cell of pixelgrid//
  pixelgrid.addEventListener("click", function (event) {
    event.target.style.backgroundColor = color.value; 
  });

  

}

//removes rows and columns so that grid is cleared before creating//
function removeGrid() {
  
  const removeColumns = document.querySelectorAll("td");
  removeColumns.forEach((column) => {
    column.remove();
  });

  const removeRows = document.querySelectorAll("tr");
  removeRows.forEach((row) => {
    row.remove();
  });
}
