function setup() {
  createCanvas(200,200);
  background(255);
}

function draw() {
  stroke (0);
  for(var size=10; size>0 && size<190; size=size+10){
    line(size, size, size+10, size)
  }
}
