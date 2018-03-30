////WORKS TO load & show JSON images on browser
var items = [];
var imag;
var img;
var uncert;
var uncertain;
var sentence;
var sent = [];
var d;
var MetArray = [];

function preload() {
    items = loadJSON("assets/UncertainPub.json", showImg);
}


function setup() {
 // showImg();
  noCanvas();
  // var cnv = createCanvas(windowWidth, windowHeight);
  // cnv.style('display', 'block');
  show();
  mouseClicked('span');
  noLoop(); 
  // rita();
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function show() {
    $('span').click(function() {
    $('p#title').addClass('titleW');
    $('p#date').addClass('titleW');
    $('p#credit').addClass('titleW'); 
    // $('p#title').removeClass('titleW');
  })
//     else
}

function mouseClicked(){
  show = !show;
  // if('p#title' ==="#393636"){
  //   color="#ffffff";
  // }
}

// function rita () {
// 	function loadRandomImage(){
// 	var num = met_object.length;
	
// 	array = RiTa.randomOrdering(num);
// 	return array;
// 	}
// };


	

function showImg() {
	// console.log(items[413]);
	// console.log(items[2]);
	// console.log(items[0]);
	var length = Object.keys(items).length-1;
	// console.log(length);

		for (var n = 0; n < length; n++) {
 			
 			var met_object = document.createElement('div');
 			met_object.id = "met_object"+n;

 			$(met_object).addClass("designed-image");
 			// console.log(met_object);
////image
 			if (!items[n].message) {
	 				var unc = document.createElement('img');
	 				unc.src = items[n].media.images.primaryImage.webImageUrl;
	 				unc.addClass="designed-image";
	 				unc.id='unc';
	 				// unc.id='unc'+n;
	 			
					var obj_url = document.createElement('a');
					obj_url.target = "blank";
	 				obj_url.href = "https://www.metmuseum.org" + items[n].media.images.primaryImage.objectUrl;
	 				obj_url.appendChild(unc);

	 				met_object.appendChild(obj_url);

	 		}

////title
			if (!items[n].message && items[n].titles.primaryTitle.includes("uncertain")) {
					var title = document.createElement('p');

					var selTitle = items[n];
					var lengthSel = Object.keys(selTitle).length-1;	
					// console.log(lengthSel);
					var text = "Title: " + selTitle.titles.primaryTitle;
					title.innerText += text;
					// title.innerText += more;
					title.addClass="uncertain-title";
					title.id = 'title';
					// title.id = 'title'+n;
					met_object.appendChild(title);
					// console.log(title);
		};

 	
////tombstone date
	if (!items[n].message && items[n].tombstone["1"].text.includes("uncertain")) {
					var date = document.createElement('p');
	
					var selDate = items[n];
					var lengthDate = Object.keys(selDate).length-1;	
					// console.log(lengthDate);
					
					var dateL = "Date: " + selDate.tombstone["1"].text;
					date.innerText += dateL;
					date.addClass="uncertain-date";
					date.id = 'date';
					// date.id = 'date'+n;
					met_object.appendChild(date);
					// console.log(date);
			};

////tombstone date is in this array for some objects
	if (!items[n].message && items[n].tombstone["0"].text.includes("uncertain")) {
					var date = document.createElement('p');
					
					var selDate = items[n];
					var lengthDate = Object.keys(selDate).length-1;	
					// console.log(lengthDate);
					
					var dateL = "Date: " + selDate.tombstone["0"].text;
					date.innerText += dateL;
					date.addClass="uncertain-date";
					date.id = 'date';
					// date.id = 'date'+n;
					met_object.appendChild(date);
					// console.log(date);
			};

////credit
	if (!items[n].message && items[n].tombstone<=["6"]  && items[n].tombstone["6"].label.includes("Uncertain")) {
				
					var credit = document.createElement('p');

					var selCredit = items[n];
					var lengthCredit = Object.keys(selCredit).length-1;	
					// console.log(lengthCredit);
					
					var creditL = "Credit: " + selCredit.tombstone["6"].label;
					credit.innerText += creditL;
					credit.addClass="uncertain-credit";
					credit.id = 'credit';
					// credit.id = 'credit'+n;

					met_object.appendChild(credit);
					console.log(credit);

			};



////description label keep hidden - direct to Met website for web label text
			if(!items[n].message && items[n].webLabel.text.includes("uncertain")){
					var desc = document.createElement('p');

					var selDesc = items[n];
					// var lengthSelD = Object.keys(selDesc).length-1;
					var textD = selDesc.webLabel.text;

						if(!items[n].message){
								var de = textD;
								// var rs = new RiString(de);
							
						////split text into separate sentences
							var sent = de.split('.');
 							// if(n== 272){
 							// 	debugger
 							// }
							// console.log(sent);
							// console.log(sent.length);
						// /////go through sentences and return each of those with uncertain
							for (var j=0; j<sent.length; j++){
								if (sent[j].includes("uncertain")){
									var d = sent[j];
									// console.log(d);
								 }
											
							}
								desc.innerText += d;
								desc.addClass = "uncertain-des";
								desc.id = 'des';
								// desc.id = 'des'+n;
								met_object.appendChild(desc);
								// console.log(desc);
						};
					}
	 					 document.body.appendChild(met_object);
 						// console.log(met_object);

 						 MetArray.push(met_object); 
 						 
		};

		// console.log(MetArray);


////span to isolate word uncertain - for styling	
				$('p').each(function(){
    		var uncert = $(this).text().replace(/uncertain/g,"<span>uncertain</span>");
    		$(this).html(uncert);
    		// console.log(uncert);
			});

 };

function shuffleMyArray(){
		$('.designed-image').remove()
		shuffle(MetArray,true);
		for (var r=0; r<MetArray.length; r++){
			document.body.appendChild(MetArray[r]);

		}
		$('p').each(function(){
    		var uncert = $(this).text().replace(/uncertain/g,"<span>uncertain</span>");
    		$(this).html(uncert);
    		// console.log(uncert);
			});

}

////note don't show desc on visualization				
			// if(!items[n].message && items[n].webLabel.text.includes("uncertain")){
			
			// 		var desc = document.createElement('p');

			// 		var selDesc = items[n];
			// 		// var lengthSelD = Object.keys(selDesc).length-1;		
			// 		var textD = "Label: " + selDesc.webLabel.text;
			// 		// console.log(textD);
			// 		desc.innerText += textD;
			// 		desc.addClass = "uncertain-des";
			// 		desc.id = 'des'+n;
			// 		met_object.appendChild(desc);
			// 		console.log(desc);
//////////////





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