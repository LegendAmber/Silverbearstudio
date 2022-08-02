var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight / 5;
canvas.width = window.innerWidth;
var c = canvas.getContext("2d");

//Path begins
c.beginPath();
c.fillStyle = 'black';
c.fillRect(0, 0, innerWidth, innerHeight);
c.fill();
