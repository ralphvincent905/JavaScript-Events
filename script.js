const mouseButton = document.getElementById('mouseButton');
const mouseMessage = document.getElementById('mouseMessage');
mouseButton.addEventListener('mouseenter', () => {
    mouseMessage.textContent = 'Click Me';
});
mouseButton.addEventListener('mouseleave', () => {
    mouseMessage.textContent = 'Dont Click Me';
});

const keyboardInput = document.getElementById('keyboardInput');
const keyboardMessage = document.getElementById('keyboardMessage');
keyboardInput.addEventListener('keyup', (event) => {
    keyboardMessage.textContent = `You pressed: ${event.key}`;
});