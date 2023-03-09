//Ex 3 - Write a function that draws a sprite (avatar) of your choice. Ensure it has sufficient parameters to modify the position, size, and color. Also Include an if-else statement in the function so that when the mouse is pressed the disappears a second sprite of your choice appears on the canvas
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  angleMode(DEGREES)
  drawAbstract(100,100,1.3, 120,120,180)
}


function drawAbstract(posX, posY, shapeScale,r,g,b){
  if(mouseIsPressed){  //first sprite
   push();
   fill(r,g,b);
   translate(posX,posY)
   scale(shapeScale);
   triangle(75,50,125,100,100,100);
   triangle(225,50,175,100,200,100);
   ellipse(150,120,100);
   rotate(45)
   rect(165, -45, 50);
   pop();
  }
  else{   //second sprite  
   push();
    fill(r,g,b);
   translate(posX,posY);
   scale(shapeScale);
   ellipse(0,28,70,30)
   ellipse(0,25,70,30) 
   
   ellipse(0,15,30,20)
   
   ellipse(5,10,5,3)
   
   ellipse(-21,23,5)
   ellipse(-13,30,5)
   ellipse(0,32,5)
   ellipse(12,30,5)
   ellipse(21,23,5)
   pop();
  }
  
}
