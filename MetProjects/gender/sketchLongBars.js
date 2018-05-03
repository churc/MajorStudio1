var table;

var yrFemTotals = [];
var barTotals =[];
var yrMaleTotals = [];
var barTotals2 =[];


var FemaleTotal = [];
var TotalFemale = [];
var TotalMale = [];
var TotalTwo = [];
var TotalUnknown = [];
var TotalToFindOut = [];

var gender = [];
var artist = [];
var ArtistColl = [];

var allYears = [];

var minYear, maxYear, mxYear, midYears, minObjects, maxObjects, maxArtist, maxArtistColl;

var overBars;

var KhandFont, fontReady = false;

var margin = 80;



// ////VERTICAL BARS TOTALS 

var t = function(p) {

  p.fontRead = function(){
      fontReady = true; 
    }

  p.preload = function(){
  //mytable is comma separated value "csv"
  //and has a header specifying the columns labels
   p.table = p.loadTable('assets/ModContGenderfinalazsort.csv','csv','header');

   KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

  p.setup = function(){
    p.createCanvas(p.windowWidth, 5665);
    p.displaySingleBars();
    p.drawLabelsBar();
    p.drawmeasureline();
  }

  p.windowResized = function() {
   p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.displaySingleBars = function(){
 
    p.noStroke();
    p.fill(255,0,0);

    var x,y,w,h;

    var singleData = [48,128, 1318, 2027,10829];

    var width = 5800,
        height = p.windowHeight,
        margin = 40,
        // margin = 15,
        w = width - 2 * margin, // chart area width and height
        h = height - 2 * margin;
    
    var barWidth =  (h / singleData.length) * 0.15; // width of bar
    var barMargin = (h / singleData.length) * 0.2; // margin between two bars
    
    p.textFont('Khand');
    p.textSize(15);
  
  for(var b=0; b<singleData.length; b++) {


var genFill = singleData[b];
    if (genFill == '10829') {
       p.fill(92,242,145,120);
       
    } else if (genFill == '2027') {
       p.fill(179,118,244,120);
       
    } else if (genFill == '128') {
       p.fill(168,71,5,120);
      
    } else if (genFill == '1318') {
       p.fill(165,160,152,120);

    } else if (genFill == '48') {
       p.fill(224,199,50,120);

    } else {
       p.fill(100,100);
 
    }

    p.push();  //save 
    
      p.noStroke();
      p.textSize(20);
      p.rotate(p.radians(90));   // rotate to vertical
      p.translate(0, b* (barWidth + barMargin)); // jump to the top right corner of the bar 
      p.rect(100, -p.windowWidth/1.5, singleData[b]/2, barWidth/2);
      p.fill(0,0,0);
      p.text(singleData[b], 100, barWidth/2 + -p.windowWidth/1.53); // write data label
    p.pop();   // reset, restore
  } 

//label long bars
    p.push();
        p.rotate(p.radians(90));   // rotate to vertical
        p.translate(0, b* (barWidth + barMargin)); // jump to the top right corner of the bar 
        p.textStyle(p.NORMAL);
        p.noStroke();
        p.fill(77,77,77);
        p.textSize(26);
        p.text("The Met Modern & Contemporary Art Collection", 100, barWidth/20 + -p.windowWidth/2);
        p.textSize(18);
        p.text("Scale: 1 pixel = 2 artworks", 100, barWidth/20 + -p.windowWidth/2.13);
    p.pop();

///text by end of each bar

p.push();   
  var x,y,w,h;

  var singleData = [48, 128, 1318, 2027,10829];
   
   //x axis
  p.textFont('Khand');
  p.textStyle(p.NORMAL);
  p.textSize(20);
  p.fill(77,77,77); 
  p.stroke(77,77,77);
  p.strokeWeight(1);

  p.line(p.windowWidth/2.46,48/2+100,p.windowWidth/2.065,48/2+100);
  p.line(p.windowWidth/2.46,128/2+100,p.windowWidth/2.065,128/2+100);
  p.line(p.windowWidth/2.46,1318/2+100,p.windowWidth/2.065,1318/2+100);
  p.line(p.windowWidth/2.46,2027/2+100,p.windowWidth/2.065,2027/2+100);
  p.line(p.windowWidth/2.46,10829/2+100,p.windowWidth/2.065,10829/2+100);
 
 //text
  p.noStroke();
  p.textSize(18.5);
  p.text("unidentified: 48", p.windowWidth/2.46,48/2+95);
  p.text("couple: 128", p.windowWidth/2.46,128/2+95);
  p.text("unknown: 1318", p.windowWidth/2.46,1318/2+95);
  p.text("female: 2027", p.windowWidth/2.46,2027/2+95);
  p.text("male: 10829", p.windowWidth/2.46,10829/2+95);
p.pop();

}


  p.drawLabelsBar = function(){
 //title bars

    p.textFont('Khand');
    p.textAlign(p.LEFT);
    p.noStroke();
    p.fill(77,77,77);
    p.textSize(43);
    p.textStyle(p.NORMAL);
//     p.text("Another View of All Artworks by Gender", 335,32);
  }

p.drawmeasureline = function(){
    p.push();
    
    var x,y,w,h;

  var singleData = [48, 128, 1318, 2027,10829];
   
   //x axis
  p.textFont('Khand');
  p.textStyle(p.NORMAL);
  p.textSize(20);
  p.fill(77,77,77); 
  p.stroke(77,77,77);
  p.strokeWeight(1)
 
  p.noStroke();
  p.textSize(20);
  p.textAlign(p.CENTER);
  p.translate(1265,100);
  p.rotate(p.radians(90));
  p.textStyle(p.NORMAL);
  p.text("Number of Artworks", 69, -55);
  // draw the sections and add text for each section
   //go throught the years
   for(var b=0; b<=10829; b+=200){

    var y = 0;

    var x = p.map(b,0,10829, 0, 10829/2);

    // x = map(i,0, allYears.length,margin, width-margin);
   
      p.noStroke();
      p.fill(77,77,77);
      p.stroke(77,77,77);
      p.strokeWeight(1);
      p.line(x,y-22,x, y-40);
      p.noStroke();
      p.fill(77,77,77);
      p.text(b, x,y);

     }
p.pop();

   }
  
}

var myp5 = new p5(t, 'c2');

$("div#c2").append('<a href="' + "https://churc.github.io/MajorStudio1/MetProjects/gender" + "c2" + '</a>');


