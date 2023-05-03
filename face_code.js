/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function MAINFACE(faceWidth, jawWidth, chinLength, chinWidth, mouthY, mouthSize, noseWidth, noseLength, eyeX, eyeY, eyeWidth, eyeHeight, browY, browThick, headHeight) {
 let facecolour= color(204, 192, 169)
 let featureColour= color(158, 146, 122)
 let shadowColour= color(158, 146, 122)
  
 fill(facecolour)
  noStroke()
  //stroke(100)//temp
  //ears
rect(6.5+faceWidth,-1.5,2.5,5)
rect(-6.5-faceWidth,-1.5,-2.5,5)
 
//head
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

  fill(shadowColour)
  beginShape();
  vertex(-5-faceWidth,2)
  //vertex(-5.5-faceWidth,0)
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
  
  //fill (featureColour)
/////////////////eyes//////////////////////
  //rect(2+eyeX-eyeWidth/2,-1.5+eyeY,3+eyeWidth,2+eyeHeight)//R
  //rect(-2-eyeX+eyeWidth/2,-1.5+eyeY,-3-eyeWidth,2+eyeHeight)//R

  //left eye//
  fill (shadowColour)
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

beginShape();
vertex(-1.2,0.4)
vertex(-3.5,0.8)
vertex(-3.5,2)
endShape(CLOSE);
pop();

ellipse(-3.3-eyeX-eyeWidth,-0.5+eyeY,1.5+eyeHeight)


//right eye//
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

beginShape();
vertex(1.2,0.4)
vertex(3,0.8)
vertex(3.5,3)
vertex(2.5,2.5)
endShape(CLOSE);
pop();

ellipse(3.3+eyeX+eyeWidth,-0.5+eyeY,1.5+eyeHeight)




///////////////brows///////////////////////////////
//fill (featureColour)
  //rect(1,-3-browY-browThick,5,1+browThick)
  //rect(-1,-3-browY-browThick,-5,1+browThick)
  
  fill (shadowColour)
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

////////////////////nose////////////////////////////////////
//fill (featureColour)
//rect(-1.5-noseWidth/2,-2,3+noseWidth,5+noseLength)

push()
fill (shadowColour)

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



//fill (featureColour)
//////////////////mouth////////////////////

//rect(-3-mouthSize/2,4.5+mouthY,6+mouthSize,2+mouthSize)

push()
fill (shadowColour)

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




