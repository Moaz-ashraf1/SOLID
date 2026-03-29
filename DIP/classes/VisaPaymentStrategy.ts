import { PaymentStartegy } from "../interfaces/PaymentStrategy";

export class MasterCardPaymentStrategy implements PaymentStartegy {
    processPayment(amount: number): void {
        console.log(`Processing master card ...`);
    }
}