const image = document.getElementById("afcabe54-5230-4d08-afac-20bbe924209d");
var body = document.querySelector('body');
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = DARK_MODE;

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
    document.body.classList.add(DARK_MODE);
  }
  else if (mode === LIGHT_MODE){
    image.src = "sun.png";
    document.body.classList.remove(DARK_MODE);
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