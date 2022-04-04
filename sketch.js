//sets up all the global variables

let c =[];
let size = 50;
let popHeight = 750;
let canvas;
let colourWheel;
let Shape;
let splash;
let colourMenu;
let shapeMenu;
let shapeMode = 1;
let brushMode = 0;
let drawSize = 10;
let eraserMode = 0;
let firstLoad = 1;
let circleMode = 0;
let squareMode = 0;
let brushMenu = 0;
let style = 1;
let penMode = 0;
let penPic;
let brushPic;

let sprayPaint;
let paintBrush;

//preloads all the images into the programs
function preload()
{
  colourWheel = loadImage('colour wheel.png');
  stamp = loadImage('stamp.png');
  splash = loadImage('splash.png');
  eraser = loadImage('eraser.png');
  penPic = loadImage('penPic.png');
  brushPic = loadImage('brushPic.png');
  sprayPaint = loadImage('sprayPaint.png');
  paintBrush = loadImage('paintBrush.png');
}

function setup() {
  //defines the size of the program
  createCanvas(800, 800);
  
  //create a graphics canvas to draw on
  canvas = createGraphics(800,700);
  
  imageMode(CORNER);
  
  //define colours to be used
  c[0] = color(50, 50, 50, 75);
  c[1] = color(233, 154, 7);
  c[2] = color(123, 54, 244);
  c[3] = color(223, 154, 250);
  c[4] = color(103,54,57);
  c[5] = color(255, 255, 0);
  c[6] = color(255,255,255);
  c[7] = color(0,0,0);
  c[8] = color(255,0,0);
  c[9] = color(0,0,255);
  c[10] = color(0,255,0);
  
  colour = c[0];
  
  brush = new Brush(colour, drawSize, style);
  pen = new Brush(colour, drawSize, 1);
}

function draw() 
{
  //checks if this if the first time draw function is called
if (firstLoad == 0)
{
  //sets background colour to white
  background(255)
  
  //draw the tool bar icons
  noStroke();
  fill(c[0]);
  rect(0, popHeight, 250, 50)
  square(750, popHeight, size)
  fill(c[7]);
  textSize(12);
  text('CLEAR', 754, 780)
  fill(c[0]);
  image(colourWheel, 0, popHeight, 50, 50);
  image(stamp, size, popHeight, 50, 50);
  image(eraser, size*2, popHeight, 50, 50)
  image(penPic, size*3, popHeight, 50, 50);
  image(brushPic, size*4, popHeight, 50, 50);
  
  //draw the colour palate when requested
  if (colourMenu == 1)
    {
        stroke(10);
        fill(c[6]);
        rect(0, popHeight - size, size, size);
       
        noStroke();
        fill(c[7]);
        rect(size*1, popHeight - size, size, size);

        fill(c[3]);
        rect(size*2, popHeight - size, size, size);

        fill(c[4]);
        rect(size*3, popHeight - size, size, size);
      
        fill(c[5]);
        rect(size*4, popHeight - size, size, size);
      
        fill(c[8]);
        rect(size*5, popHeight - size, size, size);
      
        fill(c[9]);
        rect(size*6, popHeight - size, size, size);
      
        fill(c[10]);
        rect(size*7, popHeight - size, size, size);

    }
  
  //draw the shape menu when requested
  if (shapeMenu == 1)
    {
      noStroke();
        
      //circle icon
        fill(c[0]);
        rect(0, popHeight - size, size, size);
        fill(colour);
        circle(25, (popHeight - 25), 25);
      
      //rect icon
        fill(c[0]);
        rect(size*1, popHeight - size, size, size);
        fill(colour);
        rectMode(CENTER);
        rect(75, (popHeight - 25), 30, 30);
        rectMode(CORNER);
    }
  
  //draw brush menu
  if (brushMenu ==1)
    {
      noStroke();
      fill(c[0]);
      rect(0, popHeight - size, size, size);
      rect(size, popHeight - size, size, size);
      image(sprayPaint, 0, popHeight - size, size, size);
      image(paintBrush, size, popHeight - size, size, size);
      
    }
  
  //draw the graphics canvas
  image(canvas, 0,0);
}
  else 
   {
     //display the splash screen
    image(splash, 0, 0, 800, 800);
   }
}

