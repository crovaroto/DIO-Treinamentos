const darkmode = 'dark-mode'
const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

button = addEventListener('click', changeMode);

function changeMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
  h1.classList.toggle(darkmode);
  body.classList.toggle(darkmode);
  footer.classList.toggle(darkmode);
  button.classList.toggle(darkmode);  
}

function changeText(){
  if (body.classList.contains(darkmode)) {
    button.innerHTML = 'Light Mode';
    h1.innerHTML = 'Dark Mode ON'    
  } 
  else {
    button.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Light Mode ON'
  }
  return;
}



