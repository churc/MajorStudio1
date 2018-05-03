var artists = [];
var artistInfo = []; 
var artistObject;


var KhandFont, fontReady = false;


var margin = 30;


//////gender wrapped bars zigzag

var wrappedBars;

var l = function(p){

p.fontRead = function(){
      fontReady = true; 
    }

p.preload = function() {
  wrappedBars = p.loadImage("assets/genderWrappedBars.png");
  KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
}

p.setup = function() {
  p.createCanvas(1440,900);
  p.showWrappedBars();
  p.noLoop();
}

////display png
p.showWrappedBars = function(){
  p.scale(0.5);
  p.image(wrappedBars, 80, 695, 2470, 704);  
  }
}

var myp5 = new p5(l, 'canvas-zigzag');


//////gender timeline

var genderTimeline;

var c = function(p){
  var margin = 30;

  p.fontRead = function(){
      fontReady = true; 
    }

p.preload = function() {
  genderTimeline = p.loadImage("assets/gender_timelineChart.png");
  KhandFont = p.loadFont('libraries/Khand-Regular.ttf', p.fontRead);
}

p.setup = function() {
  p.createCanvas(1440,810);
  p.showTimeline();
  p.noLoop();
}


////display png
p.showTimeline = function(){
  p.scale(0.5);
  p.image(genderTimeline, 45, 15, 2798,1426);  


  }
}

var myp5 = new p5(c, 'canvas-timeline');

//////artists and kind of objects

var whoWhat;

var b = function(p){

p.preload = function() {
  whoWhat = p.loadImage("assets/quant9_artistsMedium_churchouse-03.png");
}

p.setup = function() {
  p.createCanvas(1440,4550);
  p.showWhoWhat();
  p.noLoop();
}


////display png
p.showWhoWhat = function(){
  p.scale(0.5);
  p.translate(-20,675);
  p.image(whoWhat, 250, 165, 2430,7962);  
  }
}

var myp5 = new p5(b, 'canvas-artworks');







