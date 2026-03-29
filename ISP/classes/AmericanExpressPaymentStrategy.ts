import { PaymentStrategy } from "../interfaces/PaymentStrategy";

export class AmericanExpressPaymentStrategy implements PaymentStrategy {
    processPayment(amount: number): void {
        console.log(`Processing American Express Payment ...`);
    }
}