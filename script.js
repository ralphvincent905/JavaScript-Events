const mouseButton = document.getElementById('mouseButton');
const mouseMessage = document.getElementById('mouseMessage');
mouseButton.addEventListener('mouseenter', () => {
    mouseMessage.textContent = 'Click Me';
});
mouseButton.addEventListener('mouseleave', () => {
    mouseMessage.textContent = 'Dont Click Me';
});

