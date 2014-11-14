Meteor.publish('cells', function() {
  return Cells.find();
});

Meteor.publish('games', function() {
  return Games.find();
});