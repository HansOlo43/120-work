var pos_x;
var pos_y;
var point_width = 10;
var max_pos_mvt = 10;

function setup() {
  createCanvas( windowWidth, windowHeight );
  background('#A2D9CE');
  //setting start point of walkers
  pos_x = width * 0.5;
  pos_y = height * 0.5;
}

function draw() {
  noCursor();
  var red = floor( random(256));
  var green = floor( random(256));
  var blue = floor( random(256));
  push();
  noStroke()
  fill('#C0392B');
  ellipse( pos_x, pos_y, point_width + 5 );
  fill( red, green, blue );
  ellipse( pos_x, pos_y, point_width )
  //random walk
  pos_x += floor( random( -max_pos_mvt, max_pos_mvt + 1));
  pos_y += floor( random( -max_pos_mvt, max_pos_mvt + 1));
  pop();
  //begin eye
  push();
  noStroke();
  fill('255');
  ellipse( mouseX, mouseY, 120, 60 );
  fill( red, green, blue );
  ellipse( mouseX, mouseY, 59, 59 );
  fill(0);
  ellipse( mouseX, mouseY, 30, 30 );
  pop();
  //other eye
  push();
  translate( 120, 0);
  noStroke();
  fill('255');
  ellipse( mouseX, mouseY, 120, 60 );
  fill( red, green, blue );
  ellipse( mouseX, mouseY, 59, 59 );
  fill(0);
  ellipse( mouseX, mouseY, 30, 30 );
  pop();
  //mouth
  push();
  translate(60, 60)
  strokeWeight(5);
  fill( red, green, blue );
  arc( mouseX, mouseY, 120, 60, 0, PI );
}
