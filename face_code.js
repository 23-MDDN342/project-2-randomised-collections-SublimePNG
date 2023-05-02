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
function MAINFACE(faceWidth, jawWidth, chinLength, chinWidth, mouthY, mouthSize, noseWidth, noseLength, eyeX, eyeY, eyeWidth, eyeHeight, browY, browThick) {
 let facecolour= color(235, 231, 221)
 let featureColour= color(181, 178, 170)
  
 fill(facecolour)
  noStroke()
  //stroke(100)//temp
  //ears
rect(6.5+faceWidth,-1.5,2.5,5)
rect(-6.5-faceWidth,-1.5,-2.5,5)
 
//head
  beginShape();
  vertex(-2-chinWidth,10+chinLength);//chin L
  vertex(2+chinWidth,10+chinLength);//chin R
  vertex(6+jawWidth,6);//Jaw R
  vertex(7+faceWidth,2);
  vertex(7+faceWidth,-3);
  vertex(6,-7);
  vertex(3,-9);
  vertex(0,-9.5);
  vertex(-3,-9);
  vertex(-6,-7);
  vertex(-7-faceWidth,-3);
  vertex(-7-faceWidth,2);
  vertex(-6-jawWidth,6);//Jaw L
  endShape(CLOSE);
  
  fill (featureColour)
//eyes
  rect(2+eyeX-eyeWidth/2,-1.5+eyeY,3+eyeWidth,2+eyeHeight)
  rect(-2-eyeX+eyeWidth/2,-1.5+eyeY,-3-eyeWidth,2+eyeHeight)
//brows
  rect(1,-3-browY-browThick,5,1+browThick)
  rect(-1,-3-browY-browThick,-5,1+browThick)

//nose
rect(-1.5-noseWidth/2,-2,3+noseWidth,5+noseLength)
fill (1)

//beginShape();
vertex(0,3.5)
vertex(1,3)
vertex(2,3.2)
vertex(1.5,4)
vertex(0.8,4)
vertex(0,4.5)
vertex(-0.8,4)
vertex(-1.5,4)
vertex(-2,3.2)
vertex(-1.3,2)
//vertex(0,4.5)
//endShape(CLOSE);



fill (featureColour)
//mouth
rect(-3-mouthSize/2,4.5+mouthY,6+mouthSize,2+mouthSize)

  
  
}




