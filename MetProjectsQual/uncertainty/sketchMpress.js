var items = [];
var imag
var img

// var CaveatFont, fontReady = false;


function fontRead(){
      fontReady = true; 
    }

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
    items = loadJSON("assets/UncertainPub.JSON", showImg);
    // CaveatFont = loadFont('libraries/Caveat-Regular.ttf', fontRead);
}


function setup() {
  noCanvas();
  showImg();
  noLoop(); 
  mouseCl();
  img = createImg();
  img.mouseClicked(mouseCl);
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
	 };
};

function mouseCl(){
		// var windowObjectReference;
			if (mouseClicked == TRUE) {
		    var lk = this.Object.media.images.primaryImage.objectUrl;
		    window.location.href = ("https://www.metmuseum.org", lk);
			  } else { 
			  }
	};

// function mouseCl(){
		// var windowObjectReference;
// 			if (img.mouseClicked == TRUE) {
// 		    var lk = this.Object.media.images.primaryImage.objectUrl;
// 		    / var windowObjectReference = window.location.href("https://www.metmuseum.org"+ lk);
// 			  } else { 
// 			  }
// 	};





////https://www.metmuseum.org/art/collection/search/503155
////https://github.com/processing/p5.js/wiki/Beyond-the-canvas
