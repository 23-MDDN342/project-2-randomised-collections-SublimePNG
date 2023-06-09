/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [62, 96, 120];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}
//averagedrandom code from class
function getAveragedRandom(min, max, n) {

  let sum = 0;
 
  for(let i=0; i<n; i++) {
 
  sum = sum + random(min, max);
 
  }
 
  return sum / n;
 
 }

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

/////////////////////// SETTING ///////////////////////////////////
  //blue bars
   fill(42, 62, 77)
  rect(0,450,960,50)
  rect(0,0,960,50)

  //plinth 1
push();
translate(0,0)
fill(158, 146, 122)
rect(45,410,100,100)

fill(204, 192, 169)
rect(138,410,7,100)
rect(124,410,7,100)
rect(110,410,7,100)
rect(96,410,7,100)
rect(82,410,7,100)

fill(158, 146, 122)
beginShape();
vertex(45,400)
vertex(145,400)
vertex(145,420)
vertex(45,460)
endShape(CLOSE);

fill(204, 192, 169)
rect(30,400,130,10)
ellipse(30,417.5,35)
ellipse(160,417.5,35)

fill(158, 146, 122)
ellipse(30,417.5,25)
ellipse(160,417.5,25)

fill(204, 192, 169)
ellipse(30,417.5,10)
ellipse(160,417.5,10)
pop();
//plinth 2
push();
translate(192,0)
fill(158, 146, 122)
rect(45,410,100,100)

fill(204, 192, 169)
rect(138,410,7,100)
rect(124,410,7,100)
rect(110,410,7,100)
rect(96,410,7,100)
rect(82,410,7,100)

fill(158, 146, 122)
beginShape();
vertex(45,400)
vertex(145,400)
vertex(145,420)
vertex(45,460)
endShape(CLOSE);

fill(204, 192, 169)
rect(30,400,130,10)
ellipse(30,417.5,35)
ellipse(160,417.5,35)

fill(158, 146, 122)
ellipse(30,417.5,25)
ellipse(160,417.5,25)

fill(204, 192, 169)
ellipse(30,417.5,10)
ellipse(160,417.5,10)
pop();
//plinth 3
push();
translate(384,0)
fill(158, 146, 122)
rect(45,410,100,100)

fill(204, 192, 169)
rect(138,410,7,100)
rect(124,410,7,100)
rect(110,410,7,100)
rect(96,410,7,100)
rect(82,410,7,100)

fill(158, 146, 122)
beginShape();
vertex(45,400)
vertex(145,400)
vertex(145,420)
vertex(45,460)
endShape(CLOSE);

fill(204, 192, 169)
rect(30,400,130,10)
ellipse(30,417.5,35)
ellipse(160,417.5,35)

fill(158, 146, 122)
ellipse(30,417.5,25)
ellipse(160,417.5,25)

fill(204, 192, 169)
ellipse(30,417.5,10)
ellipse(160,417.5,10)
pop();
///plinth 4
push();
translate(576,0)
fill(158, 146, 122)
rect(45,410,100,100)

fill(204, 192, 169)
rect(138,410,7,100)
rect(124,410,7,100)
rect(110,410,7,100)
rect(96,410,7,100)
rect(82,410,7,100)

fill(158, 146, 122)
beginShape();
vertex(45,400)
vertex(145,400)
vertex(145,420)
vertex(45,460)
endShape(CLOSE);

fill(204, 192, 169)
rect(30,400,130,10)
ellipse(30,417.5,35)
ellipse(160,417.5,35)

fill(158, 146, 122)
ellipse(30,417.5,25)
ellipse(160,417.5,25)

fill(204, 192, 169)
ellipse(30,417.5,10)
ellipse(160,417.5,10)
pop();
///plinth 5
push();
translate(768,0)
fill(158, 146, 122)
rect(45,410,100,100)

fill(204, 192, 169)
rect(138,410,7,100)
rect(124,410,7,100)
rect(110,410,7,100)
rect(96,410,7,100)
rect(82,410,7,100)

fill(158, 146, 122)
beginShape();
vertex(45,400)
vertex(145,400)
vertex(145,420)
vertex(45,460)
endShape(CLOSE);

fill(204, 192, 169)
rect(30,400,130,10)
ellipse(30,417.5,35)
ellipse(160,417.5,35)

fill(158, 146, 122)
ellipse(30,417.5,25)
ellipse(160,417.5,25)

fill(204, 192, 169)
ellipse(30,417.5,10)
ellipse(160,417.5,10)
pop();

///////////////////////// FACES  //////////////////////////////



// draw a row of 5 faces
  let w = canvasWidth / 5;
  let h = canvasHeight / 1;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
     
   
        push();
        translate(x, y);
        scale(7.7, 7.7);
     
        //Parameters
        let faceWidth = random(-0.5,0.5);
        let jawWidth = random(-2,2);
        let chinWidth = random(-1, 2);
        let chinLength = random(0,1);
        
        let mouthY = random(-0.7,1.5);
        let mouthSize = random(-1,1);
        
        let noseWidth = random (-0.5,0.5);
        let noseLength = random (-0.3,0.3);

        let eyeX = random (-.03,0.3);
        let eyeY = random(-1,1);
        let eyeWidth= random(-0.5,0.5);
        let eyeHeight = random(-0.5,0.5);

        let browY = random(-1,1);
        let browThick = random(-0.5,1);

        let headHeight = random(-1,1);

        let SpinnerValue = random(0,100)
        let randomFaceColour = int(random(0,3))


      //face colour picker
        if(SpinnerValue < 50){
          randomFaceColour = 0;
        }
        else{
          randomFaceColour = int(random(1,3))
        }
    
  
        MAINFACE(faceWidth, jawWidth, chinWidth, chinLength, mouthY, mouthSize, noseWidth, noseLength, eyeX, eyeY, eyeWidth, eyeHeight, browY, browThick, headHeight, randomFaceColour);
        pop();
        
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
