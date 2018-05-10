var artists = [];
var artistInfo = []; 
var artistObject;


var KhandFont, fontReady = false;

var margin = 30;



//////========artists and kind of objects===========

// var whoWhat;

var b = function(p){

p.preload = function() {
  spatial1 = p.loadImage("assets/fashionMoMA3_crop-01.png");
  KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
}

p.setup = function() {
  p.createCanvas(1440,800);
  p.showSpatial1();
  p.noLoop();
}

////display png
p.showSpatial1 = function(){
  // p.scale(0.95);
  p.image(spatial1, 0, 225, 1015, 615);

  }
console.log("working2") 
// ////display png
// p.showWhoWhat = function(){
//   p.scale(0.5);
//   p.translate(-20,325);
//   p.image(whoWhat, 250, -80, 2430,7962);  
//   }
}

var myp5 = new p5(b, "canvas-spatial1");


//////======spatial intro exhibition========



var l = function(p){

p.fontRead = function(){
      fontReady = true; 
    }

p.preload = function() {
  spatial2 = p.loadImage("assets/emptyspace2-01.png");
  KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
}

p.setup = function() {
  p.createCanvas(1440,650);
  p.showSpatial2();
  p.noLoop();
}

////display png
p.showSpatial2 = function(){
  p.scale(0.55);

  p.image(spatial2, 0, 95, 1960, 1103);  
  
  }

}
var myp5 = new p5(l, "canvas-spatial2");





