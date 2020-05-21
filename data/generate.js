var faker = require("faker");

var database = { spreads: [] };


function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

function createPages() {
  var pages = [];
  var pageMax = randomInt(1, 3);
  //console.log("Ilosc stron: " + pageMax);
  var ptId = randomInt(0, 3);
  var pageOrientation = 2;
  if (pageMax==1) {
      pageOrientation = randomInt(0, 2);
  }
  for (var page=1; page<=pageMax; page++) {
      pages.push({
        id: page,
        pageTemplate: ptId,
        orientation: pageOrientation,
      });
  }
  return pages;
}
for (var doc=1; doc<=20; doc++) {

 for (var i = 1; i <= 50; i++) {
    database.spreads.push({
      docId: doc,
      spreadId: i,


      pages: createPages(),

    });
  }

}

console.log(JSON.stringify(database));
