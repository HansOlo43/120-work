function setup() {
  createCanvas( windowWidth, windowHeight );
}

var headAngle = 0;
var headRotRate = 0;
var armAngle = 0;
var headWidth = 120;
var headHeight = 140;

function draw() {
  background('#ABB2B9');
  noCursor();
  headRotRate = (mouseY * 0.1) - 30
  headAngle = headAngle + headRotRate;
  armAngle = armAngle - 5;

  //Start sandbox for person
  push();
  //have person follow the mouse
  translate( mouseX, mouseY );
  //Arms start here
  push();
  strokeWeight( 40 );
  stroke('#DC7633');
  //rotations for arm 1
  push();
  translate( 50, -30 );
  rotate( radians(armAngle) );
  line( 0, 0, 100, 0 );
  fill('#F0B27A');
  noStroke();
  ellipse( 100, 0, 45 );
  pop();
  line( 50, -30, 110, -40 );
  //arm 2
  push();
  translate( 200, -30 );
  //rotatation for arm 2
  push();
  rotate( radians(mouseY) );
  line( 0, 0, -100, 0 );
  fill('#F0B27A');
  noStroke();
  ellipse( -100, 0, 45 );
  pop();
  line( -60, -10, 0, 0 );
  pop();
  pop();
  //Body Starts here
  fill('#DC7633');
  noStroke();
  ellipse( 125, 0, 60, 240 );
  //head starts here
  push();
  noStroke();
  fill('#F0B27A');
  translate( 125, -100 );
  //rotatation
  rotate( radians(headAngle) );
  ellipse( 0, 0, headWidth, headHeight );
  //eyes
  strokeWeight(2);
  push();
  translate( headWidth * -0.2, headHeight * -0.2)
  ellipse( 0, 0, headWidth * .33, headHeight * .33 );
  fill('#FDFEFE');
  ellipse( 0, 0, 20 );
  fill(0);
  ellipse( 0, 0, 10 );
  pop();
  push();
  translate( headWidth * 0.2, headHeight * -0.2 )
  ellipse( 0, 0, 40);
  noStroke();
  fill('#FDFEFE');
  ellipse( 0, 0, 20 );
  fill(0);
  ellipse( 0, 0, 10 );
  pop();
  //Mouth
  push();
  fill(0);
  arc( 0, headHeight * 0.2, 80, 40, 0, PI );
  pop();
  pop(); //end the head
  //begin legs
  fill('#2C3E50');
  noStroke();
  triangle( 98, 60, 148, 60, -40, height+100 );
  triangle( 152, 60, 102, 60, 283, height+100 );
  //end sketch


}
