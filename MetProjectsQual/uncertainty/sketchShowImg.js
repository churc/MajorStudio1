////WORKS TO load & show JSON images on browser
var items = [];
var imag
var KhandFont, fontReady = false;


function fontRead(){
      fontReady = true; 
    }

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  // items = loadTable("assets/testapi.JSON", data);
    items = loadJSON("assets/testapi.JSON", JSON);
    KhandFont = loadFont('libraries/Khand-Regular.ttf', fontRead);
}


function setup() {
  createCanvas(20,20);
  showImg();
  textFont('Khand');
	// var imag = document.createElement("img");
	// createImg('https://images.metmuseum.org/CRDImages/ad/web-large/194082.jpg');
	// createImg(items[7].media.images.primaryImage.webImageUrl);
	// items[7].media.images.primaryImage.webImageUrl

  // randomPlace();
  // transparent();
  console.log("hi"); 
}

function showImg() {
	
	var length = Object.keys(items).length-1;

		for(var n=0; n<length; n++){
 			
 			  // var imag = document.createElement("img");

 			  	if(!items[n].message){
 				// imag.src = items[n].media.images.primaryImage.imageUrl;
 				var img = createImg(items[n].media.images.primaryImage.imageUrl);
 				img.addClass("designed-image");
 				// imag.src.push(items[n].media.images.primaryImage.imageUrl);
 		
 			
 			// imag.id = 'unc' + n;
 			

 			// document.body.appendChild(imag);	
 			// console.log(items[n].media.images.primaryImage.webImageUrl);
 			console.log(n);
 			}
 			// console.log(items[n]);

	}		
 			
		console.log(items[7].media.images.primaryImage.webImageUrl);
		// console.log(items[n].media.images.primaryImage.webImageUrl);
		// console.log(items[n]);
		
		
	};
	
/////WORKS image on browser

// ////WORKS TO load & show JSON images on browser
// var items = [];
// var imag
// var KhandFont, fontReady = false;


// function fontRead(){
//       fontReady = true; 
//     }

// function preload() {
//   //my table is comma separated value "csv"
//   //and has a header specifying the columns labels
//   // items = loadTable("assets/testapi.JSON", data);
//     items = loadJSON("assets/testapi.JSON", JSON);
//     KhandFont = loadFont('libraries/Khand-Regular.ttf', fontRead);
// }


// function setup() {
//   createCanvas(20,20);
//   showImg();
//   textFont('Khand');
// 	// var imag = document.createElement("img");
// 	// createImg('https://images.metmuseum.org/CRDImages/ad/web-large/194082.jpg');
// 	// createImg(items[7].media.images.primaryImage.webImageUrl);
// 	// items[7].media.images.primaryImage.webImageUrl

//   // randomPlace();
//   // transparent();
//   console.log("hi"); 
// }

// function showImg() {
	
// 	var length = Object.keys(items).length-1;

// 		for(var n=0; n<length; n++){
 			
//  			  // var imag = document.createElement("img");

//  			  	if(!items[n].message){
//  				// imag.src = items[n].media.images.primaryImage.imageUrl;
//  				var img = createImg(items[n].media.images.primaryImage.imageUrl);
//  				img.addClass("designed-image");
//  				// imag.src.push(items[n].media.images.primaryImage.imageUrl);
 		
 			
//  			// imag.id = 'unc' + n;
 			

//  			// document.body.appendChild(imag);	
//  			// console.log(items[n].media.images.primaryImage.webImageUrl);
//  			console.log(n);
//  			}
//  			// console.log(items[n]);

// 	}		
 			
// 		console.log(items[7].media.images.primaryImage.webImageUrl);
// 		// console.log(items[n].media.images.primaryImage.webImageUrl);
// 		// console.log(items[n]);
		
		
// 	};


////TESTING THIS IN SEP js random placement of images on browser, changes on reload
// function randomPlace(){
//        var r = Math.floor( Math.random() * imag.length );
//                 return imag[r];
//                 console.log(r);
//           };
// 	}








