function setup() {
  createCanvas(200,200)
  background(255)
}


function draw() {
stroke(0);
  fill (255);
  ellipseMode(CENTER);
  ellipse(mouseX, mouseY,40,40);
  ellipse(mouseX+10, mouseY-10, 5, 2);
  ellipse(mouseX-10, mouseY-10, 5, 2);
  arc(mouseX, mouseY, 10, 20, 0, PI);

}
