// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Example: Change background color of the header on button click
    const header = document.querySelector('header');
    const changeColorButton = document.createElement('button');
    
    changeColorButton.textContent = 'Change Header Color';
    changeColorButton.className = 'btn btn-warning';
    document.querySelector('header').appendChild(changeColorButton);
    
    changeColorButton.addEventListener('click', () => {
        header.style.backgroundColor = header.style.backgroundColor === 'rgba(0, 0, 0, 0.8)' ? '#000' : 'rgba(0, 0, 0, 0.8)';
    });
});