////////////on sketchSelWords.js
//////sketch to select objects which contain specific words
//////loadJSON

// var json = {}; // new  JSON Object
// json.name = 'MetUncItems';

// var metData = [];
// var items = [];

// function preload() {
//   //my table is comma separated value "csv"
//   //and has a header specifying the columns labels
//   metData = loadTable("assets/test.JSON", data);
// }


// function setup() {
//   noCanvas();
//   findUnc();
//   randomPlace();
//   console.log("hi"); 
// }

// function findUnc () {

// // ///Met API url
// //     var api = 'https://collectionapi.metmuseum.org/api/collection/v1/object/';

// //   	// for (var i = 265000; i <265500; i++) {
// // 	for (var i = 448000; i <449000; i++) {
// //   		url = api+i;

// //   		httpGet(url, 'json', function(response) {	    
// // 		    metData.push(response);
// // 		});
// //   	}

// ////titles
// 	setTimeout(function() {
// 		// console.log(metData);

// 	// if(metData){
// 		console.log(metData.length);

// 		for (var j = 0; j < metData.length; j++) {
// 			console.log(metData[j].titles.primaryTitle);
// 			if (metData[j].titles.primaryTitle.includes("precarious")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("hesitant")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("uncertain")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("?")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("fragile")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("incomplete")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("falling")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("doubt")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 		}
// 	// }
// 	}, 90000);


// ////webLabel text
// 	setTimeout(function() {
// 		// console.log(metData);

// 	// if(metData){
// 		console.log(metData.length);
// 		for (var j = 0; j < metData.length; j++) {
// 			console.log(metData[j].webLabel.text);
// 			if (metData[j].webLabel.text.includes("precarious")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 				if (metData[j].webLabel.text.includes("hesitant")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("uncertain")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("?")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("fragile")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("incomplete")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("falling")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("doubt")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}

// 			if (metData[j].webLabel.text.includes("swirling")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 		}
// 	// }
// 	}, 90000);
// saveJSON(items, 'MetUncItems.json');

// };

///////put on separate sketch
////get url and show on browser
	// setTimeout(function(){

	// if(items){
	// 	console.log(items);

	// 	for(var n=0; n <items.length; n++){
 			
 // 			var imag = document.createElement("img");
 // 			imag.src = items[n].media.images.primaryImage.imageUrl;
 // 			imag.id = 'unc' + n;

 // 			document.body.appendChild(imag);	

	// 	}

		

	// }
	
	// }, 250000);













/////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\
////get api, go through each object, select those that 
////contain uncertain & related words 
///show their image urls on screen

// var json = {}; // new  JSON Object
// json.name = 'MetUncItems';

// var metData = [];
// var items = [];

// function setup() {
//   noCanvas();
//   findUnc();
//   randomPlace();
//   console.log("hi"); 
// }

// function findUnc () {

// ///Met API url
//     var api = 'https://collectionapi.metmuseum.org/api/collection/v1/object/';

//   	// for (var i = 265000; i <265500; i++) {
// 	for (var i = 448000; i <449000; i++) {
//   		url = api+i;

//   		httpGet(url, 'json', function(response) {	    
// 		    metData.push(response);
// 		});
//   	}

// ////titles
// 	setTimeout(function() {
// 		// console.log(metData);

// 	// if(metData){
// 		console.log(metData.length);

// 		for (var j = 0; j < metData.length; j++) {
// 			console.log(metData[j].titles.primaryTitle);
// 			if (metData[j].titles.primaryTitle.includes("precarious")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("hesitant")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("uncertain")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("fragile")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("incomplete")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("falling")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 			if (metData[j].titles.primaryTitle.includes("doubt")) {
// 				console.log(metData[j].titles.primaryTitle);
					
