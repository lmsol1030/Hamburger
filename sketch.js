var bg
var t1
var t2
var t3
var t4
var t5
var t6

function setup() {

  createCanvas(1080, 720);
  bg = loadImage("background.png");
  t1 = loadImage("t1.png");
  t2 = loadImage("t2.png");
  t3 = loadImage("t3.png");
  t4 = loadImage("t4.png");
  t5 = loadImage("t5.png");
  t6 = loadImage("t6.png");




}

function draw ()
{


  background (bg);

  image(t1,10,147);
    image(t2,472,140);
      image(t3,1012,141);
        image(t4,0,504);
           image(t5,476,501);
             image(t6,1029,504);



}