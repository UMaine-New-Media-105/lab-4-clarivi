//Ex 1 - Write three functions to create a triangle, ellipse, and any other shape you choose. Ensure that you have defined the function so that you can provide sufficient parameters. You CANNOT use rect
//THEN
//Ex 2 - Modify the previous function to include fill and include parameters for RGB value in the function i.e. I can choose which color I want to filled with the function
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  createTriangle(30, 75, 58, 20, 85, 75,255,0,0);
  
  createEllipse(100,100,70,40,0,255,0);
  createEllipse(200,100,40,0,0,255,255);
  createPentagon(300,50,350,50,350,75,300,120,280,40,0,0,255)
}

function createTriangle(x1,y1,x2,y2,x3,y3,r,g,b){ 
  //Uses 3 coordinates to make a triangle
  fill(r,g,b);
  triangle(x1,y1,x2,y2,x3,y3);
}

function createEllipse(x,y,ellipseWidth,ellipseHeight,r,g,b){ 
  //uses x,y, width and height to make an ellipse
  if(ellipseHeight === 0){
    ellipseHeight = ellipseWidth;
  }
  fill(r,g,b);
  ellipse(x,y,ellipseWidth,ellipseHeight);
}

function createPentagon(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,r,g,b){ 
  // uses 5 coordinates to make a 5 sided shape
  fill(r,g,b);
  beginShape();
  vertex(x1,y1);
  vertex(x2,y2);
  vertex(x3,y3);
  vertex(x4,y4);
  vertex(x5,y5);
  vertex(x1,y1);
  endShape();
}
