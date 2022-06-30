//assign all variables for pixel grid//
let rows = document.getElementById("gw");
let columns = document.getElementById("gh");
let color = document.getElementById("colorChoice");
let inputSize = document.getElementById("pixlgrid");
let pixelgrid = document.getElementById("pixgrid");


//submits pixelgrid with input sizes//
inputSize.addEventListener("submit", pixelGrid);

// creates pixel grid with for loops//
function pixelGrid(grid) {
  //removes grid before starting
  grid.preventDefault();
  removeGrid();

  //choose input values and use the loops to create rows and columns//
  let gridHeight = gh.value;
  let gridWidth = gw.value;
  
  for (let i = 0; i <= gridHeight; i=i+1) {
    const gridRow = document.createElement("tr");
    gridRow.classList ="rowss"+i;


    for (let j = 0; j <= gridWidth; j=j+1) {
      const gridColumn = document.createElement("td");
      gridColumn.classList = "rowss+columnss"+j;
      gridRow.appendChild(gridColumn);
      // allows the selection of specific color to select each cell of pixelgrid//
      gridColumn.addEventListener("click", function (cell) {
        cell.target.style.backgroundColor = color.value; 
      });
      }


    pixelgrid.appendChild(gridRow);
  }



  

}

//removes rows and columns so that grid is cleared before creating//
function removeGrid() {
  
  const removeColumns = document.querySelectorAll("td");
  removeColumns.forEach((columns) => {
    columns.remove();
  });

  const removeRows = document.querySelectorAll("tr");
  removeRows.forEach((rows) => {
    rows.remove();
  });
}
