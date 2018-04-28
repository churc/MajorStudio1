var table;
var json;
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


////container for bar info text - tooltip
function switchText(indivType, x, y){
    $('#tooltip').text(indivType)
    //move it to the x y position
    $('#tooltip').css('position', 'absolute');
    $('#tooltip').css('top', y-25); 
    $('#tooltip').css('left', x); 
}


var g = function(p){

   p.fontRead = function(){
      fontReady = true; 
    }

   p.preload = function(){
   p.json = p.loadJSON('assets/totals.json'); /////four sort gender, Artist Alpha Sort, classification, year
   console.log(p.json);
   KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

    p.setup = function(){
    canvas = p.createCanvas(1000, 800);
    p.background('lightgrey');
    p.barChart();
    // p.drawLabelsCh();
    // p.showTypes();
    console.log(p.json);
  }

// p.showTypes = function(){
//     var button = document.getElementById("button");
//     $('button').click(function() {
//       $('#types').toggle();
//     });
// }


///////=====BAR CHART=====////////////
  p.barChart = function(){
console.log(p.json[0].m);
var barWidth = 20;
var gap = barWidth * 1.5;
var reorderElements = [];

for (var n = 18; n>=0; n--) {
  reorderElements.push(p.json[n]);
}


p.noStroke()


for (var b=0; b<=18; b++) {
    p.fill(179,118,244,120);  
    p.rect(700-reorderElements[b].f,200+(b+1)*gap,reorderElements[b].f, barWidth);
    }

  for (var b=0; b<=18; b++) {
    p.fill('green');  
    p.rect(700,200+(b+1)*gap,reorderElements[b].m, barWidth);
    }

  }
}

var myp5 = new p5(g, 'c1');
