document.addEventListener('DOMContentLoaded', function () {
    const pickButton = document.getElementById('pickButton');
    const optionsInput = document.getElementById('optionsInput');
    const result = document.getElementById('result');

    pickButton.addEventListener('click', function () {
        const options = optionsInput.value.split(',');
        const randomChoice = options[Math.floor(Math.random() * options.length)];
        result.textContent = `Tonight We Are Watching 🍿: ${randomChoice}`;
    });
});