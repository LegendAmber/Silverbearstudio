var image = document.getElementById("afcabe54-5230-4d08-afac-20bbe924209d");
var i = 1;
image.addEventListener('click', e => {
  if (i == 1){
  image.src = "sun.png";
  i = 0;
  }
  else{
  image.src = "moon.png";
  i = 1;
  }
});
