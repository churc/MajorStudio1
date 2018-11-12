var table;
var tableB;

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

///////wrapped bars NEW FINAL
var s = function(p){

  p.fontRead = function(){
      fontReady = true; 
    }

  p.preload = function(){
   p.table = p.loadTable('assets/ModContGenderfinalazsort.csv','csv','header');

   KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

  p.setup = function(){
//    p.createCanvas(p.windowWidth,800);
	  
	  p.createCanvas(1440,800);
    p.drawLabelsTot();
    p.drawLabelsBar();

    p.push(); 
    p.translate(350,100);

    p.push();
    p.stroke(92,242,145,145);
    p.strokeWeight(20);
    p.strokeCap(p.SQUARE);
    p.noFill();
    p.beginShape(); 

    p.vertex(20,172);   // total m/2 = 10829/2 = 5414.5
    p.vertex(900,172);   //  880
    p.vertex(900, 400);   //  228
    p.vertex(830, 400);   //70
    p.vertex(830, 240);   //160
    p.vertex(705, 240);   //125
    p.vertex(705, 280);   //40
    p.vertex(110, 280);   //595
    p.vertex(110, 316);    //36
    p.vertex(75, 316);   //35
    p.vertex(75, 346);   //30
    p.vertex(30, 346);   //45  ///2244
    p.vertex(30, 390);   //44
    p.vertex(120, 390);  //90
    p.vertex(120, 350);  //40
    p.vertex(160, 350);  //40
    p.vertex(160, 320);  //30
    p.vertex(750, 320);  //590
    p.vertex(750, 280);  //40
    p.vertex(795, 280);  //45  ///3163


    p.vertex(795, 360);  //80
    p.vertex(200, 360);  //595
    p.vertex(200, 385);  //25
    p.vertex(160, 385);  //40  
    p.vertex(160, 425);  //40  //3943
    p.vertex(30, 425); // 130
    p.vertex(30, 470);  //45
    p.vertex(200, 470);  //170  //4288
    p.vertex(200, 425);  //45
    p.vertex(240, 425); //40
    p.vertex(240, 395); //30   
    p.vertex(795, 395); //555  //4958
    p.vertex(795, 435);  //40  //4998
    p.vertex(900, 435); //105
    p.vertex(900, 475);  //40
    p.vertex(755, 475);  //145  //5288
    p.vertex(755, 435);  //40   //5328
    p.vertex(668.5, 435);  //86.5    ////5414.5    
    p.endShape();  
    p.pop();

    p.push();
    p.stroke(179,118,244,145);
    // stroke(153,50,204,80); //total f/2 = 2027/2 = 1013.5
    p.strokeWeight(20);
    p.strokeCap(p.SQUARE);
    p.noFill();
    p.beginShape();
    p.vertex(20, 208);   //  
    p.vertex(864,  208);   //844
    p.vertex(864,  377.5);   //169.5  //1013.5
    p.endShape();
    p.pop();

    p.push();
    p.stroke(165,160,152,145);  //total u unknown 1318/2 = 659
    p.strokeWeight(20);
    p.strokeCap(p.SQUARE);
    p.noFill();
    p.beginShape();
    p.vertex(20,244);   //  
    p.vertex(679,244);   // 659
    p.endShape();
    p.pop();

    p.push();
    p.stroke(168,71,5,145); //total t couple/collab 128/2 = 64
    p.strokeWeight(20);
    p.strokeCap(p.SQUARE);
    p.noFill();
    p.beginShape();
    p.vertex(20, 280);   //  
    p.vertex(84, 280);   //64 = 64
    p.endShape();
    p.pop();

    p.push();
    p.stroke(224,199,50,145);  //total z to find out 48/2 = 24
    p.strokeWeight(20);
    p.strokeCap(p.SQUARE);
    p.noFill();
    p.beginShape();
    p.vertex(20, 316);   //  
    p.vertex(46, 316);   // 26
    p.endShape();
    p.pop();
  p.pop();
}


  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
}

  p.drawLabelsTot = function(){

    p.push(); 
  //label wrapped total bars
    p.textFont('Khand');
    p.noStroke();
    p.textSize(18);
    p.fill(77,77,77);
    p.textSize(44);
    p.textStyle(p.NORMAL);
    p.textAlign(p.LEFT);
    p.text("Gender at The Met", 370,95);
	p.textSize(20);
	p.text("A data visualization project by Clare Churchouse", 907,95);
    p.textSize(28);
    p.text("What % of The Met's Modern & Contemporary Art Collection's 14,350 works are by women?", 370,132);
    p.textSize(20);
    p.text("1 pixel = 2 artworks", 370,160);
    p.pop();

    p.push();
    p.translate(120,150)
    p.textFont('Khand');
    p.textAlign(p.RIGHT);
    p.noStroke();
    p.fill(77,77,77);
    p.textSize(21);
    p.text("75.46%", 226,129);
    p.textSize(29);
    p.text("14.13%", 228,166.5);
    p.textSize(21.5);
    p.text("9.18%", 225,201.5);
    p.textSize(21);
    p.text("0.89%", 225,237.75);
    p.textSize(21);
    p.text("0.33%", 225,274);

//// Add legend

    p.textFont('Khand');
    p.textStyle();
    p.textAlign(p.RIGHT);
    p.noStroke();
    p.fill (77,77,77);
    p.textStyle(p.NORMAL);
    p.textSize(19);
    p.text("male", 165,129);
    p.textSize(29);
    p.text("female", 162,166.5);
    p.textSize(19);
    p.text("unknown",165,201.5);
    p.text("couple/collaborative, both genders",165,237.75);
    p.text("named, gender not yet identified",165,274);


    p.pop();
  }

   p.drawLabelsBar = function(){
//title bars
    p.textFont('Khand');
    p.noStroke();
    p.textSize(18);
    // p.fill(77,77,77);
    p.fill(92,92,92);
    p.textSize(44);
    p.textStyle(p.NORMAL);
    p.textAlign(p.LEFT);
    p.text("Another View of All Artworks by Gender", 370,793);
  }
}

