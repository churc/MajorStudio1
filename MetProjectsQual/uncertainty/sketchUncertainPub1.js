////WORKS TO load & show JSON images on browser
var items = [];
var imag
var img


function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
    items = loadJSON("assets/UncertainPub.JSON", showImg);
    
}


function setup() {
  noCanvas();
  showImg();
  noLoop(); 
  // img = createImg();
  // img.mouseClicked(mouseCl);
}

function showImg() {
	console.log(items);
	
	var length = Object.keys(items).length-1;
	console.log(length);

		for (var n = 0; n < length; n++) {
 			
 			var met_object = document.createElement('div');
 			met_object.id = "met_object"+n;

 			met_object.addClass="designed-image";

 			// console.log(met_object);


 			if (!items[n].message) {

	 				var unc = document.createElement('img');

	 				unc.src = items[n].media.images.primaryImage.webImageUrl;

	 				unc.addClass="designed-image";
	 				
	 				unc.id='unc'+n;
	 			
	 				met_object.appendChild(unc);

	 			
	 
	 		};

			if (!items[n].message && items[n].titles.primaryTitle.includes("uncertain")) {
				
					var title = document.createElement('p');

					
					var selTitle = items[n];
					////to get the length
					// var lengthSel = Object.keys(selTitle).length-1;	
					// console.log(lengthSel);
					
					var text = "Title: " + selTitle.titles.primaryTitle;

					title.innerText += text;
					// title.innerText += more stuff if you want;

					title.addClass="uncertain-title";
					
					title.id = 'title'+n;


					met_object.appendChild(title);

					// console.log(title);

			};

				
			if(!items[n].message && items[n].webLabel.text.includes("uncertain")){
			
					var desc = document.createElement('p');

					var selDesc = items[n];
					// var lengthSelD = Object.keys(selDesc).length-1;		
					// console.log(lengthSelD);
					 
					var textD = "Label: " + selDesc.webLabel.text;

					desc.innerText += textD;
					

					desc.addClass = "uncertain-des";

					desc.id = 'des'+n;
					
					met_object.appendChild(desc);

					// console.log(desc);


			};

	 		document.body.appendChild(met_object);
 
		};

 	};

		
	// function mouseCl(){
	// 	// var windowObjectReference;
	// 		if (mouseClicked == TRUE) {
	// 	    var lk = this.Object.media.images.primaryImage.objectUrl;
	// 	    window.location.href = ("https://www.metmuseum.org", lk);
	// 		  } else { 
	// 		  }
	// };




			/////not working
				// $('p').each(function() {
    // 				var sentences = $(this).text().replace(/([^.!?]*[^.!?\s][.!?]['"]?)(\s|$)/g, 
    //             		 '<span class="sentence">$1</span>$2');
    // 				$(this).html(sentences);
				// console.log(sentences):
				
				// $('.sentence').on(function(){ 
				// 	if(!items[n].message && items[n].webLabel.text.includes("uncertain")){
					
				// 	var selDes = items[n];
				// 	var textD = selDes.webLabel.text;
				// 	if (textD){
				// 		///find sentence with uncertain in it
				// 		console.log(textD($(this).text()));
						
				// 	}
					/////
					// var textD = "Label: " + selDes.webLabel.text;
				// var p = createP(textD)
				// p.addClass("uncertain-des");

				// p.id('des'+n);
				// p.parent(wrapper);	
						// console.log(selDes); 









	
// Object.keys(n).forEach(function(key, index){
 			// 	items[n][key].includes("uncertain")
 			// })
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