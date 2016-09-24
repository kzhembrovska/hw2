
// make the ellipse count 0
// declare our setup scene
// in update, set the ellipse count equal to amt of ellipses
//foreach frame, add 10 new ellipses 

int ellipseNum;

function setup() {
  ellipseNum = 0;
  framerate(5);
  createCanvas(100, 100);
  background(255);
  
}

function draw() {
  
  for (int i; i<=100; i++) {
    ellipseNum = i;
    
    if (ellipseNum <= 100) {
          int rPos = random(10,50);
          int rColor = random (75, 255);
          
          ellipse (i*rPos,i*rPos,r,r);
          fill (rColor);
    }
  }
}
