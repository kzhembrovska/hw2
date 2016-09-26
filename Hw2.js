function setup() {
  createCanvas(200, 200);
  background(0);
}

function draw() {
   fill(255);
  for(i = 10; i <= 190; i = i+5) {
    for (j = 10; j <= 190; j=j+5) {
      ellipseMode(CENTER);
       ellipse (i, j, 5, 5);
       fill(255);
    }
  }
}
