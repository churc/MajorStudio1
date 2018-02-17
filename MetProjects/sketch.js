var table;

var yrFemTotals = [];

var barTotals =[];

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

var whatGender = [];

var minGender, maxGender, minYear, maxYear, minObjects, maxObjects, maxArtist, maxArtistColl;

var margin = 50;

function preload(){
//mytable is comma separated value "csv"
//and has a header specifying the columns labels
 table = loadTable('assets/ModContG3final3.csv','csv','header');

}

function setup(){
	 createCanvas(windowWidth,windowHeight);
	 analyzeData();
	 displayData();
	 drawLabels();
   analyzeGender();
}

function analyzeData(){
	var count = table.getRowCount();
  var countC = table.getColumnCount();
	console.log(count + " rows");
  console.log(countC + " columns");

  

// ///THIS shows row with FIRST female artist gender column 10
 	// var female = table.findRow('f', 10);
 	// console.log(female);
////============

//=======THIS console logs all rows with a FEMALE artist
    var female = table.findRows('f', 10);
    console.log(female);

//=======THIS console logs all rows with a MALE artist
    var male = table.findRows('m', 10);
    console.log(male);

//=======THIS console logs all rows where BOTH male and female named as artists 
    var couple = table.findRows('t', 10);
    console.log(couple);

//=======THIS console logs all rows where the artist is UNKNOWN
    var unknown = table.findRows('u', 10);
    console.log(unknown);

//=======THIS console logs all rows where there is an artist but I haven't found their gender
   var todo = table.findRows('a', 10);
   console.log(todo);
// // //===================================


// ///=========WORKS to give the YEARS w/ the MAX & MIN NUMBER OF OBJECTS 
////object begin date column 17
  var yearNow = {};
  yearNow.year = (int(table.getString(0,17)));

  yearNow.items = table.findRows(String(yearNow.year),17);
  append(allYears, yearNow);

  minObjects = 150000;
  maxObjects = 0;
  minYear = null;
  maxYear = null;

 for(var i=0; i<count; i++){
      var year = int(table.getString(i,17));
      if(year!=yearNow.year){
        var yearNow = {};
        yearNow.year = year;
        yearNow.items =[];
        yearNow.items = table.findRows(String(yearNow.year),17);
        append(allYears, yearNow);
        
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
  console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
  console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " item.");
}



/////=================


///======THIS WORKS FOR TOTAL NUMBER of FEMALE, MALE, TWO, UNKNOWN artists  

function analyzeGender(){
  var cnt = table.getRowCount();
  var gender = {};

  var MaleArtists = 0;
  var FemaleArtists = 0;
  var TwoArtists = 0;
  var UnknownArtists = 0;
  var ToFindOutArtists = 0;
  var Other = 0;

  gender.gen = (String(table.getString(0,10)));

  for(var g=0; g<cnt; g++){
    var gender = table.getString(g,10);

    gender.items = table.findRows(String(gender.gen),10);
  if (gender === 'm') {
      MaleArtists = MaleArtists + 1;

    } else if (gender === 'f') {
     FemaleArtists = FemaleArtists + 1;

     } else if (gender === 't') {
     TwoArtists = TwoArtists + 1;

    } else if (gender === 'u') {
     UnknownArtists = UnknownArtists + 1;

   } else if (gender === 'a') {
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


// ///=========max number of items by one artist 
/// using display name column 10 
	
//   var rows = table.getRowCount();

//   var displayName = {};
//   displayName.artist = table.getString(0,9);
//   displayName.items = table.findRows(String(displayName.artist),9);
// 	append(ArtistColl, displayName);
 
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


//WORKS TO DISPLAY PER YEAR by GENDER
function displayData(){
	noStroke();
	fill(255,0,0);

	for(var i=0; i<allYears.length; i++){
//// years use map incoming value and range
    // console.log('thisisallYrs' + allYears[allYears.length-1].year);
////map function 
    var x = map(allYears[i].year,1800,allYears[allYears.length-1].year, margin, width-margin);
		
    var totalFemaleArtistsPerBar = 0;

////THIS logs where it is mapping that is relatively corresponding to:
   // console.log("mapping: " + allYears[i].year + "to: " + x);

    // var x = map(i,0,allYears.length, margin, width-margin);
		//rect(x,height/2,5,5);

  ///then do same for y height
	for(var j=0; j<allYears[i].items.length; j++){
		  var y= map(j,0,maxObjects,height-margin, margin);

//table.findRows(String(yearNow.year),17)

///====WORKS TO FILL BY GENDER
   var gender = allYears[i].items[j].obj.Gender;
    if (gender === 'm') {
      fill(154,205,50);
      rect(x,y,2,1);
       // console.log('m');

    } else if (gender === 'f') {
      fill(186,85,211);
       rect(x,y,2,1);
       // console.log('f');
     totalFemaleArtistsPerBar = totalFemaleArtistsPerBar + 1;
     // console.log(totalFemaleArtistsPerBar);
    } else if (gender === 't') {
      fill(204,147,34);
       rect(x,y,2,1);
      // console.log('t');
      
    } else if (gender === 'u') {
      fill(169,169,169);
       rect(x,y,2,1);
       // console.log('u');

    } else if (gender === 'a') {
      fill(0,0,0);
       rect(x,y,2,1);
       // console.log('a');

    } else {
      fill(169,169,169);
       rect(x,y,2,1);
      // console.log('u');
    }

	}

 
//THIS gets number of FEMALE artworks per BAR with total bar height
  barTotals.push({barTotal: allYears[i].items, femaleTotal: totalFemaleArtistsPerBar});

//THIS gets number of FEMALE artworks per YEAR
  yrFemTotals.push({year: allYears[i].year, total: totalFemaleArtistsPerBar});

  }
}




function drawLabels(){

	//x axis
	stroke(77,77,77);
	//just the lines
 	line(margin,height-margin,width-margin,height-margin);
  	noStroke();
  	textAlign(CENTER);

  // draw the sections and add text for each section
	//go throught the years from 1800-2017
  for(var i=1800; i<=2017; i+=10){
   var y = height-margin+30;
    x = map(i,1800,2017, margin, width-margin);
    // x = map(i,0, allYears.length,margin, width-margin);
    noStroke();
    fill(77,77,77);
    // fill(0);
    text(i, x, y);
    stroke(77,77,77);
    strokeWeight(1);
    // stroke(0);
    line(x,y-22,x, y-30);
    //line(x,y-12,x, y-30);
}

  // label the whole axis
  textAlign(RIGHT);
  noStroke();
  textStyle(BOLD);
  text("Year", width-margin,height-margin+70);

//   // 2. Let's draw the y Axis
  stroke(77,77,77);
  line(margin,height-margin ,margin,margin);
  noStroke();
  textAlign(RIGHT);
  textStyle(NORMAL);

  for(var i=0; i<maxObjects; i+=50){
    var x = margin-20;
    y = map(i,0, maxObjects,height-margin, margin);
    noStroke();
    fill(77,77,77);
    //fill(0);
    text(i, x, y+5);
    stroke(77,77,77);
    strokeWeight(1);
    // stroke(0);
    line(x+10,y,x+20,y);
    // line(x+5,y,x+20,y);
  }
  textStyle(BOLD);
  noStroke();
  text("Artworks", margin-60,margin);

//   // 3. Let's add the overall title
  textStyle(BOLD);
  noStroke();
  textAlign(LEFT);
  textSize(15);
  fill(160,42,85);
  text("Gender of Artists Represented in the Met Modern & Contemporary Art Collection", margin,margin-30);
  textSize(12);
  textStyle(NORMAL);
  text("1800 - 2017", margin,margin-15);
}

/////============================================







//=========
//to get all the rows
//warning: rows is an array of objects
// 	for (var i=0; i<row.length; i++) {
//   		rows[i].set('name', 'MetFullObjects');
   		
// //show the results
// 		var rows = table.getRows();
// 		var span = createSpan(rows(i) + " | ");
// 		// var span = createSpan(rows.getString(i) + " | ");

// // 		if(objectName=="American Paintings and Sculpture") {
// // 			span.addClass("highlight:yellow");
// // 		}
	
	
//     console.log(rows);
//     console.log(column);
// }
// //===========


//=================
// //this works to get one column: table.get.String
// 	for(var i=0; i<row; i++){
		
// 	var objectName = table.getString(i,"Artist Display Name");
// //createSpan to show data on server
// 		// var span = createSpan(objectName + " | ");
// 		// if(objectName=="Clara Chipman Newton") {
// 		// 	span.addClass("highlighted");
// 		// }

// 		console.log(table.get(i, 14));
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