/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

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

// global variables for colors
const bg_color1 = [77, 113, 135]

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

  // draw a 7x3 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 3;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
       push();
       translate(x, y);
       scale(5, 5);
        
        
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

        if(SpinnerValue < 50){
          randomFaceColour = 0;
        }
        else{
          randomFaceColour = int(random(1,3))
        }
        //MAINFACE(tilt_value, eye_value, mouth_value);
  
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
