import { PaymentStrategy } from "../interfaces/PaymentStrategy";

export class VisaPaymentStrategy  implements PaymentStrategy {
    processPayment(amount: number): void {
        console.log(`Processing master card ...`);
    }
}