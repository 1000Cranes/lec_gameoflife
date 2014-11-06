if (Cells.find().count() === 0) {
  Cells.insert({
    cell: '5:5',
   alive: true,
   x: 5,
   y: 5,
   numberOfNeighbors: 8,
    neighbors: new Array('4:4','4:5','4:6','5:4','5:6','6:4','6:5','6:6'),
    aliveNeighbors: new Array('4:4','6:6')
  });

  Cells.insert({
    cell: '4:4',
   alive: true,
   x: 4,
   y: 4,
   numberOfNeighbors: 8,
    neighbors: new Array('3:3','3:4','3:5','4:3','4:5','5:3','5:4','5:5'),
    aliveNeighbors: new Array('5:5')
  });

  Cells.insert({
    cell: '6:6',
   alive: true,
   x: 6,
   y: 6,
   numberOfNeighbors: 8,
    neighbors: new Array('5:5','5:6','5:7','6:5','6:7','7:5','7:6','7:7'),
    aliveNeighbors: new Array('5:5')
  });
}