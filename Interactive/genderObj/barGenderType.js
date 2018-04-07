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

var minYear, maxYear, mxYear, midYears, minObjects, maxObjects, maxArtist, maxArtistColl

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
     // p.analyzeData();
     p.analyzeGender();
     // p.displayData();
     // p.drawLabelsCh();
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
}
var myp5 = new p5(t, 'c2');
///========