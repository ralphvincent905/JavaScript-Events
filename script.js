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

const eventForm = document.getElementById('eventForm');
const formMessage = document.getElementById('formMessage');
eventForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    formMessage.textContent = `Form submitted successfully! Hello, ${name || 'Guest'}!`;
});

const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');
focusInput.addEventListener('focus', () => {
    focusMessage.textContent = 'Input field is focused.';
});
focusInput.addEventListener('blur', () => {
    focusMessage.textContent = 'Input field lost focus.';
});
