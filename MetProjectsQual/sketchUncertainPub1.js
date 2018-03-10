////WORKS TO load & show JSON images on browser
var items = [];
var imag
// var KhandFont, fontReady = false;
// var CaveatFont, fontReady = false;


function fontRead(){
      fontReady = true; 
    }

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  // items = loadTable("assets/testapi.JSON", data);
    items = loadJSON("assets/UncertainPub.JSON", showImg);
    // CaveatFont = loadFont('libraries/Caveat-Regular.ttf', fontRead);
}


function setup() {
  createCanvas(0.2,0.2);
  showImg(); 
  shuffle(items,true);
  // canvas.mouseOver(iShow);
  // canvas.mouseOut(giveiTint);
}

function showImg() {
	// console.log(items);

	
	var length = Object.keys(items).length-1;

		for(var n=0; n<length; n++){
 			
 			  	if(!items[n].message){
 				var wrapper = createDiv('');
 				var img = createImg(items[n].media.images.primaryImage.imageUrl);
 				img.addClass("designed-image");
 				
 		
 				img.id('unc'+n);
 				img.parent(wrapper);
 

 			



 			if(!items[n].message && items[n].titles.primaryTitle.includes("uncertain")){
			
				var selTitle = items[n];
				var lengthSel = Object.keys(selTitle).length-1;		
				console.log(lengthSel);
				
				
				var text = "Title: " + selTitle.titles.primaryTitle;
				var p = createP(text)
				p.addClass("uncertain-title");
				
				p.id('title'+n);
				p.parent(wrapper);
				
			}
 		
			/////not working
				$('p').each(function() {
    				var sentences = $(this)
        				.text()
        				.replace(/([^.!?]*[^.!?\s][.!?]['"]?)(\s|$)/g, 
                		 '<span class="sentence">$1</span>$2');
    				$(this).html(sentences);
				
				
				$('.sentence').on(function(){ 
					if(!items[n].message && items[n].webLabel.text.includes("uncertain")){
					
					var selDes = items[n];
					var textD = selDes.webLabel.text;
					if (textD){
						///find sentence with uncertain in it
						console.log(textD($(this).text()));
						
					}
					
					// var textD = "Label: " + selDes.webLabel.text;
				// var p = createP(textD)
				// p.addClass("uncertain-des");

				// p.id('des'+n);
				// p.parent(wrapper);	
						// console.log(selDes); 
				}
		});

 			});
	 	}
	};
}
////not working
 		// function giveiTint() {
  	// 		 img.tint(255, 255);
			// }

			// function iShow() {
  	// 		 img.show();
			// }		



/////////////works for description

// 	if(!items[n].message && items[n].webLabel.text.includes("uncertain")){
			
				// var selDes = items[n];
				// var lengthSelD = Object.keys(selDes).length-1;		
				// // console.log(lengthSelD);
				// // console.log(selDes); 
				// var textD = "Label: " + selDes.webLabel.text;
				// var p = createP(textD)
				// p.addClass("uncertain-des");

				// p.id('des'+n);
				// p.parent(wrapper);

///////////////				







	
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