var bg
var t1
var t2
var t3
var t4
var t5
var t6
var h1
var h2
var h3
var h4
var timing
var duration


function setup() {

  createCanvas(1080, 720);
  bg = loadImage("background.png");
  t1 = loadImage("t1.png");
  t2 = loadImage("t2.png");
  t3 = loadImage("t3.png");
  t4 = loadImage("t4.png");
  t5 = loadImage("t5.png");
  t6 = loadImage("t6.png");
  
  h1 = loadImage("h1.png");
  h2 = loadImage("h2.png");
  h3 = loadImage("h3.png");
  h4 = loadImage("h4.png");




}

function draw ()
{


  background (bg);




    var duration = 3000;
    var timing = (new Date()%duration)/duration;


    if(timing*2 <1){
    image(h1, timing*1047,226);
    } else if(timing*2 <2){
    image(h2, timing*1047,211);
    }


   if(timing*2 <1){
    image(h3, timing*1047,530);
    } else if(timing*2 <2){
    image(h4, timing*1047,505);
    }




  image(t1,10,147);
    image(t2,472,140);
      image(t3,1012,141);
        image(t4,0,504);
           image(t5,476,501);
             image(t6,1029,504);





}