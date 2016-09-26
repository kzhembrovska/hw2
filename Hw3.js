function setup() {
  createCanvas(200, 200);
  background(255);
  noStroke();
}

function draw() {
  for(i = 10; i <= 190; i = i+5) {
    for (j = 10; j <= 190; j=j+5) {
      var a=random(255);
      var b=random(255);
       var c=random(255);
       fill(a, b, c);
       ellipseMode(CENTER);
       ellipse (i, j, 5, 5);
       fill(255);
       noLoop();
    }
  }
}
