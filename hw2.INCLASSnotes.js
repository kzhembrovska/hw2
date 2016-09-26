function SetUp(){
  createCanvas(200,200);

  for (var y=20; y<=180; y=y+10){
   for (var x=20; x<=180; x=x+10){
    //for each y from the 20 to 180, going up by 10:
    //draw this row of dots:
    ellipse(x,y,10,10);
    }
  }
}

function draw(){
  
}
