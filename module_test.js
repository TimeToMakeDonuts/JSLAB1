const readline = require('readline');
const currency1 = require('./currency1');   // Moduł konwertera walut
const CurrencyConverter = require('./currency2');  // Moduł obiektowy
const currency2 = new CurrencyConverter();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lista walut i ich kody
const currencies = ['USD', 'EUR', 'GBP', 'CHF', 'JPY'];

// Funkcja do wyświetlenia menu walut
function showCurrencyMenu() {
    console.log('\nWybierz walutę do przeliczenia na PLN:');
    currencies.forEach((currency, index) => {
        console.log(`${index + 1} - ${currency}`);
    });
    rl.question('Wprowadź numer waluty: ', handleCurrencyChoice);
}

// Funkcja obsługująca wybór waluty
function handleCurrencyChoice(choice) {
    const currencyIndex = parseInt(choice) - 1;
    if (currencyIndex < 0 || currencyIndex >= currencies.length) {
        console.log('Nieprawidłowy wybór waluty.');
        rl.close();
        return;
    }

    const selectedCurrency = currencies[currencyIndex];
    rl.question(`Wprowadź kwotę w ${selectedCurrency}: `, (amount) => {
        const amountFloat = parseFloat(amount);

        // Przeliczenie przy użyciu obu modułów
        const result1 = currency1.convertToPLN(amountFloat, selectedCurrency);
        const result2 = currency2.convertToPLN(amountFloat, selectedCurrency);

        console.log(`Wynik konwersji z currency1: ${amountFloat} ${selectedCurrency} to ${result1} PLN`);
        console.log(`Wynik konwersji z currency2: ${amountFloat} ${selectedCurrency} to ${result2} PLN`);
        
        rl.close();  // Zamknięcie interfejsu
    });
}

// Wyświetl menu i rozpocznij program
showCurrencyMenu();
