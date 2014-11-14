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
    if(options.gameStarted === undefined || options.gameStarted) return;
    return Cells.insert({
      cell: options.ID,
      alive: true,
      x: options.x,
      y: options.y
    });
  },
  removeCell: function (options){
    if(options.gameStarted === undefined || options.gameStarted) return;
    return Cells.remove({
      cell: options.ID
    });
  },
  startGame: function (options){},
  gameOptions: function (options){}
});
