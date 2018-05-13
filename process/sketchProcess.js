var KhandFont, fontReady = false;

var margin = 10;

var n = function(p){

// p.preload = function(){
//   artists = p.loadJSON("assets/artists.json", artists);

//     img0 = p.loadImage('assets/Dove.png');
//     img1 = p.loadImage('assets/Picasso.png');
//     img2 = p.loadImage('assets/Matisse.png');
//     img3 = p.loadImage('assets/Hartley.png');
//     img4 = p.loadImage('assets/Scarpa.png');
//     img5 = p.loadImage('assets/Albers.png');
//     img6 = p.loadImage('assets/Klee.png');
//     img7 = p.loadImage('assets/Marsh.png');
//     img8 = p.loadImage('assets/Stirn.png');
//     img9 = p.loadImage('assets/Pollock.png');
//     img10 = p.loadImage('assets/Liebes.png');
//     img11 = p.loadImage('assets/OKeeffe.png');
//     img12 = p.loadImage('assets/Pape.png');
//     img13 = p.loadImage('assets/Stolzl.png');
//     img14 = p.loadImage('assets/Walkowitz.png');
//     img15 = p.loadImage('assets/Weeber.png');
//     img16 = p.loadImage('assets/Willers.png');
//     img17 = p.loadImage('assets/Zeisel.png');
//     img18 = p.loadImage('assets/Nurmesniemi.png');
//     img19 = p.loadImage('assets/Reindl.png');
// }



// console.log(artists)
// ///////artists most collected 



// p.setup = function() {
//   p.createCanvas(1440,900);
//   // showArtists();
//   p.show();
//   p.mouseClicked('span');
//   p.artists(); 
//   p.label();
// }

// p.windowResized = function() {
//     p.resizeCanvas(p.windowWidth, p.windowHeight);
// }

// p.show = function() {
//     $('span').click(function() {
//     $('#text').addClass('titleA');
//     $('#number').addClass('titleA');
//     $('#medium').addClass('titleA'); 
//     $('#nationality').addClass('titleA'); 
//     $('#dates').addClass('titleA'); 
//   })
// }

// p.mouseClicked = function(){
//   p.show = (!p.show);
// }
  
// p.artists = function(){
//   p.scale(.5);
//   p.image(img0, 500,980);
//   p.image(img1, 199,992);
//   p.image(img5, 990,820);
//   p.image(img17, 1300,1250);
//   p.scale(.8);
//   p.image(img6, 556,890);
//   p.image(img7, 2010,440);
//   p.image(img8, 1903,1137);
//   p.image(img9, 1011,555);
//   p.scale(.9);
//   p.image(img10, 1528,370);
//   p.image(img11, 247,662);
//   p.image(img12, 3100,1740);
//   p.image(img13, 2020,1285);
//   p.image(img14, 2751,1151);
//   p.image(img2, 2003,777);
//   p.image(img3, 820,554);
//   p.image(img4, 3480,1600);
//   p.image(img15, 469,210);
//   p.image(img16, 1045,240);
//   p.scale(1.1); 
//   p.image(img18, 2230,370);
//   p.image(img19, 2700,480);

//   }

//   p.label = function(){
//   p.textFont('Khand');
//   p.textStyle(p.NORMAL);
//   p.noStroke();
//   p.textAlign(p.LEFT);
//   p.fill(102,102,102);
//   p.textSize(80);
//   p.text("Who are the most collected female and male artists?", 1600, 75);
//   }

   }

var myp5 = new p5( n, 'canvas-artists');

//////interactive-artworks

var zigzag;

var b = function(p){


p.preload = function() {
  zigzag = p.loadImage("assets/interactive_artworks.png");
  // metMap = p.loadImage("assets/Met_map.png");
}

p.setup = function() {
  p.createCanvas(2316/2, 790);
  p.showMap();
}



////display png
p.showMap = function(){
	p.scale(0.8)
  p.image(zigzag, 100, 60, 2316/2, 1836/2);  
  }
}

var myp5 = new p5(b, 'canvas-zigzag');


////////////==========///////////////////

//////Met collection

var met;

var g = function(p){


p.preload = function() {
  met = p.loadImage("assets/Met_collectionOnline.png");

}

p.setup = function() {
  p.createCanvas(1407, 560);
  p.showmet();
}



////display png
p.showmet = function(){
	// p.scale(0.8)
  p.image(met, 350, 100, 1407/2, 813/2);  
  }
}

var myp5 = new p5(g, 'canvas-met');



////////////==========///////////////////

//////zigzag

var zig;

var m = function(p){


p.preload = function() {
  zig = p.loadImage("assets/gender_zigzag2.png");
}

p.setup = function() {
  p.createCanvas(2456/2.4, 790/2.4);
  p.showzig();
}



////display png
p.showzig = function(){

  p.image(zig, 10, -10, 2456/2.4, 790/2.4);
  }
}

var myp5 = new p5(m, 'canvas-zig');


////////////==========///////////////////

//////qual

var qual;

var t = function(p){


p.preload = function() {
  qual = p.loadImage("assets/uncertainty_images_1.png");
}

p.setup = function() {
  // p.createCanvas(1980/3, 1080/3);
  p.noCanvas();
  p.showqual();
}



////display png
p.showqual = function(){

  p.image(qual, 0,0, 1980/3, 1080/3);
  }
}

var myp5 = new p5(t, 'canvas-qual');