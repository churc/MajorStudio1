var items = [];
var uncert;
var sent = [];
var d;
var MetArray = [];
var rSelect;

function preload() {
    items = loadJSON("assets/UncertainPub.json", showImg);
}


function setup() {
  noCanvas();
  show();
  mouseClicked('span');
  noLoop(); 
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function show() {
    $('span').click(function() {
    $('p#title').addClass('titleW');
    $('p#date').addClass('titleW');
    $('p#credit').addClass('titleW'); 
    $('p#desc').addClass('titleW'); //note hide weblabel text 
  })
}

function mouseClicked(){
  show = !show;
}
	

function showImg() {

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
	 		};

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
						////split text into separate sentences
							var sent = de.split('.');
							// console.log(sent);
						///////go through sentences and return each of those with uncertain
							for (var j=0; j<sent.length; j++){
								if (sent[j].includes("uncertain"||"Uncertain")){
									var d = sent[j];
									d = d.replace(/[<]br[^>]*[>]/gi,"");
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
    		var uncert = $(this).text().replace(/uncertain/g,"<span> uncertain </span>");
    		$(this).html(uncert);
    		// console.log(uncert);
			});
 };


var rSelect = document.createElement("button");

function shuffleMyArray(){
	  var button = document.getElementById("rSelect");

		$('.designed-image').remove()
		shuffle(MetArray,true);
		for (var r=0; r<MetArray.length; r++){
			document.body.appendChild(MetArray[r]);
		};

		$('p').each(function(){
    		var uncert = $(this).text().replace(/uncertain/g,"<span>uncertain</span>");
    		$(this).html(uncert);
			});

button.onclick = function() {
		shuffleMyArray();
	};
};








