var x = 250;
var y = 225;
var c = 128;
var d = 50;
var xspeed = 5;
var yspeed = 25;

function setup() {
  createCanvas(800,500);
}
 

function draw() {
   displayBall(x,y,d,c);
   moveBall(xspeed);
   moveBall1(yspeed);
  
  function displayBall() {
  fill(128);
  ellipse(x,y,d,d);
 }
 
 function moveBall() {
  x = x + xspeed;
  if (x > 800 || x < 10) {
    xspeed = -xspeed;
  }
 }
 
 function moveBall1() {
   y = y = yspeed;
   if (y > 500 || y < 0) {
     yspeed = - yspeed;
   }
   }
}
 