//what happens when the mouse is clicked
function mousePressed()
{
  
  //if mouse click on canvas
  if (mouseY < 700 )
  {
    if (shapeMode)
      {
        if (circleMode)
          {
            canvas.fill(colour);
            canvas.stroke(colour);
            canvas.strokeWeight(10);
            canvas.circle(mouseX, mouseY, drawSize);
          }
        if (squareMode)
          {
            rectMode(CENTER);
            canvas.fill(colour);
            canvas.stroke(colour);
            canvas.strokeWeight(10);
            canvas.square(mouseX, mouseY, drawSize);
            rectMode(CORNER);
          }
      }
    
    //insure pop ups are closed. 
    colourMenu = 0;
    shapeMenu = 0;
    brushMenu = 0;
  }
  // mouse click in menu regon 
  else if(mouseY > 750)
  {
    //colour select 
    if (mouseX < size)
    {
      //open colour pop up; close other pop ups 
      colourMenu = 1;
      shapeMenu = 0;
      brushMenu = 0;
      
      eraserMode = 0; 
      //print('colour menu')
    }
    
    //stamp select 
     if (mouseX < size*2 && mouseX > size)
    {
      //open stamp (shape) pop up; close other pop ups
      colourMenu = 0;
      shapeMenu = 1;
      brushMenu = 0;
      
      shapeMode = 1;
      eraserMode = 0; 
      penMode = 0;
      brushMode = 0;
      //print('stamp menu')
      
    }
    
    //eraser select 
    if (mouseX < size*3 && mouseX > size*2)
      {
      colourMenu = 0;
      shapeMenu = 0;
      brushMenu = 0;
      
      shapeMode = 0;
      eraserMode = 1; 
      penMode = 0;
      brushMode = 0;
      //print('eraser menu')
      }
    
    //pen select 
    if (mouseX < size*4 && mouseX > size*3)
      {
      colourMenu = 0;
      shapeMenu = 0;
      brushMenu = 0;
      
      shapeMode = 0;
      eraserMode = 0; 
      penMode = 1;
      brushMode = 0; 
      //print('pen mode ')
      }
    
    //brush select 
    if (mouseX < size*5 && mouseX > size*4)
      {
      colourMenu = 0;
      shapeMenu = 0;
      brushMenu = 1;
      
      shapeMode = 0;
      eraserMode = 0; 
      penMode = 0;
      brushMode = 1;
      //print('brush menu')
      }
      
    //clear canvas 
    if (mouseX < size*16 && mouseX > size*15)
      {
        //overwrites the canvas to white
        canvas.background(255) 
        print('clear canvas');
      }
    
  }
  //click on pop up
  else if(mouseY < popHeight && mouseY > popHeight-size)
  {
    //checks if colour menu is clicked
    if (colourMenu)
      {
        //sets the colour variable to the desired colour
        colour = get(mouseX, mouseY);
      }
    //checks if shape menu is clicked 
    if (shapeMenu)
      {
        //checks if circle stamp is selected 
        if (mouseX < size)
          {
            circleMode = 1;
            squareMode = 0;
          }
        //checks if square stamp is selected 
        if (mouseX < size*2 && mouseX > size)
          {
            circleMode = 0;
            squareMode = 1;
          }
      }
    //checks if brush menu is selected
    if(brushMenu)
      {
        //checks if spraypaint brush is selected 
        if (mouseX < size)
          {
            brush.setStyle(sprayPaint);
            sprayMode = 1;
            paintMode = 0;
          }
        //checks if paintbrush brush is selected 
        if (mouseX < size*2 && mouseX > size)
          {
            brush.setStyle(paintBrush);
            sprayMode = 0;
            paintMode = 1;
          }
      }
  }
  
}

//what happens when the mouse is dragged
function mouseDragged ()
{
  //defines what happens in eraser mode
  if (eraserMode)
      {
        canvas.fill(c[6]);
        canvas.stroke(c[6]);
        canvas.strokeWeight(drawSize);
        canvas.line(mouseX, mouseY, pmouseX, pmouseY);
      }
  //defines what happens in penmode
    if (penMode)
      {
        pen.pen();
        pen.setColour(colour);
        pen.setSize(drawSize);
      }
  //defines what happens in brush mode
    if (brushMode)
      {
        brush.paint();
      }
}

//defines what happens when a key is pressed
function keyPressed()
{
  //checks if enter key is pressed to exit the splash screen
  if (keyCode == ENTER)
    {
      firstLoad = 0;
    }
  if (keyCode == TAB)
    {
      saveCanvas(canvas, 'myCanvas.png')
    }
}

//defines what happens when the scroll wheel is moved
function mouseWheel(event)
{
  //changes the draw size based off scroll wheel movement 
  drawSize += (event.delta/50);
  print(drawSize);
}

//sets up the brush class
class Brush 
  {
    constructor(colour, drawSize)
    {
      this.brushColour = colour;
      this.brushSize = drawSize;
      this.brushStyle = style;
      this.x = 0;
      this.y = 0;
    }
    
    //sets the colour of the brush
    setColour(colour)
    {
      this.brushColour = colour;
    }
    
    //sets the size of the brush
    setSize(drawSize)
    {
      this.brushSize = drawSize;
    }    
    
    //sets the brush style
    setStyle(style)
    {
       this.brushStyle = style;
    }
    
    //defines what heppns in pen mode
    pen()
    {
      canvas.fill(this.brushColour)
      canvas.stroke(this.brushColour);
      canvas.strokeWeight(this.brushSize);
      canvas.line(mouseX, mouseY, pmouseX, pmouseY);
    }
    
    //defines what happens in paint mode
    paint() 
    {
      noStroke();
      canvas.image(this.brushStyle, mouseX, mouseY, drawSize, drawSize);
    }
  }