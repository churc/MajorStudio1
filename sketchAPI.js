////api select particular random words
// var url;
// var metData;



function setup() {
  // put setup code here
  // createCanvas(800, 600); 
  noCanvas();
  // loadJSON('https://collectionapi.metmuseum.org/api/collection/v1/object/000001' + rangeObjects;
  // getapi();
  rita();
  // getRandomInt();
  console.log("hi"); 
}

function rita () {
  
   
  	
//   //We get a random number between 0 and 4000, by passing 4000 as an argument
//   //You could also use min to define a specific range, if you want to.

  
  //We concatenate the Met API url with our random number
    var api = 'https://collectionapi.metmuseum.org/api/collection/v1/object/';
    var units = (1,400000);


    var url = api + units;
  // var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/' + rangeObjects;

  // var metData;

  console.log(url);


  
//   //A p5 method to make a GET request 
//   //(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
	  httpGet(url, 'json', function(response) {
	    
	    metData = response;
	    console.log("getting MetData"+ metData);
    
    // for (var i=0; i<=url.length; i++) {

//     //Here we pick our response from the HTTP request, 
//     //and turn it into a RiTa object!
//     //The response is a JSON object, 
//     //with properties that we can pass 
//     //also to be specific in what we want

 	
//     // create a new object
    	// var uncertaintyLibrary = [];


		// var uncertainty = new Object();

		var uncertainty = {};
			
  		var uncertaintyRita = [];

  	//to get specific data in each object:
		 // uncertainty.id = metData.objectID;
		 // uncertainty.title = metData.titles.primaryTitle;
		 // uncertainty.description = metData.metadata.metaDescription;
		 // uncertainty.keywords = metData.metadata.metaKeywords;
		 // uncertainty.imageUrl = metData.media.images.primaryImage.imageUrl;

	//to convert data to a RiTa string
		 uncertainty.id = RiString(metData.objectID);
		 uncertainty.title = RiString(metData.titles.primaryTitle);
		 uncertainty.description = RiString(metData.metadata.metaDescription);
		 uncertainty.keywords = RiString(metData.metadata.metaKeywords);
		 uncertainty.imageUrl = RiString(metData.media.images.primaryImage.imageUrl);

	//returns object 
		 console.log(uncertainty);
		 console.log(uncertainty.description);

// var yearNow = {};
//     yearNow.year = (p.int(p.table.getString(0,17)));

//     yearNow.items = p.table.findRows(String(yearNow.year),17);
//     p.append(allYears, yearNow);

	/////GETS error
		 append(uncertaintyRita,uncertainty.words);

		 console.log("ritaUnc" +uncertaintyRita); 
      
      	// uncertaintyLibrary.push(uncertainty);
      // return uncertainty +"this is";
		// myRiString = new RiString("apple"); 
		// myRiString.indexOf("a"); 
	
			// uncertainty.push(uncertaintyLibrary)
		 	// uncertainty.append(uncertaintyLibrary)
		 // });			


////seems to work to select objects with uncertainty
   //       for (var j=0; j< uncertainty.length; j++) {
		 // if(uncertainty[j]==="uncertainty") {
		 // 		console.log("this has UC "+uncertainty)
		 // 		} else {
		 // 	}
		 // };
		 
///try uncertainty selection with while
			var n = 0
   			while (n==="uncertainty") {
		      console.log("this has UC "+n);
		      n++;
		 	}


			var uncert = new RiString(uncertainty);

			var uncertain = uncert.words();
    
    		// console.log("words  " +uncertain);

			// if (uncert.containsWord("Antoino"))
			for (var j = 0; j < uncertain.length; j++) {
      			if (uncertain[j] === 'Antoino') {
 
				// uncert.match("uncertainty").length==TRUE; 
				return uncertain[j];
			}

			console.log("words  " +uncertain);
		


		};
  });

};

// rita();

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