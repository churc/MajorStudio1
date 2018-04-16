var table;
var tableA; ////array
var tableL; ////sorted year, classification, gender
var tableLA; ////array
var groupedByType; ////classification, artwork material object
var groupedByName;  ////artist name
var groupedByYear; ////year
var groupedByGender; ////gender

var groupedByTypeL = []; ////classification, artwork material object
var groupedByNameL = [];  ////artist name
var groupedByYearL = []; ////year
var groupedByGenderL = []; ////gender

var groupByObjType;
var sorted = [];
var mapped;
var typeGrp = [];
var category;
var femaleObj;
var eachType = {};
var count;

var totalsFiltered;
var femtotals;
var maletotals;

var yrFemTotals = [];
var yrMaleTotals = [];
var barTotals2 =[];
var barTotals = [];
var lineTotals = [];
var barTot = [];

var female;
var male;
var femaleL;
var maleL;

var femaleTotal = [];
var totalFemale = [];
var totalMale = [];
var artistColl = [];
var artistCollSort = [];

var allYears = [];

var minDate, maxDate, name, gender, date, type;
var genderL, nameL, dateL, typeL;
var maxObjects, minObjects, maxCount, minCount;

var objectCounts = [];
var objCount = [];
var typeCounts = [];

var KhandFont, fontReady = false;

var margin = 80;

