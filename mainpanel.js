var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight / 16;
canvas.width = window.innerWidth;
var c = canvas.getContext("2d");

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

//Enters spacing
c.beginPath();
c.strokeStyle = 'white';
c.lineWidth = 3;
c.moveTo(102.5, 15);
c.lineTo(102.5, 45);
c.stroke();
