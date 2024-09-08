const buttonEl = document.querySelector('.change-color');
const spalEl = document.querySelector('.color');
const body = document.body;

buttonEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spalEl.textContent = randomColor
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

