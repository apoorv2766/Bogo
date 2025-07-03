const unitRadios = document.querySelectorAll('input[name="unit"]');
const totalPriceElement = document.getElementById('total-price');
const options = document.querySelectorAll('.option');

const prices = {
    1: 10.00,
    2: 18.00,
    3: 24.00
};

function handleSelection(radio) {
    const selectedUnit = parseInt(radio.value);
    const price = prices[selectedUnit];
    totalPriceElement.textContent = `$${price.toFixed(2)} USD`;

    options.forEach(option => {
        option.classList.remove('active');
        const selectors = option.querySelector('.selectors');
        if (selectors) {
            selectors.style.maxHeight = '0';
        }
    });

    const selectedOption = radio.closest('.option');
    selectedOption.classList.add('active');

    const selectors = selectedOption.querySelector('.selectors');
    if (selectors) {
        selectors.style.maxHeight = selectors.scrollHeight + 'px'; 
    }
}
unitRadios.forEach(radio => {
    radio.addEventListener('change', () => handleSelection(radio));
});
const defaultRadio = document.querySelector('input[name="unit"]:checked');
if (defaultRadio) {
    handleSelection(defaultRadio);
}

document.getElementById('add-to-cart').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="unit"]:checked').value;
    alert(`You have added ${selectedOption} unit(s) to the cart.`);
});
