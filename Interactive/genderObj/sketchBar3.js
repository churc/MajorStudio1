var table;
var tableA;
var groupedByType; ////classification, artwork material object
var groupedByName;  ////artist name
var groupedByYear; ////year
var groupedByGender; ////gender

var allYears = [];

var sorted = [];
var myObjClass = [];
var objectNames;
var objectType = [];
var barTotals = [];

var name, gender, date, type;

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
    // canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas = p.createCanvas(1500, 2900);
    p.sortFemale();
    p.mouseClicked('.bars');
    p.analyzeData();
    p.analyzeYears();
    p.barChart();
    p.drawLabelsCh();
    p.noLoop();
  }

p.sortFemale = function() {
    $('c1').click(function() {
     barTotals.sort(function(a,b){
        return b['m'] - a['m']
      });
  });
}

p.mouseClicked = function(){
      p.sortFemale();
  }


// var div = d3.select("body").append("div") 
//     .attr("class", "tooltip")       
//     .style("opacity", 0);
    // .attr('d', path)
    //     .on('mousemove', showTooltip);
    //     .on('mouseout', hideTooltip);


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
  
  p.analyzeYears = function(){
    gender = p.table.getColumn(10); ////gender
      name = p.table.getColumn(12); ////name, Artist Alpha Sort
      date = p.table.getColumn(17); ////object begin date
      type = p.table.getColumn(22); ////classification
    
      tableA = p.table.getArray(); 

/////group same items together using reduce function
     groupedByTypeL = collate(tableA,22); ////grouped by type of object
     console.log(groupedByTypeL); 

     groupedByYearL = collate(tableA,17);  ///grouped by year
     console.log(groupedByYearL);

     groupedByGenderL = collate(tableA,10);  ///grouped by gender
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

    var count = p.table.getRowCount();
    var countC = p.table.getColumnCount();
        console.log(count + " rows");  ////14350 rows
        console.log(countC + " columns"); ////24 columns
    var row, col, val, min, max;

    var yearNow = {};
        yearNow.year = (p.int(p.table.getString(0,17)));
        yearNow.items = [];
        yearNow.items = p.table.findRows(String(yearNow.year),17);
        yearNow.url = []; ////attach Met classification url to each object
        yearNow.url.href = "https://www.metmuseum.org/art/collection/search#!?offset=0&pageSize=0&sortBy=Relevance&sortOrder=asc&perPage=20&department=21"
        p.append(allYears, yearNow);


    var minObjects = 150000;
        maxObjects = 0;
    var minYear = null;
        maxYear = null;

for (var i=0; i<count; i++) {
      var year = (p.int(p.table.getString(i,17)));
      if(year!=yearNow.year){
        var yearNow = {};
        yearNow.year = year;
        yearNow.items = [];
        yearNow.items = p.table.findRows(String(yearNow.year),17);
        yearNow.url = []; ////attach Met classification url to each object
        yearNow.url.href = "https://www.metmuseum.org/art/collection/search#!?offset=0&pageSize=0&sortBy=Relevance&sortOrder=asc&perPage=20&department=21"
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
    
    // console.log(minObjects)
  }
}

///////=====BAR CHART=====////////////
  p.barChart = function(){
  p.push();
    var groupedByType = collate(tableA,22);

    var groupedByTypeC = Object.keys(groupedByType);
      var width = p.windowWidth, 
          height = p.windowHeight,
          height = 5000,
          margin = 50,
          w = p.width - 2 * margin, // chart area width and height
          h = p.height - 2 * margin;
    
    var barWidth =  (h / groupedByTypeC.length) * 2; // width of bar
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
         var myObject = document.createElement('types');
        myObject = {name: groupedByTypeC[b], f: femtotals, m: maletotals, total: totalsFiltered};
         
         myObject.addClass="bars";
         // myObject.id = "eachType";
         // myObject[groupedByTypeC].id = "eachType";
         // myObjectids.appendChild(myObject);

         barTotals.push(myObject); ////each classification with number of artworks & split by gender
         // console.log(barTotals);  
}
        p.push();
        p.scale(0.5); 
        // p.rotate(p.radians(90));   // rotate to vertical
        // p.translate(200, t*(barWidth*8500 + barMargin)); // jump to the top right corner
     p.translate(p.windowWidth/2,700);

////sort by size
      barTotals.sort(function(a,b){
        return a['m'] - b['m']
      })
      for (var i = barTotals.length - 1; i >= 0; i--) {
          p.noStroke();
          p.fill(92,242,145);
          // p.rect(100 + (i * 20), 100, 20, barTotals[i]['m']);
          p.rect(100 + (i * 10), 5, 2, barTotals[i]['m']);
          p.noStroke();
          p.fill(179,118,244);
          // p.rect(100 + (i * 20), 100, 20, (-1) * barTotals[i]['f']);
          p.rect(100 + (i * 10), 5, 2, (-1) * barTotals[i]['f']);

          ////label
          p.fill(255,0,0);
          p.textSize(10);
          
          p.text(barTotals[i].name, 5, barWidth/2 + 5); // write data
          var objectNames = barTotals[i].name;
          objectType.push(objectNames); ////returns name of each classification
        };
        console.log(objectType);
      p.pop();
  p.pop();
  }


p.drawLabelsCh = function(){
    p.push();
    // p.scale(0.5);
    p.translate(p.windowWidth/2,700);
// //x axis
    p.textFont('Khand');
    p.textSize(12);
    p.stroke(182,1885,182);

// //just the lines
   // line(margin,height-margin,width-margin,height-margin);
    // p.line(margin,747-margin,1341-margin,747-margin);
    // p.noStroke();
    // p.textAlign(p.CENTER);

// draw the sections and add text for each section

// //go throught the years
for(var i =0; barTotals.length-1;  i++) {
    var y = 747-margin+30;
    var x = p.map(i,0,barTotals.length-1, margin, 1341-margin);
    p.noStroke();
    p.fill(77,77,77);
    console.log(barTotals);
    // p.text(barTotals[i].name, x, y);
    p.stroke(244,220,0);
    p.strokeWeight(1);
    p.line(x,y-22,x, y-30);
  
  }
  
//// label the whole axis
  p.textFont('Khand');
  p.textAlign(p.LEFT);
  p.noStroke();
  p.textSize(12);
  // p.text("Year: Object Begin Date", 990,730);

//////draw the y Axis
  p.stroke(182,185,182);
  p.line(margin,747-margin,margin,margin);
  p.noStroke();
  p.textAlign(p.LEFT);
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
        // p.translate(65,0);
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

var myp5 = new p5(g, 'c1');