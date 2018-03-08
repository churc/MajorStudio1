

var pub = [];
var items;


function preload() {
 
    items = loadJSON("assets/testapi.JSON");

}

function setup() {
  createCanvas(400, 400);
  getPublic();
  console.log("hi"); 
for(var i=0; i<items.length; i++){
            
        console.log("yes");
        var o = items[i];
        // var o = items[i].media.images.primaryImage.imageUrl;
               // pub[i] = getString(items.media.images.primaryImage.imageUrl);
        pub[i] = new Pub(o); 
    }

}



function getPublic() {

    // var pubItems = new Object;
    // setTimeout(function(){
    if(items){
        ///this works to see the items
         console.log(items);
         
        for(var i=0; i<pub.length; i++){
            var pub[i].display(100,100);
            console.log(pub.length);
            console.log("wrking");
            // var pubItems = items[i].media.images.primaryImage.imageUrl;
        // // pub[i] = getString(items.media.images.primaryImage.imageUrl);
           
           // pub.push(pubItems);
               
     // imag.src.push(items[n].media.images.primaryImage.imageUrl);
        
         //        if(pub=="imageUrl"){

         //    // now we're done and can save the json file
            
         //    saveJSON(pub, 'testP.json');
         //    console.log(pub);
         // }
         //  else if(pub==''){

         //    // now we're done and can save the json file
         //    console.log("none");
         //   };
        // console.log(pubItems);
        // console.log(pubItems.length);
    }
        console.log(pub);
    }        

};

// function Pub(){
 
//     this.id = items.objectId;
//     this.title = items.titles.primaryTitle;
//     this.description = items.metaDescription;
//     this.keywords = items.metaKeywords;
//     this.imageUrl = items.media.images.primaryImage.imageUrl;


// }

///////
// var items;
// var pub = [];


// function preload() {
 
//     items = loadJSON("assets/testapi.JSON");

// }

// function setup() {
//   createCanvas(400, 400);
//   // getPublic();
//   // draw();
 

//   for(var i=0; i<items.length; i++){
            
//         console.log("yes");
//         var o = items[i];
//         // var o = items[i].media.images.primaryImage.imageUrl;
//                // pub[i] = getString(items.media.images.primaryImage.imageUrl);
//         pub[i] = new Pub(o); 
//     }
//     noStroke();
// }



// function draw() {
//     // setTimeout(function(){
       
//     // if(items){
//         ///this works to see the items
//          // console.log(items);
//          background(0);
//          console.log(pub.length);
//         for(var n=0; n<pub.length; n++){
            
//                 console.log("wrking");
//                // var pubItems = items[n].media.images.primaryImage.imageUrl;
//                // // pub[i] = getString(items.media.images.primaryImage.imageUrl);
//                //  pub[n] = new Pub(pubItems);
//                pub[n].display(100,200);
//                 // imag.src.push(items[n].media.images.primaryImage.imageUrl);
        
            
//          //        if(pub=="imageUrl"){

//          //    // now we're done and can save the json file
            
//          //    saveJSON(pub, 'testP.json');
//          //    console.log(pub);
//          // }
//          //  else if(pub==''){

//          //    // now we're done and can save the json file
//          //    console.log("none");
//          //   };
//             console.log(pub);
//             console.log(pub.length);

           
            
// // };
// }
// }

// function Pub(){
 
//     this.id = items.objectId;
//     this.title = items.titles.primaryTitle;
//     this.description = items.metaDescription;
//     this.keywords = items.metaKeywords;
//     this.imageUrl = items.media.images.primaryImage.imageUrl;

//     this.display = function(x, y) {
//     var ratingGray = map(this.imageUrL);
//     push();
//     translate(x, y);
//     rotate(-QUARTER_PI);
//     fill(ratingGray);
//     text(this.title, 0, 0);
//     pop();
// }
// }
