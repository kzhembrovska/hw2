function setup() {
  createCanvas(200, 200);
  background(200);
}

function draw() {
   noFill();
  stroke(10);
  for(var size=8; size>0 && size<190; size=size+5) {
    line(size+2, 0, 100, 100);
    line(size+2, 190, 100, 100);
  }
}
