var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight / 16;
canvas.width = window.innerWidth;
var c = canvas.getContext("2d");

//Path begins
c.beginPath();
c.fillStyle = 'black';
c.fillRect(0, 0, innerWidth, innerHeight);
c.fill();

//Enters new text
c.beginPath();
c.fillStyle = 'white';
c.font = 'bold 25px firasans';
c.fillText("Home", 30, 27.5);
c.fill();
