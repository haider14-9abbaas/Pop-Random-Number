function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1; // It will generate a random number between 1 and 100
    alert('Random Number: ' + randomNumber);
}

document.addEventListener('keydown', generateRandomNumber);
