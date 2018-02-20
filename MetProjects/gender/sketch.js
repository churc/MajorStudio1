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

///wrapped bars
var s = function(p){

  p.fontRead = function(){
      fontReady = true; 
    }

  p.preload = function(){
  //mytable is comma separated value "csv"
  //and has a header specifying the columns labels
   p.table = p.loadTable('assets/ModContG3final4sort.csv','csv','header');

   KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

   p.setup = function(){
	 p.createCanvas(2500,2800);
	 // analyzeData();
  //  analyzeGender();
	 // displayData();
	 // drawLabelsCh();
  //  drawLabelsTot();
  //  drawLabelsBar();
  //  showInfo();

   //// p.displaySingleBars();
   p.push();
    p.translate(500,0);
   p.push();
    p.stroke(92,242,145,120);
    p.strokeWeight(5);
    p.noFill();
    p.beginShape(); 
    p.vertex(830, 20);   // total m/2 = 10825/2 = 5412.5
    p.vertex(830, 760);   //  740
    p.vertex(940, 760);   //  110
    p.vertex(940,  20);   //740
    p.vertex(1280,  20);   //340
    p.vertex(1280, 840);   //820
    p.vertex(1250, 840);   //30
    p.vertex(1250,  40);   //800
    p.vertex(1110, 40);    //140
    p.vertex(1110, 840);   //800
    p.vertex(217.5, 840);  //892.5     ///5412.5
    p.endShape();  
    p.pop();

    p.push();
    p.stroke(179,118,244,120);
    // stroke(153,50,204,80); //total f/2 = 2027/2 = 1013.5
    p.strokeWeight(5);
    p.noFill();
    p.beginShape();
    p.vertex(836, 20);   //  
    p.vertex(836,  754);   //734
    p.vertex(934,  754);   //98
    p.vertex(934, 572.5);  //181.5      //1013.5
    p.endShape();
    p.pop();

    p.push();

    p.stroke(168,71,5,110); //total t couple/collab 128/2 = 64
    p.strokeWeight(5);
    p.noFill();
    p.beginShape();
    p.vertex(842, 20);   //  
    p.vertex(842,  84);   //64 = 64
    p.endShape();
    p.pop();


    p.push();
    p.stroke(165,160,152,110);  //total u unknown 1318/2 = 659
    p.strokeWeight(5);
    p.noFill();
    p.beginShape();
    p.vertex(848, 20);   //  
    p.vertex(848,  679);   // 659
    p.endShape();

    p.pop();

    p.push();
    p.stroke(224,199,50,130);  //total a to find out 52/2 = 26
    p.strokeWeight(5);
    p.noFill();
    p.beginShape();
    p.vertex(854, 20);   //  
    p.vertex(854,  46);   // 26
    p.endShape();

    p.pop();
    p.pop();
}

}
var myp5 = new p5(s, 'c1');


// function windowResized() {
//   // resizeCanvas(1500, 11500);
// }

// function analyzeData(){
// 	var count = table.getRowCount();
//   var countC = table.getColumnCount();
// 	console.log(count + " rows");
//   console.log(countC + " columns");

// // ///THIS shows row with FIRST female artist gender column 10
//   // var female = table.findRow('f', 10);
//   // console.log(female);
// ////============

// //=======THIS console logs all rows with a FEMALE artist
//     var female = table.findRows('f', 10);
//     console.log(female);

// //=======THIS console logs all rows with a MALE artist
//     var male = table.findRows('m', 10);
//     console.log(male);

// //=======THIS console logs all rows where BOTH male and female named as artists 
//     var couple = table.findRows('t', 10);
//     console.log(couple);

// //=======THIS console logs all rows where the artist is UNKNOWN
//     var unknown = table.findRows('u', 10);
//     console.log(unknown);

// //=======THIS console logs all rows where there is an artist but I haven't found their gender
//    var todo = table.findRows('a', 10);
//    console.log(todo);

// // // //===================================


// // ///=========WORKS to give the YEARS w/ the MAX & MIN NUMBER OF OBJECTS 
// ////object begin date column 17
//   var yearNow = {};
//   yearNow.year = (int(table.getString(0,17)));

//   yearNow.items = table.findRows(String(yearNow.year),17);
//   append(allYears, yearNow);

//   minObjects = 150000;
//   maxObjects = 0;
//   minYear = null;
//   maxYear = null;


// for (var i=0; i<count; i++) {
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
//           // minYear = allYears.length-1;
//            minYear = allYears.length;
//         }
//      }
//   }
//  console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
//  console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " item.");
// }

///// number of artworks 1850 - 2017


//   mxYear = null;

// for (var s=0; s<=count; s++) {
//       var year = int(table.getString(s,17));
//       if(year!=yearNow.year){
//         var yearNow = {};
//         yearNow.year = year;
//         yearNow.items =[];
//         yearNow.items = table.findRows(String(yearNow.year),17);
//         append(allYears, yearNow);
        
//         if(yearNow.items.length>maxObjects){
//           maxObjects = yearNow.items.length;
//           mxYear = midYears.length-1;
//         }

//      }
// console.log("Number of artworks since 1850 is " + midYears.length + " the year with the most artworks 1850 -2017 is " + mxYear);

//   }

// // console.log("Number of artworks since 1850 is " + midYears + " the year with the most artworks 1850 -2017 is " + mxYear);
// }

//////====================


///======THIS WORKS FOR TOTAL NUMBER of FEMALE, MALE, TWO, UNKNOWN artists
////shown on bar chart  

// function analyzeGender(){
//   var cnt = table.getRowCount();
//   var gender = {};

//   var MaleArtists = 0;
//   var FemaleArtists = 0;
//   var TwoArtists = 0;
//   var UnknownArtists = 0;
//   var ToFindOutArtists = 0;
//   var Other = 0;

//   gender.gen = (String(table.getString(0,10)));

//   for(var g=0; g<cnt; g++){
//     var gender = table.getString(g,10);

//     gender.items = table.findRows(String(gender.gen),10);
//   if (gender === 'm') {
//       MaleArtists = MaleArtists + 1;

//     } else if (gender === 'f') {
//      FemaleArtists = FemaleArtists + 1;

//      } else if (gender === 't') {
//      TwoArtists = TwoArtists + 1;

//     } else if (gender === 'u') {
//      UnknownArtists = UnknownArtists + 1;

//    } else if (gender === 'a') {
//      ToFindOutArtists = ToFindOutArtists + 1;

//    } else {
//      Other = Other + 1;
//      }

//   }

//     TotalFemale.push({femaleTotal: FemaleArtists});
//     console.log(TotalFemale);

//     TotalMale.push({maleTotal: MaleArtists});
//     console.log(TotalMale);

//     TotalTwo.push({twoTotal: TwoArtists});
//     console.log(TotalTwo);

//     TotalUnknown.push({unknownTotal: UnknownArtists});
//     console.log(TotalUnknown);

//     TotalToFindOut.push({tofindoutTotal: ToFindOutArtists});
//     console.log(TotalToFindOut);
       

// }
// ///========


// ///WORKS TO DISPLAY PER YEAR by GENDER
// function displayData(){
//   /////move chart down 
// 	noStroke();
// 	fill(255,0,0);

//   for(var i=0; i<allYears.length; i++){
// //// years use map incoming value and range
//     // console.log('thisisallYrs' + allYears[allYears.length-1].year);
// ////map function 
//     // var x = map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, width-margin);
//     var x = map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, 1341-margin);

//     var totalFemaleArtistsPerBar = 0;
//     var totalMaleArtistsPerBar = 0;

// ////THIS logs where it is mapping that is relatively corresponding to:
//    // console.log("mapping: " + allYears[i].year + "to: " + x);

//     // var x = map(i,0,allYears.length, margin, width-margin);
//     //rect(x,height/2,5,5);

//   ///then do same for y height
//   for(var j=0; j<allYears[i].items.length; j++){
//       // var y= map(j,0,maxObjects,height-margin, margin);
//       var y= map(j,0,maxObjects,747-margin, margin);

// //table.findRows(String(yearNow.year),17)

// ///====WORKS TO FILL BY GENDER
//    var gender = allYears[i].items[j].obj.Gender;
//     if (gender === 'm') {
//        fill(92,242,145,60);
//        rect(x-1,y-1,3,2);
//        // console.log('m');
//        totalMaleArtistsPerBar = totalMaleArtistsPerBar + 1;

//     } else if (gender === 'f') {
//        fill(179,118,244,60);
//        rect(x-1,y-1,3,2);
//        // console.log('f');
//       totalFemaleArtistsPerBar = totalFemaleArtistsPerBar + 1;
//      // console.log(totalFemaleArtistsPerBar);
//     } else if (gender === 't') {
//        fill(168,71,5,50);
//        rect(x-1,y-1,3,2);
//       // console.log('t');
      
//     } else if (gender === 'u') {
//        fill(165,160,152,50);
//        rect(x-1,y-1,3,2);
//        // console.log('u');

//     } else if (gender === 'a') {
//       fill(224,199,50,70);
//        rect(x-1,y-1,3,2);
//        // console.log('a');

//     } else {
//        fill(100,100);
//        rect(x-1,y-1,3,2);
//       // console.log('u');
//     }

//   }

// //THIS gets number of FEMALE artworks per BAR with total bar height
//   barTotals.push({barTotal: allYears[i].items, femaleTotal: totalFemaleArtistsPerBar});
// //THIS gets number of FEMALE artworks 
//   yrFemTotals.push({year: allYears[i].year, total: totalFemaleArtistsPerBar});

// //THIS gets number of MALE artworks per BAR with total bar height
//   barTotals2.push({barTotal: allYears[i].items, maleTotal: totalMaleArtistsPerBar});
// //THIS gets number of MALE artworks 
//   yrMaleTotals.push({year: allYears[i].year, total: totalMaleArtistsPerBar});
//   }
//   console.log(yrFemTotals);
//   console.log(yrMaleTotals);
// }
////////////////\\\\\\\\\\\\\\\\

// ////WORKS for VERTICAL BAR CHART for totals 

var t = function(p) {

  p.fontRead = function(){
      fontReady = true; 
    }

  p.preload = function(){
  //mytable is comma separated value "csv"
  //and has a header specifying the columns labels
   p.table = p.loadTable('assets/ModContG3final4sort.csv','csv','header');

   KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
  }

  p.setup = function(){
    p.createCanvas(1200, p.windowHeight);
    p.displaySingleBars();
  }

  p.displaySingleBars = function(){
    p.noStroke();
    p.fill(255,0,0);

  var x,y,w,h;

  var singleData = [52, 1318, 128, 10825, 2027];
//var fillBars = [(fill("#ededed"),("#5c5c5c"),("#e5e5o5"),("#f0f0f0"),("#000"))];


   var width = 11000,
       height = p.windowHeight,

        margin = 15,
        w = width - 2 * margin, // chart area width and height
        h = height - 2 * margin;
    
    var barWidth =  (h / singleData.length) * 0.15; // width of bar
    var barMargin = (h / singleData.length) * 0.2; // margin between two bars
    
    p.textFont('Khand');
    p.textSize(14);
  
  for(var b=0; b<singleData.length; b++) {
    p.push();  //save 
      //fill(fillBars);
     // fill(50,198,255, 80);
      p.fill(160,42,85, 160);
      p.noStroke();

      p.rotate(p.radians(90));   // rotate to vertical
      p.translate(0, b* (barWidth + barMargin)); // jump to the top right corner of the bar
      // rect(20, -windowWidth/1.5, singleData[b], barWidth);
      p.rect(20, -p.windowWidth/1.5, singleData[b]/2, barWidth/2); // draw rect
      p.fill(0,0,0);
      p.text(singleData[b], 21, barWidth/2 + -p.windowWidth/1.527); // write data label

      p.text((singleData%singleData[b]), 52, barWidth/2 + -p.windowWidth/1.527); // write data label
    p.pop();   // reset, restore
  } 
  }
}
var myp5 = new p5(t, 'c2');

///////////

////try to show year # on hover
// function showInfo() {
//   // Check if mouse is inside the circle
//    if(dist(mouseX, mouseY, 1060, 200)<50) {
//       overBars = true;  
//     } 
//   else
//    {
//      overBars = false;
//     }
//     if(overBars == true){
//       show(barTotals, barTotals2);
//     } 
//     else {
//   }
// }

// function mouseOver(){
//   if(overBars == true){
//     show(barTotals, barTotals2);
//   }
// }

////////////////\\\\\\\\\\\\\\\\\

function drawLabelsCh(){

	//x axis
  textFont('Khand');
	stroke(77,77,77);
	//just the lines
 	// line(margin,height-margin,width-margin,height-margin);
  line(margin,747-margin,1341-margin,747-margin);
  noStroke();
  textAlign(CENTER);

  // draw the sections and add text for each section
		//go throught the years
for(var i=1850; i<=2017; i+=10){
   // var y = height-margin+30;
   var y = 747-margin+30;
   // x = map(i,1850,2017, margin, width-margin);
      x = map(i,1850,2017, margin, 1341-margin);

    // x = map(i,0, allYears.length,margin, width-margin);
      noStroke();
      fill(77,77,77);
      text(i, x, y);
      stroke(77,77,77);
      strokeWeight(1);
      line(x,y-22,x, y-30);
  }

	// for(var i=0; i<allYears.length; i+=10){
  //   var y = height-margin+30;
  // x = map(allYears[i].year,1800,allYears[allYears.length-1].year, margin, width-margin);
  //   // x = map(i,0, allYears.length,margin, width-margin);
  //   noStroke();
  //   fill(0);
  //   text(allYears[i].year, x, y);
  //   stroke(0);
  //   line(x,y-12,x, y-30);
  // }

// label the whole axis
  textFont('Khand');
  textAlign(RIGHT);
  noStroke();
  textSize(16);
  // text("Year", width-margin,height-margin+70);
  // text("Year", 1341-margin,747-margin+70);
  text("Year: Object Begin Date", 1341-margin-147,747-margin+50);

//source
  textAlign(LEFT);
  noStroke();
  textSize(13);
  // text("Year", width-margin,height-margin+70);
  // text("Year", 1341-margin,747-margin+70);
  text("Source: MetObjects.csv, January 2018, spreadsheet shared with The New School.", margin-15,747-margin+53);
  text("Modern & Contemporary Art Collection Department, 14,350 artworks, Object Begin Date, Gender identified by Artist Display Name.", margin-15,747-margin+70);

//   // 2. Let's draw the y Axis
  stroke(77,77,77);
  // line(margin,height-margin ,margin,margin);
  line(margin,747-margin,margin,margin);
  noStroke();
  textAlign(RIGHT);
  textStyle(NORMAL);

  for(var i=0; i<maxObjects; i+=50){
    var x = margin-20;
    // y = map(i,0, maxObjects,height-margin, margin);
    y = map(i,0, maxObjects,747-margin, margin);
    noStroke();
    fill(77,77,77);
    text(i, x, y+5);
    stroke(77,77,77);
    strokeWeight(1);
    line(x+10,y,x+20,y);
  }
  // push();
  // // textStyle(BOLD);
  // noStroke();
  // textSize(16);
  // rotate(radians(90)); 
  // text("Artworks", margin+100,margin-89);
  // pop();
  push();
  // textStyle(BOLD);
  textFont('Khand');
  noStroke();
  textSize(16);
  translate(1000,700);
  rotate(radians(270)); 
  text("Number of Artworks", margin+300,margin-1057);
  pop();
//   // 3. Let's add the overall title
  textFont('Khand');
  textStyle(BOLD);
  noStroke();
  textAlign(LEFT);
  textSize(16);
  fill(160,42,85);
  text("The Met: Modern & Contemporary Art Collection, Artworks by Gender", margin,30);
  textSize(13);
  textStyle(NORMAL);
  text("1850 - 2017", margin,45);
  text("14,350 Artworks, unknown dates - 2017", margin,60);

////4. Add legend
  textFont('Khand');
  fill(179,118,244,120);  //f
  rect(90,100,25,25);
  fill(92,242,145,120); //m
  rect(90,130,25,25);
  fill(168,71,5,120);  //t
  rect(90,160,25,25);
  fill(165,160,152,120);   //u
  rect(90,190,25,25);
  fill(224,199,50,130);   //a
  rect(90,220,25,25);
  textStyle();
  textAlign(LEFT);
  textSize(14);
  fill (77,77,77);
  text("Artwork by:", 120,95);
  textSize(12);
  text("female artist", 120,117);
  text("male artist", 120,147);
  text("couple / collaborative with both genders",120,177);
  text("unknown artist",120,207);
  text("named artist, gender not yet identified",120,237)
}


function drawLabelsTot(){
  //label wrapped total bars
  textFont('Khand');
  textAlign(RIGHT);
  noStroke();
  fill(77,77,77);
  textSize(16);
  // text("Year", width-margin,height-margin+70);
  // text("Year", 1341-margin,747-margin+70);
  text("Total Number of Artworks by Gender", 1000-margin,147-margin+50);
  text("Met Modern & Contemporary Collection", 1000-margin,165-margin+50);
  textSize(14);
  text("Scale: 1 pixel = 2 artworks", 1000-margin,182-margin+50);
  textSize(16);
  text("75.44% by men", 1000-margin,200-margin+50);
  text("14.13% by women", 1000-margin,218-margin+50);
  text("9.18% artist unidentified", 1000-margin,236-margin+50);
  text("0.89%% by couple/collaborative with both genders", 1000-margin,254-margin+50);
  text("0.36% by named artist, gender not yet identified", 1000-margin,272-margin+50);
}

function drawLabelsBar(){
 //label long bars
  textFont('Khand');
  textAlign(RIGHT);
  noStroke();
  fill(77,77,77);
  textSize(16);
  // text("Year", width-margin,height-margin+70);
  // text("Year", 1341-margin,747-margin+70);
  text("Total Number of Artworks by Gender", 700-margin,147-margin+50);
  text("Met Modern & Contemporary Collection", 700-margin,165-margin+50);
  textSize(14);
  text("Scale: 1 pixel = 2 artworks", 700-margin,182-margin+50);
}



////////\\\\\\\\\\\==========================

/////========================================
// // ////WORKS TO DRAW Horizontal BAR CHART for totals 
// function displaySingleBar(){
//   noStroke();
//   fill(255,0,0);

// var x,y,w,h;

// var singleData = [2021, 10817, 128, 1314, 41];

// // x = 0;
// // y = (height*(j/gender[i]));
// // w = width/max(gender)*gender[i];
// // h = (height/gender.length)-5;

// // push();                    // <- push a drawing context
// //     translate(x,y);            // <- move to position
// //     rect(0,0,w,h);             // <- draw a rectangle
// //     fill(255);                 // <- change colors
// //     // text(gender[i],10,h/2);      // <- draw the label 
// //     pop();                     // <- reset the drawing context

//   var width = 1000, // canvas width and height
//       height = 350,
//       margin = 20,
//       w = width - 2 * margin, // chart area width and height
//       h = height - 2 * margin;
  
//   var barWidth =  (h / singleData.length) * 0.8; // width of bar
//   var barMargin = (h / singleData.length) * 0.2; // margin between two bars
  
//   createCanvas(width, height);
  
//   textSize(14);
  
//   push();
//   translate(margin, margin); // ignore margin area
  
//   for(var b=0; b<singleData.length; b++) {
//     push();
//     fill('green');
//     noStroke();
//     translate(0, b* (barWidth + barMargin)); // jump to the top right corner of the bar
//     rect(0, 0, singleData[b], barWidth); // draw rect

//     fill('#FFF');
//     text(singleData[b], 5, barWidth/2 + 5); // write data

//     pop();
//   }
  
//   pop();
// }

/////==============================

// ///=========max number of items by one artist 
/// using display name column 10 
  
//   var rows = table.getRowCount();

//   var displayName = {};
//   displayName.artist = table.getString(0,9);
//   displayName.items = table.findRows(String(displayName.artist),9);
//  append(ArtistColl, displayName);
 
//   maxArtistColl = 0;
//   maxArtist = null;
    


// for (var n=0; n<rows; n++) {
//       //var artist = int(table.getString(i,11));

//       var artist = (String(table.getString(n,9)));
//       if(artist!=displayName.artist){
//         var displayName = {};
//         displayName.artist = artist;
//         displayName.items =[];
//         displayName.items = table.findRows(String(displayName.artist),10);
//         append(ArtistColl, displayName);
//         // console.log(ArtistColl);
//         // console.log(ArtistColl)
//         if(displayName.items.length>maxArtistColl){
//           maxArtistColl = displayName.items.length;
//           maxArtist = ArtistColl.length-1;
//           console.log(maxArtist);
//           console.log(ArtistColl[maxArtist].items.length)
//           //maxArtistName = ArtistColl.length.ArtistColl;
//         }
//      }
// //      // console.log("thisis maxArtist" + maxArtist);
// //      // console.log("thisis ArtistColl length" + ArtistColl.length);
// //       // console.log("The artist" + ArtistColl[maxArtistColl].artist + " that has the most objects has " + ArtistColl[maxArtistColl].items.length + " items by " + (String(maxArtistColl.displayName)));
//   }
// console.log("The maximum number of artworks by one artist " + ArtistColl[maxArtist].artist + "by" + ArtistColl[maxArtist].items.length);

// // //   console.log("The artist" + ArtistColl[maxArtistColl].artist + " that has the most objects has " + ArtistColl[maxArtistColl].items.length + " items by " + (String(maxArtistColl.displayName)));
// // // };
// }

//============================



//=========
//to get all the rows
//warning: rows is an array of objects
//  for (var i=0; i<row.length; i++) {
//      rows[i].set('name', 'MetFullObjects');
      
// //show the results
//    var rows = table.getRows();
//    var span = createSpan(rows(i) + " | ");
//    // var span = createSpan(rows.getString(i) + " | ");

// //     if(objectName=="American Paintings and Sculpture") {
// //       span.addClass("highlight:yellow");
// //     }
  
  
//     console.log(rows);
//     console.log(column);
// }
// //===========


//=================
// //this works to get one column: table.get.String
//  for(var i=0; i<row; i++){
    
//  var objectName = table.getString(i,"Artist Display Name");
// //createSpan to show data on server
//    // var span = createSpan(objectName + " | ");
//    // if(objectName=="Clara Chipman Newton") {
//    //  span.addClass("highlighted");
//    // }

//    console.log(table.get(i, 14));
// }
//================


//=================
// //to get all the columns in a specific row: table.get.Row(1)
// 	for(var i=0; i<row; i++){
// 		 var row = table.getRow(10);
//   		//print it column by column
//   		//note: a row is an object, not an array
//   		for (var c = 0; c < table.getColumnCount(); c++) {
//     	console.log(row.getString(c));
//     	var span = createSpan(row.getString(c) + " | ");
//     }
// }
//================

//shows first row, 2nd column cell
		// console.log(table.get(i, 1));
//shows total number of rows
		// console.log(table.get(i,1));
    	
	
// }