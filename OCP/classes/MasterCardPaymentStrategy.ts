import { PaymentStrategy } from "../interfaces/PaymentStrategy";

export class MasterCardPaymentStrategy implements PaymentStrategy {
    processPayment(amount: number): void {
        console.log(`Processing master card ...`);
    }
}