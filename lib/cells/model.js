// Cells.allow({
//   insert: function (userId, cell) {
//     return false; //No cowboy inserts :)
//   },

//   //Removals are only allowed before the game starts
//   remove: function (userId, cell){
//     return cell.owner === userId && gameStarted();
//   }
// });

gameStarted = function () {
  // To Do add code to see if game is started.
}

Meteor.methods({
  addCell: function (options){
    return Cells.insert({
      cell: options.ID,
      owner: this.userId,
      color: options.color,
      state: "ALIVE",
      x: options.x,
      y: options.y,
      numberOfNeighbors: numOfNeighbors(options.ID),
      neighbors: neighbors(options.ID),
      aliveNeighbors: aliveNeighbors(options.ID)
    });
  },
  removeCell: function (options){},
  startGame: function (options){},
  gameOptions: function (options){}
});
