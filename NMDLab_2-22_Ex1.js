//Ex 1 - Write three functions to create a triangle, ellipse, and any other shape you choose. Ensure that you have defined the function so that you can provide sufficient parameters. You CANNOT use rect
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  createTriangle(30, 75, 58, 20, 85, 75);
  
  createEllipse(100,100,70,40);
  createEllipse(200,100,40,0);
  createPentagon(300,50,350,50,350,75,300,120,280,40)
}

function createTriangle(x1,y1,x2,y2,x3,y3){ 
  //Uses 3 coordinates to make a triangle
  triangle(x1,y1,x2,y2,x3,y3);
}

function createEllipse(x,y,ellipseWidth,ellipseHeight){ 
  //uses x,y, width and height to make an ellipse
  if(ellipseHeight === 0){
    ellipseHeight = ellipseWidth;
  }
  ellipse(x,y,ellipseWidth,ellipseHeight);
}

function createPentagon(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5){ 
  // uses 5 coordinates to make a 5 sided shape
  beginShape();
  vertex(x1,y1);
  vertex(x2,y2);
  vertex(x3,y3);
  vertex(x4,y4);
  vertex(x5,y5);
  vertex(x1,y1);
  endShape();
}
