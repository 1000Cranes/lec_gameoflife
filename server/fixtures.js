if (Cells.find().count() === 0) {
  Cells.insert({
    cell: '5:5',
   alive: true,
   x: 5,
   y: 5
  });

  Cells.insert({
    cell: '4:4',
   alive: true,
   x: 4,
   y: 4
  });

  Cells.insert({
    cell: '6:6',
   alive: true,
   x: 6,
   y: 6
  });
}

if (Games.find().count() === 0) {
  Games.insert({
    gameStarted: false,
    gameFinished: false,
    boardsize: 30
  });
}