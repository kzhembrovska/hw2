function setup() {
  createCanvas(100, 100);
  background(255);
}

function draw() {
  
  for(int i; i<=100; i++) {
  
    int r = random(50);
    
    ellipse(r,r,r,r);
    fill(r);
    
    println(r);
    
  }
}