// 					var uncertainty_itemT = metData[j];
// 					items.push(uncertainty_itemT);
// 			}
// 		}
// 	// }
// 	}, 90000);


// ////webLabel text
// 	setTimeout(function() {
// 		// console.log(metData);

// 	// if(metData){
// 		console.log(metData.length);
// 		for (var j = 0; j < metData.length; j++) {
// 			console.log(metData[j].webLabel.text);
// 			if (metData[j].webLabel.text.includes("precarious")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 				if (metData[j].webLabel.text.includes("hesitant")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("uncertain")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("fragile")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("incomplete")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("falling")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 			if (metData[j].webLabel.text.includes("doubt")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}

// 			if (metData[j].webLabel.text.includes("swirling")){
// 				console.log(metData[j].webLabel.text);
				
// 					var uncertainty_itemW = metData[j];
// 					items.push(uncertainty_itemW);
// 			}
// 		}
// 	// }
// 	}, 90000);

// ////get url and show on browser
// 	setTimeout(function(){

// 	if(items){
// 		console.log(items);

// 		for(var n=0; n <items.length; n++){
 			
//  			var imag = document.createElement("img");
//  			imag.src = items[n].media.images.primaryImage.imageUrl;
//  			imag.id = 'unc' + n;

//  			document.body.appendChild(imag);	

// 		}

// 		saveJSON(items, 'MetUncItems.json');
// 	}
	
// 	}, 250000);
// };

////random placement of images on browser, changes on reload
// function randomPlace(){
//        var r = Math.floor( Math.random() * imag.length );
//                 return imag[r];
//                 console.log(r);
//           };
// 	}

////imagemagick 
// function transparent(){	
// 	$cmd = "dim.jpg -alpha on -channel a -evaluate set 50% results.jpg";			
// 	exec("convert $cmd unc0" );

// };
///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// //works to gets specific data in each object:
 // var uncertainty = {};

 // var uncertaintyRita = {};

	// 	 uncertainty.id = metData.objectID;
	// 	 uncertainty.title = metData.titles.primaryTitle;
	// 	 uncertainty.description = metData.metadata.metaDescription;
	// 	 uncertainty.keywords = metData.metadata.metaKeywords;
	// 	 uncertainty.imageUrl = metData.media.images.primaryImage.imageUrl;
		 
		 // console.log(uncertainty);
		 // console.log("item description:  "+uncertainty.description);

//////RiTa
////Here we pick our response from the HTTP request, 
////and turn it into a RiTa object!
// //The response is a JSON object, with properties that we can pass 

////works to return RiTa data object
		 // uncertaintyRita.id = RiString(metData.objectID);
		 // uncertaintyRita.title = RiString(metData.titles.primaryTitle);
		 // uncertaintyRita.description = RiString(metData.metadata.metaDescription);
		 // uncertaintyRita.keywords = RiString(metData.metadata.metaKeywords);
		 // uncertaintyRita.imageUrl = RiString(metData.media.images.primaryImage.imageUrl);

// 		 console.log(uncertaintyRita);


///////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function setup() {
//   // put setup code here
//   // createCanvas(800, 600); 
//   noCanvas();
//   // loadJSON('https://collectionapi.metmuseum.org/api/collection/v1/object/000001' + rangeObjects;
//   // getapi();
//   rita();
//   // getRandomInt();
//   console.log("hi"); 
// }

// function rita () {
      	
// //   //We get a random number between 0 and 4000, by passing 4000 as an argument
// //   //You could also use min to define a specific range, if you want to.

// ///We concatenate the Met API url with our random number
//     var api = 'https://collectionapi.metmuseum.org/api/collection/v1/object/';
//     var units = (1,400000);

//     var url = api + units;
//   // var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/' + rangeObjects;

//   console.log(url);


  
// //   //A p5 method to make a GET request 
// //   //(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
// 	  httpGet(url, 'json', function(response) {
	    
// 	    metData = response;
// 	    console.log("getting MetData");
   
