//////////=====LINE CHART=====/////////
var tableL;
var tableA;
var allYears = [];

var myObj = [];
var myObjAll = [];

var mediumArray = [];
var lineGroup = [];


var barTot = [];

var groupedByTypeL = []; ////classification, artwork material object
var groupedByNameL = [];  ////artist name
var groupedByYearL = []; ////year
var groupedByYear; ////year
var groupedByGenderL = []; ////gender
var groupedByTypeLC;

var groupedByType; //// collate function on classification column
var groupedByTypeC; ////object keys of groupedByType

var maxObjects, minObjects;


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
    canvas = p.createCanvas(1440, 1000);
    p.analyzeData();
    p.line2();
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

/////group same items together using reduce function
     groupedByTypeL = collate(tableLA,22); ////grouped by type of object
     // console.log(groupedByTypeL); 

     groupedByYearL = collate(tableLA,17);  ///grouped by year
     // console.log(groupedByYearL);

     groupedByGenderL = collate(tableLA,10);  ///grouped by gender
     // console.log(groupedByGenderL);

    var groupedByTypeLC = Object.keys(groupedByTypeL); ////105 artwork type object keys 
    // console.log(groupedByTypeLC.length);


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
// console.log("year with most objects "  + allYears[maxYear].year);
// console.log(allYears[minYear].year);
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




p.line2 = function(){
    var groupedByType = collate(tableLA,22);
    var groupedByTypeC = Object.keys(groupedByType);
    
    var width = 1440, 
        height = 1000,
        margin = 50,
        w = p.width - 2 * margin, // chart area width and height
        h = p.height - 2 * margin;
    
    var barWidth =  (h / groupedByTypeC.length) * 0.1; // width of bar
    var barMargin = (h / groupedByTypeC.length) * 0.001; // margin between two bars

for (var b=0; b<groupedByTypeC.length; b++) {
 //group by year
 ////first per medium WORKS
   groupedByYear = collate(groupedByType[groupedByTypeC[b]], 17);
   // console.log('--------')
   // console.log(groupedByYear);
   // console.log(groupedByType[groupedByTypeC[b]]);

 var groupedByYearC = Object.keys(groupedByYear);

  for (var n = groupedByYearC.length-1; n >= 0; n--) {
  //then medium per year
  groupedByYear[n]

var totalsFiltered = 0;
      var femtotals = 0;
      var maletotals = 0;
  ////t vertical, b horizontal

        for (var t = groupedByYear[groupedByYearC[n]].length-1; t >= 0; t--) {
        //then medium per year per object

        var currentGender = groupedByYear[groupedByYearC[n]][t][10];

        if (currentGender == 'm') {
           maletotals = maletotals + 1;

        } else if (currentGender == 'f'){
          femtotals = femtotals + 1;  
      };

      if(currentGender === 'm' || currentGender === 'f'){
        totalsFiltered = totalsFiltered + 1;
        }    
      };
  
   
myObj = ({name: groupedByYear[groupedByYearC[n]], medium: groupedByTypeC[b], date: groupedByYearC[n], f: femtotals, m: maletotals, total: totalsFiltered});
        myObj.addClass="lines";
 
        mediumArray.push(myObj);
    };

 lineGroup.push({mediumArray})

}


console.log(mediumArray);  //////this is by year
console.log(lineGroup); //////this is by medium


p.beginShape();
p.push();
p.translate(50, 500);
  var initial = 0;
  var x1,x2,y1,y2;

  var maxX1 = lineGroup.length;
  var maxY = 1000;
  
  
  for (var r = 0; r < mediumArray.length; r++) {
   
    p.stroke(50);
    p.strokeWeight(1);
    p.noFill();


    x1 = p.map(initial                      ,0 ,maxX1, 0        ,width);

    x2 = p.map(initial+1                     ,0, maxX1, 0        ,width);

    y1 = p.map(lineGroup[r],           0, maxY, 0, height);

// console.log(lineGroup[r].mediumArray)
console.log(lineGroup[r].mediumArray[r])  /////need to plot by how many arrays in this grouped by medium
// console.log(lineGroup[r].mediumArray[1].medium)



    y2 = p.map(lineGroup[r+1] ,0, maxY, 0, height); 
    initial + 1;


    p.line(x1,y1,x2,y2);

////legend
    // p.noStroke();
    // p.fill(0);
    // p.text(n,x1,height);
   
p.endShape();

 }
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

var myp5 = new p5(t,'canvas-linechart'); 
