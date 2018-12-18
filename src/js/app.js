// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

var navToggleButton = document.querySelector('.nav-toggle');
var navBox = document.querySelector('.nav-box');
var body = document.querySelector('body');

navToggleButton.addEventListener('click', toggleClass);

function toggleClass(){
  navBox.classList.toggle('open');
  navBox.classList.toggle('closed');
  body.classList.toggle('nav-open');
}
