function setup() {
  createCanvas(800,800);

}
function draw()  {
  fill(255,0,0);
ellipse(100,100,100,100);
if (mouseIsPressed) {
   fill(255,0,0);
 } else {
   fill(255);
 }
 ellipse(mouseX, mouseY, 80, 80);
}
