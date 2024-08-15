import PaymentProcessor from './PaymentProcessor.js';

class OldPaymentProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing payment of $${amount} using the old payment processor.`);
    }
}

export default OldPaymentProcessor;