class CurrencyConverter {
    constructor() {
        this.rates = {
            USD: 4.0,
            EUR: 4.5,
            GBP: 5.1,
            CHF: 4.3,
            JPY: 0.03
        };
    }

    convertToPLN(amount, currency) {
        return amount * this.rates[currency];
    }
}

module.exports = CurrencyConverter;