var myp5 = new p5(s, 'canvas-zigzag');


///////////chart by vertical bars - long bars

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
   p.table = p.loadTable('assets/ModContGenderfinalazsort.csv','csv','header');

   KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

  p.setup = function(){
//    p.createCanvas(p.windowWidth, 5665);
	  
//	  add
	p.createCanvas(1440, 5595); 
	var margin = 40; 
	var  w = p.width - 2 * margin, // chart area width and height
         h = p.height - 2 * margin;
//	  end
	  console.log(h);
    p.displaySingleBars();
    // p.drawLabelsBar();
    p.drawmeasureline();
  }

//  p.windowResized = function() {
//   p.resizeCanvas(p.windowWidth, p.windowHeight);
//  }

  p.displaySingleBars = function(){
 
    p.noStroke();
    p.fill(255,0,0);

    var x,y;

    var singleData = [48,128, 1318, 2027,10829];

//	  change
//    var width = 5800,
//        height = p.windowHeight,
	var margin = 40; 
	var  w = p.width - 2 * margin, // chart area width and height
         h = p.height - 2 * margin;
    
    var barWidth =  (h / singleData.length) * 0.05; // width of bar
    var barMargin = (h / singleData.length) * 0.01; // margin between two bars
    
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

    p.push();  
    
      p.noStroke();
      p.textSize(20);
      p.rotate(p.radians(90));   // rotate to vertical
      p.translate(0, b* (barWidth + barMargin)); // jump to the top right corner of the bar
	   
	   p.rect(margin*2.5, -h/6, singleData[b]/2, barWidth/4); /// draw data lines
	  
      p.fill(105,105,105);
	  
//	  p.text(singleData[b], margin*2.51, barWidth - w*0.715); // write data label, number of artworks
	  p.text(singleData[b], margin*2.51, barWidth - w*0.725);
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
	    p.text("The Met Modern & Contemporary Art Collection", margin*2.50, barWidth - w*0.54);		
        p.textSize(18);
	    p.text("Scale: 1 pixel = 2 artworks", margin*2.50, barWidth - w*0.51);
    p.pop();

///text by end of each bar

p.push();   


  var singleData = [48, 128, 1318, 2027,10829];
   
// notations for length of bars
  p.textFont('Khand');
  p.textStyle(p.NORMAL);
  p.textSize(18);
  p.fill(77,77,77); 
  p.stroke(77,77,77);
  p.strokeWeight(1);

	  console.log(w);
	  
  p.line(w*0.34,48/2+100,w*0.415,48/2+margin*2.5);
  p.line(w*0.34,128/2+100,w*0.415,128/2+margin*2.5);
  p.line(w*0.34,1318/2+100,w*0.415,1318/2+margin*2.5);
  p.line(w*0.34,2027/2+100,w*0.415,2027/2+margin*2.5);
  p.line(w*0.34,10829/2+100,w*0.415,10829/2+margin*2.5);	  
 
//text
  p.noStroke();
  p.textSize(18.5);
	  
  p.text("unidentified: 48", w*0.34, 48/2+margin*2.4);
  p.text("couple: 128", w*0.34, 128/2+margin*2.4);
  p.text("unknown: 1318", w*0.34, 1318/2+margin*2.4);
  p.text("female: 2027", w*0.34, 2027/2+margin*2.4);
  p.text("male: 10829", w*0.34, 10829/2+margin*2.4);
p.pop();

}


