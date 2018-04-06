var table;
var tableA; ////array
var groupedByType; 

var yrFemTotals = [];
var barTotals =[];
var yrMaleTotals = [];
var barTotals2 =[];


var FemaleTotal = [];
var TotalFemale = [];
var TotalMale = [];


var allYears = [];

var minDate, maxDate, date;


var margin = 80;

function collate(array, prop){
  return array.reduce(function(groups, item){
    const val = item[prop]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
}

   function preload(){
  //mytable is comma separated value "csv"
  //and has a header specifying the columns labels
   // table = loadTable('assets/ModContGenderfinalazsort.csv','csv','header');
   table = loadTable('assets/ModContGenderfinalgosort.csv','csv','header');
   console.log(table);

  }

    function setup(){
    createCanvas(windowWidth, windowHeight);
    analyzeData();
    displayData();
  }

function analyzeData(){
    var count = table.getRowCount();
    console.log(count);
    // console.log(table.getColumn(9)); ////name
    // console.log(table.getColumn(10));  ////gender
    // console.log(table.getColumn(13)); ////nationality
    objDate = table.getColumn(17); ////object begin date
    // console.log(table.getColumn(22)); ////classification

// get the two arrays of interest: depth and magnitude
  name = table.getColumn(9);
  gender = table.getColumn(10);
  nation = table.getColumn(13);
  date = table.getColumn(17);
  type = table.getColumn(22);
 
  // get minimum and maximum values for both
  // minDate = 0.0;
  // maxDate = getColumnMax(17);

// get the maximum value within a column
var count = table.getRowCount();
    
    var yearNow = {};
    yearNow.year = int(table.getString(0,17));
    yearNow.items = table.findRows(String(yearNow.year),17);
    append(allYears, yearNow);
    
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
  // console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
  // console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " items.");
}

///DISPLAY GENDER by object

  function displayData(){
    name = table.getColumn(9); ////name
    
     gender = table.getColumn(10);  ////gender
     objDate = table.getColumn(17); ////object begin date
     type = table.getColumn(22); ////classification
    // console.log(type);
    // console.log(table.getArray());

    tableA = table.getArray();

    groupedByType = collate(tableA,22);
    // console.log(groupedByType);

    var tableAkeys = Object.keys(groupedByType);
    console.log(tableAkeys);


    var sorted = {};
    //tableAkeys[j]
    //groupedByType[tableAkeys[j]]

    for(var j=0; j<tableAkeys.length; j++){

      sorted[tableAkeys[j]] = collate(groupedByType[tableAkeys[j]], 10)
    }
    console.log(sorted)
    // var gbtLength = groupedByType.length;
    // console.log(gbtLength);

  ////how to group by
  ///gender, type
  noStroke();
  fill(255,0,0);

  for(var i=0; i<allYears.length; i++){
//// years use map incoming value and range
    // console.log('thisisallYrs' + allYears[allYears.length-1].year);
////map function 
    // var x = map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, width-margin);
    var x = map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, 1341-margin);

    var totalFemaleArtistsPerBar = 0;
    var totalMaleArtistsPerBar = 0;

////THIS logs where it is mapping that is relatively corresponding to:
   // console.log("mapping: " + allYears[i].year + "to: " + x);

  ///then do same for y height
  for(var j=0; j<allYears[i].items.length; j++){
      var y= map(j,0,maxObjects,747-margin, margin);

///====FILL BY GENDER
   var gender = allYears[i].items[j].obj.Gender;
    if (gender === 'm') {
       fill(92,242,145,90);
       rect(x-1,y-1,3,2);
       // console.log('m');
       totalMaleArtistsPerBar = totalMaleArtistsPerBar + 1;

    } else if (gender === 'f') {
       fill(179,118,244,90);
       rect(x-1,y-1,3,2);
       // console.log('f');
      totalFemaleArtistsPerBar = totalFemaleArtistsPerBar + 1;
     // console.log(totalFemaleArtistsPerBar);
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
  // console.log(yrFemTotals);
  // console.log(yrMaleTotals);

}


  // }
    


