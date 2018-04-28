var img0;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;
var img19;


var items = [];
var uncert;
var sent = [];
var d;
var MetArray = [];
var rSelect;

var KhandFont, fontReady = false;

var margin = 80;

///////faces in the collection

var w = function(p){


p.preload = function() {
    // items = loadJSON("assets/UncertainPub.json", showImg);
    img0 = p.loadImage('assets/Dove.png');
    img1 = p.loadImage('assets/Picasso.png');
    img2 = p.loadImage('assets/Matisse.png');
    img3 = p.loadImage('assets/Hartley.png');
    img4 = p.loadImage('assets/Scarpa.png');
    img5 = p.loadImage('assets/Albers.png');
    img6 = p.loadImage('assets/Klee.png');
    img7 = p.loadImage('assets/Marsh.png');
    img8 = p.loadImage('assets/Stirn.png');
    img9 = p.loadImage('assets/Albers.png');
    img10 = p.loadImage('assets/Liebes.png');
    img11 = p.loadImage('assets/OKeefe.png');
    img12 = p.loadImage('assets/Pape.png');
    img13 = p.loadImage('assets/Stolzl.png');
    img14 = p.loadImage('assets/Walkowitz.png');
    img15 = p.loadImage('assets/Weeber.png');
    img16 = p.loadImage('assets/Willers.png');
    img17 = p.loadImage('assets/Zeisel.png');
    img18 = p.loadImage('assets/Nurmesniemi.png');
    img19 = p.loadImage('assets/Reindl.png');
}

p.setup = function() {
  p.createCanvas(1440,830);
  // p.background(255,0,0);
  p.showArtists();
  // p.show();
  p.mouseClicked('span');
  p.noLoop(); 
}

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
}

// p.show = function() {
//     // this.x = x;
//     // this.y = y;

//     $('span').click(function() {
//     $('p#title').addClass('titleW');
//     $('p#date').addClass('titleW');
//     $('p#credit').addClass('titleW'); 
//     $('p#desc').addClass('titleW'); //note hide weblabel text 
//   })
// }

p.mouseClicked = function(){
  p.show = (!p.show);
}
  

