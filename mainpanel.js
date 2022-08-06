var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight / 16;
canvas.width = window.innerWidth;
var c = canvas.getContext("2d");
var image = document.getElementById('icoimg');
var imgSize = canvas.height / 2 + 2;
var imgPos = canvas.width - 60;

document.addEventListener('click', e => {
  
});

function draw(){
  requestAnimationFrame(draw);
  c.clearRect(0, 0, canvas.width, canvas.height);
  //Loads icon 'right-corner'
image.addEventListener('load', e => {
  c.drawImage(image, imgPos, 10, imgSize, imgSize);
});
  //Path begins
c.beginPath();
c.fillStyle = 'black';
c.fillRect(0, 0, innerWidth, innerHeight);
c.fill();

//Enters text
c.beginPath();
c.fillStyle = 'white';
c.font = 'bold 25px firasans';
c.fillText("Home", 30, 32.5);
c.fill();

c.beginPath();
c.fillText("Game", 110, 32.5);
c.fill();

c.beginPath();
c.fillText("Meetings", 190, 32.5);
c.fill();

//Enters spacing
c.beginPath();
c.strokeStyle = 'white';
c.lineWidth = 3;
c.moveTo(102.5, 12.5);
c.lineTo(102.5, 42.5);
c.moveTo(182.5, 12.5);
c.lineTo(182.5, 42.5);
c.stroke();
}
draw();
