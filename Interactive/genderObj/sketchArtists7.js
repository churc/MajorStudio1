var artists = [];
var artistInfo = []; 
var artistObject;


var KhandFont, fontReady = false;

var margin = 20;


//////======gender wrapped bars zigzag png========

var wrappedBars;

var l = function(p){

p.fontRead = function(){
      fontReady = true; 
    }

p.preload = function() {
  wrappedBars = p.loadImage("assets/genderWrappedBars.png");
  KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
}

p.setup = function() {
  p.createCanvas(1440,900);
  p.showWrappedBars();
  p.noLoop();
}

////display png
p.showWrappedBars = function(){
  p.scale(0.5);
  p.image(wrappedBars, 80, 695, 2470, 704);  
  }

}
var myp5 = new p5(l, 'canvas-zigzag');

////=======gender timeline png==========

var genderTimeline;

var c = function(p){
  var margin = 30;

  p.fontRead = function(){
      fontReady = true; 
}

p.preload = function() {
  genderTimeline = p.loadImage("assets/gender_timelineChart.png");
  KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
}

p.setup = function() {
  p.createCanvas(1440,885);
  p.showTimeline();
  p.noLoop();
}

////display png
p.showTimeline = function(){
  p.scale(0.5);
  p.image(genderTimeline, 25, 15, 2798,1426);  
  }

}
var myp5 = new p5(c, 'canvas-timeline');



////========105 mediums vertical bar chart============////

var table;
var tableA;
var groupedByType; ////classification, artwork material object
var groupedByName;  ////artist name
var groupedByYear; ////year
var groupedByGender; ////gender
var groupedByNameKeys;
var groupedByNameL;
var myObjectName = [];
var myObjectNameSort = [];

var currentArtistCount;
var currentArtist = {};

var allYears = [];

var sorted = [];
var myObjClass = [];
var objectNames;
var objectType = [];
var barTotals = [];
var barTotalsSort = [];
var bars = [];

var groupedByNameKeysSort = [];

var name, gender, date, type;

var listItems = [];
var upperLimit;
var lowerLimit;

var button; 
var submit;
var objNames;

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

///====container for bar info text: tooltip====///
function switchText(indivType, x, y){

    $('#tooltip').text(indivType)
//move it to the x y position
    $('#tooltip').css('position', 'absolute');
    // $('#tooltip').css('top', y); 
    // $('#tooltip').css('left', x); 
  ////github screen
    $('#tooltip').css('top', y-610 + $('#canvas-sketchBar-vertical').position().y); ////position of canvas
    $('#tooltip').css('left', x-230);
  ////1440 screen
	
//     $('#tooltip').css('top', y-640 + $('#canvas-sketchBar-vertical').position().y); ////position of canvas
//     $('#tooltip').css('left', x-140);
  ////1980 screen
    // $('#tooltip').css('top', y-630 + $('#canvas-sketchBar-vertical').position().y); ////position of canvas
   // $('#tooltip').css('left', x-70);
}


////=========105 mediums vertical canvas var g =========///

