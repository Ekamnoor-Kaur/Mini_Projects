// Exchange rates (base currency: USD)
const rates = {
    USD: {
        USD: 1,
        INR: 83.5,
        EUR: 0.92
    },
    INR: {
        USD: 0.012,
        INR: 1,
        EUR: 0.011
    },
    EUR: {
        USD: 1.09,
        INR: 90.8,
        EUR: 1
    }
};

function convertCurrency() {
    // Get values
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const result = document.getElementById("result");

    // Validation
    if (isNaN(amount) || amount <= 0) {
        result.style.color = "red";
        result.innerHTML = "Please enter a valid amount.";
        return;
    }

    // Conversion
    const convertedAmount = amount * rates[from][to];

    // Display result
    result.style.color = "green";
    result.innerHTML = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
}