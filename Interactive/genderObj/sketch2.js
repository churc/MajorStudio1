var table;
var tableA; ////array
var groupedByType; 
var sorted = {};

var yrFemTotals = [];
var barTotals =[];
var yrMaleTotals = [];
var barTotals2 =[];


var FemaleTotal = [];
var TotalFemale = [];
var TotalMale = [];


var allYears = [];

var minDate, maxDate, name, gender, date, type;


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


////group by type classification & gender, then by name

  function displayData(){
    gender = table.getColumn(10);  ////gender
    name = table.getColumn(12); ////name, Artist Alpha Sort
    date = table.getColumn(17); ////object begin date
    type = table.getColumn(22); ////classification
    
    // console.log(type);
    // console.log(table.getArray());

    tableA = table.getArray();
   
// =======THIS console logs all 2027 rows with a FEMALE artist 
    var female = table.findRows('f', 10);
    // console.log(female);

//=======THIS console logs all 10829 rows with a MALE artist
    var male = table.findRows('m', 10);
    // console.log(male);


//=======  group sort by artist by object type

    groupedByName = collate(tableA,12);  ////name - artist alpha sort
    console.log(groupedByName);
   
 ///object, artist alpha sort is keys  
   var tableAkeys = Object.keys(groupedByName);  
    // console.log(tableAkeys);
    console.log(tableAkeys.length);  ////3564 names

////iterate through object by keys and group by gender 
    var sorted = {};

    for(var j=0; j<tableAkeys.length; j++){
      sorted[tableAkeys[j]] = collate(groupedByName[tableAkeys[j]], 22)
    }
    console.log(sorted);

  noStroke();
  fill(255,0,0);

   var map = {};
    for (var i = 0; i <tableAkeys.length; i++) {
      // console.log(tableAkeys.length);
        var category = tableAkeys[i];
        // console.log(category);
        // console.log(category.length);

        if (!map[category]) 
            map[category] = [];
        map[category].push(sorted.tableAkeys);
        // map[category].push(list[i]);
    }
    return map;
    console.log(map);
    console.log(map.length);  ////list of the 3564 classifications/type



//=================== group sort gender object type
    groupedByType = collate(tableA,22);  ////classification
    console.log(groupedByType);

////object, type (classification) is keys 
    var tableAkeys = Object.keys(groupedByType);
    // console.log(tableAkeys);
    console.log(tableAkeys.length);  ////105 types

////iterate through object by keys and group by gender 
    var sorted = {};

    for(var j=0; j<tableAkeys.length; j++){
      sorted[tableAkeys[j]] = collate(groupedByType[tableAkeys[j]], 22)
    }
    console.log(sorted);



////list of classifications
  noStroke();
  fill(255,0,0);

   var map = {};
    for (var s = 0; s <tableAkeys.length; s++) {
      // console.log(tableAkeys.length);
        var category = tableAkeys[s];
        // console.log(category);
        // console.log(category.length);

        if (!map[category]) 
            map[category] = [];
        map[category].push(sorted.tableAkeys);
        // map[category].push(list[i]);
    }
    return map;
    console.log(map);
    console.log(map.length);  ////list of the 105 classifications/type
      


//   for(var i=0; i<tableAkeys.length; i++){
// //// classification use map incoming value and range
//     // console.log('thisisallYrs' + allYears[allYears.length-1].year);
// ////map function 
//     // var x = map(allYears[i].year,1850,allYears[allYears.length-1].year, margin, width-margin);
//     var x = map(tableAkeys[i].year,1850,tableAkeys[tableAkeys.length-1].year, margin, 1341-margin);

//     var totalFemaleArtistsPerBar = 0;
//     var totalMaleArtistsPerBar = 0;

// ////THIS logs where it is mapping that is relatively corresponding to:
//    // console.log("mapping: " + allYears[i].year + "to: " + x);

//   ///then do same for y height
//   for(var j=0; j<tableAkeys[i].items.length; j++){
//       var y= map(j,0,maxObjects,747-margin, margin);

///====FILL BY GENDER
//    var gender = tableAkeys[i].items[j].obj.Gender;
//     if (gender === 'm') {
//        fill(92,242,145,90);
//        rect(x-1,y-1,3,2);
//        // console.log('m');
//        totalMaleArtistsPerBar = totalMaleArtistsPerBar + 1;

//     } else if (gender === 'f') {
//        fill(179,118,244,90);
//        rect(x-1,y-1,3,2);
//        // console.log('f');
//       totalFemaleArtistsPerBar = totalFemaleArtistsPerBar + 1;
//      // console.log(totalFemaleArtistsPerBar);
//    }
    

  

// //THIS gets number of FEMALE artworks per BAR with total bar height
//   barTotals.push({barTotal: allYears[i].items, femaleTotal: totalFemaleArtistsPerBar});
// //THIS gets number of FEMALE artworks 
//   yrFemTotals.push({year: allYears[i].year, total: totalFemaleArtistsPerBar});

// //THIS gets number of MALE artworks per BAR with total bar height
//   barTotals2.push({barTotal: allYears[i].items, maleTotal: totalMaleArtistsPerBar});
// //THIS gets number of MALE artworks 
//   yrMaleTotals.push({year: allYears[i].year, total: totalMaleArtistsPerBar});
  
//   // console.log(yrFemTotals);
//   // console.log(yrMaleTotals);

}

////group by year
// function analyzeData(){
//     var count = table.getRowCount();
//     console.log(count);
// // get specific columns
//     name = table.getColumn(9);
//     gender = table.getColumn(10);
//     nation = table.getColumn(13);
//     date = table.getColumn(17);
//     type = table.getColumn(22);
 
// // get the max, min value within object begin date column
// var count = table.getRowCount();
    
//     var yearNow = {};
//     yearNow.year = int(table.getString(0,17));
//     yearNow.items = table.findRows(String(yearNow.year),17);
//     append(allYears, yearNow);
    
//     minObjects = 100000;
//     maxObjects = 0;
//     minYear = null;
//     maxYear = null;

//   for (var i=0; i<count; i++) {
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
//   // console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
//   // console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " items.");
// }
    