p.drawmeasureline = function(){
    p.push();
	
	var margin = 40; 
	var  w = p.width - 2 * margin, // chart area width and height
         h = p.height - 2 * margin;
    
    var x,y;

  var singleData = [48, 128, 1318, 2027, 10829];
   
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
//	p.translate(1265,100);
	
//  p.translate(w-margin*4, margin*2.6);
	p.translate(w-margin*4, margin*2.52);
  p.rotate(p.radians(90));
	
//  p.translate(w*2, margin);
  p.textStyle(p.NORMAL);
  p.text("Number of Artworks", 69, -55);
  // draw the sections and add text for each section
   //go throught the years
   for(var b=0; b<=10829; b+=200){

    var y = 0;

    var x = p.map(b,0,10829, 0, 10829/2);
   
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

var myp5 = new p5(t, 'canvas-verticalBars');



////////Chart items by YEAR TIMELINE

var w = function(p) {


  p.fontRead = function(){
      fontReady = true; 
    }

  p.preload = function(){
   p.tableB = p.loadTable('assets/ModContGenderfinalzasort.csv','csv','header');

   KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

   p.setup = function(){
//	   p.createCanvas(p.windowWidth,950);
     p.createCanvas(1440,950);
     p.analyzeData();
     p.analyzeGender();
     p.displayData();
     p.drawLabelsCh();

  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.analyzeData = function(){
    var count = p.tableB.getRowCount();
    var countC = p.tableB.getColumnCount();
    console.log(count + " rows");
    console.log(countC + " columns");

// ///first female artist gender column 10
  var female = p.tableB.findRow('f', 10);
  console.log(female);
//============

// =======all rows with a FEMALE artist
    var female = p.tableB.findRows('f', 10);
    console.log(female);

//=======all rows with a MALE artist
    var male = p.tableB.findRows('m', 10);
    console.log(male);

//=======all rows where BOTH male and female named as artists 
    var couple = p.tableB.findRows('t', 10);
    console.log(couple);

//=======all rows where the artist is UNKNOWN
    var unknown = p.tableB.findRows('u', 10);
    console.log(unknown);

//=======all rows where there is an artist but I haven't found their gender
    var todo = p.tableB.findRows('z', 10);
    console.log(todo);

// ///=======gives the YEARS w/ the max & min number of objects
  var yearNow = {};
    yearNow.year = (p.int(p.tableB.getString(0,17)));

    yearNow.items = p.tableB.findRows(String(yearNow.year),17);
    p.append(allYears, yearNow);

    minObjects = 150000;
    maxObjects = 0;
    minYear = null;
    maxYear = null;


for (var i=0; i<count; i++) {
      var year = p.int(p.tableB.getString(i,17));
      if(year!=yearNow.year){
        var yearNow = {};
        yearNow.year = year;
        yearNow.items =[];
        yearNow.items = p.tableB.findRows(String(yearNow.year),17);
        p.append(allYears, yearNow);
        
        if(yearNow.items.length>maxObjects){
          maxObjects = yearNow.items.length;
          maxYear = allYears.length-1;
        }

        if(yearNow.items.length<minObjects){
          minObjects = yearNow.items.length;
           minYear = allYears.length-1;
        }
     }
  }
 

  mxYear = null;

for (var s=0; s<=p.count; s++) {
      var year = p.int(p.tableB.getString(s,17));
      if(year!=yearNow.year){
        var yearNow = {};
        yearNow.year = year;
        yearNow.items =[];
        yearNow.items = p.tableB.findRows(String(yearNow.year),17);
        p.append(allYears, yearNow);
        
        if(yearNow.items.length>maxObjects){
          maxObjects = yearNow.items.length;
          mxYear = midYears.length-1;
        }
console.log(mxYear);
     }
console.log("Number of artworks since 1850 is " + midYears.length + " the year with the most artworks 1850 -2017 is " + mxYear);

  }
}

// /======TOTAL NUMBER of FEMALE, MALE, TWO, UNKNOWN artists shown on bar chart  

p.analyzeGender = function(){
  var cnt = p.tableB.getRowCount();
  var gender = {};

  var MaleArtists = 0;
  var FemaleArtists = 0;
  var TwoArtists = 0;
  var UnknownArtists = 0;
  var ToFindOutArtists = 0;
  var Other = 0;

  gender.gen = (String(p.tableB.getString(0,10)));

  for(var g=0; g<cnt; g++){
    var gender = p.tableB.getString(g,10);

  gender.items = p.tableB.findRows(String(gender.gen),10);
  if (gender === 'm') {
      MaleArtists = MaleArtists + 1;

    } else if (gender === 'f') {
     FemaleArtists = FemaleArtists + 1;

     } else if (gender === 't') {
     TwoArtists = TwoArtists + 1;

    } else if (gender === 'u') {
     UnknownArtists = UnknownArtists + 1;

   } else if (gender === 'z') {
    // console.log('z');
     ToFindOutArtists = ToFindOutArtists + 1;

   } else {
     Other = Other + 1;
     }

  }

    TotalFemale.push({femaleTotal: FemaleArtists});
    console.log(TotalFemale);

    TotalMale.push({maleTotal: MaleArtists});
    console.log(TotalMale);

    TotalTwo.push({twoTotal: TwoArtists});
    console.log(TotalTwo);

    TotalUnknown.push({unknownTotal: UnknownArtists});
    console.log(TotalUnknown);

    TotalToFindOut.push({tofindoutTotal: ToFindOutArtists});
    console.log(TotalToFindOut);
       
}
///========

///DISPLAY PER YEAR by GENDER
  p.displayData = function(){

  p.push();
  p.translate(50,0);

  p.noStroke();
  p.fill(255,0,0);

  for(var i=0; i<allYears.length; i++){
//// years use map incoming value and range

    var x = p.map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, 1341-margin);

    var totalFemaleArtistsPerBar = 0;
    var totalMaleArtistsPerBar = 0;

  ///then do same for y height
  for(var j=0; j<allYears[i].items.length; j++){
      var y= p.map(j,0,maxObjects,747-margin, margin);

///====FILL BY GENDER
   var gender = allYears[i].items[j].obj.Gender;
    if (gender === 'm') {
       p.fill(92,242,145,70);
       p.rect(x-2,y-1,5,2);
       // console.log('m');
       totalMaleArtistsPerBar = totalMaleArtistsPerBar + 1;

    } else if (gender === 'f') {
       p.fill(179,118,244,90);
       p.rect(x-2,y-1,5,2);
       // console.log('f');
      totalFemaleArtistsPerBar = totalFemaleArtistsPerBar + 1;
     // console.log(totalFemaleArtistsPerBar);
    } else if (gender === 't') {
       p.fill(168,71,5,80);
       p.rect(x-2,y-1,5,2);
      // console.log('t');
      
    } else if (gender === 'u') {
       p.fill(165,160,152,80);
       p.rect(x-2,y-1,5,2);
       // console.log('u');

    } else if (gender === 'z') {
       p.fill(224,199,50,90);
       p.rect(x-2,y-1,5,2);
       //console.log('z');

    } else {
       p.fill(100,100);
       p.rect(x-2,y-1,5,2);
      // console.log('u');
    }

  }

//number of FEMALE artworks per BAR with total bar height
  barTotals.push({barTotal: allYears[i].items, femaleTotal: totalFemaleArtistsPerBar});
//number of FEMALE artworks 
  yrFemTotals.push({year: allYears[i].year, total: totalFemaleArtistsPerBar});

//number of MALE artworks per BAR with total bar height
  barTotals2.push({barTotal: allYears[i].items, maleTotal: totalMaleArtistsPerBar});
//number of MALE artworks 
  yrMaleTotals.push({year: allYears[i].year, total: totalMaleArtistsPerBar});
  }
  console.log(yrFemTotals);
  console.log(yrMaleTotals);
  p.pop();
}

p.drawLabelsCh = function(){
    p.push();
    p.translate(50,0);

   //x axis
    p.textFont('Khand');
    p.textSize(17);
    p.stroke(77,77,77);

   //just the lines
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
    p.line(x,y-25,x, y-30);
  }

// label the whole axis
  p.textFont('Khand');
  p.textAlign(p.RIGHT);
  p.noStroke();
  p.textSize(20);
  p.text("Year: Object Begin Date", 990,730);

//source
  p.textAlign(p.LEFT);
  p.noStroke();
  p.textSize(16);
  p.text("Source: MetObjects.csv, January 2018, spreadsheet shared with The New School.", margin,747-margin+105);
  p.text("Modern & Contemporary Art Collection Department, 14,350 artworks. Object Begin Date, Gender identified by Artist Display Name, 1850-2017 (14,284 artworks.)", margin,747-margin+135);

////draw the y Axis
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
      p.text(i, x+3, y+4);
      p.stroke(77,77,77);
      p.strokeWeight(1);
      p.line(x+15,y,x+20,y);
  }

  p.push();
  p.translate(65,0);
  p.textFont('Khand');
  p.noStroke();
  p.textSize(20);
  p.translate(1000,700);
  p.rotate(p.radians(270)); 
  p.text("Number of Artworks", margin+300,margin-1135);
  p.pop();

////the overall title
  p.push();
  p.translate(65,0);
  p.textFont('Khand');
  p.textStyle(p.NORMAL);
  p.noStroke();
  p.textAlign(p.LEFT);
  p.fill(77,77,77);
  p.textSize(40);
  p.text("What year were these artworks made?",540,110);
  p.pop();

///legend
    p.textFont('Khand');
    p.noStroke();
    p.fill(179,118,244,140);  //f
    p.rect(100,220,25,25);
    p.fill(92,242,145,140); //m
    p.rect(100,190,25,25);
    p.fill(168,71,5,140);  //t
    p.rect(100,160,25,25);
    p.fill(165,160,152,140);   //u
    p.rect(100,130,25,25);
    p.fill(224,199,50,140);   //a //z
    p.rect(100,100,25,25);
    
    p.textStyle();
    p.textAlign(p.LEFT);
    p.fill (77,77,77);
    p.textStyle(p.NORMAL);
    p.textSize(18);
    p.text("named, gender not yet identified", 132,117);
    p.text("unknown", 132,147);
    p.text("couple / collaborative with both genders",132,177);
    p.text("male",132,207);
    p.textSize(25);
    p.text("female",132,242);

    p.pop();
  }
  
}

var myp5 = new p5(w, 'canvas-timeline');