function collate(array, prop){
    return array.reduce(function(groups, item){
    const val = item[prop]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
}

///////=====BAR CHART=====////////////
var g = function(p){

   p.fontRead = function(){
      fontReady = true; 
    }

   p.preload = function(){
   p.table = p.loadTable('assets/ModContGenderfinalgnoysort.csv','csv','header'); /////four sort gender, Artist Alpha Sort, classification, year
   console.log(p.table);
   KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

    p.setup = function(){
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    // canvas.parent("#c1");
    p.analyzeData();
    p.barChart();
    p.noLoop();
  }

////group by type classification & gender, then by name
    p.analyzeData = function(){
      gender = p.table.getColumn(10); ////gender
      name = p.table.getColumn(12); ////name, Artist Alpha Sort
      date = p.table.getColumn(17); ////object begin date
      type = p.table.getColumn(22); ////classification
    
      tableA = p.table.getArray(); 
     
      var female = p.table.findRows('f', 10); /////2027 rows with a FEMALE artist 
      var male = p.table.findRows('m', 10);  /////10829 rows with a MALE artist

/////group same items together using collate reduce function
////=======  group sort by artist by object type
      groupedByName = collate(tableA,12);  ////name, Artist Alpha Sort with array of artworks by artist

////=======  group sort by objectbegin date
      groupedByYear = collate(tableA,17);  ////year
  
////object, artist alpha sort is keys
      var tableAkeys = Object.keys(groupedByName);  ////3564 names, Artist Alpha Sort

////iterate through object by keys and select artist names 
      for(var j=0; j<tableAkeys.length; j++){
        sorted[tableAkeys[j]] = collate(groupedByName[tableAkeys[j]], 12)
    }

////============ classification object type
    groupedByType = collate(tableA,22);  ////classification
    //// groupByObjType.push(groupedByType);

////object, type (classification) each of the keys 
    var tableAkeys = Object.keys(groupedByType); ////returns array of object keys (glass, sculpture etc)
    // console.log(tableAkeys.length);  ////105 types

////iterate through object by keys and SPLIT object into 105 objects 
    for(var l=0; l<tableAkeys.length; l++){
        p.sort[tableAkeys[l]] = collate(groupedByType[tableAkeys[l]], 22)
      }
      // console.log(tableAkeys); ///105 separate objects 
}
  
///////
  p.barChart = function(){
  p.push();
    var groupedByType = collate(tableA,22);

    var groupedByTypeC = Object.keys(groupedByType);
      var width = p.windowWidth, 
          height = 4000,
          margin = 50,
          w = p.width - 2 * margin, // chart area width and height
          h = p.height - 2 * margin;
    
    var barWidth =  (h / groupedByTypeC.length) * 0.1; // width of bar
    var barMargin = (h / groupedByTypeC.length) * 0.001; // margin between two bars

for (var b=0; b<groupedByTypeC.length; b++) {
      var totalsFiltered = 0;
      var femtotals = 0;
      var maletotals = 0;
  ////t vertical, b horizontal
      for (var t = groupedByType[groupedByTypeC[b]].length - 1; t >= 0; t--) {
        var currentGender = groupedByType[groupedByTypeC[b]][t][10];
        if (currentGender == 'm') {
           maletotals = maletotals + 1;

        } else if (currentGender == 'f'){
          femtotals = femtotals + 1;  
      };

      if(currentGender === 'm' || currentGender === 'f'){
        totalsFiltered = totalsFiltered + 1;
        }    
      };
    
         var myObject = {name: groupedByTypeC[b], f: femtotals, m: maletotals, total: totalsFiltered};
         barTotals.push(myObject);
         console.log(barTotals);  ////each classification with number of artworks & split by gender
}
        p.push();
        p.scale(0.16); 
        p.rotate(p.radians(90));   // rotate to vertical
        p.translate(200, t*(barWidth*8500 + barMargin)); // jump to the top right corner
     
////sort by size
      barTotals.sort(function(a,b){
        return a['m'] - b['m']
      })
      for (var i = barTotals.length - 1; i >= 0; i--) {
          p.noStroke();
          p.fill(92,242,145,120);
          p.rect(100 + (i * 20), 100, 20, barTotals[i]['m']);
          // p.rect(100 + (i * 10), 100, 10, barTotals[i]['m']);
          p.noStroke();
          p.fill(179,118,244,120);
          p.rect(100 + (i * 20), 100, 20, (-1) * barTotals[i]['f']);
        };
      p.pop();
  p.pop();
  }
}

var myp5 = new p5(g, 'c1');


//////////=====LINE CHART=====/////////

var t = function(p) {

p.fontRead = function(){
      fontReady = true; 
    }

p.preload = function(){
     p.tableL = p.loadTable('assets/ModContGenderfinaloygsort.csv','csv','header'); /////classification, year, gender
     console.log(p.tableL);
     KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

p.setup = function(){
    canvas = p.createCanvas(p.windowWidth, 850);
    p.analyzeData();
    p.lineChart();
    p.line2();
    p.drawLabelsCh();
    p.noLoop();
  }

 p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

////group by type classification, then year & gender
p.analyzeData = function(){
    var genderL = p.tableL.getColumn(10);  ////gender
    var nameL = p.tableL.getColumn(12); ////name, Artist Alpha Sort
    var dateL = p.tableL.getColumn(17); ////object begin date
    var typeL = p.tableL.getColumn(22); ////classification

    tableLA = p.tableL.getArray(); 

    var valW = p.tableL.get(300, 17);
    // console.log(typeof valW);   ////object begin date is string

/////group same items together using reduce function
     groupedByTypeL = collate(tableLA,22); ////grouped by type of object
     console.log(groupedByTypeL); 

     groupedByYearL = collate(tableLA,17);  ///grouped by year
     console.log(groupedByYearL);

     groupedByGenderL = collate(tableLA,10);  ///grouped by gender
     console.log(groupedByGenderL);

    var groupedByTypeLC = Object.keys(groupedByTypeL); ////105 artwork type object keys 
    console.log(groupedByTypeLC.length);


    var yearNow = {};
    yearNow.items =[];
    yearNow.year =[];
    yearNow.gender = [];
    // yearNow.year = groupedByYearL; ////objects grouped by year
    // yearNow.items = groupedByTypeL; ////objects grouped by classification
    yearNow.gender = groupedByGenderL; ////objects grouped by gender

    p.append(allYears,yearNow);

    var count = p.tableL.getRowCount();
    var countC = p.tableL.getColumnCount();
        console.log(count + " rows");  ////14350 rows
        console.log(countC + " columns"); ////24 columns
    var row, col, val, min, max;

    var yearNow = {};
        yearNow.year = (p.int(p.tableL.getString(0,17)));
        // yearNow.year = (p.int(p.tableL.findRows(String(17))));
        yearNow.items = p.tableL.findRows(String(yearNow.year),17);
        p.append(allYears, yearNow);

    var minObjects = 150000;
        maxObjects = 0;
    var minYear = null;
        maxYear = null;

for (var i=0; i<count; i++) {
      var year = (p.int(p.tableL.getString(i,17)));
      if(year!=yearNow.year){
        var yearNow = {};
        yearNow.year = year;
        yearNow.items = [];
        yearNow.items = p.tableL.findRows(String(yearNow.year),17);
        p.append(allYears, yearNow);
        
        if(yearNow.items.length>maxObjects){
          maxObjects = yearNow.items.length;
          maxYear = allYears.length-1;
        }

        if(yearNow.items.length<minObjects){
          minObjects = yearNow.items.length;
          minYear = allYears.length;           
        }
     }
  }
console.log("year with most objects "  + allYears[maxYear].year);
console.log(allYears[minYear].year);
console.log(allYears); ////array of objects with year and artwork type

mxYear = null;
var midYears;

for (var s=0; s<=p.count; s++) {
      var year = p.int(p.tableL.getString(s,17));
      if(year!=yearNow.year){
        var yearNow = {};
        yearNow.year = year;
        yearNow.items =[];
        yearNow.items = p.tableL.findRows(String(yearNow.year),17);
        p.append(allYears, yearNow);
        
        if(yearNow.items.length>maxObjects){
          maxObjects = yearNow.items.length;
          mxYear = midYears.length-1;
        }
     }
   
console.log("Number of artworks since 1850 is " + (midYears.length-1) + " the year with the most artworks 1850 -2017 is " + mxYear);
}

}

p.lineChart = function(){
 
  p.noStroke();
  p.fill(179,118,244);

  for(var i=0; i<allYears.length; i++){
      // var x = p.map(i,0,allYears.length, margin, width-margin);
         var x = p.map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, 1341-margin);
      for(var j=0; j<allYears[i].items.length; j++){
        var y= p.map(j,0,maxObjects,747-margin, margin);
        // var y = p.map(j,0,maxObjects,height-margin, margin);
        p.rect(x-1,y-1, 3, 2);
      }
  }

}


p.line2 = function(){
    var groupedByType = collate(tableA,22);
    var groupedByTypeC = Object.keys(groupedByType);
    var width = p.windowWidth, 
        height = 4000,
        margin = 50,
        w = p.width - 2 * margin, // chart area width and height
        h = p.height - 2 * margin;
    
    var barWidth =  (h / groupedByTypeC.length) * 0.1; // width of bar
    var barMargin = (h / groupedByTypeC.length) * 0.001; // margin between two bars

for (var b=0; b<groupedByTypeC.length; b++) {
      var totalsFiltered = 0;
      var femtotals = 0;
      var maletotals = 0;
  ////t vertical, b horizontal
      for (var t = groupedByType[groupedByTypeC[b]].length - 1; t >= 0; t--) {
        var currentGender = groupedByType[groupedByTypeC[b]][t][10];
        if (currentGender == 'm') {
           maletotals = maletotals + 1;

        } else if (currentGender == 'f'){
          femtotals = femtotals + 1;  
      };

      if(currentGender === 'm' || currentGender === 'f'){
        totalsFiltered = totalsFiltered + 1;
        }    
      };
         var myObject = {name: groupedByTypeC[b], f: femtotals, m: maletotals, total: totalsFiltered};
         barTot.push(myObject);
       }
         console.log(barTot);  ////each classification with number of artworks & split 


p.beginShape();
p.push();
p.translate(50, 500);
  var x1,x2,y1,y2;
  // var maxX1 = Object.keys(barTotals);
  var maxX1 = barTot.length;
  var maxY = 15000;
  console.log(maxX1);
  for (var n = 0; n < barTot.length; n++) {
    p.stroke(50);
    p.strokeWeight(1);
    p.noFill();

    // x1 = p.map(n                       ,0 ,maxX1, 0        ,width);
    // x2 = p.map(n+1                     ,0, maxX1, 0        ,width);
    // y1 = p.map(maxX1.getRow(n).get(2)   ,0, maxY, height-30, 0);
    // y2 = p.map(maxX1.getRow(n+1).get(2) ,0, maxY, height-30, 0); 

    // p.line(x1,y1,x2,y2)
    ////legend
    // p.noStroke();
    // p.fill(0);
    // p.text(n,x1,height);

   
p.endShape();
 }
 
//   p.beginShape();

//   for(var i=0; i<maxX1.length; i++){
//     p.stroke(255,0,0);
//     p.noFill();

// var x = p.map(i, 0, maxX, 20, 460);
// var y = p.map(maxX, 0, maxY, 100, 20);
// p.ellipse(x, y, 3 ,3 );
//p.endShape;
p.pop();

}

//////////\\\\\\\\\\\\\\\\\\\\

p.drawLabelsCh = function(){
    p.push();
    p.translate(88,0);
// //x axis
    p.textFont('Khand');
    p.textSize(17);
    p.stroke(77,77,77);

// //just the lines
   // line(margin,height-margin,width-margin,height-margin);
    p.line(margin,747-margin,1341-margin,747-margin);
    p.noStroke();
    p.textAlign(p.CENTER);

// draw the sections and add text for each section
//go throught the years
for(var i=1850; i<=2017; i+=10){
    var y = 747-margin+30;
    var x = p.map(i,1850,2017, margin, 1341-margin);
    p.noStroke();
    p.fill(77,77,77);
    p.text(i, x, y);
    p.stroke(77,77,77);
    p.strokeWeight(1);
    p.line(x,y-22,x, y-30);
  
  }
  
//// label the whole axis
  p.textFont('Khand');
  p.textAlign(p.RIGHT);
  p.noStroke();
  p.textSize(20);
  p.text("Year: Object Begin Date", 990,730);

//////draw the y Axis
  p.stroke(77,77,77);
  p.line(margin,747-margin,margin,margin);
  p.noStroke();
  p.textAlign(p.RIGHT);
  p.textStyle(p.NORMAL);

  for(var i=0; i<maxObjects; i+=50){
      var x = margin-20;
      var y = p.map(i,0, maxObjects,747-margin, margin);
        p.noStroke();
        p.fill(77,77,77);
        p.text(i, x, y+5);
        p.stroke(77,77,77);
        p.strokeWeight(1);
        p.line(x+10,y,x+20,y);
    }
        p.push();
        p.translate(65,0);
        p.textFont('Khand');
        p.noStroke();
        p.textSize(20);
        p.translate(1000,700);
        p.rotate(p.radians(270)); 
        p.text("Artwork by type", margin+300,margin-1085);
        // p.text("Artwork by type", margin+300,margin-1135);
        p.pop();
      p.pop();
  }  
 }

var myp5 = new p5(t,'c2');



//////////////////////

//////CIRCLES///////

var z = function(p) {

  p.fontRead = function(){
      fontReady = true; 
    }

  p.preload = function(){
     p.tableC = p.loadTable('assets/ModContGenderfinalngosort.csv','csv','header'); /////classification, year, gender
     console.log(p.tableC);
     KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

p.setup = function(){
      canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      p.analyzeData();
      p.pieChart(300, angles);
      p.circles();
      p.noLoop();
  }

////group by type classification, then year & gender, then by name

p.analyzeData = function(){
    var genderL = p.tableC.getColumn(10);  ////gender
    var nameL = p.tableC.getColumn(12); ////name, Artist Alpha Sort
    var dateL = p.tableC.getColumn(17); ////object begin date
    var typeL = p.tableC.getColumn(22); ////classification

    tableCA = p.tableC.getArray(); 

    var valW = p.tableC.get(300, 17);
     console.log(typeof valW);   ////object begin date is string

     groupedByTypeC = collate(tableCA,22);

     groupedByYearC = collate(tableCA,17);

     groupedByGenderC = collate(tableCA,10);

    var groupedByTypeC = Object.keys(groupedByTypeC);

    console.log(groupedByTypeC);
    console.log(groupedByTypeC.length);

////=====max number of items by one artist 
  var rows = p.tableC.getRowCount();

  var displayName = {};
  displayName.artist = p.tableC.getString(0,12);
  displayName.items = p.tableC.findRows(String(displayName.artist),12);
  p.append(artistColl, displayName);
 
  maxArtistColl = 0;
  maxArtist = null;
    
for (var n=0; n<rows; n++) {
      var artist = (String(p.tableC.getString(n,12)));
      if(artist!=displayName.artist){
        var displayName = {};
        displayName.artist = artist;
        displayName.items =[];
        displayName.items = p.tableC.findRows(String(displayName.artist),12);
        p.append(artistColl, displayName);
        if(displayName.items.length>maxArtistColl){
          maxArtistColl = displayName.items.length;
          maxArtist = artistColl.length-1;
          // console.log(artistColl[maxArtist]);
          // console.log(artistColl[maxArtist].items.length)
        }
     }
  }
console.log("Max number of artworks is by " + artistColl[maxArtist].artist + " is " + artistColl[maxArtist].items.length);
console.log(artistColl);

////========SORT (not working) on number of arrays in each object
////sort by number of items in array to get artists with most artworks

// artistColl.sort(function(a,b){
//   return b.items.value - a.items.value;
// })

// artistCollSort = p.sort(artistColl, artistColl.length-1);
// var artistCollSort = _.sortBy(artistColl, 'items' );
// console.log(artistCollSort);

// var artistCollSort = Object.keys(artistColl).sort(function(a, b) {
//   return b.items.value - a.items.value; 
// });
// console.log(artistCollSort);
}


p.circles = function(){
  
  var groupedByTypeC = collate(tableA,22);

  var groupedByTypeCC = Object.keys(groupedByTypeC);

  for (var b=0; b<groupedByTypeCC.length; b++) {
      //var total = groupedByType[groupedByTypeC[b]].length;
      var totalsFiltered = 0;
      var femtotals = 0;
      var maletotals = 0;
////t vertical, b horizontal
    for (var t = groupedByType[groupedByTypeCC[b]].length - 1; t >= 0; t--) {
      var currentGender = groupedByType[groupedByTypeCC[b]][t][10];
      if (currentGender == 'm') {
         maletotals = maletotals + 1;
  
      } else if (currentGender == 'f'){
          femtotals = femtotals + 1;  
      };

      if(currentGender === 'm' || currentGender === 'f'){
        totalsFiltered = totalsFiltered + 1;
      } 
    }
   var myObject = {name: groupedByTypeC[b], f: femtotals, m: maletotals, total: totalsFiltered};
   barTotals.push(myObject);

    }
  }
var angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ]; 

/////example
p.pieChart = function(diameter, data) {
p.push();
p.translate(50,200);
   var width = 700, 
       height = 700;

  var lastAngle = 0;
  for (var i = 0; i < barTotals.length; i++) {
    var gray = p.map(i, 0, barTotals.length, 0, 250);
    p.fill(gray);
    p.arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+p.radians(angles[i]));
    lastAngle += p.radians(angles[i]);
    }
    p.pop();
  }
}

var myp5 = new p5(z,'c3');


/////////////////////////////////////////////////
////PARK
/////====FILL BY GENDER
//    var gender = groupedByYear[i].items[j].obj.Gender;
//    console.log(gender);
//     if (gender === 'm') {
//        p.fill(92,242,145,90);
//        p.rect(x-1,y-1,3,2);
//        // console.log('m');
//        totalMaleArtistsPerBar = totalMaleArtistsPerBar + 1;

//     } else if (gender === 'f') {
//        p.fill(179,118,244,90);
//        p.rect(x-1,y-1,3,2);
//        // console.log('f');
//       totalFemaleArtistsPerBar = totalFemaleArtistsPerBar + 1;
//      // console.log(totalFemaleArtistsPerBar);
//     } 
// }
//////////

// ["glass": {fem : 10, male: 200, totalfiltered: 210}]


//////////////////////////////////
//  mxYear = null;//////mid years from 1850 onwards
// for (var f=0; f<=p.count; f++){
  // var year = groupedByYearL;
//    if(year!=yearNow.year){
        // var yearNow = {};
        // yearNow.year = year;
        // yearNow.items =[];
        // yearNow.items = groupedByTypeL;
        // p.append(allYears, yearNow);
  // if(yearNow.items.length>maxObjects){
 //          maxObjects = yearNow.items.length;
 //          mxYear = midYears.length-1;
// }
// }
// console.log("Number of artworks since 1850 is " + midYears.length + " the year with the most artworks 1850 -2017 is " + mxYear);
// }

/////////////////////////////////////
////essential to append items in yearNow to allYears
// for (var d=0; d<groupedByTypeLC.length; d++) {
//           for(var h=groupedByTypeL[groupedByTypeLC[d]].length-1; h>=0; h--){
//              // //console.log(groupedByTypeL[groupedByTypeLC[i]][h][17]); ////count per year
//              // // console.log(groupedByTypeL[groupedByTypeLC[i]][h][22]); ////count per classification
//              // p.append(allYears,yearNow); //// items added to object

//            }
//          }
//       console.log(allYears);
//////////////////////////////////////

////NOT working, list of classifications - map object holds key value pairs
//   p.categorize = function(){
//   var groupedByTypeA;
//   var category;
//   var groupedByType = collate(tableA,22);
//   console.log(groupedByType);
  
//   groupedByTypeA = Object.keys(groupedByType);
//   console.log(groupedByTypeA);
//     for (var r = 0; r<groupedByTypeA.length; r++) {
//         var category = groupedByTypeA[r];
//         // console.log(category);  ////each of the 105 objects separate
// ////GETTING STUCK HERE
//         if (!p.map[category]) 
//             p.map[category] = [];
//         p.map[category].push(groupedByTypeA[r]);
//     }
//     return p.map;

//     console.log(category); 
//   }
////////////////
 //////////////////
 // var groupedByTypeL = collate(p.tableL,22);
// var groupedByTypeLC = Object.keys(groupedByTypeL);
// var myObject2 = {name: groupedByTypeLC[b], total: objCount};
//   lineTotals.push(myObject2);

// var typeCount = []
// console.log(groupedByTypeL);  ////objects
//  // var groupedByTypeLC = Object.keys(groupedByTypeL);
//  var groupedByTypeLC = allYears;
//  console.log(groupedByTypeLC.length)

// var minObjects = 0;
// var maxObjects = 0;
  
//   for (var e=0; e<allYears.length; e++){
//       var lineTotals = 0;
//   }

// for(var h=groupedByTypeL[groupedByTypeLC[i]].length; h>=0; h--){
//       // var typeCount = typeL[i];
//      var typeCount = groupedByTypeL;
////    var typeCount = groupedByTypeL[groupedByTypeLC];
//      // p.tableL.getString(i,22);
//       console.log(groupedByTypeL[groupedByTypeLC.length]);

//       if(typeCount>maxObjects){
//         maxObjects = typeCount;
//         }

//         if(typeCount<minObjects){
//           minObjects = typeCount;   
//         } 
//         console.log(typeCount);
//   }
//  console.log(typeCount);


////array for all possible object counts
  // for(var i=0; i<maxObjects+1; i++){
  //     p.append(objectCounts, 0);
  //   }
  //   console.log("we now have an array with the length of " +  objectCounts.length);
/////////////////////

// // callback for loaded data.
//  p.handleDataLoad(d) = function {
//   groupedByType = d;
//   redraw();
// } 
///////////////
  // for(var i=0; i<tableAkeys.length; i++){
// //// classification use map incoming value and range
//     // console.log('thisisallYrs' + allYears[allYears.length-1].year);
// ////map function 
//     // var x = map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, width-margin);
//     var x = map(tableAkeys[i].year,1850,tableAkeys[tableAkeys.length-1].year, margin, 1341-margin);

//     var totalFemaleArtistsPerBar = 0;
//     var totalMaleArtistsPerBar = 0;

// ////THIS logs where it is mapping that is relatively corresponding to:
//    // console.log("mapping: " + allYears[i].year + "to: " + x);

//   ///then do same for y height
//   for(var j=0; j<tableAkeys[i].items.length; j++){
//       var y= map(j,0,maxObjects,747-margin, margin);

////////////line chart
// for(row =0; row<count; row++){
//     // p.stroke(p.color(179,118,244, 120));
//     p.beginShape();
//     for(col=22; col<countC; col++){
//     //   // val = p.float(p.int(p.table.getString(row, 22)));
//       val = p.float(p.int(tableL.getString(row, col)));


//       p.noFill();
//       // draw the line mapped to the canvas size
//       p.vertex(       
//         p.map(col,3,25, 0, p.width),
//         p.map(val,min,max, p.height, 0)
//       );
//       // draw the filled ellipse mapped to the canvas size
//       p.fill(p.color(179,118,244,120));
//       p.noStroke();
//       p.ellipse( 
//         p.map(col,3,25, 0, p.width) ,
//         p.map(val,min,max, p.height, 0),
//         5,
//         5
//       );
//       // add text with the actual value mapped to canvas size
//       // p.text(val, p.map(col,3,25, 0, p.width) + 10 , p.map(val,min,max, p.height, 0) + 10);
//       // p.noFill();
//       // p.stroke(p.color(179,118,244));

//     }
//     p.endShape();
//   }
///////////
    

  

// //THIS gets number of FEMALE artworks per BAR with total bar height
//   barTotals.push({barTotal: allYears[i].items, femaleTotal: totalFemaleArtistsPerBar});
// //THIS gets number of FEMALE artworks 
//   yrFemTotals.push({year: allYears[i].year, total: totalFemaleArtistsPerBar});

// //THIS gets number of MALE artworks per BAR with total bar height
//   barTotals2.push({barTotal: allYears[i].items, maleTotal: totalMaleArtistsPerBar});
// //THIS gets number of MALE artworks 
//   yrMaleTotals.push({year: allYears[i].year, total: totalMaleArtistsPerBar});
  
//   // console.log(yrFemTotals);
//   // console.log(yrMaleTotals);

////group by year
// function analyzeData(){
//     var count = table.getRowCount();
//     console.log(count);
// // get specific columns
//     name = table.getColumn(9);
//     gender = table.getColumn(10);
//     nation = table.getColumn(13);
//     date = table.getColumn(17);
//     type = table.getColumn(22);
 
// // get the max, min value within object begin date column
// var count = table.getRowCount();
    
//     var yearNow = {};
//     yearNow.year = int(table.getString(0,17));
//     yearNow.items = table.findRows(String(yearNow.year),17);
//     append(allYears, yearNow);
    
//     minObjects = 100000;
//     maxObjects = 0;
//     minYear = null;
//     maxYear = null;

//   for (var i=0; i<count; i++) {
//       var year = int(table.getString(i,17));
//       if(year!=yearNow.year){
//         var yearNow = {};
//         yearNow.year = year;
//         yearNow.items =[];
//         yearNow.items = table.findRows(String(yearNow.year),17);
//         append(allYears, yearNow);
        
//         if(yearNow.items.length>maxObjects){
//           maxObjects = yearNow.items.length;
//           maxYear = allYears.length-1;
//         }
//         if(yearNow.items.length<minObjects){
//           minObjects = yearNow.items.length;
//           minYear = allYears.length-1;
//         }
//      }
//   }
//   // console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
//   // console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " items.");
// }
    


