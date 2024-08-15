import PaymentProcessor from './PaymentProcessor.js';

class PaymentManager {
    constructor(paymentProcessor) {
        if (!(paymentProcessor instanceof PaymentProcessor)) {
            throw new Error('Invalid payment processor.');
        }
        this.paymentProcessor = paymentProcessor;
    }

    executePayment(amount) {
        this.paymentProcessor.processPayment(amount);
    }
}

export default PaymentManager;