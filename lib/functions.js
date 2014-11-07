Meteor.appFunctions = {
  numOfNeighbors : function (cellID)
    {
      var i = cellID.split(',')[0];
      var j = cellID.split(',')[1];
      var topOrBottom = false;
      var leftOrRight = false;

      if(i === "0" || i === "28")
        topOrBottom = true;
      if(j === "0" || j === "28")
        leftOrRight = true;

      if(topOrBottom && leftOrRight)
        return 3;
      if(topOrBottom)
        return 5;
      if(leftOrRight)
        return 5;
      return 8;
    },
  neighbors : function (cellID)
  {
    // The following could be potential neighbors
    //  i-1,j-1 i,j-1 i+1,j-1
    //  i-1,j   i,j   i+1,j
    //  i-1,j+1 i,j+1 i+1,j+1
    var i = cellID.split(',')[0];
    var j = cellID.split(',')[1];
    var im1 = i - 1;
    var ip1 = i + 1;
    var jm1 = j - 1;
    var jp1 = j + 1;
    var list = new Array();

    if(im1 > -1 && jm1 > -1)
      list.push(im1 + ',' + jm1);
    if(i > -1 && jm1 > -1)
      list.push(i + ',' + jm1)
    if(ip1 < 29 && jm1 > -1)
      list.push(ip1 + ',' + jm1)
    if(im1 > -1 && j > -1)
      list.push(im1 + ',' + j)
    if(ip1 < 29 && j > -1)
      list.push(ip1 + ',' + j)
    if(im1 > -1 && jp1 < 29)
      list.push(im1 + ',' + jp1)
    if(i > -1 && jp1 < 29)
      list.push(i + ',' + jp1)
    if(ip1 < 29 && jp1 < 29)
      list.push(ip1 + ',' + jp1)

    return list;
  },
  aliveNeighbors : function (cellID)
  {
    // The following could be potential neighbors
    //  i-1,j-1 i,j-1 i+1,j-1
    //  i-1,j   i,j   i+1,j
    //  i-1,j+1 i,j+1 i+1,j+1
    var i = cellID.split(',')[0];
    var j = cellID.split(',')[1];
    var im1 = i - 1;
    var ip1 = i + 1;
    var jm1 = j - 1;
    var jp1 = j + 1;
    var list = new Array();

    var im1jm1 = Cells.findOne({cell: im1 + ',' + jm1});

    if(im1 > -1 && jm1 > -1 && im1jm1 != null && im1jm1.state === "ALIVE")
      list.push(im1 + ',' + jm1);
  /*  if(i > -1 && jm1 > -1 && Cells.findOne({cell: i + ',' + jm1}).state === "ALIVE")
      list.push(i + ',' + jm1)
    if(ip1 < 29 && jm1 > -1 && Cells.findOne({cell: ip1 + ',' + jm1}).state === "ALIVE")
      list.push(ip1 + ',' + jm1)
    if(im1 > -1 && j > -1 && Cells.findOne({cell: im1 + ',' + j}).state === "ALIVE")
      list.push(im1 + ',' + j)
    if(ip1 < 29 && j > -1 && Cells.findOne({cell: ip1 + ',' + j}).state === "ALIVE")
      list.push(ip1 + ',' + j)
    if(im1 > -1 && jp1 < 29 && Cells.findOne({cell: im1 + ',' + jp1}).state === "ALIVE")
      list.push(im1 + ',' + jp1)
    if(i > -1 && jp1 < 29 && Cells.findOne({cell: i + ',' + jp1}).state === "ALIVE")
      list.push(i + ',' + jp1)
    if(ip1 < 29 && jp1 < 29 && Cells.findOne({cell: ip1 + ',' + jp1}).state === "ALIVE")
      list.push(ip1 + ',' + jp1)*/

    return list;
  }
}