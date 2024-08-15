import PaymentProcessor from './PaymentProcessor.js';

class PaymentAdapter extends PaymentProcessor {
    constructor(newPaymentAPI) {
        super();
        this.newPaymentAPI = newPaymentAPI;
    }

    processPayment(amount) {
        const currency = 'USD';
        this.newPaymentAPI.makePayment(amount, currency);
    }
}


export default PaymentAdapter
