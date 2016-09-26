function SetUp(){
  createCanvas(200,200);
  
  colorMode(HSB);
  var h=0;
  noStroke();
  
  for (var y=20; y<=180; y=y+10){
   for (var x=20; x<=180; x=x+10){
    fill(h, 100, 100);
    h=h+1.3;
    ellipse(x,y,10,10);
    }
  }
}

function draw(){
  
}
