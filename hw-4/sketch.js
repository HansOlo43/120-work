function setup() {
  //create the canvas for my monster portrait
  createCanvas( 400, 600);
}

function draw(){
  //background color goes here
  background('#A93226');
  //making a sandbox for whole monster
  push();
  //making the origin the center of my canvas
  translate( 200, 300);
  //body & arms of monster
  push();
  //arms code goes here
  stroke('#2ECC71');
  strokeWeight(45);
  line( -100, 22.5, -150, 100);
  line( -150, 100, -150, 225 );
  line( 100, 22.5, 150, 100 );
  stroke('red');
  strokeWeight(40);
  point( 150, 100 );
  //end arms code
  //body code goes here
  noStroke();
  fill('#2ECC71');
  quad( -20, -15, 20, -15, 30, 1, -30, 1 );
  noStroke();
  fill('#2ECC71');
  rect( -100, 0, 200, 300);
  stroke('#873600');
  strokeWeight(35);
  line( -100, 0, 100, 300 );
  line( 100, 0, -100, 300 );
  fill('#873600');
  noStroke();
  rect( -100, 132.5, 200, 35 );
  pop();
  //end of body & arms
  //head next
  push();
  //head code goes here, make overall shape first
  noStroke();
  fill('#28B463');
  ellipse( 0, -75, 125, 150 );
  //mouth begins
  push();
  //mouth code goes here
  fill('#17202A');
  arc( 0, -37.5, 90, 30, 0, PI);
  fill('#F4D03F');
  triangle( 10, -37.5, 5, -34, 0, -37.5);
  rect( -10, -37.5, 9.5, 3.5);
  pop();
  //end mouth
  //eyes & ears
  push();
  //eye code goes here
  fill('#FDFEFE');
  ellipse( 0, -90, 75, 45);
  fill('#922B21');
  ellipse( 0, -90, 40, 40 );
  fill('#17202A');
  ellipse( 0, -90, 20, 20 );
  fill('#28B463');
  triangle( 50, -95, 85, -100, 60, -70 );
  triangle( -50, -95, -85, -100, -60, -70);
  pop();
  //end eyes
  pop();
  //end head
  pop();
  //end monster
  //sun code goes here
  stroke('#F1C40F');
  strokeWeight(2);
  fill('#D35400');
  ellipse( 400, 0, 200, 200 );

}
