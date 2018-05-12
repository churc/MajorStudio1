var artists = [];
var artistInfo = []; 
var artistObject;


var KhandFont, fontReady = false;

var margin = 30;



//////========spatial intro exhibition entrance===========

// var whoWhat;

var b = function(p){

p.preload = function() {
  spatial1 = p.loadImage("assets/museum_extRev-01.png");
  KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
}

p.setup = function() {
  p.createCanvas(1440, 940);
  p.showSpatial1();
  p.noLoop();
}

////display png
p.showSpatial1 = function(){
  // p.scale(0.95);
  p.image(spatial1, 0, 225, 1004, 605);

  }
console.log("working1") 

}

var myp5 = new p5(b, "canvas-spatial1");


//////======spatial exhibition========



var l = function(p){

p.fontRead = function(){
      fontReady = true; 
    }

p.preload = function() {
  spatial2 = p.loadImage("assets/museum_intRev2-01.png");
  KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
}

p.setup = function() {
  p.createCanvas(1440,640);
  p.showSpatial2();
  p.noLoop();
}

////display png
p.showSpatial2 = function(){
  p.scale(0.328);

  p.image(spatial2, 0, 95, 3060, 1418);  
  
  }
console.log("working2") 
}
var myp5 = new p5(l, "canvas-spatial2");


////=========ar=========


//////======spatial intro exhibition========



var c = function(p){

p.fontRead = function(){
      fontReady = true; 
    }

p.preload = function() {
  spatial3 = p.loadImage("assets/museum_intRev2-mobile-blur-24-01.png");
  KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
}

p.setup = function() {
  p.createCanvas(1440,850);
  p.showSpatial2();
  p.noLoop();
}

////display png
p.showSpatial2 = function(){
  p.scale(0.079);

  p.image(spatial3, 0, 95, 12773, 5869);  
  
  }
console.log("working3") 
}
var myp5 = new p5(c, "canvas-spatial3");




