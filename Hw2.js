function setup() {
  createCanvas(200, 200);
  background(0);
}

function draw() {
   
  for(i = 0; i <= 190; i += 10) {
       for (j = 0; j <= 190; j -= 10) {
    
       ellipse (i+10, j-10, 5, 5);
       fill(255);
    }
  }
}
