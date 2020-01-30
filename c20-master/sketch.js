var r = mouseX;
var g = mouseY;
var b = mouseX;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
  background(r, g, b);
  if(mouseX > 255){
    r = 255;
    b = 60;
  } 
  if(mouseX < 255){
    r = mouseX;
    b = mouseX;
  }
  
}
  

function draw(){
  background(r, g, b);
  if(mouseX > 255){
    r = 255;
    b = 60;
  } 
  if(mouseX < 255){
    r = mouseX;
    b = mouseX;
  }
  if(mouseY > 255){
    g = 150;
  }
  if(mouseY < 255){
    g = mouseY;
  }
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}