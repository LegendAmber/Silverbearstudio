const image = document.getElementById("afcabe54-5230-4d08-afac-20bbe924209d");
var bodyTheme = document.querySelector('body');
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = DARK_MODE;
var dif = 1;

init();

function init() {
  let storedMode = sessionStorage.getItem('mode');
  if (!storedMode) {
    storedMode = DEFAULT_MODE;
    sessionStorage.setItem('mode', DEFAULT_MODE);
  }
  setMode(storedMode);
}


function setMode(mode = DEFAULT_MODE) {
  if (mode === DARK_MODE){
    image.src = "moon.png";
    bodyTheme.style.backgroundColor = "black";
    bodyTheme.style.color = "white";
    document.body.classList.add(DARK_MODE);
    dif = 0;
  }
  else if (mode === LIGHT_MODE){
    image.src = "sun.png";
    bodyTheme.style.backgroundColor = "white";
    bodyTheme.style.color = "black";
    document.body.classList.remove(DARK_MODE);
    dif = 1;
  }
}

image.addEventListener('click', e => {
  let mode = sessionStorage.getItem('mode');
  if (mode) {
    let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
    setMode(newMode);
    sessionStorage.setItem('mode', newMode);
  }
});

function update(){
  requestAnimationFrame(update);

  if (dif = 0){
    bodyTheme.style.backgroundColor = "white";
    bodyTheme.style.color = "black";
  }
  if (dif =  1){
    bodyTheme.style.backgroundColor = "black";
    bodyTheme.style.color = "white";
  }
}

update();