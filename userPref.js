var image = document.getElementById("afcabe54-5230-4d08-afac-20bbe924209d");
var body = document.querySelector('body');
var i = 1;
image.addEventListener("click", e => {
  if (i == 1){
  image.src = "sun.png";
  i = 0;
  light();
  }
  else{
  image.src = "moon.png";
  i = 1;
  dark();
  }
});

function light() {
body.style.backgroundColor = "white";
body.style.color = "black";
}
function dark() {
body.style.backgroundColor = "black";
body.style.color = "white";
}