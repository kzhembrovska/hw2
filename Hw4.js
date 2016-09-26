function setup() {
  createCanvas(210, 210);
  background(0);

stroke(255);
  for(var i = 10; i <=200 ; i = i +5){
    var startX = 10;
    var startY = i;
    var endX = i;
    var endY = 10;
    line(startX, startY, endX, endY);
  }
  
  for(var i=15; i <=200; i=i+5){
    var startX = 200;
    var startY = i;
    var endX = i;
    var endY = 200;
    line(startX, startY, endX, endY);
  }
}
