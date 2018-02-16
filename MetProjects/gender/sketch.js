var table;

var gender = [];

var ArtistColl = [];

var allYears = [];

var whatGender = [];

var minGender, maxGender, minYear, maxYear, minObjects, maxObjects, maxArtistColl, artist, gender, gen;

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
}

function analyzeData(){
	var count = table.getRowCount();
  var countC = table.getColumnCount();
	console.log(count + " rows");
  console.log(countC + " columns");

// ///=========THIS shows row with FIRST female artist
///using gender column 10

 // 	var female = table.findRow('f', 10);
 // 	console.log(female);

// //==========

//=======THIS console logs all rows with a female artist

////GET NUMBER COUNT AS BAR CHART

   var female = table.findRows('f', 10);
   console.log(female);

//==========

//=======THIS console logs all rows with a male artist

   var male = table.findRows('m', 10);
   console.log(male);

// //==========

//=======THIS console logs all rows where both male and female named as artists 

     var couple = table.findRows('t', 10);
//    console.log(unknown + " artists in ModCont collection where artist is unknown");
      console.log(couple);

//=========

//=======THIS console logs all rows where the artist is unknown 

     var unknown = table.findRows('u', 10);
//    console.log(unknown + " artists in ModCont collection where artist is unknown");
      console.log(unknown);

// //==========


//=======THIS console logs all rows where there is an artist but I haven't found their gender

   var todo = table.findRows('a', 10);
   console.log(todo);
// };
// // //===================================


// ///=========try to do count by years 
//   var yearNow = {};
//   yearNow.year = (int(table.getString(0,17)));
//   yearNow.items = table.findRows(String(yearNow.year),17);
//   append(allYears, yearNow);

//   minGender = 150000;
//   maxGender = 0;
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
//           minYear = allYears.length-1;
//         }
//      }
//   }
//   console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");

// };


///=========try to do for number of female artists  
//   var gender = {};

//   gender.gen = (String(table.getString(i,10)));

//   gender.items = table.findRows(String(gender.gen),10);
//   append(whatGender, gender);

//   console.log(gender);

//   maxwhatGender = 120000;
//   maxArtistColl = 3000;
//   minGender = 150000;
//   maxGender = 0;
//   minObjects = 150000;
//   maxObjects = 0;
//   minYear = null;
//   maxYear = null;


// for (var i=0; i<count; i++) {
//       //var artist = int(table.getString(i,11));

//       var gen = table.getString(i,10);
//       if(gen!=gender.gen){
//         var gender = {};
//         gender.gen = gen;
//         gender.items =[];
//         gender.items = table.findRows(String(gender.gen),10);
//         append(whatGender, gender);

//         console.log(whatGender);
        
//         // if(gender.items.length>maxwhatGender){
//         //   maxwhatGender = gender.items.length;
//         //   maxGender = whatGender.length-1;
//         // }
       
//      }
//   }
//   // console.log( "The " + (whatGender[maxwhatGender].gen) + "gender is most represented in the ModCont collection with " + whatGender[maxwhatGender].items.length + " items by artists of that gender" );
// };
///========


// ///=========THIS WORKS to get max number of items by one artist 
/// using display name column 11 
// 	var displayName = {};

//   displayName.artist = (String(table.getString(0,11)));

// 	displayName.items = table.findRows(String(displayName.artist),11);
// 	append(ArtistColl, displayName);

//   console.log(displayName);


//   maxArtistColl = 3000;
//   minGender = 150000;
//   maxGender = 0;
//   minObjects = 150000;
//   maxObjects = 0;
//   minYear = null;
//   maxYear = null;


// for (var i=0; i<count; i++) {
//       //var artist = int(table.getString(i,11));

//       var artist = table.getString(i,11);
//       if(artist!=displayName.artist){
//         var displayName = {};
//         displayName.artist = artist;
//         displayName.items =[];
//         displayName.items = table.findRows(String(displayName.artist),11);
//         append(ArtistColl, displayName);
        
//         if(displayName.items.length>maxArtistColl){
//           maxArtistColl = displayName.items.length;
//           maxArtist = ArtistColl.length-1;
//         }
       
//      }
//   }
//   console.log("The artist" + ArtistColl[maxArtistColl].artist + " that has the most objects has " + ArtistColl[maxArtistColl].items.length + " items by " + (String(maxArtistColl.displayName)));
// };

//============================

// ///=========THIS works to get max number of years
///using object bein date 17 
  var yearNow = {};
  yearNow.year = (int(table.getString(0,17)));
  yearNow.items = table.findRows(String(yearNow.year),17);
  append(allYears, yearNow);

  // minGender = 150000;
  // maxGender = 0;
  minObjects = 100000;
  maxObjects = 0;
  minYear = null;
  maxYear = null;


for (var i=0; i<count; i++) {
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
          minYear = allYears.length-1;
        }
     }
  }
 //  console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
 // console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " items.");
}


