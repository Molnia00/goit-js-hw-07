const nameInput = document.querySelector('#name-input');
const nameOnput = document.querySelector('#name-output');
nameInput.addEventListener("input", (event) => {
    const name = event.currentTarget.value;
    if (name) {
        nameOnput.textContent = `${name}!`;
    } else {
        nameOnput.textContent = "Anonymous!";
    }
})