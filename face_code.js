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
function MAINFACE() {
  
 
  beginShape();
  vertex(-2,10);//chin L
  vertex(2,10);//chin R
  vertex(6,6);//Jaw R
  vertex(7,2);
  vertex(7,-3);
  vertex(6,-7);
  vertex(3,-9);
  vertex(0,-9.5);
  vertex(-3,-9);
  vertex(-6,-7);
  vertex(-7,-3);
  vertex(-7,2);
  vertex(-6,6);//Jaw L
  endShape(CLOSE);
//eyes
  rect(2,-1.5,3,2)
  rect(-2,-1.5,-3,2)
//brows
  rect(1,-3,5,1)
  rect(-1,-3,-5,1)

//nose
rect(-1.5,-2,3,5)
//mouth
rect(-3,4.5,6,2)
//ears
rect(6.5,-1.5,2.5,5)
rect(-6.5,-1.5,-2.5,5)

  
  
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
