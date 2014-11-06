Meteor.publish('cells', function() {
  return Cells.find();
});