var g = function(p){

   p.fontRead = function(){
      fontReady = true; 
    }

   p.preload = function(){
   p.table = p.loadTable('assets/ModContGenderfinalgnoysort.csv','csv','header'); /////four sort gender, Artist Alpha Sort, classification, year
   console.log(p.table);
   KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

////toggle text off on
 p.toggleTypes = function(){
  var contentId = document.getElementById("types");
  contentId.style.display == "none" ? contentId.style.display = "block":
  contentId.style.display = "none";
}

    p.setup = function(){

	canvas = p.createCanvas(p.windowWidth, p.windowHeight*3.8);
  
    p.analyzeData();
    p.analyzeYears();
    p.barChart();
    p.drawLabelsCh();
    p.labels();
    p.showTypes();
    p.analyzeArtists();
    p.background(238, 222, 161, 1);
    p.frameRate(2);
  }

p.showTypes = function(){
    var button = document.getElementById("button");
    $('button').click(function() {
      $('#types').toggle();
    });
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

////=======  group sort by object begin date
      groupedByYear = collate(tableA,17);  ////year
  
////object, artist alpha sort is keys
      var tableAkeys = Object.keys(groupedByName);  ////3564 names, Artist Alpha Sort

////iterate through object by keys and select artist names 
      for(var j=0; j<tableAkeys.length; j++){
        sorted[tableAkeys[j]] = collate(groupedByName[tableAkeys[j]], 12)
    }

////============ classification object type
    groupedByType = collate(tableA,22);  ////classification

////object, type (classification) each of the keys 
    var tableAkeys = Object.keys(groupedByType); ////returns array of object keys (glass, sculpture etc)

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
  }
}

///////=====BAR CHART=====////////////
  p.barChart = function(){
  p.push();
    var groupedByType = collate(tableA,22);

    var groupedByTypeC = Object.keys(groupedByType);

	  var width = p.windowHeight*2, 
          height = p.windowWidth,
          margin = 50,
          w = p.width - 2 * margin, // chart area width and height
          h = p.height - 2 * margin;
    
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

         barTotals.push(myObject); ////each classification with number of artworks & split by gender  
}
        p.push();

/////sort by size by female
barTotalsSort = barTotals;
      barTotalsSort.sort(function(a,b){
        return a['f'] - b['f']
      })
   
      for (var i = barTotalsSort.length-1; i >= 0; i--) {
          p.strokeWeight(1.5);
          p.stroke("#ffffff");
          p.fill(92,242,145,150); ////green bars artworks by men
      ////1440 screen
          p.rect(160 + (i * 10), $(window).height()/2.12, 10, barTotals[i]['m']/2);
      ////1980 screen
          // p.rect(160 + (i * 10), $(window).height()/2.87, 10, barTotals[i]['m']/2);

          p.fill(179,118,244,140);  ////purple bars artworks by women
      ////1440 screen
          var bar = p.rect(160 + (i * 10), $(window).height()/2.12, 10, (-1) * barTotals[i]['f']/2);
		  
          bars.push({x:160 + (i * 10), y:$(window).height()/2.12, width: 10, height: barTotals[i]['f']/2, name:barTotals[i].name, maleHeight: barTotals[i]['m']/2});
		  
      ////1980 screen
          // var bar = p.rect(160 + (i * 10), $(window).height()/2.87, 10, (-1) * barTotals[i]['f']/2);
          // bars.push({x:160 + (i * 10), y:$(window).height()/2.87, width: 10, height: barTotals[i]['f']/2, name:barTotals[i].name, maleHeight: barTotals[i]['m']/2});
  
		 		  
          p.push();
		  
		  p.translate(0, 0);
		  
          p.rotate(p.radians(270));  // rotate to vertical
		  		  
          p.textSize(14);
          p.text(barTotalsSort[i].name+barTotalsSort[i].total, 5+7, 105+(i * 10)); // text-names
           var objectNames = barTotals[i].name;
          objectType.push(objectNames); ////returns name of each classification
          p.pop();
        };
	 
        console.log(barTotalsSort);
  p.pop();

}

//////listen for mouse, show tooltips
p.draw = function(){
  var onLabel = false;
  for (var i = bars.length - 1; i >= 0; i--) {
    var d = p.dist(p.mouseX, p.mouseY, bars[i].x, bars[i].y )

   if ((p.mouseX >= bars[i].x) && (p.mouseX <= bars[i].x + 10) && (p.mouseY >= (bars[i].y-bars[i].height) && p.mouseY <= (bars[i].y +bars[i].maleHeight))){
      console.log('x:', p.mouseX)
      console.log('y:', p.mouseY)
////tooltip text
      switchText((bars[i].name + ": "+((bars[i].height+bars[i].maleHeight)*2)+","+"     "+"female: "+(bars[i].height*2)+", "+"  male: "+(bars[i].maleHeight*2)), p.mouseX, p.mouseY);
      onLabel = true;
      
    };
  };
  if(onLabel == false){
    switchText("", p.mouseX, p.mouseY)
  }
}


