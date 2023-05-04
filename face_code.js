/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

function MAINFACE(faceWidth, jawWidth, chinLength, chinWidth, mouthY, mouthSize, noseWidth, noseLength, eyeX, eyeY, eyeWidth, eyeHeight, browY, browThick, headHeight, colourValue) {
 //let facecolour= color(204, 192, 169)
let shadowColour= color(158, 146, 122)
let tan = color (204, 192, 169)
let grey = color (174, 188, 191)
let green = color (100, 135, 109)

let tanD = color (158, 146, 122)
let greyD = color (110, 120, 122)
let greenD = color (70, 102, 79)
 
let bustColour =[tan,grey,green]
let bustShadow = [tanD,greyD,greenD]
 fill(bustColour[colourValue])
  noStroke()
  //stroke(100)//temp

/////////////////// NECK AND SHOULDERS ///////////////////////////
  push();
translate(-12.5,-32.5);
scale(0.13, 0.13);
//neck and shoulders shape
fill(bustColour[colourValue])
beginShape();
vertex(60-jawWidth*7,250)
vertex(130+jawWidth*7,250)
vertex(130+jawWidth*7,330-jawWidth*5)
vertex(180,350)
vertex(130,400)
vertex(60,400)
vertex(10,350)
vertex(60-jawWidth*7,330-jawWidth*5)
endShape(CLOSE);
//neck shadow
fill(bustShadow[colourValue])
beginShape();
vertex(60-jawWidth*7,250)
vertex(130+jawWidth*7,250)
vertex(130+jawWidth*7,330-jawWidth*5)
vertex(60,400)
vertex(10,350)
vertex(60-jawWidth*7,330-jawWidth*5)
endShape(CLOSE);
pop();

//////////////////////// EARS   ///////////////////
fill(bustShadow[colourValue])
beginShape()
vertex(-6.5-faceWidth,-1.5)
vertex(-8.5-faceWidth,-1.8)
vertex(-9.5-faceWidth,1)
vertex(-8-faceWidth,4.5)
vertex(-6-faceWidth,5)
vertex(-5-faceWidth,4)
endShape(CLOSE)

fill(bustColour[colourValue])
beginShape()
vertex(6.5+faceWidth,-1.5)
vertex(8.5+faceWidth,-1.8)
vertex(9.5+faceWidth,1)
vertex(8+faceWidth,4.5)
vertex(6+faceWidth,5)
vertex(5+faceWidth,4)
endShape(CLOSE)

 
/////////////////////// HEAD ////////////////////////
//headshape
  beginShape();
  vertex(-2-chinWidth,10+chinLength);//chin L
  vertex(-0,10.3+chinLength)
  vertex(2+chinWidth,10+chinLength);//chin R
  vertex(5.8+jawWidth,6.5);//Jaw R
  vertex(6.2+jawWidth,5.5);//Jaw R
  vertex(7+faceWidth,2);
  vertex(7+faceWidth,-3);
  vertex(6,-7-headHeight/2);
  vertex(3,-9-headHeight);
  vertex(0,-9.5-headHeight);
  vertex(-3,-9-headHeight);
  vertex(-6,-7-headHeight/2);
  vertex(-7-faceWidth,-3);
  vertex(-7-faceWidth,2);
  vertex(-6.2-jawWidth,5.5);//Jaw L
  vertex(-5.8-jawWidth,6.5);//Jaw L
  endShape(CLOSE);

  //head shadow
  fill(bustShadow[colourValue])
  beginShape();
  vertex(-5-faceWidth-jawWidth/3,2)
  vertex(-6-faceWidth,-2)
  vertex(-7-faceWidth,-3);
  vertex(-7-faceWidth,2);
  vertex(-6.2-jawWidth,5.5);//Jaw L
  vertex(-5.8-jawWidth,6.5);//Jaw L
  vertex(-2-chinWidth,10+chinLength);//chin L
  vertex(-0,10.3+chinLength)
  vertex(2+chinWidth,10+chinLength);//chin R
  vertex(1+chinWidth,9+chinLength)
  vertex(-1-chinWidth,8+chinLength)
  endShape(CLOSE)
  
  
//////////////////// EYES //////////////////////////
  

//left eye
fill (bustShadow[colourValue])
push();
translate(0-eyeX+eyeWidth/2,eyeY)
scale(1+eyeWidth/2,1+eyeHeight/2)

beginShape();
vertex(-1.8,-0.3)
vertex(-2.2,-1)
vertex(-1.5,-1.2)
vertex(-2.5,-1.5)
vertex(-4.5,-1.2)
vertex(-5.3,-0.5)
vertex(-4.5,-0)
vertex(-4.7,-0.5)
vertex(-4.3,-0.9)
vertex(-2.5,-0.9)
endShape(CLOSE);
//left eye bag
beginShape();
vertex(-1.2,0.4)
vertex(-3.5,0.8)
vertex(-3.5,2)
endShape(CLOSE);
pop();
//left pupil
ellipse(-3.3-eyeX-eyeWidth,-0.5+eyeY,1.5+eyeHeight)


//right eye
push();
translate(0+eyeX-eyeWidth/2,eyeY)
scale(1+eyeWidth/2,1+eyeHeight/2)
beginShape();
vertex(1.8,-0.3)
vertex(2.2,-1)
vertex(1.5,-1.2)
vertex(2.5,-1.5)
vertex(4.5,-1.2)
vertex(5.3,-0.5)
vertex(4.5,-0)
vertex(4.7,-0.5)
vertex(4.3,-0.9)
vertex(2.5,-0.9)
endShape(CLOSE);
//right eyebag
beginShape();
vertex(1.2,0.4)
vertex(3,0.8)
vertex(3.5,3)
vertex(2.5,2.5)
endShape(CLOSE);
pop();
//right pupil
ellipse(3.3+eyeX+eyeWidth,-0.5+eyeY,1.5+eyeHeight)




//////////////////// BROWS ///////////////////////////////
 //left brow
  fill (bustShadow[colourValue])
  push();
  translate(0,0-browY+browThick)
  scale(1,1+browThick/2)

  beginShape();
  vertex(-1,-2)
  vertex(-0.8,-2.9)
  vertex(-5,-3)
  vertex(-6,-2.5)
  endShape(CLOSE);
  pop();
//right brow
  push();
  translate(0,0-browY+browThick)
  scale(1,1+browThick/2)

  beginShape();
  vertex(1,-2)
  vertex(0.8,-2.9)
  vertex(5,-3)
  vertex(6,-2.5)
  endShape(CLOSE);
  pop();

/////////////////////// NOSE ////////////////////////////////////

push()
fill (bustShadow[colourValue])
translate(0,-0.5+noseLength);
scale(1+noseWidth,1+noseLength);

beginShape();
vertex(-0.7,3)
vertex(0,3.5)
vertex(0.7,3.1)
vertex(2,3.5)
vertex(1.5,4.1)
vertex(0.8,4)
vertex(0,4.5)
vertex(-0.8,4)
vertex(-1.5,4.1)
vertex(-2,3.5)
vertex(-1.4,2)
vertex(-1.5,1)
vertex(-1,-2)
vertex(-0.4,-0.9)
vertex(-0.4,2)
endShape(CLOSE);
pop();

///////////////////// MOUTH ////////////////////////

push()
fill (bustShadow[colourValue])

translate(0,mouthY-mouthSize+chinLength/2);
scale(1+mouthSize/4,1+mouthSize/4);
//upper lip
beginShape();
vertex(0,4.9)//
vertex(1,4.8)
vertex(3,5.5)
vertex(2,5.7)
vertex(1.1,5.5)
vertex(-1.1,5.5)
vertex(-2,5.7)
vertex(-3,5.5)
vertex(-1,4.8)
endShape(CLOSE)

//bottom lip
beginShape();
vertex(0.8,6.5)
vertex(1.5,6.3)
vertex(2.2,6.5)
vertex(1,7.3)
vertex(-1,7.5)
vertex(-2,7.8)
vertex(-2.8,7)
vertex(-1.9,6.3)
vertex(-0.8,6.5)
endShape(CLOSE)

pop()


  
  
}




