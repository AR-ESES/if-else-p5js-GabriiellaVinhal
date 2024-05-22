function setup(){
  createCanvas(650,700);
  background(600);
}

function draw() {
  background(300);
  stroke(0);
  strokeWeight(3);
  
  if(mouseX<width/2) {
    if(mouseY<height/2){
      fill(255,0,0);
    
    }
    else{
      fill(0,255,0);
    }
  }
  
  
  if (mouseX > width / 2) 
   if (mouseY < height / 2) {
    fill(4, 255, 4); 
  }
  
  if (mouseX > width / 2) 
   if (mouseY > height / 2) {
    fill(0, 0, 0); 
  }
  
 if (mouseX < width / 2) {
  if (mouseY > height / 2) 
    fill(255, 255, 300); 
  }
      
   
  circle(width/4,height/4,height/8);
  
}
