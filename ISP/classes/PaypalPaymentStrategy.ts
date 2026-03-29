import { PaymentStrategy } from "../interfaces/PaymentStrategy";

export class PaypalPaymentStrategy  implements PaymentStrategy {
    processPayment(amount: number): void {
        console.log(`Processing Paypal ...`);
    }
}