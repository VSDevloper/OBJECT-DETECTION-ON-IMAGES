img = "";

function preload(){
img = loadImage('Bottel.jpg');
}

function setup() 
{
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw()
{
    image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Bottel", 45, 75);
noFill();
stroke("#FF0000");
rect(50, 80, 500, 500 );
}