//  ///HOW TO RUN THROUGH WHOLE API 
//     // for (var i=0; i<=url.length; i++) {


// //// IS this correct_create a new object
// ///or should this be an array?
// ////and how do Iget the id,title etc as objects	within an array


//  		var uncertainty = {};

//   		var uncertaintyRita = {};

//  //works to gets specific data in each object:
// 		 uncertainty.id = metData.objectID;
// 		 uncertainty.title = metData.titles.primaryTitle;
// 		 uncertainty.description = metData.metadata.metaDescription;
// 		 uncertainty.keywords = metData.metadata.metaKeywords;
// 		 uncertainty.imageUrl = metData.media.images.primaryImage.imageUrl;
		 
// 		 console.log(uncertainty);
// 		 console.log("item description:  "+uncertainty.description);

// //////RiTa
// //     //Here we pick our response from the HTTP request, 
// //     //and turn it into a RiTa object!
// //     //The response is a JSON object, 
// //     //with properties that we can pass 
// //     //also to be specific in what we want


// ////works to return RiTa data object
// 		 uncertaintyRita.id = RiString(metData.objectID);
// 		 uncertaintyRita.title = RiString(metData.titles.primaryTitle);
// 		 uncertaintyRita.description = RiString(metData.metadata.metaDescription);
// 		 uncertaintyRita.keywords = RiString(metData.metadata.metaKeywords);
// 		 uncertaintyRita.imageUrl = RiString(metData.media.images.primaryImage.imageUrl);

// 		 console.log(uncertaintyRita);
// //can select individual items
// 		 console.log(uncertaintyRita.title);


// // for (var i=0; i<count; i++) {
// //       var year = p.int(p.table.getString(i,17));
// //       if(year!=yearNow.year){
// //         var yearNow = {};
// //         yearNow.year = year;
// //         yearNow.items =[];
// //         yearNow.items = p.table.findRows(String(yearNow.year),17);
// //         p.append(allYears, yearNow);
        
// //         if(yearNow.items.length>maxObjects){
// //           maxObjects = yearNow.items.length;
// //           maxYear = allYears.length-1;
// //         }
 
			
// ////then select those which have uncertainty in their description
// ////seems to work to select objects with uncertainty
//    //       for (var j=0; j< uncertainty.length; j++) {
// 		 // if(uncertainty[j]==="uncertainty") {
// 		 // 		console.log("this has UC "+uncertainty)
// 		 // 		} else {
// 		 // 	}
// 		 // };
		 
// ///or do this with if
// 		// 	var n = "uncertainty";
//   //  			while (n==="uncertainty" || n==="uncertain"){
// 		//       console.log("this has UC "+n);
// 		//       append(uncertaintyRita,uncertainty[n]);
// 		//  	}

// 		// 	var uncert = new RiString(uncertainty);

// 		// 	var uncertain = uncert.words();
    
//   //   		// console.log("words  " +uncertain);

// 		// 	// if (uncert.containsWord("Antoino"))
// 		// 	for (var j = 0; j < uncertain.length; j++) {
//   //     			if (uncertain[j] === 'Antoino') {
 
// 		// 		// uncert.match("uncertainty").length==TRUE; 
// 		// 		return uncertain[j];
// 		// 	}

// 		// 	console.log("words  " +uncertain);
		


// 		// };
//   });

// };


////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\

////WORKS to get one random object from api 

// function setup() {
//   // put setup code here
//   // createCanvas(800, 600); 
//   noCanvas();

//   rita();

//   console.log("hi"); 
// }

// function rita () {
  
//     function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
  	
// }

// var rangeObjects = getRandomInt(4000);

// //We concatenate the Met API url with our random number


//   var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/' + rangeObjects;



// console.log("ooooo");

 
  
// //   //A p5 method to make a GET request 
// //   //(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
// 	  httpGet(url, 'json', function(response) {
	    
// 	    metData = response;
// 	    console.log("getting MetData"+ metData);
    
    

