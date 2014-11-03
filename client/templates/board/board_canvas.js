var _canvas;
var _context;

var cellsData = [
  {
    cell: '5:5',
   alive: true,
   x: 5,
   y: 5,
   numberOfNeighbors: 8,
    neighbors: new Array('4:4','4:5','4:6','5:4','5:6','6:4','6:5','6:6'),
    aliveNeighbors: new Array('4:4','6:6')
  }, 
  {
    cell: '4:4',
   alive: true,
   x: 4,
   y: 4,
   numberOfNeighbors: 8,
    neighbors: new Array('3:3','3:4','3:5','4:3','4:5','5:3','5:4','5:5'),
    aliveNeighbors: new Array('5:5')
  }, 
  {
    cell: '6:6',
   alive: true,
   x: 6,
   y: 6,
   numberOfNeighbors: 8,
    neighbors: new Array('5:5','5:6','5:7','6:5','6:7','7:5','7:6','7:7'),
    aliveNeighbors: new Array('5:5')
  }
];

Template.canvas.rendered = function (event) {
  _canvas = $('#canvas');
  _context = _canvas.get(0).getContext("2d");
  Deps.autorun(function(){
    resetCanvas();
    var cursor = cellsData;
    //use count when collection
    //if (!cursor.count()) return;
    if (cursor.length === 0) return;
    
    cursor.forEach(function (cell) {
      fillCell(cell.cell, _context, '#000000');
    });

  });
};

function drawGrid(context)
{
  //grid width and height
  var gw = 580;
  var gh = 580;
  //padding around grid
  var p = 0;
  //size of canvas
  var cw = gw + (p*2) + 1;
  var ch = gh + (p*2) + 1;

  for (var x = 0; x <= gw; x += 20) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, gh + p);
  }
  
  context.moveTo(580 + p, p);
  context.lineTo(580 + p, gh + p);

  for (var y = 0; y <= gh; y += 20) {
    context.moveTo(p, 0.5 + y + p);
    context.lineTo(gw + p, 0.5 + y + p);
  }
  
  context.moveTo(p, 580 + p);
  context.lineTo(gw + p, 580 + p);

  context.strokeStyle = "#ddd";
  context.stroke();
}

function getCellId(event)
{
  var offset = $('#canvas').offset();
  var x = event.pageX - offset.left;
  var y = event.pageY - offset.top;

  //Cells are 20 by 20
  x = Math.floor(Math.floor(x) / 20);
  y = Math.floor(Math.floor(y) / 20);

  return x + ',' + y;
}

function fillCell(cellId, context, color)
{
  var x = cellId.split(':')[0]*20 + 0;
  var y = cellId.split(':')[1]*20 + 0;

  context.fillStyle = color;
  context.fillRect(x+1, y+1, 19, 19);
}

function resetCanvas()
{
  _canvas.width = _canvas.width;
  drawGrid(_context);
}