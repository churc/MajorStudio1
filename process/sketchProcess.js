var KhandFont, fontReady = false;

var margin = 10;


//////interactive-artworks

var zigzag;

var b = function(p){


p.preload = function() {
  zigzag = p.loadImage("assets/interactive_artworks.png");
}

p.setup = function() {
  p.createCanvas(2316/2, 770);
  p.showMap();
}



////display png
p.showMap = function(){
	p.scale(0.8)
  p.image(zigzag, 100, 40, 2316/2, 1836/2);  
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
  p.image(met, 350, 10, 1407/2, 813/2);  
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
  p.createCanvas(2456/2.1, 790/2);
  p.showzig();
}



////display png
p.showzig = function(){

  p.image(zig, 0, -18, 2456/2.5, 790/2.5);
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

  p.image(qual, -15, 0, 1980/3.1, 1077/3.1);
  }
}

var myp5 = new p5(t, 'canvas-qual');