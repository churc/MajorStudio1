var artists = [];
var artistInfo = []; 
var artistObject;

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


var KhandFont, fontReady = false;

var margin = 30;

var w = function(p){

p.preload = function(){
  artists = p.loadJSON("assets/artists.json", artists);

    img0 = p.loadImage('assets/Dove.png');
    img1 = p.loadImage('assets/Picasso.png');
    img2 = p.loadImage('assets/Matisse.png');
    img3 = p.loadImage('assets/Hartley.png');
    img4 = p.loadImage('assets/Scarpa.png');
    img5 = p.loadImage('assets/Albers.png');
    img6 = p.loadImage('assets/Klee.png');
    img7 = p.loadImage('assets/Marsh.png');
    img8 = p.loadImage('assets/Stirn.png');
    img9 = p.loadImage('assets/Pollock.png');
    img10 = p.loadImage('assets/Liebes.png');
    img11 = p.loadImage('assets/OKeeffe.png');
    img12 = p.loadImage('assets/Pape.png');
    img13 = p.loadImage('assets/Stolzl.png');
    img14 = p.loadImage('assets/Walkowitz.png');
    img15 = p.loadImage('assets/Weeber.png');
    img16 = p.loadImage('assets/Willers.png');
    img17 = p.loadImage('assets/Zeisel.png');
    img18 = p.loadImage('assets/Nurmesniemi.png');
    img19 = p.loadImage('assets/Reindl.png');
}



console.log(artists)
///////artists most collected 



p.setup = function() {
  p.createCanvas(1440,900);
  // showArtists();
  p.show();
  p.mouseClicked('span');
  p.artists(); 
  p.label();
}

p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
}

p.show = function() {
    $('span').click(function() {
    $('#text').addClass('titleA');
    $('#number').addClass('titleA');
    $('#medium').addClass('titleA'); 
    $('#nationality').addClass('titleA'); 
    $('#dates').addClass('titleA'); 
  })
}

p.mouseClicked = function(){
  p.show = (!p.show);
}
  
p.artists = function(){
  p.scale(.5);
  p.image(img0, 500,980);
  p.image(img1, 199,992);
  p.image(img5, 990,820);
  p.image(img17, 1300,1250);
  p.scale(.8);
  p.image(img6, 556,890);
  p.image(img7, 2010,440);
  p.image(img8, 1903,1137);
  p.image(img9, 1011,555);
  p.scale(.9);
  p.image(img10, 1528,370);
  p.image(img11, 247,662);
  p.image(img12, 3100,1740);
  p.image(img13, 2020,1285);
  p.image(img14, 2751,1151);
  p.image(img2, 2003,777);
  p.image(img3, 820,554);
  p.image(img4, 3480,1600);
  p.image(img15, 469,210);
  p.image(img16, 1045,240);
  p.scale(1.1); 
  p.image(img18, 2230,370);
  p.image(img19, 2700,480);

  }

  p.label = function(){
  p.textFont('Khand');
  p.textStyle(p.NORMAL);
  p.noStroke();
  p.textAlign(p.LEFT);
  p.fill(102,102,102);
  p.textSize(80);
  p.text("Who are the most collected female and male artists?", 1600, 75);
  }
/////who the artists are
p.showArtists = function() {
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
        //   canvas.appendChild(artistObject);
        // // console.log('artist link', artistLink);
        //   console.log('artist object', artistObject);


  ////name, artwork number, medium, nationality, date
  /////name
          var name = document.createElement('p');

          var info = artists[n];
          var lengthInfo = Object.keys(info).length;

          var nameInfo = artists[n].name;
          name.innerText += nameInfo;
          name.addClass="text";
          name.id = "text";
          artistObject.appendChild(name);

//////artwork number
          var number = document.createElement('p');

          var infoNumber = artists[n];
          var lengthNumber = Object.keys(infoNumber).length;

          var total = "Total number of artworks: " + artists[n].artworks;
          number.innerText += total;
          number.addClass="number";
          number.id = "number";
          artistObject.appendChild(number);

//////artwork medium
          var medium = document.createElement('p');

          var infoMedium = artists[n];
          var lengthMedium = Object.keys(infoMedium).length;

          // var media = artists[n].medium.text;
          var media = artists[n].medium;
          medium.innerText += media;
          medium.addClass="medium";
          medium.id = "medium";
          artistObject.appendChild(medium);

 ////// nationality        
          var nationality = document.createElement('p');

          var infoBorn = artists[n];
          var lengthBorn = Object.keys(infoBorn).length;

          // var born = artists[n].nationality.text;
          var born = artists[n].nationality;
          nationality.innerText += born;
          nationality.addClass="nationality";
          nationality.id = "nationality";
          artistObject.appendChild(nationality);

//////dates
          
          var dates = document.createElement('p');

          var infoDates = artists[n];
          var lengthDates = Object.keys(infoDates).length;

          // var born = artists[n].dates.text;
          var date = artists[n].dates;
          dates.innerText += date;
          dates.addClass="dates";
          dates.id = "dates";
          artistObject.appendChild(dates);

////attach to canvas
          canvas.appendChild(artistObject);
        // console.log('artist link', artistLink);
          console.log('artist object', artistObject);

          artistInfo.push(artistObject);
        


      }

  }
}
var myp5 = new p5( w, 'canvas-artists');


//////artists and kind of objects

var whoWhat;

var b = function(p){


p.preload = function() {
  whoWhat = p.loadImage("assets/quant9_forwebsvg_churchouse-01.png");
}

p.setup = function() {
  p.createCanvas(1440,4200);
  p.showWhoWhat();
}

////show where mouse is 
p.draw = function() {
    console.log(p.mouseX, p.mouseY);
}

////display png
p.showWhoWhat = function(){
  p.scale(0.5);
  p.image(whoWhat, 250, 120, 5064/2,15618/2);  

  // p.image(whoWhat, p.mouseX, 0);

  }
}

var myp5 = new p5(b, 'canvas-artworks');
