let button = document.querySelector('.logo');
let prezentation = document.querySelector('.prezentation-container');
let exitBtn = document.querySelector('.exit');

button.addEventListener('click', () => {
  prezentation.style.visibility = "visible";
})

exitBtn.addEventListener('click', () => {
  prezentation.style.visibility = "hidden";
})