//////====================

 ///set a margin and display data

function displayData(){
	noStroke();
	fill(255,0,0);


	for(var i=0; i<allYears.length; i++){
		//console.log(i)
  //// years use map incoming value and range
    // allYears[allYears.length-1].year;
    //map function 
    var x = map(allYears[i].year,1800,allYears[allYears.length-1].year, margin, width-margin);
		
    // var x = map(allYears[i].year,1430,allYears[allYears.length-1].year, margin, width-margin);
    //write in console log where it is mapping that is relatively corresponding to
    console.log("mapping: " + allYears[i].year + "to: " + x);
    // var x = map(i,0,allYears.length, margin, width-margin);
		//rect(x,height/2,5,5);
  ///then do same for y height
	for(var j=0; j<allYears[i].items.length; j++){
		  var y= map(j,0,maxObjects,height-margin, margin);
      ///FILL BY GENDER
		  // fill(random(255),random(255),random(255))
      //fill('rgba(100%,0%,100%,0.5)');

    if (gender === 'm') {
      fill(154,205,50);
    } else if (gender === 'f') {
      fill(186,85,211);
    } else if (gender === 't') {
      fill(154,205,50);
    } else if (gender === 'u') {
      fill(154,205,50);
    } else if (gender === 'a') {
      fill(154,205,50);
    } else {
      fill(154,205,50);
    };





		  rect(x,y,1,1);
		//ellipse(x,y,2,2);
	}
  }

}


function drawLabels(){

	//x axis
	stroke(0);
	//just the lines
 	line(margin,height-margin,width-margin,height-margin);
  	noStroke();
  	textAlign(CENTER);

  // draw the sections and add text for each section
		//go throught the years
		for(var i=0; i<allYears.length; i+=5){
    var y = height-margin+30;
  x = map(allYears[i].year,1800,allYears[allYears.length-1].year, margin, width-margin);
    // x = map(i,0, allYears.length,margin, width-margin);
    noStroke();
    fill(0);
    text(allYears[i].year, x, y);
    stroke(0);
    line(x,y-12,x, y-30);
  }

  // label the whole axis
  textAlign(RIGHT);
  noStroke();
  textStyle(BOLD);
  text("Year", width-margin,height-margin+70);

//   // 2. Let's draw the y Axis
  stroke(0);
  line(margin,height-margin ,margin,margin);
  noStroke();
  textAlign(RIGHT);
  textStyle(NORMAL);

  for(var i=0; i<maxObjects; i+=50){
    var x = margin-20;
    y = map(i,0, maxObjects,height-margin, margin);
    noStroke();
    fill(0);
    text(i, x, y+5);
    stroke(0);
    line(x+5,y,x+20,y);
  }
  textStyle(BOLD);
  noStroke();
  text("Artworks", margin-60,margin);

//   // 3. Let's add the overall title
  textStyle(BOLD);
  noStroke();
  textAlign(LEFT);
  textSize(20);
  //textColor("#o2o5o5");
  text("Gender of Artists Represented in the Met Modern & Contemporary Art Collection", margin,margin-30);
  textSize(12);
  textStyle(NORMAL);
  text("1800 - 2017", margin,margin-15);
}










//============
	// var row = table.getRowCount();
	// var column = table.getColumnCount();

//=========
//works to read the table object in console log
// var tableObject = table.getObject();
// console.log(tableObject);
//=========
//to get all the rows
//warning: rows is an array of objects
// 	for (var i=0; i<row.length; i++) {
//   		rows[i].set('name', 'MetFullObjects');
  	
//   		
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