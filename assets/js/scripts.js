// Select the button element by its ID
const colorButton = document.getElementById('colorButton');

// Add an event listener for the 'click' event on the button
colorButton.addEventListener('click', () => {
    // Generate a random color in hexadecimal format
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Change the button's background color to the randomly generated color
    colorButton.style.backgroundColor = randomColor;

    // Optionally, log the new color to the console
    console.log('New button color:', randomColor);
});
