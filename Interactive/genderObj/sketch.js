var table;

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


   function preload(){
  //mytable is comma separated value "csv"
  //and has a header specifying the columns labels
   table = loadTable('assets/ModContGenderfinalazsort.csv','csv','header');
   console.log(table);

  }

    setup = function(){
    createCanvas(windowWidth, windowHeight);
    analyzeData();
    // getColumnMax();
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
  console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
  console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " items.");
}

// function getMaxColumn(){
  // date = table.getColumn(17);
  // console.log(date);
  // var col = table.getColumn(date);
  // // m is the maximum value
  // // purposefully start this very low
  // var m = 0;
  // console.log("hi");
  // for(var i =0; i< col.length; i++){
  //   console.log(col.length);
  //   // each value within the column 
  //   // that is higher than m replaces the previous value
  //   if(float(col[i])>m){
  //     m = float(col[i]);
  //     }
  //   }           
  
  // // after going through all rows, return the max value
  // return m;
  // console.log(m);

  // }
    


