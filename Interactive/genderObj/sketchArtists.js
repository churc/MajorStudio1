var artists;
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

var artistObject;

var items = [];
var uncert;
var sent = [];
var d;
var rSelect;

var KhandFont, fontReady = false;

var margin = 80;

///////faces in the collection

var w = function(p){


p.preload = function() {
    artists = p.loadJSON("assets/artists.json");
}

p.setup = function() {
  p.createCanvas(1440,900);
  p.showArtists();
  p.mouseClicked('span'); 
}

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
}

p.show = function() {
    // this.x = x;
    // this.y = y;

    $('span').click(function() {
    $('p#title').addClass('titleW');
    $('p#date').addClass('titleW');
    $('p#credit').addClass('titleW'); 
    $('p#desc').addClass('titleW'); //note hide weblabel text 
  })
}

p.mouseClicked = function(){
  p.show = (!p.show);
}
  
/////who the artists are
p.showArtists = function () {
  // p.imageMODE(p.CENTER);

  // p.scale(0.6);
  // p.image(img0, 720,790);
  var link0 = document.createElement('a');
  var canvas = document.getElementById('canvas-artists');
  link0.target = "blank";
  link0.href = "https://www.metmuseum.org";

  console.log(artists);

   for (var n = 0; n < Object.keys(artists).length; n++) {
      
      var artistObject = document.createElement('div');

      $(artistObject).addClass("artists");
      
          var artistImage = document.createElement('img');
          artistImage.src = artists[n].url;
          artistImage.addClass="artists";
          artistImage.id='artistImage'+n;
        
          var artistLink = document.createElement('a');
          artistLink.target = "blank";
          artistLink.href =  artists[n].url;
          artistLink.appendChild(artistImage);

          artistObject.appendChild(artistLink);
          canvas.appendChild(artistObject);
        // console.log('artist link', artistLink);
          console.log('artist object', artistObject);

      }

  }
}
var myp5 = new p5(w, 'canvas-artists');


//////artists and kind of objects
var whoWhat;

var b = function(p){


p.preload = function() {
  whoWhat = p.loadImage("assets/quant7_forweb_churchouse1-10-06.png");
}

p.setup = function() {
  p.createCanvas(1440,3400);
  p.showWhoWhat();
}

////show where mouse is 
p.draw = function() {
    console.log(p.mouseX, p.mouseY);
}

////display png
p.showWhoWhat = function(){
  p.scale(0.55);
  p.image(whoWhat, 250, 120, 2467,6358.5);  

  // p.image(whoWhat, p.mouseX, 0);

  }
}
var myp5 = new p5(b, 'canvas-artworks');


  // p.image(img1, 199,992);
  // p.image(img5, 1270,1820);
  // p.image(img17, 1300,1100);
  // p.scale(.7);
  // p.image(img6, 556,890);
  // p.image(img7, 2010,440);
  // p.image(img8, 1903,1137);
  // p.image(img9, 1011,555);
  // p.scale(.8);
  // p.image(img10, 1528,370);
  // p.image(img11, 247,662);
  // p.image(img12, 3100,1740);
  // p.image(img13, 2020,1285);
  // p.image(img14, 2751,1151);
  // p.image(img2, 2003,777);
  // p.image(img3, 820,554);
  // p.image(img4, 3480,1600);
  // p.image(img15, 469,210);
  // p.image(img16, 1045,240);
  // p.scale(1.3); 
  // p.image(img18, 2230,370);
  // p.image(img19, 2700,480);
 



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
        
          // var obj_url = document.createElement('a');
          // obj_url.target = "blank";
          // obj_url.href = "https://www.metmuseum.org" + items[n].media.images.primaryImage.objectUrl;
          // obj_url.appendChild(unc);

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



// var rSelect = document.createElement("button");

// function shuffleMyArray(){
//     var button = document.getElementById("rSelect");

//     $('.designed-image').remove()
//     shuffle(MetArray,true);
//     for (var r=0; r<MetArray.length; r++){
//       document.body.appendChild(MetArray[r]);
//     };

//     $('p').each(function(){
//         var uncert = $(this).text().replace(/uncertain/g,"<span>uncertain</span>");
//         $(this).html(uncert);
//       });

// button.onclick = function() {
//     shuffleMyArray();
//     };
//   };




// $("div#c2").append('<a href="' + "https://churc.github.io/MajorStudio1/MetProjects/gender" + "c2" + '</a>');

///////////load svg



