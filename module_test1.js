const readline = require('readline');
const math1 = require('./myMathModule1');  // Moduł funkcji matematycznych

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funkcja do wyświetlenia menu operacji
function showMenu() {
    console.log('\nWybierz operację:');
    console.log('1 - Dodawanie');
    console.log('2 - Odejmowanie');
    console.log('3 - Mnożenie');
    console.log('4 - Dzielenie');
    console.log('5 - Potęgowanie');
    rl.question('Wprowadź numer operacji: ', handleChoice);
}

// Funkcja obsługująca wybór operacji
function handleChoice(choice) {
    rl.question('Wprowadź pierwszą liczbę: ', (a) => {
        rl.question('Wprowadź drugą liczbę: ', (b) => {
            const num1 = parseFloat(a);
            const num2 = parseFloat(b);

            switch (choice) {
                case '1':
                    console.log(`Wynik dodawania: ${math1.add(num1, num2)}`);
                    break;
                case '2':
                    console.log(`Wynik odejmowania: ${math1.subtract(num1, num2)}`);
                    break;
                case '3':
                    console.log(`Wynik mnożenia: ${math1.multiply(num1, num2)}`);
                    break;
                case '4':
                    console.log(`Wynik dzielenia: ${math1.divide(num1, num2)}`);
                    break;
                case '5':
                    console.log(`Wynik potęgowania: ${math1.power(num1, num2)}`);
                    break;
                default:
                    console.log('Nieprawidłowy wybór operacji.');
                    break;
            }
            rl.close(); // Zamyka interfejs po wykonaniu obliczenia
        });
    });
}

// Wyświetl menu i rozpocznij program
showMenu();