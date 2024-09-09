const inputNum = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount){
  boxes.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const boxesDiv = [];
    const div = document.createElement('div');
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesDiv.push(div);
    boxes.append(boxesDiv);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = inputNum.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNum.value = '';
  } else {
    alert('Кількість елементів має бути від 1 до 100');
  }
});

destroyBtn.addEventListener('click', destroyBoxes)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


