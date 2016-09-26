function setup() {
  createCanvas(200,200)
  background(255)
}

var s = 0;

function draw() {
  
  var a=random(255);
  var b=random(255);
  var c=random(255);
  stroke(a, b, c);
  fill (a, b, c);
  var d=random(200);
  var e=random(200);
  var f=random(50);
  ellipseMode(CENTER);
  ellipse(d,e,f,f);
  s++
  if (s>100){
    noLoop(s);
  }
}
