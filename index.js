import OldPaymentProcessor from './src/OldPaymentProcessor.js';
import NewPaymentAPI from './src/NewPaymentAPI.js';
import PaymentAdapter from './src/PaymentAdapter.js';
import PaymentManager from './src/PaymentManager.js';

function main() {
    const oldPaymentProcessor = new OldPaymentProcessor();
    const oldPaymentManager = new PaymentManager(oldPaymentProcessor);
    oldPaymentManager.executePayment(100);

    const newPaymentAPI = new NewPaymentAPI();
    const adaptedPaymentProcessor = new PaymentAdapter(newPaymentAPI);
    const newPaymentManager = new PaymentManager(adaptedPaymentProcessor);
    newPaymentManager.executePayment(100);
}

main();
