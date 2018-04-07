var table;
var gender = [];
var artist = [];
var ArtistColl = [];

var allYears = [];

var minYear, maxYear, mxYear, midYears, minObjects, maxObjects, maxArtist, maxArtistColl

   function preload(){
   // table = loadTable('assets/ModContGenderfinalazsort.csv','csv','header');
   // table = loadTable('assets/ModContGenderfinalgosort.csv','csv','header');  /////secondary sort gender, classification
   table = loadTable('assets/ModContGenderfinalgnoysort.csv','csv','header'); /////four sort gender, Artist Alpha Sort, classification, year
   console.log(table);

  }

    function setup(){
    createCanvas(windowWidth, windowHeight);
    // analyzeData();
    displayData();
  }

// ///=========max number of items by one artist 
/// using display name column 10

function displayData(){
  var rows = table.getRowCount();

  var displayName = {};
  displayName.artist = table.getString(0,12);  ////artist display name
  displayName.items = table.findRows(String(displayName.artist),12);
 append(ArtistColl, displayName);
 
  maxArtistColl = 0;
  maxArtist = null;
    
for (var k=0; k<rows; k++) {

      var artist = (String(table.getString(k,12)));
      if(artist!=displayName.artist){
        var displayName = {};
        displayName.artist = artist;
        displayName.items =[];
        displayName.items = table.findRows(String(displayName.artist),12);
        append(ArtistColl, displayName);
        // console.log(ArtistColl);
        if(displayName.items.length>maxArtistColl){
          maxArtistColl = displayName.items.length;
          maxArtist = ArtistColl.length-1;
          console.log(ArtistColl[maxArtist].items.length);
        }
     }

  }
console.log("The maximum number of artworks by one artist " + ArtistColl[maxArtist].artist + " is " + ArtistColl[maxArtist].items.length);

}
