var table;
var tableA;
var groupedByType; ////classification, artwork material object
var groupedByName;  ////artist name
var groupedByYear; ////year
var groupedByGender; ////gender

var sorted = [];
var myObjClass = [];

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
    p.barChart();
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
    
         var myObject = {name: groupedByTypeC[b], f: femtotals, m: maletotals, total: totalsFiltered};
         
         myObject.addClass="bars";
         // myObject.appendChild(myObjClass);

         barTotals.push(myObject);
         // console.log(barTotals);  ////each classification with number of artworks & split by gender
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

        };
      p.pop();
  p.pop();
  }
}

var myp5 = new p5(g, 'c1');