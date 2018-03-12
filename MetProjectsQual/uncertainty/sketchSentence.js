var items = [];
var imag
var img

// var CaveatFont, fontReady = false;


// function fontRead(){
//       fontReady = true; 
//     }

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

$(document).ready(function(){
	$('desc').each(function() {
	    $(this).html($(this).text().split(/([\.\?!])(?= )/).map(
	      function(v){return '<span class=sentence>'+v+'</span>'}));
	});
 });      

	   $('.sentence').includes("uncertain")){
	var sent = return subString($(this).text());
		console.log(subString);

});




$('p').each(function() {
    				var sentences = $(this).text().replace(/([^.!?]*[^.!?\s][.!?]['"]?)(\s|$)/g, 
                		 '<span class="sentence">$1</span>$2');
    				$(this).html(sentences);
				console.log(sentences):
				
				$('.sentence').hover(function(){ 
					if(!items[n].message && items[n].webLabel.text.includes("uncertain")){
					
					var selDes = items[n];
					var textD = selDes.webLabel.text;
					if (textD){
						///find sentence with uncertain in it
						console.log(textD($(this).text()));
						
					}
					/////
					var textD = "Label: " + selDes.webLabel.text;
				var p = createP(textD)
				p.addClass("uncertain-des");

				p.id('des'+n);
				p.parent(wrapper);	
						console.log(selDes); 
	