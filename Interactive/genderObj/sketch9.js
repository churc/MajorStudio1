var table;
var tableA; ////array
var tableL; ////sorted year, classification, gender
var tableLA; ////array
var groupedByType; ////classification, artwork material object
var groupedByName;  ////artist name
var groupedByYear; ////year

var groupedByTypeL = []; ////classification, artwork material object
var groupedByNameL = [];  ////artist name
var groupedByYearL = []; ////year

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
var barTotals =[];
var yrMaleTotals = [];
var barTotals2 =[];

var female;
var male;
var femaleL;
var maleL;

var FemaleTotal = [];
var TotalFemale = [];
var TotalMale = [];


var allYears = [];

var minDate, maxDate, name, gender, date, type;
var genderL, nameL, dateL, typeL;
var maxObjects, minObjects, maxCount, minCount;

var objectCounts = [];

var margin = 80;

function collate(array, prop){
    return array.reduce(function(groups, item){
    const val = item[prop]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
}

////BAR CHART
var s = function(p){
   p.preload = function(){
   // table = loadTable('assets/ModContGenderfinalgosort.csv','csv','header');  /////secondary sort gender, classification
   p.table = p.loadTable('assets/ModContGenderfinalgnoysort.csv','csv','header'); /////four sort gender, Artist Alpha Sort, classification, year
   console.log(p.table);
  }

    p.setup = function(){
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    // canvas = p.createCanvas(500, 500);
    // canvas.parent("#c1");
    p.analyzeData();
    // p.categorize();
    // p.lineChart();
    // handleDataLoad();
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
    // console.log(female);

    var male = p.table.findRows('m', 10);  /////10829 rows with a MALE artist
    // console.log(male);

//=======  group sort by artist by object type
    groupedByName = collate(tableA,12);  ////name, Artist Alpha Sort with array of artworks by artist
    console.log(groupedByName);

    //=======  group sort by objectbegin date
    groupedByYear = collate(tableA,17);  ////name, Artist Alpha Sort with array of artworks by artist
    console.log(groupedByYear);

/////group same items together using reduce function   
 ///object, artist alpha sort is keys, reduce into arrays same item 
    var tableAkeys = Object.keys(groupedByName);  
    console.log(tableAkeys.length);  ////3564 names, Artist Alpha Sort

////iterate through object by keys and select artist names 
    for(var j=0; j<tableAkeys.length; j++){
      sorted[tableAkeys[j]] = collate(groupedByName[tableAkeys[j]], 12)
    }
    // console.log(tableAkeys); 


////=================== classification object type
    groupedByType = collate(tableA,22);  ////classification
    console.log(groupedByType);
    //// groupByObjType.push(groupedByType);

////object, type (classification) each of the keys 
    var tableAkeys = Object.keys(groupedByType);
    console.log(tableAkeys.length);  ////105 types
    // console.log(tableAkeys); ////returns array of object keys (glass, sculpture etc)

////iterate through object by keys and SPLIT object into 105 objects 
    for(var s=0; s<tableAkeys.length; s++){
      p.sort[tableAkeys[s]] = collate(groupedByType[tableAkeys[s]], 22)
      // console.log(tableAkeys[s]);
      }
      // console.log(tableAkeys); ///105 separate objects 
}
  

/////////////////////\\\\\
p.barChart = function(){
p.push();

var groupedByType = collate(tableA,22);
// console.log(groupedByType);

var groupedByTypeC = Object.keys(groupedByType);
// console.log(groupedByTypeC);
    var width = p.windowWidth, // canvas width and height
        height = 4000,
        // var width = 800, // canvas width and height
        // height = 1200,
        margin = 50,
        w = p.width - 2 * margin, // chart area width and height
        h = p.height - 2 * margin;
  
  var barWidth =  (h / groupedByTypeC.length) * 0.1; // width of bar
  var barMargin = (h / groupedByTypeC.length) * 0.001; // margin between two bars

for (var b=0; b<groupedByTypeC.length; b++) {
    //var total = groupedByType[groupedByTypeC[b]].length;
    var totalsFiltered = 0;
    var femtotals = 0;
    var maletotals = 0;
////t vertical, b horizontal
    for (var t = groupedByType[groupedByTypeC[b]].length - 1; t >= 0; t--) {
      var currentGender = groupedByType[groupedByTypeC[b]][t][10];
      if (currentGender == 'm') {
         maletotals = maletotals + 1;
         //fill(92,242,145,120);
         //rect(20 + (b * 2), 20 + (t * 2), 10, 1);
      } else if (currentGender == 'f'){
          femtotals = femtotals + 1;
          // fill(179,118,244,120);
          //rect(20 + (b * 2), 20 + (t * 2), 10, 1);
      };

      if(currentGender === 'm' || currentGender === 'f'){
        totalsFiltered = totalsFiltered + 1;
      }
      
    };
    // console.log("totals: "+totalsFiltered + " fem: " + femtotals + " male: "+ maletotals)
   var myObject = {name: groupedByTypeC[b], f: femtotals, m: maletotals, total: totalsFiltered};
   barTotals.push(myObject);

      }
      p.push();
      p.scale(0.16); 
      p.rotate(p.radians(90));   // rotate to vertical
      p.translate(200, t*(barWidth*8500 + barMargin)); // jump to the top right corner
      // p.translate(150, -5200); // jump to the top right corner of the bar 
////sort
      // console.log(barTotals)
      barTotals.sort(function(a,b){
        return a['m'] - b['m']
      })
      // console.log(barTotals)
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
var myp5 = new p5(s, 'c1');

///////////////////


////LINE CHART

var t = function(p) {

  p.preload = function(){
   // table = loadTable('assets/ModContGenderfinalgosort.csv','csv','header');  /////secondary sort gender, classification
   p.tableL = p.loadTable('assets/ModContGenderfinaloygsort.csv','csv','header'); /////classification, year, gender
   // console.log(tableL);
  }

  p.setup = function(){
    // canvas = p.createCanvas(500, 500);
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    // canvas.parent("#c2");
    p.analyzeData();
    // p.categorize();
    // p.lineChart();
    // p.displayData();
    // p.drawLabelsCh();
    p.noLoop();
  }

////group by type classification, then year & gender, then by name

    p.analyzeData = function(){
    var genderL = p.tableL.getColumn(10);  ////gender
    var nameL = p.tableL.getColumn(12); ////name, Artist Alpha Sort
    var dateL = p.tableL.getColumn(17); ////object begin date
    var typeL = p.tableL.getColumn(22); ////classification

    tableLA = p.tableL.getArray(); 

    // console.log(tableLA);
     groupedByTypeL = collate(tableLA,22);
      console.log(groupedByTypeL);
      console.log(groupedByTypeL.length);

    var groupedByTypeLC = Object.keys(groupedByTypeL);

    console.log(groupedByTypeLC);
    console.log(groupedByTypeLC.length);
 
    // femaleL = tableL.findRows('f', 10); /////2027 rows with a FEMALE artist 
    // // console.log(femaleL);

    // maleL = tableL.findRows('m', 10);  /////10829 rows with a MALE artist
    // // console.log(maleL);

    var minObjects = 15000;
    var maxObjects = 0;
    // minYear = null;
    // maxYear = null;

    for (var i=0; i<groupedByTypeLC.length; i++) {

      for(var h=groupedByTypeL[groupedByTypeLC[i]].length-1; h>=0; h++){
        var typeCount = groupedByTypeL[groupedByTypeLC[i]][h][17];
      }
     // var typeCount = groupedByTypeLC[i];
     // var typeCount = groupedByTypeLC;
      console.log(typeCount);

      if(typeCount>maxObjects){
        maxObjects = typeCount;

        }

        if(typeCount<minObjects){
          minObjects = typeCount;
        
        }
     
  };
 console.log(typeCount);
 console.log("Max objects " + maxObjects);
 console.log("Min objects " + minObjects);

// for (var i=0; i<typeL.length; i++) {
//       // var typeCount = typeL[i];
//      var typeCount = typeL.getString[i];
//       console.log(typeCount);

//       if(typeCount>maxObjects){
//         maxObjects = typeCount;

//         }

//         if(typeCount<minObjects){
//           minObjects = typeCount;
        
//         }
     
//   }
//  console.log(typeCount);
//  console.log("Max objects " + maxObjects);
//  console.log("Min objects " + minObjects);

////array for all possible object counts
  for(var i=0; i<maxObjects+1; i++){
      p.append(objectCounts, 0);
    }
    console.log("we now have an array with the length of " +  objectCounts.length);


}

//=======  group sort by artist by object type
    // groupedByName = collate(tableLA,12);  ////name, Artist Alpha Sort with array of artworks by artist
    // console.log(groupedByName);

    // //=======  group sort by objectbegin date
//     groupedByYearL = collate(p.tableLA,17);  ////name, Artist Alpha Sort with array of artworks by artist
//     console.log(groupedByYear);

// /////group same items together using reduce function   
//  ///object, artist alpha sort is keys, reduce into arrays same item 
//     var tableLAkeys = Object.keys(groupedByYearL);  
    // console.log(tableLAkeys.length);  ////3564 names, Artist Alpha Sort

////iterate through object by keys and select artist names 
//     for(var j=0; j<tableLAkeys.length; j++){
//       sorted[tableLAkeys[j]] = collate(groupedByName[tableLAkeys[j]], 12)
//     }
//     // console.log(tableAkeys); //returns array of object keys (glass, sculpture etc)


// //=================== classification object type
//    var groupedByType = collate(p.tableLA,22);  ////classification
//     console.log(groupedByType);
//     // groupByObjType.push(groupedByType);

// ////object, type (classification) is keys 
//     var tableLAkeys = Object.keys(groupedByType);

//     console.log(tableLAkeys.length);  ////105 types
//     // console.log(tableAkeys); //returns array of object keys (glass, sculpture etc)

// ////iterate through object by keys and SPLITS object into 105 objects 
//     var tableLAkeys1;
//     for(var s=0; s<tableAkeys.length; s++){
//       p.sort[tableLAkeys[s]] = collate(groupedByType[tableLAkeys[s]], 22)
//       // console.log(tableAkeys[s]);
//     }
      // console.log(tableAkeys); ///105 separate objects 


//   p.lineChart = function(){
//   p.push();
//     p.pop();

// }
//   var groupedByYear = collate(tableLA,17);  ////name, Artist Alpha Sort with array of artworks by artist
//   // groupedByYear = collate(p.int(p.tableA.getString(17)));
//   console.log(groupedByYear);

//   var maxX1;
//   var x1,x2,y1,y2;
  
//   var groupedByType = collate(tableLA,22);
//   console.log(groupedByType);

//   var maxX1 = Object.keys(groupedByType);
//   ////NOT WORKING
//   // maxX = maxX1.getRowCount;
//   // console.log(maxX1);
//   for (var j = 0; j < maxX1.length; j++) {
//     maxX2 = maxX1;
//     maxX = maxX2.length;
//       }
//   // console.log(maxX);  ////returns 105
//   // console.log(maxX2);  ////returns 
//   var maxY = 1500000;
//   p.textSize(10);

// // iterate through the data for classification
//   for(var n = 0; n <maxX; n++) {    
//     p.stroke(p.color(179,118,244));
//     p.strokeWeight(1);
//     p.noFill();
//     var individualPiece = maxX2[n];
//     // console.log(individualPiece);
//     }
    // x1 = map(i                       ,0 ,maxX, 0        ,width);
    // x2 = map(i+1                     ,0, maxX, 0        ,width);
    // y1 = map(groupedByType.getRow(i).get(0)   ,0, maxY, height-30, 0);
    // y2 = map(groupedByType.getRow(i+1).get(0) ,0, maxY, height-30, 0); 
// draw the line
    // line(x1,y1,x2,y2)
// draw the legend
    // noStroke()
    // fill(0)
    // text(i,x1,height)
// groupedByYear.year = (p.int(p.groupedByYear.getString(0,17)));
// for(var m=0; m<groupedByYear.length; m++){
// //// years use map incoming value and range
// console.log(groupedByYear.length);
//     console.log('thisisallYrs' + groupedByYear[groupedByYear.length-1].year);
// ////map function 
//     // var x = map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, width-margin);
//     var x = p.map(groupedByYear[m].year,1850,groupedByYear[groupedByYear.length-1].year, margin, 1341-margin);
//     console.log(x);
//     var totalFemaleArtistsPerBar = 0;
//     var totalMaleArtistsPerBar = 0;

// ////THIS logs where it is mapping that is relatively corresponding to:
//    // console.log("mapping: " + allYears[i].year + "to: " + x);

//   ///then do same for y height
//   for(var j=0; j<groupedByYear[i].items.length; j++){
//       var y= p.map(j,0,maxObjects,747-margin, margin);

// ///====FILL BY GENDER
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

//////////\\\\\\\\\\\\\\\\\\\\
// ////object begin date column 17

////object begin date column 17
///////////\\\\\\\
// var count = tableL.getRowCount();
// var countC = tableL.getColumnCount();
//     console.log(count + " rows");
//     console.log(countC + " columns");
// var row, col, val, min, max;
  
//     min = 14350;
//     max = 0;

//   var yearNow = {};
//     yearNow.year = (p.int(tableL.getString(0,17))); ////year object begin date

//     yearNow.items = tableL.findRows(String(yearNow.year),17);
//     p.append(allYears, yearNow);

//     minObjects = 150000;
//     maxObjects = 0;
//     minYear = null;
//     maxYear = null;
//     console.log(allYears);

// for (var i=0; i<count; i++) {
//       var year = p.int(tableL.getString(i,17));
//       if(year!=yearNow.year){
//         var yearNow = {};
//         yearNow.year = year;
//         yearNow.items =[];
//         yearNow.items = tableL.findRows(String(yearNow.year),17);
//         p.append(allYears, yearNow);
        
//         if(yearNow.items.length>maxObjects){
//           maxObjects = yearNow.items.length;
//           maxYear = allYears.length-1;
//         }

//         if(yearNow.items.length<minObjects){
//           minObjects = yearNow.items.length;
//           minYear = allYears.length-1;
//            // minYear = allYears.length;
//         }
//      }
  
//  // console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
//  // console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " item.");

// }

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
  // }


// ///////////\\\\\\\  by year
// var count = tableL.getRowCount();
// var countC = tableL.getColumnCount();
//     console.log(count + " rows");
//     console.log(countC + " columns");
// var row, col, val, min, max;
  
//     min = 14350;
//     max = 0;

//   var yearNow = {};
//     yearNow.year = (p.int(tableL.getString(0,17))); ////year object begin date

//     yearNow.items = tableL.findRows(String(yearNow.year),17);
//     p.append(allYears, yearNow);

//     minObjects = 150000;
//     maxObjects = 0;
//     minYear = null;
//     maxYear = null;
//     console.log(allYears);

// for (var i=0; i<count; i++) {
//       var year = p.int(tableL.getString(i,17));
//       if(year!=yearNow.year){
//         var yearNow = {};
//         yearNow.year = year;
//         yearNow.items =[];
//         yearNow.items = tableL.findRows(String(yearNow.year),17);
//         p.append(allYears, yearNow);
        
//         if(yearNow.items.length>maxObjects){
//           maxObjects = yearNow.items.length;
//           maxYear = allYears.length-1;
//         }

//         if(yearNow.items.length<minObjects){
//           minObjects = yearNow.items.length;
//           minYear = allYears.length-1;
//            // minYear = allYears.length;
//         }
//      }
  
//  // console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
//  // console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " item.");

// }

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

//   mxYear = null;
// // var countR = p.table.getRowCount();
// for (var k=0; k<count; k++) {
//       var year = p.int(p.table.getString(k,17));
//       if(year!=yearNow.year){
//         var yearNow = {};
//         yearNow.year = year;
//         yearNow.items =[];
//         yearNow.items = p.table.findRows(String(yearNow.year),17);
//         p.append(allYears, yearNow);
        
//         if(yearNow.items.length>maxObjects){
//           maxObjects = yearNow.items.length;
//           mxYear = midYears.length-1;
//         }

     
// console.log("Number of artworks since 1850 is " + midYears.length + " the year with the most artworks 1850 -2017 is " + mxYear);
//   }
//  } 
//   p.pop();

// }



 p.displayData = function(){
  /////move chart over
  p.push();
  p.translate(50,0);
  p.scale(0.5);

  p.noStroke();
  p.fill(255,0,0);

  for(var i=0; i<allYears.length; i++){
//// years use map incoming value and range
    // console.log('thisisallYrs' + allYears[allYears.length-1].year);
////map function 
    // var x = map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, width-margin);
    var x = p.map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, 1341-margin);

    var totalFemaleArtistsPerBar = 0;
    var totalMaleArtistsPerBar = 0;

////THIS logs where it is mapping that is relatively corresponding to:
   // console.log("mapping: " + allYears[i].year + "to: " + x);

  ///then do same for y height
  for(var j=0; j<allYears[i].items.length; j++){
      var y= p.map(j,0,maxObjects,747-margin, margin);

///====FILL BY GENDER
   var gender = allYears[i].items[j].obj.Gender;
    if (gender === 'm') {
       p.fill(92,242,145,90);
       p.rect(x-1,y-1,3,2);
       // console.log('m');
       totalMaleArtistsPerBar = totalMaleArtistsPerBar + 1;

    } else if (gender === 'f') {
       p.fill(179,118,244,90);
       p.rect(x-1,y-1,3,2);
       // console.log('f');
      totalFemaleArtistsPerBar = totalFemaleArtistsPerBar + 1;
     // console.log(totalFemaleArtistsPerBar);
    }
    // } 

  }

//THIS gets number of FEMALE artworks per BAR with total bar height
  barTotals.push({barTotal: allYears[i].items, femaleTotal: totalFemaleArtistsPerBar});
//THIS gets number of FEMALE artworks 
  yrFemTotals.push({year: allYears[i].year, total: totalFemaleArtistsPerBar});

//THIS gets number of MALE artworks per BAR with total bar height
  barTotals2.push({barTotal: allYears[i].items, maleTotal: totalMaleArtistsPerBar});
//THIS gets number of MALE artworks 
  yrMaleTotals.push({year: allYears[i].year, total: totalMaleArtistsPerBar});
  }
  console.log(yrFemTotals);
  console.log(yrMaleTotals);
  p.pop();
}

p.drawLabelsCh = function(){
    p.push();
    p.translate(50,0);

   // //x axis
   //  p.textFont('Khand');
   //  p.textSize(17);
   //  p.stroke(77,77,77);

   // //just the lines
   // // line(margin,height-margin,width-margin,height-margin);
   //  p.line(margin,747-margin,1341-margin,747-margin);
   //  p.noStroke();
   //  p.textAlign(p.CENTER);

  // draw the sections and add text for each section
   //go throught the years
for(var i=1850; i<=2017; i+=10){
   // var y = height-margin+30;
   var y = 747-margin+30;
   // x = map(i,1850,2017, margin, width-margin);
   var x = p.map(i,1850,2017, margin, 1341-margin);

   // x = map(i,0, allYears.length,margin, width-margin);
    p.noStroke();
    p.fill(77,77,77);
    p.text(i, x, y);
    p.stroke(77,77,77);
    p.strokeWeight(1);
    p.line(x,y-22,x, y-30);
  }
    p.pop();
  }
  

// // label the whole axis
//   p.textFont('Khand');
//   p.textAlign(p.RIGHT);
//   p.noStroke();
//   p.textSize(20);
//   p.text("Year: Object Begin Date", 990,730);

// //source
//   p.textAlign(p.LEFT);
//   p.noStroke();
//   p.textSize(18);
//   p.text("Source: MetObjects.csv, January 2018, spreadsheet shared with The New School.", margin-15,747-margin+105);
//   p.text("Modern & Contemporary Art Collection Department, 14,350 artworks. Object Begin Date, Gender identified by Artist Display Name, 1850-2017 (14,284 artworks.)", margin-15,747-margin+135);

// ////draw the y Axis
//   p.stroke(77,77,77);
//   p.line(margin,747-margin,margin,margin);
//   p.noStroke();
//   p.textAlign(p.RIGHT);
//   p.textStyle(p.NORMAL);

//   for(var i=0; i<maxObjects; i+=50){
//     var x = margin-20;
//     var y = p.map(i,0, maxObjects,747-margin, margin);
//       p.noStroke();
//       p.fill(77,77,77);
//       p.text(i, x, y+5);
//       p.stroke(77,77,77);
//       p.strokeWeight(1);
//       p.line(x+10,y,x+20,y);
//   }

//   p.push();
//   p.translate(65,0);
//   p.textFont('Khand');
//   p.noStroke();
//   p.textSize(20);
//   p.translate(1000,700);
//   p.rotate(p.radians(270)); 
//   p.text("Number of Artworks", margin+300,margin-1135);
//   p.pop();

// ////the overall title
//   p.push();
//   p.translate(65,0);
//   p.textFont('Khand');
//   p.textStyle(p.NORMAL);
//   p.noStroke();
//   p.textAlign(p.LEFT);
//   p.fill(77,77,77);
//   p.textSize(42);
//   p.text("What year were these artworks made?",500,75);
//   p.fill(77,77,77);
//   p.textSize(26);
//   p.text("The Met Modern & Contemporary Art Collection", 500,120);
//   p.textSize(38);
//   p.pop();

// ////legend
//     p.textFont('Khand');
//     p.noStroke();
//     p.fill(179,118,244,140);  //f
//     p.rect(100,100,25,25);
//     p.fill(92,242,145,140); //m
//     p.rect(100,130,25,25);
//     p.fill(168,71,5,140);  //t
//     p.rect(100,160,25,25);
//     p.fill(165,160,152,140);   //u
//     p.rect(100,190,25,25);
//     p.fill(224,199,50,140);   //a //z
//     p.rect(100,220,25,25);
//     p.textStyle();
//     p.textAlign(p.LEFT);
//     p.textSize(20);
//     p.fill (77,77,77);
//     p.text("Artwork", 132,90);
//     p.textStyle(p.NORMAL);
//     p.textSize(18);
//     p.text("female", 132,117);
//     p.text("male", 132,147);
//     p.text("couple / collaborative with both genders",132,177);
//     p.text("unknown",132,207);
//     p.text("named, gender not yet identified",132,237);

//     p.pop();
//   }
  
//  } 
}

var myp5 = new p5(t, 'c2');



//////////////////////

///COLOR works
////fill by gender - see further down
    // fill(179,118,244,120);
   // rect(20, 20, w, h); // draw rect

   // fill(92,242,145,120);
   // rect(100 + (b * 10), 100, 10, maletotals);

   // fill(179,118,244,120);
   // rect(100 + (b * 10), 100, 10, (-1) * femtotals);
//////////

// ["glass": {fem : 10, male: 200, totalfiltered: 210}]

////////////
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


// // callback for loaded data.
//  p.handleDataLoad(d) = function {
//   groupedByType = d;
//   redraw();
// } 

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
    


