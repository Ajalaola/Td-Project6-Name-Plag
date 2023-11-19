let totalPrice = 0;

document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('nameInput');

    nameInput.addEventListener('input', function () {
        addName();
    });
});

function addName() {
    const nameInput = document.getElementById('nameInput');
    const nameDisplay = document.getElementById('nameDisplay');

    const name = nameInput.value.trim();

    // Check if the input field is empty
    if (name === '') {
        alert('Please enter letters.');
        return;
    }

    // Check if letter length is greater than 15
    if (name.length > 15) {
        alert('You have exceeded the number of available letters (15).');
        return;
    }

    // Check if the letter is unique
    if (isLetterUnique(name)) {
        const price = name.length * 5;
        totalPrice += price;

        const nameItem = document.createElement('div');
        nameItem.classList.add('nameItem');
        nameItem.textContent = `${name} - $${price}`;

        nameDisplay.appendChild(nameItem);
        updateTotalPrice();

        // Print a success message
        alert('Letter added successfully!');
    } else {
        // Print a message if the letter is not unique
        alert('The letter entered is not unique.');
    }

    // Clear the input field after processing
    nameInput.value = '';
}

function isLetterUnique(letter) {
    // Check if the letter is unique by comparing with existing names
    const nameItems = document.querySelectorAll('.nameItem');
    const existingLetters = Array.from(nameItems).map(item => item.textContent.split(' - ')[0].trim());

    return !existingLetters.includes(letter);
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

function checkout() {
    alert(`Total Amount: $${totalPrice}. Payment processing on.`);

}