// //     //Here we pick our response from the HTTP request, 
// //     //and turn it into a RiTa object!
// //     //The response is a JSON object, 
// //     //with properties that we can pass 
// //     //also to be specific in what we want

 	
// //     // create a new object

// 		var uncertainty = new Object();

// 		 uncertainty.id = metData.objectId;
// 		 uncertainty.title = metData.titles.primaryTitle;
// 		 uncertainty.description = metData.metadata.metaDescription;
// 		 uncertainty.keywords = metData.metadata.metaKeywords;
// 		 uncertainty.imageUrl = metData.media.images.primaryImage.imageUrl;


//     console.log(uncertainty);
    

//   });
// };


////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////WORKS api gets first item in URL and returns object with specific information

// var url;
// var metData;


// function setup() {
//   // put setup code here

//   noCanvas();

//   getapi();
//   console.log("hi"); 
// }


// function getapi () {
  
//   //We concatenate the Met API url with our random number
//     var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/000001';
// console.log(url);

//   // var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/' + rangeObjects;
 
  
// //   //A p5 method to make a GET request 
// //   //(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
// 	  httpGet(url, 'json', function(response) {
	    
// 	    metData = response;
// 	    console.log("getting MetData");
    
    

// //     //Here we pick our response from the HTTP request, 
// //     //The response is a JSON object, 
// //     //with properties that we can pass 
// //     //also to be specific in what we want

 	
// //     // create a new object
// 		var uncertainty = new Object();

// 		 uncertainty.id = metData.objectId;
// 		 uncertainty.title = metData.titles.primaryTitle;
// 		 uncertainty.description = metData.metadata.metaDescription;
// 		 uncertainty.keywords = metData.metadata.metaKeywords;
// 		 uncertainty.imageUrl = metData.media.images.primaryImage.imageUrl;


//     console.log(uncertainty);
    

//   });
// };


//////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// function getapi () {
  
//   //We concatenate the Met API url with our random number
//     var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/000001';
// // console.log(url);

//   // var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/' + rangeObjects;
//   // var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/000001'
//   // console.log(url);

//   for (var i=0; i<url.length; i++) {
  
// //   //A p5 method to make a GET request 
// //   //(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
// // 	  httpGet(url, 'json', function(response) {
	    
// // 	    metData = response;
// // 	    console.log("getting MetData");
    
    

// //     //Here we pick our response from the HTTP request, 
// //     //and turn it into a RiTa object!
// //     //The response is a JSON object, 
// //     //with properties that we can pass 
// //     //also to be specific in what we want

 	
// //     // create a new object
// //   //   	var uncertaintyLibrary = [];
// // 		// var uncertainty = new Object();

// //     	var uncertaintyLibrary = new Object();

    
// 		var uncertainty = [];

// 		 uncertainty.id = metData.objectId;
// 		 uncertainty.title = metData.titles.primaryTitle;
// 		 uncertainty.description = metData.metadata.metaDescription;
// 		 uncertainty.imageUrl = metData.media.images.primaryImage.imageUrl;

// 		// var	uncertainty.id = metData.objectId;
// 		//  var uncertainty.title = metData.titles.primaryTitle;
// 		//  var uncertainty.description = metData.metadata.metaDescription;
// 		//  var uncertainty.imageUrl = metData.media.images.primaryImage.imageUrl;
		  
// 		 	uncertaintyLibrary.append(uncertainty,value);
// 		  //   uncertainty.id = metData.objectId[i];
// 		  //   uncertainty.title = metData.titles.primaryTitle[i];
// 		 	// uncertainty.description = metData.metadata.metaDescription[i];
// 		 	// uncertainty.imageUrl = metData.media.images.primaryImage.imageUrl[i];

// 		 	// uncertainty[i].push(uncertaintyLibrary)
// 		 });
    

//     console.log(uncertaintyLibrary);
    

//   };
// };


// rita();