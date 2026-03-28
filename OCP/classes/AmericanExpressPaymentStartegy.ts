import { PaymentStartegy } from "../interfaces/paymentStartegy";

export class AmericanExpressPaymentStrategy implements PaymentStartegy {
    processPayment(amount: number): void {
        console.log(`Processing American Express Payment ...`);
    }
}