p.showArtists = function () {
  // p.imageMODE(p.CENTER);

  p.scale(0.6);
  p.image(img0, 720,790);
  p.image(img1, 199,992);
  p.image(img5, 1270,1820);
  p.scale(.7);
  p.image(img6, 556,890);
  p.image(img7, 2010,440);
  p.image(img8, 1903,1137);
  p.image(img9, 1011,555);
  p.scale(.8);
  p.image(img10, 1528,370);
  p.image(img11, 177,562);
  p.image(img12, 3100,1620);
  p.image(img13, 2020,1285);
  p.image(img14, 2751,1151);
  p.image(img2, 2003,777);
  p.image(img3, 820,554);
  p.image(img4, 2580,1400);
  p.image(img15, 469,210);
  p.image(img16, 1045,240);
  p.scale(1.3);
  p.image(img17, 1800,1500);
  p.image(img18, 2230,370);
  p.image(img19, 1800,600);
 

  // p.image(img0, this.x, this.y);
//   for(var i=0; i <=20; i++){
//     var img = 'img'+i+'.png';
//   // p.image(img, this.x, this.y);
// }
//   p.image(img[i], this.x, this.y);
  console.log('hi');

//   var length = Object.keys(items).length-1;
//   console.log(length);

//     for (var n = 0; n < length; n++) {
      
//       var met_object = document.createElement('div');
//       met_object.id = "met_object"+n;

//       $(met_object).addClass("designed-image");
//       // console.log(met_object);
// ////image
//       if (!items[n].message) {
//           var unc = document.createElement('img');
//           unc.src = items[n].media.images.primaryImage.webImageUrl;
//           unc.addClass="designed-image";
//           unc.id='unc';
//           // unc.id='unc'+n;
        
//           var obj_url = document.createElement('a');
//           obj_url.target = "blank";
//           obj_url.href = "https://www.metmuseum.org" + items[n].media.images.primaryImage.objectUrl;
//           obj_url.appendChild(unc);

//           met_object.appendChild(obj_url);
//       };

////title
      // if (!items[n].message && items[n].titles.primaryTitle.includes("uncertain")) {
      //     var title = document.createElement('p');

      //     var selTitle = items[n];
      //     var lengthSel = Object.keys(selTitle).length-1; 
      //     // console.log(lengthSel);
      //     var text = "Title: " + selTitle.titles.primaryTitle;
      //     title.innerText += text;
      //     // title.innerText += more;
      //     title.addClass="uncertain-title";
      //     title.id = 'title';
      //     // title.id = 'title'+n;
      //     met_object.appendChild(title);
      //     // console.log(title);
      // };

// ////tombstone date
//       if (!items[n].message && items[n].tombstone["1"].text.includes("uncertain")) {
//           var date = document.createElement('p');
  
//           var selDate = items[n];
//           var lengthDate = Object.keys(selDate).length-1; 
//           // console.log(lengthDate);
          
//           var dateL = "Date: " + selDate.tombstone["1"].text;
//           date.innerText += dateL;
//           date.addClass="uncertain-date";
//           date.id = 'date';
//           // date.id = 'date'+n;
//           met_object.appendChild(date);
//           // console.log(date);
//       };

// ////tombstone date is in this array for some objects
//       if (!items[n].message && items[n].tombstone["0"].text.includes("uncertain")) {
//           var date = document.createElement('p');
          
//           var selDate = items[n];
//           var lengthDate = Object.keys(selDate).length-1; 
//           // console.log(lengthDate);
          
//           var dateL = "Date: " + selDate.tombstone["0"].text;
//           date.innerText += dateL;
//           date.addClass="uncertain-date";
//           date.id = 'date';
//           // date.id = 'date'+n;
//           met_object.appendChild(date);
//           // console.log(date);
//       };

// ////credit
//       if (!items[n].message && items[n].tombstone<=["6"]  && items[n].tombstone["6"].label.includes("Uncertain")) {
//           var credit = document.createElement('p');

//           var selCredit = items[n];
//           var lengthCredit = Object.keys(selCredit).length-1; 
//           // console.log(lengthCredit);
          
//           var creditL = "Credit: " + selCredit.tombstone["6"].label;
//           credit.innerText += creditL;
//           credit.addClass="uncertain-credit";
//           credit.id = 'credit';
//           // credit.id = 'credit'+n;

//           met_object.appendChild(credit);
//           console.log(credit);
//       };


////description label keep hidden - direct to Met website for web label text
      // if(!items[n].message && items[n].webLabel.text.includes("uncertain")){
      //     var desc = document.createElement('p');

      //     var selDesc = items[n];
      //     // var lengthSelD = Object.keys(selDesc).length-1;
      //     var textD = selDesc.webLabel.text;

      //       if(!items[n].message){
      //           var de = textD;
      //       ////split text into separate sentences
      //         var sent = de.split('.');
      //         // console.log(sent);
      //       ///////go through sentences and return each of those with uncertain
      //         for (var j=0; j<sent.length; j++){
      //           if (sent[j].includes("uncertain"||"Uncertain")){
      //             var d = sent[j];
      //             d = d.replace(/[<]br[^>]*[>]/gi,"");
      //            }      
      //         }
      //           desc.innerText += d;
      //           desc.addClass = "uncertain-des";
      //           desc.id = 'des';
      //           // desc.id = 'des'+n;
      //           met_object.appendChild(desc);

      //       };
      //     }
      //     document.body.appendChild(met_object);
          
//           MetArray.push(met_object);

//     };
//           // console.log(MetArray);

// ////span to isolate word uncertain - for styling  
//       $('p').each(function(){
//         var uncert = $(this).text().replace(/uncertain/g,"<span> uncertain </span>");
//         $(this).html(uncert);
//         // console.log(uncert);
//       });
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

}

var myp5 = new p5(w, 'c4');



// $("div#c2").append('<a href="' + "https://churc.github.io/MajorStudio1/MetProjects/gender" + "c2" + '</a>');




