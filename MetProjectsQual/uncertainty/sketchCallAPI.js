var json = {}; // new  JSON Object
json.name = 'MetUncItems';
var metData = [];
var items = [];

var api = 'https://collectionapi.metmuseum.org/api/collection/v1/object/';

var id = 2000;

function setup() {
  noCanvas();
  // call this function once here
  callMetApi();
}

// call the met api
function callMetApi(){
	url = api+id;
	console.log(url);
	httpGet(url, 'json', false, function(response) {	    
		// save to the metdata array
		 metData.push(response);

		 // catch (response == "Not Found") {
		 // 	(if response=="Not Found") {
		 // 	// return Promise.resolve(response);
		 // 	return Promise.catch.reject(response("Not Found"));
   //  			 callback(true);
    	
		 // }  else

			// function (response, err, callback){
			// 	Promise.resolve("Not Found");
			// Promise.resolve(handler(url, id, source))
   //      .then(response => callback(null, response),
   //            failure => callback(failure));
   //   catch (exception) {
   //    callback(exception);
   //  }		
// }
		  if(id<3000){
		 	// increase the index by 1. This happens in the callback function
		 	id++;
		 	// we call the function itself again!
		 	callMetApi();

 	} else if (response == "not found"){

	try {
      Promise.resolve(handler(url, id, source))
        .then(response => callback(null, response),
              failure => callback(failure));
    } catch (exception) {
      callback(exception);
    }		
 		// // return null;
 		// callback(exception);
 	// } else if(json == null){
 	// } else if(id == null){
 	// 	function errorCallback(response){
		
  //     callback(exception);
  //   }
    		
 	// 	console.log("null");
}
		 else {
		 	// now we're done and can save the json file
		 	console.log("done");
		 	saveJSON(metData, 'test.json');
		 	console.log(metData);
		 }
		   
	});
}




		 // }else if (err){
			// 	return err;
			// 	}
   //      	try {
   //          val  = JSON.parse(body);
   //          console.log(body.success);
   //      }
   //      catch (e) {
   //          console.error("invalid json in file");
   //      }
    

		 // }else if(response === 'Not Found') {
		 // } else if(error) {
   //  			 return Promise.reject(new Error(400));
			// }
			// } else if (Promise.catch ("not found")) {
   //  			return Promise.resolve(response);
   //  			 callback(true);
			// }
		

		 // }else if(response == "object not found") {
   //          // console.log("object not found");
   //          // callback(true);
   //          return Promise.catch.reject(response("object not found"));

// 	else {
//   		return response.text().then(function(text) {
//     	return text ? JSON.parse(text) : {}
//   })
// }