/////========count of artworks per artist & sort by size
p.analyzeArtists = function(){
      name = p.table.getColumn(12); ////name, Artist Alpha Sort
      tableA = p.table.getArray(); 

     groupedByNameL = collate(tableA,12); ////grouped by name
     console.log(groupedByNameL); 

     var groupedByNameKeys = Object.keys(groupedByNameL);

      groupedByNameKeysSort = groupedByNameKeys;
      groupedByNameKeysSort.sort(function(a,b){
        return a - b
      })

    for (var c=0; c<groupedByNameKeysSort.length; c++) {
     var currentArtistCount = groupedByNameL[groupedByNameKeysSort[c]].length
    
      myObjectName.push({name: groupedByNameKeysSort[c], total: currentArtistCount}); 

////sort by size
      myObjectNameSort = myObjectName;

      myObjectNameSort.sort(function(a,b){
        return a.total - b.total
      })
  }          
  console.log(myObjectNameSort);  ////returns artist name ordered number of artworks    
}
   
 
p.drawLabelsCh = function(){
//////get info on each object and return on screen
    p.push();

	var width = 1440, 
        height = p.windowHeight;
   
//	var width = 1440, 
//        height = 2800;
	

//////return list of classification types & numbers
/////NOTE taken this off the page 
  p.textFont('Khand');
  p.noStroke();
  p.textAlign(p.LEFT);
  p.fill(255,0,0);
  p.textSize(10);
  listItems = objectType;
  p.text(listItems);
  console.log(listItems);

  $('#types').empty();
  for(var i = barTotals.length-1; i >= 0; i--) {
                          var classification = barTotals[i];
                          var classificationHTML = '<li>';
                    ////taken list off chart 
                              // classificationHTML += '<p>'+barTotals[i].name + "  ......"+""+barTotals[i].total+ ":  "+"  "+"  female "+barTotals[i].f+", "+"  male "+barTotals[i].m+'<p>'
                              classificationHTML += '<a href = "https://www.metmuseum.org/art/collection/search#!?offset=0&pageSize=0&sortBy=Relevance&sortOrder=asc&perPage=20&department=21">';
                              classificationHTML += '</a>';
                              classificationHTML += '</li>';
                  // $('#types').append('<div>'+classificationHTML+'</div>');  ////put the artwork types into list  
          }

// //// title
p.push();
  p.textFont('Khand');
  p.textStyle(p.NORMAL);
  p.noStroke();
  p.textAlign(p.LEFT);
  p.fill(102,102,102);

p.pop();

////AXIS number of objects
p.push();
    p.scale(0.5);
	
////axis lined up	

//	p.translate(width*2-margin*6,($(window).height()*6.39));
	
	p.translate(($(window).width()*1.67), ($(window).height()*6.4));
	
    upperLimit = barTotals[barTotals.length - 1]['f']
    lowerLimit = -1 * (barTotals[barTotals.length - 1]['m'])
    console.log(upperLimit)
    console.log(lowerLimit)
    p.noStroke();
    p.textAlign(p.LEFT);
    p.textStyle(p.NORMAL);

///put number labels on axis
    for(var i=lowerLimit; i<upperLimit; i+=50){
      var x = margin;
      var y = p.map(i,upperLimit, lowerLimit, lowerLimit, upperLimit);
        p.noStroke();
        p.fill(77,77,77);
        p.textSize(30);
// 	    temp
//         p.text(i+3, x, y);  //numbers along the axis - these are correct
        p.stroke(77,77,77);
        p.strokeWeight(1.5);
// 	    temp
//         p.line(x-30,y-9.4,x,y-9.4);  //draws the short horizontal lines at the midpoint on each number on the axis - this is correct

    }
  p.pop(); 
  p.pop();
	
////////labels for female & male with circles
    p.push();
        p.textFont('Khand');
        p.noStroke();
        p.textSize(28);
        p.fill(110,101,115,110);
        p.translate(0, -55);  
        p.rotate(p.radians(270));  
	
        p.text("Number of artworks by medium", -541, 1320);
        p.fill(105,105,105);
        p.textSize(30);
        p.text("male", -470, 150);
        p.text("female", -320, 150);
        p.fill(92,242,145,150);
        p.ellipse(-485, 142,20,20);
        p.fill(179,118,244,130);
        p.ellipse(-335, 142,20,20);

      p.pop();
    p.pop();
  }

p.labels = function(){
    p.push();
        p.stroke(112,112,112);
        p.noFill();
        p.ellipse(1179,248,5,5);
        p.line(1178,247,1015, 168);  //pointer
        p.textFont('Khand');
        p.textStyle(p.NORMAL);
        p.noStroke();
        p.textAlign(p.LEFT);
        p.fill(112,112,112);
        p.textSize(15);

        p.text("For medium with > than 10 artworks, women", 850, 80);
        p.text("are only collected in greater numbers than men", 850, 97);
        p.text("for textile work: textiles-miscellaneous (12 / 0);",850,114);
        p.text("textiles-samples books (13 / 1);",850,131);
        p.text("textiles-tapestries (21 / 9);",850,148);
        p.text("textiles (59 / 7); & textiles-woven (251 / 36)", 850, 165);
        
  }
}
var myp5 = new p5(g, 'canvas-sketchBar-vertical');



//////========artists and kind of objects===========

var whoWhat;

var b = function(p){

p.preload = function() {
  whoWhat = p.loadImage("assets/quant9_forwebsvg_churchouse_FINAL2.png");
}

p.setup = function() {
  p.createCanvas(1440,4200);
  p.showWhoWhat();
  p.noLoop();
}

////display png
p.showWhoWhat = function(){
  p.scale(0.5);
  p.translate(0,325);
  p.image(whoWhat, 250, -80, 2430,7962);  
  }
}

var myp5 = new p5(b, 'canvas-artworks');



