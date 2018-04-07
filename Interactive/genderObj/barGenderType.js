// /======TOTAL NUMBER of FEMALE, MALE artists
//shown on bar chart  
var table;

var yrFemTotals = [];
var barTotals =[];
var yrMaleTotals = [];
var barTotals2 =[];


var FemaleTotal = [];
var TotalFemale = [];
var TotalMale = [];
var gender = [];
var artist = [];
var ArtistColl = [];

var allYears = [];

var minYear, maxYear, mxYear, midYears, minObjects, maxObjects, maxArtist, maxArtistColl;

var margin = 80;

var t = function(p) {

   p.preload = function(){
  //mytable is comma separated value "csv"
  //and has a header specifying the columns labels
   p.table = p.loadTable('assets/ModContGenderfinalgnoysort.csv','csv','header');

   KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

   p.setup = function(){
     p.createCanvas(p.windowWidth,850);
     p.background(100,10);
     p.analyzeData();
     p.analyzeGender();
     p.displayData();
     p.drawLabelsCh();
  }

// ///=========max number of items by one artist 
/// using display name column 10


p.analyzeGender = function(){
  var cnt = p.table.getRowCount();
  var gender = {};

  var MaleArtists = 0;
  var FemaleArtists = 0;


  gender.gen = (String(p.table.getString(0,10)));

  for(var g=0; g<cnt; g++){
    var gender = p.table.getString(g,10);

  gender.items = p.table.findRows(String(gender.gen),10);
  if (gender === 'm') {
      MaleArtists = MaleArtists + 1;

    } else if (gender === 'f') {
     FemaleArtists = FemaleArtists + 1;
 	}

  }

    TotalFemale.push({femaleTotal: FemaleArtists});
    console.log(TotalFemale);

    TotalMale.push({maleTotal: MaleArtists});
    console.log(TotalMale);
   
}


  p.analyzeData = function(){
  	var count = p.table.getRowCount();
    var countC = p.table.getColumnCount();
  	console.log(count + " rows");
    console.log(countC + " columns");


// =======THIS console logs all rows with a FEMALE artist
    var female = p.table.findRows('f', 10);  ////gender column
    console.log(female);

//=======THIS console logs all rows with a MALE artist
    var male = p.table.findRows('m', 10);
    console.log(male);


// ///=======gives the YEARS w/ the MAX & MIN NUMBER OF OBJECTS 
////object begin date column 17
  var yearNow = {};
    yearNow.year = (p.int(p.table.getString(0,17)));

    yearNow.items = p.table.findRows(String(yearNow.year),17);
    p.append(allYears, yearNow);

    minObjects = 150000;
    maxObjects = 0;
    minYear = null;
    maxYear = null;


for (var i=0; i<count; i++) {
      var year = p.int(p.table.getString(i,17)); ////date
      if(year!=yearNow.year){
        var yearNow = {};
        yearNow.year = year;
        yearNow.items =[];
        yearNow.items = p.table.findRows(String(yearNow.year),17);
        p.append(allYears, yearNow);
        
        if(yearNow.items.length>maxObjects){
          maxObjects = yearNow.items.length;
          maxYear = allYears.length-1;
        }

        if(yearNow.items.length<minObjects){
          minObjects = yearNow.items.length;
          minYear = allYears.length-1;
        }

	// console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
 // 	console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " item.");

     }
}

  mxYear = null;
  midYears = null;

for (var s=0; s<=p.count; s++) {
      var year = p.int(p.table.getString(s,17));
      if(year!=yearNow.year){
        var yearNow = {};
        yearNow.year = year;
        yearNow.items =[];
        yearNow.items = p.table.findRows(String(yearNow.year),17);
        p.append(allYears, yearNow);
        
        if(yearNow.items.length>maxObjects){
          maxObjects = yearNow.items.length;
          mxYear = midYears.length-1;
        }

        console.log("Number of artworks since 1850 is " + midYears.length + " the year with the most artworks 1850 -2017 is " + mxYear);
     	}

	}
}
  

 p.displayData = function(){
  p.push();
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
     
    } 
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
  console.log(barTotals);  ////f total per yr
  console.log(barTotals2);  ////m total per yr
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
   // line(margin,height-margin,width-margin,height-margin);
    p.line(margin,747-margin,1341-margin,747-margin);
    p.noStroke();
    p.textAlign(p.CENTER);

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

// label the whole axis
  p.textFont('Khand');
  p.textAlign(p.RIGHT);
  p.noStroke();
  p.textSize(20);
  p.text("Year: Object Begin Date", 990,730);

//source
  p.textAlign(p.LEFT);
  p.noStroke();
  p.textSize(18);
  p.text("Source: MetObjects.csv, January 2018, spreadsheet shared with The New School.", margin-15,747-margin+105);
  p.text("Modern & Contemporary Art Collection Department, 14,350 artworks. Object Begin Date, Gender identified by Artist Display Name, 1850-2017 (14,284 artworks.)", margin-15,747-margin+135);

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
  p.textSize(42);
  p.text("What year were these artworks made?",500,75);
  p.fill(77,77,77);
  p.textSize(26);
  p.text("The Met Modern & Contemporary Art Collection", 500,120);
  p.textSize(38);
  p.pop();

////legend
    p.textFont('Khand');
    p.noStroke();
    p.fill(179,118,244,140);  //f
    p.rect(100,100,25,25);
    p.fill(92,242,145,140); //m
    p.rect(100,130,25,25);
    // p.fill(168,71,5,140);  //t
    // p.rect(100,160,25,25);
    // p.fill(165,160,152,140);   //u
    // p.rect(100,190,25,25);
    // p.fill(224,199,50,140);   //a //z
    // p.rect(100,220,25,25);
    p.textStyle();
    p.textAlign(p.LEFT);
    p.textSize(20);
    p.fill (77,77,77);
    p.text("Artwork", 132,90);
    p.textStyle(p.NORMAL);
    p.textSize(18);
    p.text("female", 132,117);
    p.text("male", 132,147);

    p.pop();
  }
 } 


var myp5 = new p5(t, 'c2');
///========