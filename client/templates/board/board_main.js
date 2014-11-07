/*
 Each cell is represented by a document in the Cells collection:
   cell: id of the cell  "i,j"
   owner: user id
   color: hex value
   state: String (either "ALIVE" or "DEAD")
   x, y: Number (array coordinates in the grid)
   numberOfNeighbors: Number (either 3, 5, or 8 depending on position)
   neighbors: array of cell ID's
   aliveNeighbors: array of cell ID's
 */
// var cellsData = [
//   {
//     cell: '5:5',
//    alive: true,
//    x: 5,
//    y: 5,
//    numberOfNeighbors: 8,
//     neighbors: new Array('4:4','4:5','4:6','5:4','5:6','6:4','6:5','6:6'),
//     aliveNeighbors: new Array('4:4','6:6')
//   }, 
//   {
//     cell: '4:4',
//    alive: true,
//    x: 4,
//    y: 4,
//    numberOfNeighbors: 8,
//     neighbors: new Array('3:3','3:4','3:5','4:3','4:5','5:3','5:4','5:5'),
//     aliveNeighbors: new Array('5:5')
//   }, 
//   {
//     cell: '6:6',
//    alive: true,
//    x: 6,
//    y: 6,
//    numberOfNeighbors: 8,
//     neighbors: new Array('5:5','5:6','5:7','6:5','6:7','7:5','7:6','7:7'),
//     aliveNeighbors: new Array('5:5')
//   }
// ];

Template.board.helpers({
  cell: Cells.find()
});



